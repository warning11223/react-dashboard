import React, {useState} from 'react';
import {DataGrid, GridColDef, GridRowId} from '@mui/x-data-grid';


import './DataTable.scss'
import {Link} from "react-router-dom";
import { UserRow} from "../../models/models";

type PropsType = {
    rows: UserRow[];
    columns: GridColDef[]
}

const DataTable: React.FC<PropsType> = ({rows, columns}) => {
    const [users, setUsers] = useState(rows);
    console.log(users)

    const deleteHandler = (id: GridRowId) => {
        const filteredUsers = users.filter(item => item.id !== id);
        setUsers(filteredUsers)
    }

    const actionColumns: GridColDef[] = [
        {field: 'action', headerName: 'Action', width: 300, headerAlign: "left",
            renderCell: (params) => {
                return (
                    <div className='dataTable__buttons'>
                        <Link to='/users/example'>
                            <button className='dataTable__buttons-view'>View</button>
                        </Link>
                        <button
                            className='dataTable__buttons-delete'
                            onClick={() => deleteHandler(params.id)}
                        >Delete</button>
                    </div>
                )
            }
        }

    ]




    return (
        <div className='dataTable'>
            <DataGrid
                rows={users}
                columns={columns.concat(actionColumns)}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{fontSize: 23}}
                rowHeight={70}
                className='dataTable__dark'
            />
        </div>
    );
};

export default DataTable;
