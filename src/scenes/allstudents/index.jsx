import { Button, Typography, useTheme } from '@mui/material';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react'
import Header from "../../components/Header";
import { tokens } from "../../theme";

import { useDataContext } from '../../hooks/useDataContext';
import { useAuthContext } from "../../hooks/useAuthContext";
const server_url=process.env.REACT_APP_SERVER_URL

export const Allstudents =() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {user} = useAuthContext()
  //const [prospects, setProspects] = useState(null)

  const {data, dispatch} = useDataContext()
  useEffect(()=>{
    //fetch prospects
    const fetchProspects = async() => {
      const response = await fetch(`${server_url}/api/students/adminStudent`, {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        //setProspects(json)
        //console.log(json[0])
        dispatch({type: 'SET_DATA', payload:json})
      }
    }

    fetchProspects()

  }, [])
  console.log(data && data)
  //const filteredData = (data && data.filter(p => p.approve=='yes'))

  //setFilteredProspects(prospects && prospects.filter((p) => p.approve=='null'))
  //console.log(prospects && filteredProspects)

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "fname",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dob",
      headerName: "dob",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "parentPhone",
      headerName: "Phone",
      flex: 1,
      align: "left"
    },
    {
      field: "grade",
      headerName: "Grade",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "location",
      headerName: "City",
      flex: 1,
    },
    
    
  ]
  return (

    <Box m="20px">
    <Header
      title="STUDENTS"
      subtitle="Bio Data of all Students"
    />
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      {data &&
      <DataGrid getRowId={row => row._id}
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />}
    </Box>
  </Box>
  )
}
