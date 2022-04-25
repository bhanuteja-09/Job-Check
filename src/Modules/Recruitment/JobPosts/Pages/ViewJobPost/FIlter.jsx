import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch } from "react-redux";
import { filterPost, loadPosts } from "../../Pages/Home/Actions/action";
import { Button } from "@mui/material";


const Filter = () => {
  let dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch(filterPost(value));
  };
  const handleReset = () => {
    dispatch(loadPosts());
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
