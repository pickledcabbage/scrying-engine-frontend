import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { DataSource } from '../state/DataSource';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useDataSourceStore } from '../state/DataSourceStore';
import { useEffect } from 'react';


const cols = [
    { field: 'name', headerName: 'NAME', width: 150},
    { field: 'id', headerName: 'ID', width: 150},
    { field: 'type', headerName: 'TYPE', width: 150},
    { field: 'dol', headerName: 'DOL', width: 150},
];

export default function DataSourcesPage() {
    const [dataSources, fetchDataSources] = useDataSourceStore(state => [state.dataSources, state.fetchDataSources]);

    useEffect(() => {
        console.log('fetching data sources');
        fetchDataSources();
    }, [fetchDataSources]);

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', display: 'flex', height: '100%' }}>
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid 
                rows={dataSources}
                columns={cols}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    </Paper>
  );
}