import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './TableItem.scss'

function createData(
    id: number,
    product: string,
    img: string,
    customer: string,
    date: string,
    amount: number,
    method: string,
    status: string,

) {
    return { id, product, img, customer, date, amount, method, status };
}

const rows = [
    createData(1143155, "Acer Nitro 5", "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", "John Smith", "1 March", 785, "Cash on Delivery","Approved"),
    createData(2235235, "ASUS ROG Strix", "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg", "Harold Carol", "1 March", 2000, "Online", "Pending"),
    createData(2357741, "Razer Blade 15", "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg", "Jane Smith", "1 March", 920, "Online", "Approved"),
    createData(2342353, "Redragon S101", "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg", "John Smith", "1 March", 35, "Cash on Delivery", "Pending"),
    createData(22352351, "Playstation 5", "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg", "Michael Doe", "1 March", 900, "Online Payment", "Pending"),
];



export default function BasicTable() {
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table__dark'>
                <TableHead>
                    <TableRow >
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Product</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Tracking ID</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Customer</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Date</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Amount</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Payment method</TableCell>
                        <TableCell sx={{fontSize: '25px'}} className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <TableCell sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '3px', fontSize: '20px'}}  className='tableCell'>
                                <img src={row.img} alt={row.product} width={150} height={100}/>
                                {row.product}
                            </TableCell>
                            <TableCell sx={{fontSize: '20px'}} className='tableCell'>{row.id}</TableCell>
                            <TableCell sx={{fontSize: '20px'}} className='tableCell'>{row.customer}</TableCell>
                            <TableCell sx={{fontSize: '20px'}} className='tableCell'>{row.date}</TableCell>
                            <TableCell sx={{fontSize: '20px'}} className='tableCell'>{row.amount}</TableCell>
                            <TableCell sx={{fontSize: '20px'}} className='tableCell'>{row.method}</TableCell>
                            <TableCell sx={{fontSize: '20px'}}  className='tableCell'>
                                <span className={row.status}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

