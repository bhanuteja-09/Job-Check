import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useSelector, useDispatch } from "react-redux";
import { loadJobPosts, sortJobposts } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "../FilterJobPosts/FilterJobPosts";
import {
  styled,
  tableCellClasses,
  TableHead,
  Button,
  Stack,
  Grid,
  Typography,
  InputBase,
  TableSortLabel,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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
  const { JobPosts } = useSelector((state) => state.Job);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  useEffect(() => {
    dispatch(loadJobPosts());
  }, []);



  const handleSort = (value) => {
    dispatch(sortJobposts(value));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Grid>
        <Typography variant="h4" sx={{ position: "absolute", top: 255 }}>
          Job Posts
        </Typography>
        <Typography variant="p" sx={{ position: "absolute", top: 295 }}>
          Track & manage your Job Posts here.
        </Typography>
      </Grid>
      <div>
        <Button
          color="primary"
          variant="contained"
          sx={{
            marginTop: 19,
            display: "block",
            marginLeft: "auto",
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: "15px",
            backgroundColor: "blueviolet",
          }}
          onClick={() => navigate("/AddJobPost")}
        >
          + New JobPost
        </Button>
      </div>
      <br />
      <Filter />
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "right",
          width: 350,
          border: 1,
          float: "right",
        }}
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
      <br /> <br />
      <TableContainer  component={Paper}>
        <Table  sx={{ minWidth: 500, border: "2px  solid black", }} aria-label="custom pagination table">
          <TableHead
          sx={{
            padding: "0px 0px",
            border: "2px  solid black",
            fontSize: "1.1rem"
          }}>
            <TableRow>
              <TableSortLabel
                direction="desc"
                active={true}
                onClick={() => handleSort("title")}
              >
                {" "}
                <StyledTableCell>JobPosts</StyledTableCell>
              </TableSortLabel>
              <StyledTableCell align="center">Total positions</StyledTableCell>
              <StyledTableCell align="center">Positions closed</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Assigned to</StyledTableCell>
              <TableSortLabel
                direction="desc"
                active={true}
                onClick={() => handleSort("LastModified")}
              >
                {" "}
                <StyledTableCell align="center">About</StyledTableCell>
              </TableSortLabel>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody
          sx={{
            padding: "0px 0px",
            border: "2px  solid black",
            fontSize: "1.1rem"
          }}>
            {(rowsPerPage > 0
              ? JobPosts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : JobPosts
            ).map((JobPost) => (
              <StyledTableRow key={JobPost.id}>
                <StyledTableCell component="th" scope="row">
                  {JobPost.title}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {JobPost.vacancies}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {JobPost.positions_closed}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {JobPost.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {JobPost.select_recruiters}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {JobPost.LastModified}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <Stack direction="row" spacing={1}>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => navigate(`/EditJobPost/${JobPost.id}`)}
                    >
                      <EditIcon />
                    </Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={JobPosts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchJobPosts;
