import {Container,IconButton,InputBase,Table,TableBody,TableCell,tableCellClasses,TableContainer,TableRow,TableHead,Paper,styled,Button, TableSortLabel,Avatar,AvatarGroup,Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  React,{useState} from 'react';
import Data from "./data.json"
import "../../../../../Assets/Styles/searchrequirements.css";
import EditIcon from '@mui/icons-material/Edit';
import Logo from "../../../../../Assets/Images/Logo.jpg"
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {Link} from "react-router-dom"

import Page from './Page';
import { red } from '@mui/material/colors';


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
const SearchRequirements = () => {
  const [search,setSearch]=useState("")
  
  return (
    
 <Container>
  <div >
      <h2>Requirements</h2>
        <Link to="/NewRequirement">
      <Button className='button' variant="contained" sx={{}}><AddIcon/>New Requirement</Button>
      </Link>
    </div>
   
    <div className='filtering'>
      <div><h6>Track & manage your requirements here.</h6></div>
      
   {/* Search bar */}
   <div >
   <div className='Draft'>
     <Link to=""> <Button variant='outlined' sx={{borderColor:"black",color:"black",marginLeft:80,textDecoration:"none"}}><DriveFileRenameOutlineIcon/>Drafts</Button></Link>
      </div>
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
      <div className='filter'>
      <Button   variant='outlined' sx={{borderColor:"black",color:"black"}}>All time<ClearIcon/></Button>
      <Button   variant='outlined' sx={{borderColor:"black",color:"black",marginLeft:3}}>Active<ClearIcon/></Button>
      <Button   variant='outlined' sx={{borderColor:"black",color:"black",marginLeft:3}}><FilterListIcon/>More Filter</Button>
      </div>
      </div>
      
      </div>
      
      
      {/* Requirements */}
     
     <br/>
  <TableContainer component={Paper} sx={{marginTop:5}}>
      <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableSortLabel   
                direction='desc'
            active={true}>
            <StyledTableCell>Requirements</StyledTableCell> </TableSortLabel>
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
                {data.name} <br/> {data.No}s
                
    </StyledTableCell>
              <StyledTableCell align="center">{data.TotalPositions}</StyledTableCell>
              <StyledTableCell align="center">{data.PositionsClosed}</StyledTableCell>
              <StyledTableCell align="center"><Chip label={data.Status} color="success" variant="outlined" /></StyledTableCell>
              <StyledTableCell align="center">
                <AvatarGroup max={5}  >
                <Avatar alt="Remy Sharp" src={Logo}     sx={{width:24,height:24}}/>
                <Avatar alt="Travis Howard" src={Logo}  sx={{width:24,height:24}}/>
                <Avatar alt="Cindy Baker" src={Logo}  sx={{width:24,height:24}}/>
                <Avatar alt="Agnes Walker" src={Logo}  sx={{width:24,height:24}}/>
               <Avatar alt="Trevor Henderson" src={Logo}  sx={{width:24,height:24}}/>
               </AvatarGroup>
    </StyledTableCell>
              <StyledTableCell align="center">{data.LastModified}</StyledTableCell>
              <StyledTableCell align="center"><Link to="/EditRequirement"><Button sx={{color:'black'}}><EditIcon/></Button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     <div    className="pagination">
     <Page  />
     </div>
   </TableContainer>
   </Container>
  )
}


export default SearchRequirements;
