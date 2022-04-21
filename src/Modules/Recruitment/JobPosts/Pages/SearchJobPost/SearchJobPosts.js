import {Container,IconButton,InputBase,Table,TableBody,TableCell,tableCellClasses,TableContainer,TableRow,TableHead,Paper,styled,Button, TableSortLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  React,{useState} from 'react';
import Data from "./data.json";
import "./SearchJobPosts.css";
import EditIcon from '@mui/icons-material/Edit';
// import Logo from "../../../../../Assets/Images/Logo.jpg"
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

import Page from './Page';

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
const SearchJobPosts = () => {
  const [search,setSearch]=useState("")
  
  return (
    
 <Container>
    
     <div>
      <h2>Job Posts12</h2>
      <div className='button'>
      <Button variant="contained"  sx={{backgroundColor:'blueviolet'}}><AddIcon/>New Requirement</Button>
      </div>
    </div>
      <div><h6>Track & manage your Job Posts here.</h6></div>
      
   {/* Search bar */}
     <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'right', width: 400 ,marginLeft:93,border:1}}
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
      <div className='filter'>
      <Button   variant='outlined' sx={{borderColor:"black",color:"black"}}><FilterListIcon/>More Filter</Button>
      </div>
      
      
      {/* Requirements */}
     
     <br/>
  <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableSortLabel   
                direction='desc'
            active={true}>
            <StyledTableCell>Job Posts</StyledTableCell> </TableSortLabel>
            <StyledTableCell align="center">Total Positions</StyledTableCell>
            <StyledTableCell align="center">Positions Closed</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Assigned to</StyledTableCell>
            <TableSortLabel active={true}
                direction="desc">  
                <StyledTableCell align="right">Last Modified</StyledTableCell>
                 </TableSortLabel>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.filter(data =>data.name.toLowerCase().includes(search.toLowerCase())).map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.name} <br/> {data.No}
                
              </StyledTableCell>
              <StyledTableCell align="center">{data.TotalPositions}</StyledTableCell>
              <StyledTableCell align="center">{data.PositionsClosed}</StyledTableCell>
              <StyledTableCell align="center">{data.Status}</StyledTableCell>
              <StyledTableCell align="center"><img  className="profile-image rounded-circle"/></StyledTableCell>
              <StyledTableCell align="center">{data.LastModified}</StyledTableCell>
              <StyledTableCell align="center"><Button sx={{color:'black'}}><EditIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Container
      ><Page/></Container>
      
      
  </TableContainer>
  

 </Container>
  )
}


export default SearchJobPosts;
