import React from 'react';

import './ProductsPage.scss'
import Navbar from "../../components/Navbar/Navbar";
import {Link} from "react-router-dom";
import DataTable from "../ListPage/DataTable";
import {productColumns, productRows} from "../../dataTableSource";

const ProductsPage = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <div className='listpage'>
                <div className='listpage__up'>
                    <h1 className='listpage__up-title'>Products</h1>
                    <Link to='/products/new'>
                        <button className='listpage__up-btn'>Add product</button>
                    </Link>
                </div>
                <DataTable rows={productRows} columns={productColumns}/>
            </div>
        </div>
    );
};

export default ProductsPage;
