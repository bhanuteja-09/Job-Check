import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch } from "react-redux";
import { filterRequirement, loadRequirements } from "../Home/Actions/actions";
import { Button,Menu,MenuItem, Divider } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Filter = () => {
  let dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch(filterRequirement(value));
  };
  const handleReset = () => {
    dispatch(loadRequirements());
  };
  return (
    <>
      <Button
        onClick={handleReset}
        variant="outlined"
        sx={{
          color: "black",
          textTransform: "capitalize",
          borderColor: "black",
        }}
      >
       
        All Time
        <ClearOutlinedIcon/>
      </Button>
      <Button
        onClick={() => handleFilter("Active")}
        sx={{
          color: "black",
          textTransform: "capitalize",
          borderColor: "black",
          marginLeft: "15px",
        }}
        variant="outlined"
      >
      
        Active
        <ClearOutlinedIcon/>
      </Button>
     
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="outlined" {...bindTrigger(popupState)}
           sx={{
          color: "black",
          textTransform: "capitalize",
          borderColor: "black",
          marginLeft: "15px",
        }}>
          <FilterListIcon />
            More Filters
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem  onClick={() => handleFilter("Active")}><FilterListIcon /> Active</MenuItem>
            <Divider/>
            <MenuItem  onClick={() => handleFilter("InActive")}><FilterListIcon />  In Active</MenuItem>
            <Divider/>
            <MenuItem  onClick={handleReset}><FilterListIcon /> All Time</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </>
  );
};

export default Filter;
