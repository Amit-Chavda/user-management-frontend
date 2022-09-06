import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect, useReducer } from "react";
import axios from "axios"
import CreateUser from './CreateUser';
import ColumnNameAdapter from '../adapter/ColumnNameAdapter';
import DeleteUser from './DeleteUser';
import Card from 'react-bootstrap/Card';

export default function ListUser() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [rows, setRows] = useState({});
  const [update, forceUpdate] = useReducer(x => x + 1, 0);

  let userIDs = []

  useEffect(() => {
    axios.get(BASE_URL + "/findAll")
      .then(res => {
        setRows(res.data)
      })
  }, [update]);

  function handleOnDelete() {
    axios.post(BASE_URL + "/deleteSelected", userIDs)
    forceUpdate()
  }

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    userIDs = selectedRowsData.map((id) => { return id.id })
  };



  return (
    <div style={{ margin: '0 auto', height: '600px', width: '70%', marginTop: '50px'}}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>User Management Console</Card.Title>
        </Card.Body>
      </Card>
      <CreateUser forceUpdate={forceUpdate} />
      <DataGrid
        rows={rows}
        columns={ColumnNameAdapter}
        pageSize={10}
        rowsPerPageOptions={[12]}
        checkboxSelection
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        sx={{
          boxShadow: 2,
          '& .MuiDataGrid-row:hover': {
            color: 'primary.main',
          }}} />
      <DeleteUser handleOnDelete={handleOnDelete} />
    </div>
  );
}



