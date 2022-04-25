import React, { useEffect, useState } from "react";
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Container,
  Grid,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts, sortPost, sortUser } from "../../Pages/Home/Actions/action";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./FIlter"
import { TableSortLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Avatar from "@material-ui/core/Avatar";
import image from "../../../../../Assets/Images/image.png";
import Chip from "@mui/material/Chip";
import ReactPaginate from "react-paginate";
import ViewJobPostStatistics from "../ViewJobPostStats/ViewJobPostStatistics";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import NewJobPostss from "../NewJobPost/NewJobPostss";
import { Link } from "react-router-dom";

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

const ViewAllJobPostss = () => {
  let dispatch = useDispatch();

  const { posts } = useSelector((state) => state.jobpost);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSort = (value) => {
    dispatch(sortPost(value));
  };

  return (
    <Container style={{ marginTop: 0 }}>
      <ViewJobPostStatistics />
      <br />
      <br />
      <Typography variant="h4" sx={{ position: "absolute" }}>
        Job Posts
      </Typography>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "right",
          width: 190,
          marginLeft: 119,
          height: 45,
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/NewJobPostss")}
          sx={{ backgroundColor: "blueviolet", height: 50, width: 200 }}
        >
          + New Job Post
        </Button>
      </Paper>

      <Typography variant="p">Track & manage your Job Posts here.</Typography>
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
          position: "relative",
          top: -50,
        }}
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          defaultValue={search}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableSortLabel
                  direction="desc"
                  active={true}
                  onClick={() => handleSort("JobPosts")}
                >
                  {" "}
                  <StyledTableCell>JobPosts</StyledTableCell>
                </TableSortLabel>
                <StyledTableCell align="left">
                  {" "}
                  Total positions{" "}
                </StyledTableCell>
                <StyledTableCell align="left">Positions closed</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Assigned to</StyledTableCell>
                <StyledTableCell align="left">About</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {posts && posts
                .filter((post) =>
                post.JobPosts.toLowerCase().includes(search.toLowerCase())
                )
                .map((post) => (
                  <StyledTableRow key={post.id}>
                    <StyledTableCell component="th" scope="row">
                      <b>{post.JobPosts}</b> <br /> {post.No}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {post.TotalPositions}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {post.Positionsclosed}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Chip
                        label={post.Status}
                        color="success"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ flexDirection: "Row", display: "flex" }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{
                          display: "flex",
                          align: "left",
                          flexDirection: "Row",
                          width: "500",
                          right: "-220px",
                        }}
                      />{" "}
                      {post.Assignedto}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">{post.About}</StyledTableCell>

                    <StyledTableCell align="left">
                      <Button sx={{ color: "black" }}>
                        <EditOutlinedIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          // onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          // backgroundColor={"black"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </Container>
  );
};

export default ViewAllJobPostss;
