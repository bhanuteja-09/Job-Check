import React from "react";
import "../../../Assets/Styles/sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import { opening} from "../../Shared/Redux/Actions/actions";
import { useDispatch } from "react-redux";

const SiderBar = () => {
  let Navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div >
      <nav className="main-menu"  >
        <Box >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding onClick={() => Navigate("/")}>
                <ListItemButton>
                  <ListItemIcon>
                    <DoneAllOutlinedIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h5">Job Check</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>

            <List sx={{ marginTop: 5 }}>
              <ListItem disablePadding onClick={() => Navigate()}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => Navigate()}>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile Search" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => Navigate("/JobPost")}>
                <ListItemButton>
                  <ListItemIcon>
                    <DynamicFeedOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Job Post" />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                onClick={() => Navigate("/Requirements")}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentTurnedInOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Requirement" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding onClick={() => Navigate()}>
                <ListItemButton>
                  <ListItemIcon>
                    <EqualizerOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => Navigate()}>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                onClick={() => Navigate("/SearchSubscription")}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AddCardOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Subscriptions" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </nav>
    </div>
  );
};

export default SiderBar;
