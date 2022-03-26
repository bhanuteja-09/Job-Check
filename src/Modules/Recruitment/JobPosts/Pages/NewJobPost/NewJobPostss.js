// import { Typography } from '@mui/material'
import React from "react";
import { Container, InputAdornment, Typography } from "@mui/material";

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import {TextareaAutosize} from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import  '../../../../../Assets/Styles/NewJobPostss.css';
function NewJobPostss()  {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div className="data">
          <Typography variant="h4" component="h4"
          sx={{
            marginTop:"3rem",
            fontStyle:"initial"
          }}>
            New Job Post
          </Typography>
          <Typography variant="body1" component="h1"
          sx={{
            marginTop:"7rem"
          }}>
            Attach Requirements
          </Typography>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Choose existing Requirement"
              InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )         }}
                sx={{
                  marginTop:"6rem"
                }}
            />
            <Button variant="text" startIcon={<AddIcon />}
            sx={{
              marginTop:"7rem"
            }}>
              Create New Requirement
            </Button>
            <Typography variant="subtitle2" color={"gray"} >
              This will prefill below values
            </Typography>
          </div>
          <br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Job Details
            </Typography>
            <Typography variant="subtitle2" component="h5">
              Job Title
            </Typography>

            <TextField id="outlined-basic" placeholder="Eg: Software Developer" variant="outlined" />
            <Typography
              variant="subtitle2"
              component="h5"
              sx={{
                marginTop: "0.5rem",
              }}
            >
              Employment Type
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                paddingRight: "10rem",
                width: "21rem",
                marginTop: "0.5rem",
              }}
              style={{
                  cursor:"pointer"
              }}
              //  value={age}
              //  label="Age"
              //  onChange={handleChange}
            >
              {/* <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>

            <Typography variant="subtitle2" component="h5" sx={{
                marginTop:"1rem",
                marginBottom:"0.5rem"
            }}>
                Description
            </Typography>

            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              // style={{ width: "" }}
            />
             <Typography variant="subtitle2" color={"gray"} >
              275 Characters left
            </Typography>
           <div classsName="select"> 
           <Select
              
              id="demo-simple-select"
              sx={{
                // paddingRight: "10rem",
                width: "21rem",
                marginTop: "1rem",
              }}
              placeholder="Normal text"
              //  value={age}
              //  label="Age"
              //  onChange={handleChange}
            />
         
 
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      sx={{
        marginLeft:"12rem",
      
      }}
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="Link" aria-label="underlined">
        <InsertLinkIcon />
      </ToggleButton>
      <ToggleButton value="List" aria-label="color">
        <FormatListBulletedIcon />
      </ToggleButton>
      <ToggleButton value="List">
        <FormatListNumberedIcon />
        </ToggleButton>
    </ToggleButtonGroup>

     
    </div>
   
        <div id="align">
    <Typography variant="subtitle2" sx={{
        marginTop:"1rem",
        marginRight:"25rem",
        marginBottom:"0.5rem"
    }} >
              Must-Have Keyword
            </Typography>
        <Typography variant="subtitle2" sx={{
    marginTop:"1rem",
    marginBottom:"0.5rem"
}} >
         Optional Keywords
        </Typography>
          
            </div>
            <div className="option">
          
            <TextField id="outlined-basic" placeholder="Eg: IT Software-Middleware" variant="outlined" 
           InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>
            )         }}
            sx={{
                marginRight:"9rem"}}/>
            
            <TextField id="outlined-basic" placeholder="Eg: IT Software-Middleware" variant="outlined" 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )         }}/>

</div>

          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default NewJobPostss;
