import React from 'react';
import {AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { MdKeyboardArrowUp, MdOutlineAccountBalanceWallet } from 'react-icons/md';

import './Widget.scss'
import {HiOutlineCurrencyDollar} from "react-icons/hi";

type PropsType = {
    item?: string;

}

const Widget: React.FC<PropsType> = ({item}) => {

    let data;
    switch (item) {
        case 'users':
            data = {
                title: 'users',
                money: 100,
                button: 'See all users',
                amount: true,
                icon: <AiOutlineUser className="icon" style={{backgroundColor: 'rgba(255, 0, 0, 0.2)', color: 'crimson'}}/>,
            }
            break;
        case 'orders':
            data = {
                title: 'orders',
                money: 100,
                button: 'View all orders',
                amount: true,
                icon: <AiOutlineShoppingCart className="icon" style={{backgroundColor: 'rgba(218, 165, 32, 0.2)', color: 'goldenrod'}}/>,
            }
            break;
        case 'earnings':
            data = {
                title: 'earnings',
                money: 100,
                button: 'View net earnings',
                amount: true,
                icon: <HiOutlineCurrencyDollar className="icon" style={{backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green'}}/>,
            }
            break;
        case 'balance':
            data = {
                title: 'balance',
                money: 100,
                button: 'See details',
                amount: true,
                icon: <MdOutlineAccountBalanceWallet className="icon" style={{backgroundColor: 'rgba(128, 0, 128, 0.2)', color: 'purple'}}/>,
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <div className="title">{data?.title}</div>
                <div className="money">{data?.money && '$'} {data?.money}</div>
                <div className="button">{data?.button}</div>
            </div>
            <div className="right">
                <div className="amount green">
                    <MdKeyboardArrowUp className="amount__icon"/>
                    <p>20 %</p>
                </div>
                <div className="icon">
                    {data?.icon}
                </div>
            </div>
        </div>
    );
};

export default Widget;
