import React, { Fragment, useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import {useHistory} from "react-router";
import { Bar } from '@antv/g2plot';

import './AboutContainer.css';
import 'antd/dist/antd.css';
import logo from '../logo.png';

const AboutContainer = () => {
    const history = useHistory();

    useEffect(() => {
        const data1 = [
            { prduct: '다이어트 도시락', value: 27 },
            { prduct: '여우들의 속사정', value: 22 },
            { prduct: '곤약젤리', value: 21 },
            { prduct: '바이엔티', value: 21 },
            { prduct: '트롤리 눈알젤리', value: 21 },
        ];

        const data2 = [
            { entrps: '(주)하우', value: 175 },
            { entrps: '트윈박스', value: 130 },
            { entrps: '스마트뉴욕', value: 87 },
            { entrps: '엠제이인터내셔널', value: 66 },
            { entrps: '요기다닷컴', value: 65 },
        ];

        const bar1 = new Bar('container1', {
            data: data1,
            xField: 'value',
            yField: 'prduct',
            seriesField: 'prduct',
            legend: {
                position: 'top-left',
            },
        });
        
        const bar2 = new Bar('container2', {
            data: data2,
            xField: 'value',
            yField: 'entrps',
            seriesField: 'entrps',
            legend: {
                position: 'top-left',
            },
        });

        bar1.render();
        bar2.render();
    }, []);

    return (
        <Fragment>
            <div className="AboutApp">
                <div className="Header">
                    <div className="AboutLogoBox">
                        <img src={logo} className="AboutLogo" onClick={() => {history.push({pathname: "/"})}} />
                    </div>
                    <div className="Description">
                    <p>AdSearch는 식품 허위·과대광고정보를 검색하고 열람할 수 있는 서비스 입니다.</p>
                    <p>식품의약품안전처에서 제공하는 식품 허위·과대광고정보를 한눈에 확인할 수 있습니다.</p>
                    <p>AdSearch와 함께 안전하고 건강하게 먹는 즐거움을 누리세요!</p>
                    </div>
                </div>
                <div className="Section">
                    <div className="SectionBox">
                        <div className="Graph">
                            <h3>제품 허위·과대광고정보 적발 순위</h3>
                            <div id="container1"></div>
                        </div>
                        <div className="Graph">
                            <h3>기업 허위·과대광고정보 적발 순위</h3>
                            <div id="container2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutContainer;