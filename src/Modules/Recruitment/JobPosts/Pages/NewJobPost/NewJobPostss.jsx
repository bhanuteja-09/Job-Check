import React from "react";
import {
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";

function NewJobPostss() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  const Navigate = useNavigate();
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <Container sx={{marginLeft:"20%"}}>
        <div className="data">
          <Typography
            variant="h4"
            component="h4"
            sx={{
              marginTop: "3rem",
              fontStyle: "initial",
            }}
          >
            New Job Post
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            sx={{
              marginTop: "2rem",
            }}
          >
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
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                marginTop: "2rem",
                width: "30%",
              }}
            />
            <Button
              variant="text"
              startIcon={<AddIcon />}
              sx={{
                marginTop: "2rem",
              }}
              onClick={() => Navigate(`/addrequirement`)}
            >
              Create New Requirement
            </Button>
            <Typography variant="subtitle2" color={"gray"}>
              This will prefill below values
            </Typography>
          </div>
          <br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Job Details
            </Typography>
            <br />

            <Typography variant="subtitle2" component="h5">
              Job Title
            </Typography>

            <TextField
              required
              id="outlined-basic"
              placeholder="Eg: Software Developer"
              variant="outlined"
            />
            <br />

            <br />

            <InputLabel id="demo-simple-select-label">
              <h4>Employment Type</h4>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                width: "21rem",
              }}
              style={{
                cursor: "pointer",
              }}
              defaultValue={8}
              label=" "
            >
              <MenuItem value={8}> Select Employment Type</MenuItem>
              <MenuItem value={9}> Permanent</MenuItem>
              <MenuItem value={10}>Temporary </MenuItem>
            </Select>

            <Typography
              variant="subtitle2"
              component="h5"
              sx={{
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              <h4>Description</h4>
            </Typography>

            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              placeholder="Job description will appear on your job post"
              style={{
                width: "30%",
                borderRadius: "0.4rem",
                paddingLeft: "10px",
              }}
            />
            <br />

            <br />
            <div classsName="select">
              <InputLabel id="demo-simple-select-label"></InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="Age"
                label=" "
                defaultValue={9}
                sx={{ width: "15%" }}
              >
                <MenuItem value={9}>Normal Text</MenuItem>
                <MenuItem value={10}>Phoenix Baker </MenuItem>
                <MenuItem value={20}>Lana Steiner</MenuItem>
                <MenuItem value={30}>Demi Wilkinson</MenuItem>
                <MenuItem value={40}>Candice Wu</MenuItem>
                <MenuItem value={50}>Natali Craig</MenuItem>
                <MenuItem value={60}>Drew Cano</MenuItem>
              </Select>

              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                sx={{
                  marginLeft: "12rem",
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
            <Grid Container sx={{ display: "flex" }}>
              <Grid item>
                {" "}
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: "1rem",
                    marginRight: "25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h6>Must-Have Keyword</h6>
                </Typography>{" "}
                <TextField
                  id="outlined-basic"
                  placeholder="Eg: IT Software-Middleware"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    marginRight: "9rem",
                  }}
                />
              </Grid>
              <Grid item sx={{ marginLeft: "-12rem" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h6> Optional Keywords</h6>
                </Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Eg: IT Software-Middleware"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default NewJobPostss;
