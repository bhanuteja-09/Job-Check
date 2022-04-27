import React,{useEffect, useState} from 'react'
import {TableBody,TableHead,TableContainer,TableRow,Paper,Table,Grid,Button, Container,Typography,IconButton,InputBase,TableSortLabel,styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useDispatch, useSelector } from 'react-redux';
import { draftUsers } from './Action';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {useNavigate } from 'react-router-dom';
import DeleteIcon from "@mui/icons-material/Delete"
import { deleteDraftRequirement} from "../ViewRequireDrafts/Action"
import ViewRequirementStats from "../ViewRequireStats/ViewRequirementStats"

const DraftRequirement = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
     

      let dispatch =useDispatch();
      let navigate= useNavigate();
const { drafts } =useSelector(state => state.draft)

      useEffect(() =>{
          dispatch(draftUsers());
      },[])

      const [search,setSearch]=useState("")

          // Delete function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you wanted to delete the user?")) {
      dispatch(deleteDraftRequirement(id));
    }
  };
    

      
  return (
    <Container style={{marginTop:0}}>
       <>
       <ViewRequirementStats/>
      </> 
      <div>
      <Grid >
        <Typography variant="h4" sx={{position:"absolute",top:250}}>
          Requirements As Drafts
        </Typography>
        <Typography variant="p" sx={{position:"absolute",top:300}}>
        Track & manage your Drafts here.
        </Typography>
        </Grid>
      <div>
      
      <Button color="primary" variant="contained"  
      sx={{marginTop:20,display:"block",marginLeft:"auto",textAlign:"center",textTransform:"capitalize",fontSize:"15px"}}
       onClick={() => navigate("/addrequirement")}>
         + New Requirement
      </Button>
      
      </div>
    <br/><br/>
    <Button sx={{color:"black",borderColor:"black",marginLeft:1,  textTransform: "capitalize"}} variant="outlined"  onClick={() => navigate("/Requirements")}><ArrowBackIosOutlinedIcon/>Back</Button>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'right', width: 350,border:1,float:"right"}}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search "
        defaultValue={search}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearch(e.target.value)}
      />
      </Paper>
      <br/><br/><br/>
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <TableSortLabel 
             direction='desc'
             active={true}>
                <StyledTableCell >Requirements</StyledTableCell></TableSortLabel>
          
          <StyledTableCell align="left" > Total positions </StyledTableCell>
              <StyledTableCell align="left">Positions closed</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Assigned to</StyledTableCell>
              <TableSortLabel 
             direction='desc'
             active={true}
             > <StyledTableCell >Last Modified</StyledTableCell></TableSortLabel>
              <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {drafts.filter(user =>user.select_recruiters.toLowerCase().includes(search.toLowerCase()))
            .map((draft) => (
                <StyledTableRow key={draft.id}>
                  <StyledTableCell component="th" scope="row">
                    <b>{draft.title}</b> <br/> 
                  </StyledTableCell>
                  <StyledTableCell align="left">{draft.vacancies}</StyledTableCell>
                  <StyledTableCell align="left">
                    {draft.positions_closed}
                  </StyledTableCell>
                  <StyledTableCell align="left">{draft.status}</StyledTableCell>
              <StyledTableCell align="left" > {draft.select_recruiters} </StyledTableCell>
                  <StyledTableCell align="left">
                    {draft.LastModified}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <Button
                            sx={[
                              { border: "none",color:"black" },
                              {
                                "&:hover": {
                                  textDecoration: "none",
                                  border: "none",
                                  color:"black"
                                },
                              },
                            ]}
                            onClick={() => handleDelete(draft.id)}
                          >
                            <DeleteIcon />
                    </Button>


                    <Button sx={{color: 'black'}}>
                      <EditOutlinedIcon/>
                    </Button>
                  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </Container>
  )
};

export default DraftRequirement;
