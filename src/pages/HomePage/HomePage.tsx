import React from 'react';
import './HomePage.scss'
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import ChartBarLeft from "../../components/ChartBar/ChartBarLeft";
import ChartBarRight from "../../components/ChartBar/CharBarRight";
import TableItem from "../../components/Table/TableItem";

const HomePage = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <div className='widget__container'>
                <Widget item='users'/>
                <Widget item='orders'/>
                <Widget item='earnings'/>
                <Widget item='balance'/>
            </div>
            <div className='charts'>
                <ChartBarLeft />
                <ChartBarRight height={570} aspect={2 / 1}/>
            </div>
            <div className='table'>
                <h2 className='table__title'>Latest transactions</h2>
                <TableItem />
            </div>
        </div>
    );
};

export default HomePage;
