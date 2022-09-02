import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

export const userInputs1 = [
    {id: 1, label: 'Name and username', placeholder: 'John Doe'},
    {id: 2, label: 'Phone', placeholder: '+123456789'},
    {id: 3, label: 'Address', placeholder: 'Address'},
]

export const userInputs2 = [
    {id: 1, label: 'Username', placeholder: 'john_doe'},
    {id: 2, label: 'Email', placeholder: 'helllo@email.com'},
    {id: 3, label: 'Password', placeholder: '*******'},
    {id: 4, label: 'Country', placeholder: 'UA'},
]
export const productsInputs1 = [
    {id: 1, label: 'Description', placeholder: 'Description'},
    {id: 2, label: 'Price', placeholder: '100'},
]

export const productsInputs2 = [
    {id: 1, label: 'Title', placeholder: 'Apple'},
    {id: 2, label: 'Category', placeholder: 'Computers'},
    {id: 3, label: 'Stock', placeholder: 'In Stock'},
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "3snow@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "4snow@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "5snow@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "6snow@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "7snow@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "8snow@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "9snow@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "10snow@gmail.com",
        status: "active",
        age: 65,
    },
    {
        id: 11,
        username: "Roxie2",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "11snow@gmail.com",
        status: "passive",
        age: 65,
    },
    {
        id: 12,
        username: "Roxie3",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "12snow@gmail.com",
        status: "passive",
        age: 65,
    },
];

export const productRows = [
    {
        id: 1,
        product: "Apple",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 35,
    },
    {
        id: 2,
        product: "Lenovo",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 12,
    },
    {
        id: 3,
        product: "Asus",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 31,
    },
    {
        id: 4,
        product: "Huawei",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 19,
    },
    {
        id: 5,
        product: "Dell",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 45,
    },
    {
        id: 6,
        product: "Xiaomi",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 10,
    },
    {
        id: 7,
        product: "Surface",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 34,
    },
    {
        id: 8,
        product: "Microfost",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 5,
    },
    {
        id: 9,
        product: "Samsung",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 56,
    },
    {
        id: 10,
        product: "Acer",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        amount: 100,
        price: 3,
    },
];

export  const userColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80, headerAlign: "left",  },
    {
        field: 'username',
        headerName: 'Username',
        width: 350,
        headerAlign: "left",
        renderCell: (params) => {
            return (
                <div className='dateTable__username'>
                    <img src={params.row.img} alt={params.row.username} className='dateTable__username-img'/>
                    <p>{params.row.username}</p>
                </div>
            )
        }
    },
    {field: 'email', headerName: 'Email', type: 'string', width: 350,   headerAlign: "left", },
    {field: 'age', headerName: 'Age', type: 'string', width: 140,  headerAlign: "left"},
    {field: 'status', headerName: 'Status', type: 'string', width: 180,  headerAlign: "left",
    renderCell: (params => {
        return (
            <div>
                <p className={`dateTable__username-${params.row.status}`}>{params.row.status}</p>
            </div>
        )
    })
    },
];

export  const productColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80, headerAlign: "left",  },
    {
        field: 'product',
        headerName: 'Product',
        width: 350,
        headerAlign: "left",
        renderCell: (params) => {
            return (
                <div className='dateTable__username'>
                    <img src={params.row.img} alt={params.row.product} className='dateTable__username-img'/>
                    <p>{params.row.product}</p>
                </div>
            )
        }
    },
    {field: 'amount', headerName: 'Amount', type: 'number', width: 250,   headerAlign: "left", align: 'left' },
    {field: 'price', headerName: 'Price', type: 'number', width: 180,  headerAlign: "left", align: 'left'},
    {field: 'status', headerName: 'Status', type: 'string', width: 200,  headerAlign: "left",
        renderCell: (params => {
            return (
                <div>
                    <p className={`dateTable__username-${params.row.status}`}>{params.row.status}</p>
                </div>
            )
        })
    },
];