import React from 'react'
import "../../Assets/Styles/sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { Box,List,ListItem,ListItemText,ListItemButton,ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';




const SiderBar = () => {
    let Navigate = useNavigate()
    
  return (
    <div>
      
  <nav className="main-menu">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
          <List> 
              <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon >
              <DoneAllOutlinedIcon sx={{color:"green"}} />
              </ListItemIcon>
              <ListItemText  onClick={()=>Navigate("/")}>
                <Typography variant='h5'>Job Check</Typography>
                </ListItemText>
            </ListItemButton>
          </ListItem></List>
      
     
        <List sx={{marginTop:5}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" onClick={()=>Navigate()} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile Search" onClick={()=>Navigate()} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Job Post" onClick={()=>Navigate("/JobPost")} />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Requirement" onClick={()=>Navigate("/Requirements")} />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Analytics" onClick={()=>Navigate()} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Users" onClick={()=>Navigate()} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCardOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Subscriptions" onClick={()=>Navigate("/SearchSubscription")} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>

           
        </nav>
  
    </div>
  )
}

export default SiderBar
