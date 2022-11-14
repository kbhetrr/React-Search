import React, { Fragment, useState } from 'react';
import { Button, Input } from 'antd';
import {useHistory} from "react-router";

import './MainContainer.css';
import 'antd/dist/antd.css';
import logo from '../logo2.png';


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
                    <div className="LogoBox" style={{marginBottom: 32}}>
                        <img src={logo} className="Logo" />
                    </div>
                    <div>
                        <Search
                            size='large'
                            placeholder="PartSearch 검색"
                            onSearch={() => {history.push({
                                pathname: "/search",
                                state: {Query: Query}
                            })}}
                            onChange={handleQuery}
                            style={{ paddingLeft: 32, paddingRight: 32 }}
                        />
                    </div>
                    <div className="Description">
                        PartSearch를 통해 검색해보세요!
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MainContainer;