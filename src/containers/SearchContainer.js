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

    const [Items, setItems] = useState([]);
    const [PrintItems, setPrintItems] = useState([]);

    const [Query, setQuery] = useState('');

    const [ResultCnt, setResultCnt] = useState(0);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleResultCnt = () => {
        setResultCnt(ResultCnt + 5);
    };

    useEffect(() => {
        console.log(Items.slice(undefined, ResultCnt > Items.length ? Items.length : ResultCnt));
        setPrintItems(Items.slice(undefined, ResultCnt > Items.length ? Items.length : ResultCnt));
    }, [Items]);

    useEffect(() => {
        setPrintItems(Items.slice(undefined, ResultCnt > Items.length ? Items.length : ResultCnt));
    }, [ResultCnt]);

    useEffect(() => {
        let items = [];

        for (var i = 0; i < pmk.length; i++) {
            for (var key in pmk[i]) {
                if (String(pmk[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    items.push(pmk[i]);
                    break;
                }
            }
        }
        for (var i = 0; i < po.length; i++) {
            for (var key in po[i]) {
                if (String(po[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    items.push(po[i]);
                    break;
                }
            }
        }
        for (var i = 0; i < pr.length; i++) {
            for (var key in pr[i]) {
                if (String(pr[i][key]).indexOf(Search_Query.toUpperCase()) !== -1){
                    items.push(pr[i]);
                    break;
                }
            }
        }

        setResultCnt(10);
        setItems(items);  
    }, [Search_Query]);


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
                    <div className="ResultBox">
                        <div>
                            검색 결과 {Items.length}개
                        </div>
                        <div style={{ alignItems: 'center', justifyContent: 'center', width: '95%' }}>
                            {Items.length > 0 ? 
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
                    {Items.length > ResultCnt ?
                        <Button block onClick={handleResultCnt} style={{marginBottom: 15}}>
                            더 찾아보기
                        </Button>
                    : ""}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchContainer;