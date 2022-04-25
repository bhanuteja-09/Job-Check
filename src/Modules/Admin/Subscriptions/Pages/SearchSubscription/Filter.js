import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch, useSelector } from "react-redux";
import { filterUser, loadUsers } from "../Home/Actions/Action";
import { Button } from "@mui/material";

const Filter = () => {

    let dispatch = useDispatch();
    const handleFilter = (Subscription) => {
        dispatch(filterUser(Subscription));
    };
    const handleReset = () => {
        dispatch(loadUsers());
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
                <FilterListIcon />
                All Time
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
                <FilterListIcon />
                Active
            </Button>
            <Button
                onClick={() => handleFilter("In Active")}
                sx={{
                    color: "black",
                    marginLeft: "20px",
                    textTransform: "capitalize",
                    borderColor: "black",
                }}
                variant="outlined"
            >
                <FilterListIcon />
                In Active
            </Button>
        </>
    );
};

export default Filter;
