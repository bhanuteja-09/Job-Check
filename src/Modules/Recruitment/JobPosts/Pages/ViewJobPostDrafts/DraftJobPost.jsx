import React,{useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { draftUsers } from './Action';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Chip from '@mui/material/Chip';
import {Button, Container,Typography,IconButton,InputBase } from "@mui/material";
import Grid from "@mui/material/Grid"
import SearchIcon from '@mui/icons-material/Search';
import { TableSortLabel } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {useNavigate } from 'react-router-dom';



const DraftJobPost = () => {
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
    //   const handleSort =(value) =>{
    //     dispatch(sortDraft(value))
    //   }

      
  return (
    <Container style={{marginTop:0}}>
  
      <div>
      <Grid >
        <Typography variant="h4" sx={{position:"absolute",top:130}}>
          Requirements
        </Typography>
        <Typography variant="p" sx={{position:"absolute",top:170}}>
        Track & manage your Requirements here.
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
             active={true}
> <StyledTableCell >Requirements</StyledTableCell></TableSortLabel>
          
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
        {drafts.filter(draft =>draft.Requirement.toLowerCase().includes(search.toLowerCase()))
            .map((draft) => (
                <StyledTableRow key={draft.id}>
                  <StyledTableCell component="th" scope="row">
                    <b>{draft.Requirement}</b> <br/> {draft.No}
                  </StyledTableCell>
                  <StyledTableCell align="left">{draft.TotalPositions}</StyledTableCell>
                  <StyledTableCell align="left">
                    {draft.Positionsclosed}
                  </StyledTableCell>
                  <StyledTableCell align="left"><Chip label={draft.Status} color="success" variant="outlined"/></StyledTableCell>
              <StyledTableCell align="left" > {draft.Assignedto} </StyledTableCell>
                  <StyledTableCell align="left">
                    {draft.LastModified}
                  </StyledTableCell>

                  <StyledTableCell align="left"><Button sx={{color: 'black'}}><EditOutlinedIcon/></Button>{draft.Actions}</StyledTableCell>
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

export default DraftJobPost;
