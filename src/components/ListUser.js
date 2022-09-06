import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import CreateUser from './CreateUser';
import ColumnNameAdapter from '../adapter/ColumnNameAdapter';

export default function ListUser() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [rows, setRows] = useState({});
  useEffect(() => {
    axios.get(BASE_URL + "/findAll")
      .then(res => {
        setRows(res.data)
      })
  }, []);

  function deleteById() {
  }

  return (
    <div style={{ margin: '0 auto', height: '700px', width: '70%', marginTop: '100px' }}>
      <CreateUser />
      <DataGrid
        rows={rows}
        columns={ColumnNameAdapter}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
      <Button style={{ margin: '10px 0 0 92%' }} variant="danger" onClick={deleteById}>Delete</Button>
    </div>
  );
}



