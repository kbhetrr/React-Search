import React, { Fragment, useState } from 'react';
import { Button, Input } from 'antd';
import {useHistory} from "react-router";

import './MainContainer.css';
import 'antd/dist/antd.css';
import logo from '../logo.png';

import './MainContainer.css';

const { Search } = Input;


const MainContainer = () => {
    const history = useHistory();
    const [Query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Fragment>
            <div className="App">
                <div className="main">
                    <div className="LogoBox">
                        <img src={logo} className="Logo" />
                    </div>
                    <div>
                        <Search
                            size='large'
                            placeholder="AdSearch 검색"
                            onSearch={() => {history.push({
                                pathname: "/search",
                                state: {Query: Query}
                            })}}
                            onChange={handleQuery}
                            style={{ width: 1000 }}
                        />
                    </div>
                    <div className="Description">
                    <p>AdSearch를 통해 제품 또는 기업이 허위·과장광고로 적발된 이력이 있는지 검색해보세요!</p>
                    </div>
                </div>
                    <div className="About">
                        <Button type="default" shape="round" size="large" onClick={() => {history.push({pathname: "/about"})}}>
                            AdSearch 더 알아보기
                        </Button>
                    </div>
            </div>
        </Fragment>
    );
}

export default MainContainer;