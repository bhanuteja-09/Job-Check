// import { Typography } from '@mui/material'
import React from "react";
import { Container, InputAdornment, Typography, Grid, Modal } from "@mui/material";
import "../../../../../Assets/Styles/requirement.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";

import { TextareaAutosize } from "@mui/material";
import Checkbox from "@mui/icons-material/CheckBox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Stack } from "@mui/material";
import { Autocomplete } from "@mui/material";
import requirementdata from "./data";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Reimage from "../../../../../Assets/Images/Reimage.png";
import {Link} from "react-router-dom"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function AddRequirement() {

const [open, setOpen] = React.useState(false);
const [op,setOp]=React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const handleCl=()=>setOp(false);
const handleChange=()=>setOp(true);


  return (
    <div>
      <Container maxWidth="sm">
        <div className="data">
          <Grid>
          <Typography variant="h4">New Requirement</Typography>
          <br/>
          <Typography variant="OVERLINE">
            After you complete the requirement, publish it so other recruiters
            can access it
          </Typography>

          <Stack spacing={2} direction="row" sx={{marginLeft:110, marginTop:-4}}>
            <div>
            <Button variant="outlined" sx={{width:180,height:45}} onClick={handleOpen}>Save as draft</Button>
            <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            >
              <Box sx={{...style, width:400,height:250}}>
              <img src={Reimage} alt="logo" className="logo"/>
                <h2 className="text">Save Requirement</h2>
                <p className="para">Do you wish to save the requirement as draft?</p>
                <Grid Container className="cancel">
                  <Grid item className="main" sx={{marginLeft:2}}> <Button color="primary"  variant="contained" onClick={handleClose}>Cancel</Button></Grid>
                  
                <Grid item className="main" sx={{marginLeft:18, marginTop:-4.5}}>
                  <Button color="primary" variant="contained" onClick={handleClose}>Save</Button>
                </Grid>
                </Grid>
              </Box>
            </Modal>
            </div>

              <div>
              <Button variant="contained" sx={{width:220,height:45}} onClick={handleChange}>Publish requirement</Button>
            <Modal
            hideBackdrop
            open={op}
            onClose={handleCl}
            >
              <Box sx={{...style, width:400}}>
              <img src={Reimage} alt="logo" className="logo"/>
                <h2 className="text">Publish Requirement</h2>
                <p className="para">Do you wish to publish requirement?</p>
                <Grid Container className="cancel">
                  <Grid item className="main" sx={{marginLeft:2}}> <Button variant="contained" onClick={handleCl}>Cancel</Button></Grid>
               
                <Grid item className="main" sx={{marginLeft:18, marginTop:-4.5}}>
              <Link  to="/ViewAllRequirements" >   <Button color="primary" variant="contained">Create</Button>  </Link>
                </Grid>
                </Grid>
              </Box>
            </Modal>
              </div>
            
          </Stack>
          </Grid>
          

          <br />
          <Typography variant="h5" component="h5">
              Basic Details
            </Typography>
            <br />
          <Typography variant="subtitle2" component="h5">
            Title
          </Typography>
          <TextField
            variant="outlined"
            id="outlined-basic"
            name="Requirement Title"
            placeholder="Eg: Software Engineer"
          />
          <br />
          <div className="choose">
            <Typography variant="subtitle2" component="h5">
              Prefill from other Requirement
            </Typography>
            <Stack spacing={2} sx={{ width: 300, marginTop: -0 }}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose existing Requirement"
                    helperText="This will overwrite below values"
                  />
                )}
              />
            </Stack>
          </div>
          <br />
          <br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Job Details
            </Typography>
            <br />
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Job Title
                  </Typography>
                  <TextField
                    variant="outlined"
                    name="Requirement Title"
                    placeholder="Eg: Software Developer"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Job Location
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Eg: Bengaluru"
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

                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Employment Type
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Employment Type"
                          />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Industry
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="Banking" />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Functional Area
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="Human Resources" />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Industry
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="HR Operations" />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Brief Candidate Description
                  </Typography>

                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Helps the algorithm recommend suitable
               candidares for the requirement"
                    style={{ width: "600px", height: 100 }}
                  />
                  <Typography variant="subtitle2" color={"gray"}>
                    275 Characters left
                  </Typography>
                </Grid>
              </Grid>

              <Grid container sx={{ m: 1 }} columnSpacing={{ sm: 3 }}>
                <Grid item className="main" xs={1.65}>
                  <Typography variant="subtitle2" component="h5">
                    Currency
                  </Typography>
                  <Stack sx={{ width: 100 }}>
                    <Autocomplete
                      id="Select Employment Type"
                      disableClearable
                      options={requirementdata.map(
                        (option) => option.requirementdata
                      )}
                      renderInput={(params) => (
                        <TextField {...params} label="INR" />
                      )}
                    />
                  </Stack>
                </Grid>

                <Grid item className="main" xs={2}>
                  <Typography variant="subtitle2" component="h5">
                    Minimum Salary
                  </Typography>
                  <TextField name="Minimum Salary" defaultValue="10,000" />
                </Grid>

                <Grid item className="main" xs={2}>
                  <Typography variant="subtitle2" component="h5">
                    Maximum Salary
                  </Typography>
                  <TextField name="Maximum Salary" defaultValue="10,000" />
                </Grid>

                <Grid item className="main" xs={2}>
                  <Typography variant="subtitle2" component="h5">
                    Vacancies Available
                  </Typography>
                  <TextField name="Vacancies Available" defaultValue="1" />
                </Grid>
              </Grid>
            </Box>
            <Grid sx={{ m: 1 }}>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show on job post"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Variable Component"
                  sx={{ marginLeft: 20 }}
                />
              </FormGroup>
              <FormGroup aria-label="position" row>
                <FormHelperText sx={{ marginLeft: 2 }}>
                  Candidates will be able to see the CTC
                </FormHelperText>
                <FormHelperText sx={{ marginLeft: 12.5 }}>
                  Salary can change based on incentives
                </FormHelperText>
              </FormGroup>
            </Grid>
          </div>
          <br />
          <br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Candidate Details
            </Typography>
            <br />
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Brief Candidate Description
                  </Typography>

                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Helps the algorithm recommend suitable
               candidares for the requirement"
                    style={{ width: "350px", height: 100 }}
                  />
                  <Typography variant="subtitle2" color={"gray"}>
                    275 Characters left
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Educational Qualifications
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Eg: B.Tech (COmputer Science)"
                          />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Work Experience
                    </Typography>
                    <Stack spacing={2} sx={{ width: 150, marginTop: 0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="Minimum" />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="choose">
                    <Stack spacing={2} sx={{ width: 150, marginTop: 3 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="Maximum" />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Must-have Keywords
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
                  <Typography variant="subtitle2" color={"gray"}>
                    Select upto 3
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Optional Keywords
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Eg: Hadoop"
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

                <Grid item xs={6}>
                  <div className="choose">
                    <Typography variant="subtitle2" component="h5">
                      Questionnaire
                    </Typography>
                    <Stack spacing={2} sx={{ width: 380, marginTop: -0 }}>
                      <Autocomplete
                        id="Choose from existing Questionnaires"
                        disableClearable
                        options={requirementdata.map(
                          (option) => option.requirementdata
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Choose from existing Questionnaires"
                          />
                        )}
                      />
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          <br />
          <br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Additional Details
            </Typography>
            <br />
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Contact Person
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    placeholder="Eg: Software Developer"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Company Name
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Choose Client"
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
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Phone Number
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    placeholder="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    About Company
                  </Typography>

                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="A brief description about
              company"
                    style={{ width: "400px", height: 100 }}
                  />
                  <Typography variant="subtitle2" color={"gray"}>
                    275 Characters left
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="subtitle2" component="h5">
                    Company Website
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    placeholder="www.companyname.com"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid sx={{ m: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show on job post"
                />
                <FormHelperText sx={{ marginLeft: 2 }}>
                  Candidates will be able to see the CTC
                </FormHelperText>
              </Grid>
            </Box>
            <br />

            <Grid item>
              <div className="choose">
                <Typography variant="subtitle2" component="h5">
                  Assign Recruiters
                </Typography>
                <Stack spacing={2} sx={{ width: 335, marginTop: -0 }}>
                  <Autocomplete
                    id="Choose from existing Questionnaires"
                    disableClearable
                    options={requirementdata.map(
                      (option) => option.requirementdata
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Recruiters" />
                    )}
                  />
                </Stack>
              </div>
            </Grid>
            <br />
            <Grid item>
              <TextField
                id="outlined-basic"
                placeholder="Choose Recruiters"
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
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default AddRequirement;
