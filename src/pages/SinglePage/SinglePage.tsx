import React from 'react';

import './SinglePage.scss'
import Navbar from "../../components/Navbar/Navbar";
import ChartBarRight from "../../components/ChartBar/CharBarRight";
import BasicTable from "../../components/Table/TableItem";


const SinglePage = () => {
    return (
    <div className="homeContainer">
        <Navbar />
        <div className='singlePage'>
            <div className='singlePage__info'>
                <div className='singlePage__info-up'>
                    <h3 className='singlePage__info-title'>Information</h3>
                    <p className='singlePage__info-btn'>Edit</p>
                </div>
                <div className='singlePage__info-down'>
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="avatar"  className='singlePage__info-down-avatar'/>
                    <div className='singlePage__info-down-text'>
                        <p className='singlePage__info-down-title'>Jane Doe</p>
                        <p className='singlePage__info-down-desc'><span style={{color: "#727272"}}>Email:</span> hello@email.com</p>
                        <p className='singlePage__info-down-desc'><span style={{color: "#727272"}}>Phone:</span> +123456789</p>
                        <p className='singlePage__info-down-desc'><span style={{color: "#727272"}}>Address:</span> Kyiv, Ukraine</p>
                        <p className='singlePage__info-down-desc'><span style={{color: "#727272"}}>Country:</span> UA</p>
                    </div>
                </div>
            </div>

            <div className='singlePage__chartbar'>
                <ChartBarRight height={413} aspect={3 / 1} />
            </div>
        </div>
        <div className='tableContainer'>
            <h2 className='table__title'>Latest transactions</h2>
            <BasicTable />
        </div>
    </div>
    );
};

export default SinglePage;
