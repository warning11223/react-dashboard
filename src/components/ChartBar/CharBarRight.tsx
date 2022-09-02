import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './ChartBarRight.scss'

type PropsType = {
    height: number;
    aspect: number;

}

const ChartBarRight: React.FC<PropsType> = ({height, aspect}) => {
    const data = [
        {name: 'January', Total: 6200},
        {name: 'February', Total: 200},
        {name: 'March', Total: 3200},
        {name: 'April', Total: 4200},
        {name: 'May', Total: 5200},
        {name: 'June', Total: 6200},
    ];


    return (
        <ResponsiveContainer height={height} aspect={aspect} className='rightchar__container'>
                <AreaChart width={1000} height={580} data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartBarRight;
