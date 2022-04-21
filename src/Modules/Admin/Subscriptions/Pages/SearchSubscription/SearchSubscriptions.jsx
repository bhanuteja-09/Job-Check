import {
  Typography,
  Container,
  IconButton,
  InputBase,
  Button,
  TableBody,
  ButtonGroup,
  TableSortLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, sortUser } from "../Home/Actions/Action";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Filter from "./Filter";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUser } from "../Home/Actions/Action";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SearchSubscription = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Dispatching sortUser Action
  const handleSort = (users, id) => {
    dispatch(sortUser(users, id));
  };

  // Accessing redux store state from root-reducer
  const { users } = useSelector((state) => state.data);

  //Runs only on the first render
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you wanted to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <Container style={{ margin: "80px  8rem  " }}>
      <Typography variant="h3">
        Subscriptions
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "right",
            width: 193,
            marginLeft: 120,
          }}
        ></Paper>
      </Typography>
      <Typography variant="p">
        Track & manage your subscriptions here.
      </Typography>
      <Button
        sx={{ float: "right" }}
        variant="contained"
        onClick={() => navigate("/AddSubscription")}
      >
        {" "}
        + New Subscription
      </Button>
      <br />
      <br />
      <br />
      {<Filter />}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "right",
          width: 400,
          marginLeft: 93,
          border: 1,
        }}
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          defaultValue={search}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
      <br /> <br />
      <TableContainer
        sx={{ borderRadius: 3, border: "1px solid lightgrey" }}
        component={Paper}
      >
        <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableSortLabel
                direction="asc"
                active={true}
                onClick={() => handleSort("Subscription")}
              >
                {" "}
                <StyledTableCell align="center">Subscription</StyledTableCell>
              </TableSortLabel>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Base Credits</StyledTableCell>
              <StyledTableCell align="center">Last Updated</StyledTableCell>
              <StyledTableCell align="center">Product(s)</StyledTableCell>
              <StyledTableCell align="center">About</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users
                .filter((user) =>
                  user.Subscription.toLowerCase().includes(search.toLowerCase())
                )
                .map((user) => (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell align="center">
                      <Button
                        onClick={() =>
                          navigate(`/ViewSIngleSubscription/${user.id}`)
                        }
                      >
                        <b />
                        {user.Subscription}
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.Status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.BaseCredits}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.LastUpdated}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.Product}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.About}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <ButtonGroup>
                        <Button
                          sx={[
                            { border: "none" },
                            {
                              "&:hover": {
                                textDecoration: "none",
                                border: "none",
                              },
                            },
                          ]}
                          onClick={() => handleDelete(user.id)}
                        >
                          <DeleteIcon />
                        </Button>
                        <Button
                          sx={[
                            { border: "none" },
                            {
                              "&:hover": {
                                textDecoration: "none",
                                border: "none",
                              },
                            },
                          ]}
                          onClick={() =>
                            navigate(`/EditSubscriptions/${user.id}`)
                          }
                        >
                          <ModeEditIcon />
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default SearchSubscription;
