import React, { Fragment, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import SearchCard from '../components/SearchCard';
import data from '../datas/data2.json';

import {useLocation, useHistory} from "react-router";
import logo from '../logo2.png';

import './SearchContainer.css';

import pmk from '../datas/pmk.json';
import po from '../datas/po.json';
import pr from '../datas/pr.json';


const { Search } = Input;


const SearchContainer = () => {
    const history = useHistory();
    const location = useLocation();

    const Search_Query = location.state.Query;

    const [PMKItems, setPMKItems] = useState([]);
    const [POItems, setPOItems] = useState([]);
    const [PRItems, setPRItems] = useState([]);
    const [PrintItems, setPrintItems] = useState([]);
    const [NowItem, setNowItem] = useState("PMK 재고");

    const [isLoading, setisLoading] = useState(true);

    const [Query, setQuery] = useState('');

    const [ResultCnt, setResultCnt] = useState(0);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleResultCnt = () => {
        setResultCnt(ResultCnt + 5);
    };

    useEffect(() => {
        setisLoading(true);

        let temp_pmk = [];
        let temp_po = [];
        let temp_pr = [];

        for (var i = 0; i < pmk.length; i++) {
            for (var key in pmk[i]) {
                if (String(pmk[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    temp_pmk.push(pmk[i]);
                    break;
                }
            }
        }
        for (var i = 0; i < po.length; i++) {
            for (var key in po[i]) {
                if (String(po[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    temp_po.push(po[i]);
                    break;
                }
            }
        }
        for (var i = 0; i < pr.length; i++) {
            for (var key in pr[i]) {
                if (String(pr[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    temp_pr.push(pr[i]);
                    break;
                }
            }
        }

        setResultCnt(5);
        setPMKItems(temp_pmk);
        setPOItems(temp_po);
        setPRItems(temp_pr);

        setPrintItems(temp_pmk);

        setisLoading(false);
    }, []);

    const changedItem = ( idx ) => {
        setisLoading(true);

        if (idx == 0) {
            setPrintItems(PMKItems);
            setNowItem("PMK 재고");
            setResultCnt(5);
        } else if (idx == 1) {
            setPrintItems(POItems);
            setNowItem("PO");
            setResultCnt(5);
        } else if (idx == 2) {
            setPrintItems(PRItems);
            setNowItem("PR");
            setResultCnt(5);
        }

        setisLoading(false);
    };

    return (
        <Fragment>
            <div className="SearchApp">
                <div className="LeftSide">
                    <Link to='/'>
                        <img
                            src={ logo }
                            className="SubLogo"
                            alt='AdSearch'
                        />
                    </Link>
                </div>
                <div className="MiddleSide">
                    <div className="SubSearchBar">
                        <Search
                            size='large'
                            placeholder={Search_Query !== "" ? Search_Query : "AdSearch 검색"}
                            onSearch={() => {history.push({
                                pathname: "/search",
                                state: {Query: Query}
                            })}}
                            onChange={handleQuery}
                            style={{}}
                        />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick={() => {changedItem(0)}}>PMK 재고 ({PMKItems.length})</Button>
                        <Button onClick={() => {changedItem(1)}}>PO ({POItems.length})</Button>
                        <Button onClick={() => {changedItem(2)}}>PR ({PRItems.length})</Button>
                    </div>
                    {!isLoading &&
                    <div>
                        <div className="ResultBox">
                            <div>
                                {NowItem} 검색 결과 {PrintItems.length}개
                            </div>
                            <div style={{ alignItems: 'center', justifyContent: 'center', width: '95%' }}>
                                {PrintItems.length > 0 ? 
                                PrintItems.map((data) => {
                                    return <SearchCard data={data} query={Search_Query} />
                                })
                                : <div className="NoDataView">
                                    <h3><strong>{Search_Query}</strong>와(과) 관련된 검색결과가 없습니다.</h3>
                                    <ul>
                                        <li>모든 단어의 철자가 정확한지 확인하세요.</li>
                                        <li>다른 검색어를 사용해 보세요.</li>
                                    </ul>
                                </div>}
                            
                            </div>
                        </div>
                        <div>
                        {/*PrintItems.length > ResultCnt ?
                            <Button block onClick={handleResultCnt} style={{marginBottom: 15}}>
                                더 찾아보기
                            </Button>
                            : ""*/}
                        </div>
                    </div> }
                </div>
            </div> 
        </Fragment>
    );
}

export default SearchContainer;