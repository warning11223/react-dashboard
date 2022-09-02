import React from 'react';

import './ListPage.scss'
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "./DataTable";
import {Link} from "react-router-dom";
import {userColumns, userRows} from "../../dataTableSource";


const ListPage = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <div className='listpage'>
                <div className='listpage__up'>
                    <h1 className='listpage__up-title'>Users</h1>
                    <Link to='/users/new'>
                        <button className='listpage__up-btn'>Add user</button>
                    </Link>
                </div>
                <DataTable rows={userRows} columns={userColumns}/>
            </div>
        </div>
    );
};

export default ListPage;
