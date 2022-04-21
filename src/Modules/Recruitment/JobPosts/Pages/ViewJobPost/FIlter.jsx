import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch } from "react-redux";
import { filterPost, loadPosts } from "../../Pages/Home/Actions/action";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";

import Portal from "@mui/material/Portal";

const Filter = () => {
  let dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch(filterPost(value));
  };
  const handleReset = () => {
    dispatch(loadPosts());
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "fixed",
    width: 200,
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
    backgroundColor: "white",
  };

  return (
    <>
      <Button
        onClick={handleReset}
        variant="outlined"
        sx={{
          color: "blue",
          textTransform: "capitalize",
          borderColor: "lightgray",
          backgroundColor: "",
        }}
      >
        VIEW ALL
        <FilterListIcon />
      </Button>
      <Button
        onClick={() => handleFilter("Active")}
        sx={{
          color: "black",
          textTransform: "capitalize",
          borderColor: "lightgray",
          backgroundColor: "",
          marginLeft: "15px",
        }}
        variant="outlined"
      >
        Active
        <FilterListIcon />
      </Button>
      <Button
        onClick={() => handleFilter("In Active")}
        sx={{
          color: "black",
          marginLeft: "20px",
          textTransform: "capitalize",
          borderColor: "lightgray",
        }}
        variant="outlined"
      >
        In Active
        <FilterListIcon />
      </Button>
    </>
  );
};

export default Filter;
