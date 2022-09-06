import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import UserAdd from './UserAdd';

export default function UserTableView() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'email', headerName: 'Email', width: 160, },
    { field: 'address', headerName: 'Address', width: 200, },
  ];


  const [row, setRow] = useState({});
  console.log(process.env.REACT_APP_API_BASE_URL)
  useEffect(() => {
    axios.get(BASE_URL + "/findAll")
      .then(res => {
        setRow(res.data)
      })
  }, []);


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  function deleteById() {
  }

  return (
    <div style={{ margin: '0 auto', height: '700px', width: '70%', marginTop: '100px' }}>

      <UserAdd />
       {/* <Button style={{ margin: '10px 0 10px 92%',width:'100px'}} variant="primary" onClick={deleteById()}>Add</Button> */}
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Button style={{ margin: '10px 0 0 92%' }} variant="danger" onClick={deleteById()}>Delete</Button>
    </div>
  );
}



