import React, { useEffect, useState } from "react";
import { styled, Table, TableBody, TableContainer, TableCell, tableCellClasses, TableHead, TableRow, Paper, Button, Stack, Container, Grid, Typography, IconButton, InputBase, TableSortLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadJobPosts, sortJobPost } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import Filter from "../FilterJobPosts/FilterJobPosts";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const SearchJobPosts = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { Requirements } = useSelector((state) => state.requirement);

  useEffect(() => {
    dispatch(loadJobPosts());
  }, []);

  // const handleDelete = (id) => {
  //   if(window.confirm("Are you sure you wanted to delete the user?")){
  //     dispatch(deleteUser(id));
  //   }
  // };

  const [search, setSearch] = useState("")
  const handleSort = (value) => {
    dispatch(sortJobPost(value))
  }
  return (
    <Container>

      <div>
        <Grid >
          <Typography variant="h4" sx={{ position: "absolute", top: 255 }}>
            Job Posts
          </Typography>
          <Typography variant="p" sx={{ position: "absolute", top: 295 }}>
            Track & manage your Job Posts here.
          </Typography>
        </Grid>
        <div>

          <Button color="primary" variant="contained"
            sx={{ marginTop: 19, display: "block", marginLeft: "auto", textAlign: "center", textTransform: "capitalize", fontSize: "15px", backgroundColor: "blueviolet" }}
            onClick={() => navigate("/NewJobPosts")}>
            + New Requirement
          </Button>

        </div>
        <br />

        {<Filter />}
        <Button sx={{ color: "black", borderColor: "black", marginLeft: 37, textTransform: "capitalize" }} variant="outlined" onClick={() => navigate("/DraftJobPost")}><DriveFileRenameOutlineIcon />Draft</Button>




        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'right', width: 350, border: 1, float: "right" }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Paper>
        <br />   <br />

        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>

                <TableSortLabel
                  direction='desc'
                  active={true}
                  onClick={() => handleSort("title")}> <StyledTableCell >Requirements</StyledTableCell></TableSortLabel>
                <StyledTableCell align="center" >Total positions</StyledTableCell>
                <StyledTableCell align="center">Positions closed</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Assigned to</StyledTableCell>
                <TableSortLabel
                  direction='desc'
                  active={true}
                  onClick={() => handleSort("LastModified")}> <StyledTableCell align="center">About</StyledTableCell></TableSortLabel>
              </TableRow>
            </TableHead>
            <TableBody>
              {Requirements.filter(user => user.title.toLowerCase().includes(search.toLowerCase()))
                .map((user) => (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell component="th" scope="row">
                      {user.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">{user.vacancies}</StyledTableCell>
                    <StyledTableCell align="center">
                      {user.positions_closed}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.select_recruiters}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.LastModified}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Stack direction="row" spacing={1} >

                        {/* delete Button */}
                        {/* <Button
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
                          onClick={() => handleDelete(user.id)}
                        >
                          <DeleteIcon />
                        </Button> */}
                        <Button sx={{ color: 'black' }}
                          onClick={() => navigate(`/editrequirement/${user.id}`)}
                        >
                          <EditIcon />
                        </Button>

                      </Stack>

                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>

          </Table>
        </TableContainer>
      </div>
    </Container>

  );
};

export default SearchJobPosts;
