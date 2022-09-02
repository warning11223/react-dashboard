import React, {useState} from 'react';

import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes} from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar";
import ListPage from "./pages/ListPage/ListPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import NewPage from "./pages/NewPage/NewPage";
import ProductsPage from './pages/ProductsPage/ProductsPage';


import './App.css';
import './styles/darkMode.scss'
import { ThemeContext } from './context/themeContext';
import {productsInputs1, productsInputs2, userInputs1, userInputs2} from "./dataTableSource";


function App() {
    const [dark, setDark] = useState(false);


    return (
    <>
        <ThemeContext.Provider value={{dark, setDark}}>
            <div className={`home ${dark ? 'app' : ''}`}>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/users' element={<ListPage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/users/:id' element={<SinglePage />} />
                    <Route path='/products/new' element={<NewPage inputs1={productsInputs1} inputs2={productsInputs2} title='Add new product'/>} />
                    <Route path='/users/new' element={<NewPage inputs1={userInputs1} inputs2={userInputs2} title='Add new user'/>} />
                </Routes>
            </div>
        </ThemeContext.Provider>
    </>
  );
}

export default App;
