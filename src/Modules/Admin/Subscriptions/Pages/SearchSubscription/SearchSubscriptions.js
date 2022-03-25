import { Typography,Container,IconButton,InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from './Data.json';
import '../../../../../Assets/Styles/SearchSubscription.css';
import AddSubscription from '../AddSubscription/AddSubscription';


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
const SearchSubscription = () => {
  const [search,setSearch]=useState("")
  return (
    <Container style={{marginTop:150}}>
     <Typography  variant='h3'>
       Subscriptions
       <Paper
component="form"
sx={{
    display: 'flex',
     alignItems: 'right',
      width: 193 ,
      marginLeft:120}}>
       <Button variant='contained'  href='/AddSubscription'> +  New Subscription</Button>
       </Paper>
     </Typography>
     <Typography  variant='p'>
       Track & manage your subscriptions here.
     </Typography>
<Paper
component="form"
sx={{
   p: '2px 4px',
    display: 'flex',
     alignItems: 'right',
      width: 400 ,
      marginLeft:93,
      border:1}}>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon /></IconButton><InputBase sx={{ ml: 1, flex: 1}}
          placeholder="Search "defaultValue={search} inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearch(e.target.value)} /></Paper>

 
     <br/> <br/>
 <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Subscription</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Base Credits</StyledTableCell>
            <StyledTableCell align="center">Last Updated</StyledTableCell>
            <StyledTableCell align="center">Product(s)</StyledTableCell>
            <StyledTableCell align="center">About</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.filter(data =>data.Subscription.toLowerCase().includes(search.toLowerCase())).map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell align="center"><Button href='/ViewSingleSubscription'>{data.Subscription}</Button></StyledTableCell>
              <StyledTableCell align="center">{data.Status}</StyledTableCell>
              <StyledTableCell align="center">{data.BaseCredits}</StyledTableCell>
              <StyledTableCell align="center">{data.LastUpdated}</StyledTableCell>
              <StyledTableCell align="center">{data.Product}</StyledTableCell>
              <StyledTableCell align="center">{data.About}</StyledTableCell>
              <StyledTableCell align="center"><Button href='/EditSubscriptions' sx={{color:'black'}}><EditIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </Container>
  )
}
export default SearchSubscription