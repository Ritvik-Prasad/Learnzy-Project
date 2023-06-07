import { Button, Typography, useTheme } from '@mui/material';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react'
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useApproveTutor } from '../../hooks/useApprove';
import { useDataContext } from '../../hooks/useDataContext';

const server_url=process.env.REACT_APP_SERVER_URL

export const Approve =() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const [prospects, setProspects] = useState(null)
  const {approveTutor, error, isLoading} = useApproveTutor()

  const {data, dispatch} = useDataContext()
  useEffect(()=>{
    //fetch prospects
    const fetchProspects = async() => {
      const response = await fetch(`${server_url}/api/prospect`)
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
  const filteredData = (data && data.filter(p => p.approve=='null'))
  //setFilteredProspects(prospects && prospects.filter((p) => p.approve=='null'))
  //console.log(prospects && filteredProspects)


  const handleYes = async (e, {_id, approve}) => {
    console.log("yes",_id, approve)
    approve = "yes"
    await approveTutor(_id, approve)
    
  }
  const handleNo = async (e, {_id, approve}) => {
    console.log("no", _id, approve)
    approve = "no"
    await approveTutor(_id, approve)
  }
  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
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
      field: "subject",
      headerName: "Subject",
      flex: 1,
      align: "left"
    },
    {
      field: "experience",
      headerName: "Experience",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "location",
      headerName: "City",
      flex: 1,
    },
    {
      field: "approve",
      headerName: "Approve/Disapprove",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box display="flex">
          <Button
          onClick={(e)=>handleYes(e, row)}
            style={{maxWidth: '50px', minWidth: '50px'}}
            
            sx={{
            
            m:"0 auto",
            p:"5px",
            display:"flex",
            justifyContent:"center",
            backgroundColor:colors.greenAccent[500],
            "&:hover": {
              backgroundColor: colors.greenAccent[700],
            },
            borderRadius:"4px"
          }}
          >
            <DoneOutlinedIcon />
          </Button>
          <Button
          onClick={(e)=>handleNo(e, row)}
          style={{maxWidth: '50px', minWidth: '50px'}}
          sx={{
            
            m:"0 auto",
            p:"5px",
            display:"flex",
            justifyContent:"center",
            backgroundColor:colors.redAccent[500],
            "&:hover": {
              backgroundColor: colors.redAccent[700],
            },
            borderRadius:"4px"
          }}
        >
          <CloseOutlinedIcon />
        </Button>
        </Box>
        )
    }
  }
  ]
  return (

    <Box m="20px">
    <Header
      title="APPLICATION"
      subtitle="Bio Data of all applicants. Choose to approve or disapprove."
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
        rows={data && filteredData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />}
    </Box>
  </Box>
  )
}
