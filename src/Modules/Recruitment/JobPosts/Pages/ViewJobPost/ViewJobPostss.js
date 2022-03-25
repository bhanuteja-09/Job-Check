import  React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase} from '@mui/material';
import "../../../../../Assets/Styles/ViewJobPostss.css";
//import { SettingsOverscanSharp } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar'
import vinay from "../../../../../Assets/Images/vinay.jpg";
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from "react-router-dom";
import ViewJobPostStatistics from '../ViewJobPostStats/ViewJobPostStatistics';

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

function createData(JobPost,TotalPositions,Positionclosed,Status, Assignedto,About,Actions) {
  return {JobPost,TotalPositions,Positionclosed,Status, Assignedto,About,Actions};
}

const rows = [
    createData('Java Developer catalogapp.io',10, 5,'Active','Olivia Rhye','Java Developer with 1 years exper..','bhanu'),
    createData('Devops engineer getcirooles.com',10,10,'In-Active','Olivia Rhye','Devops engineer with 1 year exp..','bhanu'),
    createData('Data Analyst cmdr.ai',5,3,'Active','Olivia Rhye','Data Analyst with 1 years exp..'),
    createData('HR Manager hourglass.app',6,5,'Active','Olivia Rhye','HR Manager with 1 years exp..'),
    createData('Product Designer getlayers.io',1,1,'In-Active','Olivia Rhye','Product Designer with 1 years exp..'),
    createData('Sales CRM quotient.co',12,10,'Active','Olivia Rhye','Sales CRM with 1 years exp..'),
    createData('Automation engineer sisyphus.com',6,5,'Active','Olivia Rhye','Automation engineer with 1 years exp..'),
    
  
];

export default function ViewJobPostss() {
 
  
    const [search,setSearch]=useState("")
  
  return (
    
    <Container style={{marginTop:0}}>
      <ViewJobPostStatistics/>
    <Typography variant='h4'>
      Job Posts
      </Typography>
    <Paper component="form"
    sx={{display:'flex', alignItems:'right',width: 160 ,marginLeft:119, height:45}}>

      <Link to="/NewJobPostss">
    <Button variant="contained" sx={{backgroundColor:"blueviolet",height: 60, width: 200}}><AddIcon />New Job Post</Button>
    </Link>
    </Paper>
    <Typography variant='p' sx={{left: 800}}>
    Track & manage your Job Posts here.
    </Typography>

    <br/><br/>
    
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab variant="extended">
        <ClearIcon sx={{ mr: 1 }} />
        Olivia Rhye
      </Fab>
      <Fab variant="extended">
        <ClearIcon sx={{ mr: 1}} />
        Active
      </Fab>
      <Fab variant="extended">
        <FilterListIcon sx={{ mr: 1 }} />
        More Filters
      </Fab>
    </Box>
    
    <Paper

component="form"

sx={{

   p: '2px 4px',

    display: 'flex',

     alignItems: 'right',

      width: 400 ,

      marginLeft:93,

      border:1,
      position: 'relative',
      top:-60}}>

        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">

          <SearchIcon /></IconButton><InputBase sx={{ ml: 1, flex: 1}}
      placeholder="Search"
      defaultValue={search}
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => setSearch(e.target.value)}
           /></Paper>



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>JobPosts <ArrowDownwardIcon /></TableCell>
            <StyledTableCell align="center">Total&nbsp;Positions </StyledTableCell>
            <StyledTableCell align="center">Position&nbsp;closed</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center" >Assigned&nbsp;to</StyledTableCell>
            <StyledTableCell align="center">About</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.JobPost}
              sx={{ '&:last-child td, &:last-child th': { border: 0,sorting:'true' }}}
            >
              <StyledTableCell component="th" scope="row">
                {row.JobPost}
              </StyledTableCell>
              <StyledTableCell align="center">{row.TotalPositions}</StyledTableCell>
              <StyledTableCell align="center">{row.Positionclosed}</StyledTableCell>
              <StyledTableCell align="center"><Chip label={row.Status} color="success" variant="outlined"/></StyledTableCell>
              <StyledTableCell align="right" sx={{flexDirection:"Row",display: 'flex'}} >{row.Assignedto} <Avatar alt="Remy Sharp" src={vinay} sx={{display:"flex",align:'right',flexDirection:"Row", width:"500"}}/></StyledTableCell>
              <StyledTableCell align="center">{row.About}</StyledTableCell>
              <StyledTableCell align="center"><Button sx={{color: 'black'}}><EditIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={2} >
      <Pagination 
        count={10}
        renderItem={(item) => (
          <PaginationItem sx={{marginLeft:"90px",height: "70px"}}
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
    </Container>
  );
}