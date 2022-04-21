import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addRequirement } from "../Home/Actions/actions";
import Reimage from '../../../../../Assets/Images/Reimage.png';
import {addRequirementDraft} from "../ViewRequireDrafts/Action"
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  Switch,
  Grid,
  Modal,
  Stack,
  Box,
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";

import NavigateBar from "./NavigateBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AddUser = () => {
  const [state, setState] = useState({
    title: "",
    choose_existing_requirement: "",
    job_title: "",
    job_location: "",
    employment_type: "",
    industry: "",
    functional_area: "",
    description: "",
    currency: "",
    minimum_salary: "",
    maximum_salary: "",
    vacancies: "",
    brief_candidate_description: "",
    educational_qualifications: "",
    minimum: "",
    maximum: "",
    must_have_keywords: "",
    optional_keywords: "",
    questionnaire: "",
    contact_person: "",
    company_name: "",
    phone_number: "",
    about_company: "",
    company_website: "",
    select_recruiters: "",
    positions_closed: 3,
    status: "InActive",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Destructuring The All States 
  const {
    title,
    choose_existing_requirement,
    job_title,
    job_location,
    employment_type,
    industry,
    functional_area,
    description,
    currency,
    minimum_salary,
    maximum_salary,
    vacancies,
    brief_candidate_description,
    educational_qualifications,
    minimum,
    maximum,
    must_have_keywords,
    optional_keywords,
    questionnaire,
    contact_person,
    company_name,
    phone_number,
    about_company,
    company_website,
    select_recruiters,
    status,
  } = state;
  
  // Set All Input values
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const [open, setOpen] = React.useState(false);
  const [op, setOp] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCl = () => setOp(false);
  const handleChange = () => setOp(true);
 
  // Dispatching The Data
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRequirement(state));
    navigate("/Requirements");
    setError(" ");
  };
  const handleSubmitDraft =(e)=>{
    e.preventDefault();
    dispatch(addRequirementDraft(state))
    navigate("/DraftRequirement");
  }
 

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <Container>
          <div className="data">
            <Grid>
              <Typography variant="h4">New Requirement</Typography>
              <br />
              <Typography
                variant="OVERLINE"
                sx={{ position: "relative" }}
              >
                After you complete the requirement, publish it so other
                recruiters can access it
              </Typography>

              <Stack
                spacing={2}
                direction="row"
                sx={{ marginLeft: 110, marginTop: -4 }}
              >
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: 180,
                      height: 45,
                      position: "fixed",
                      flexDirection: "row",
                      top: 5,
                      left:1100,
                    }}
                    onChange={handleInputChange}
                    onClick={handleOpen}
                  >
                    Save as draft
                  </Button>
                  <Modal hideBackdrop open={open} onClose={handleClose}>
                    <Box sx={{ ...style, width: 400, height: 250,  }}>
                      <img src={Reimage} alt="logo" className="logo" style={{position:"fixed",left:150 }}/>
                      <h2 className="text" style={{position:"absolute",top:80,left:60 }}>Save Requirement</h2>
                      <p className="para" style={{position:"absolute",top:120 }}>
                        Do you wish to save the requirement as draft?
                      </p>
                      <Grid Container style={{position:"fixed",top:160,left:80 }}>
                        <Grid item className="main" sx={{ marginLeft: 0 }}>
                          {" "}
                          <Button
                            color="primary"
                            variant="contained"
                            onChange={handleInputChange}
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>
                        </Grid>

                        <Grid
                          item
                          className="main"
                          sx={{ marginLeft: 20, marginTop: -4.5 }}
                        >
                          <Button
                            color="primary"
                            variant="contained"
                            onSubmit={handleClose}
                           onChange={handleInputChange}
                            onClick={handleSubmitDraft}
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Modal>
                </div>

                <div>
                  <Button
                    variant="contained"
                    sx={{
                      width: 220,
                      height: 45,
                      position: "fixed",
                      flexDirection: "row",
                      top: 5,
                      right: 5,
                    }}
                    onClick={handleChange}
                  >
                    Publish requirement
                  </Button>
                  <Modal hideBackdrop open={op} onClose={handleCl}>
                    <Box sx={{ ...style, width: 400, height:250 }}>
                      <img src={Reimage} alt="logo" className="logo" style={{position:"fixed",left:160 }} />
                      <h2 className="text" style={{position:"absolute",top:80,left:60 }}>Publish Requirement</h2>
                      <p className="para" style={{position:"absolute",top:120,left:70 }}>
                        Do you wish to publish requirement?
                      </p>
                      <Grid Container style={{position:"fixed",top:160, left:50 }}>
                        <Grid item sx={{ marginLeft: 2 }}>
                          {" "}
                          <Button
                            variant="contained"
                            onClick={handleCl}
                            onChange={handleInputChange}
                          >
                            Cancel
                          </Button>
                        </Grid>

                        <Grid
                          item
                          className="main"
                          sx={{ marginLeft: 22, marginTop: -4.5 }}
                        >
                          {" "}
                          <Button
                            color="primary"
                            variant="contained"
                            onChange={handleInputChange}
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Create
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Modal>
                </div>
              </Stack>
            </Grid>
            <br />
            <br />
            <NavigateBar/>
            

            <Stack id="basic" style={{position:"absolute", top:140}}>
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
                type="text"
                name="title"
                value={title}
                sx={{ width: 260, marginTop: 1, marginBottom: 2 }}
                label="Eg: Software Engineer"
                onChange={handleInputChange}
              />
              <br />
              <div className="choose">
                <Typography variant="subtitle2" component="h5">
                  Prefill from other Requirement
                </Typography>
                <Box spacing={2} sx={{ width: 260, marginTop: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Choose Existing Requirement
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="choose_existing_requirement"
                      value={choose_existing_requirement}
                      label="Choose Existing Requirement"
                      onChange={handleInputChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Software Developer"}>
                        Software Developer
                      </MenuItem>
                      <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
                    </Select>
                    <FormHelperText>
                      This will overwrite below values
                    </FormHelperText>
                  </FormControl>
                </Box>
              </div>
            </Stack>

            <br />
            <br />
            <div className="contain" id="job" style={{position:"absolute",top:500}}>
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
                      sx={{ width: 230, marginTop: 1 }}
                      type="text"
                      name="job_title"
                      value={job_title}
                      label="Eg: Software Developer"
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      Job Location
                    </Typography>
                    <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Location
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="job_location"
                          value={job_location}
                          label="Eg: Bengaluru"
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                          <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                          <MenuItem value={"Pune"}>Pune</MenuItem>
                          <MenuItem value={"Chennai"}>Chennai</MenuItem>
                          <MenuItem value={"Noida"}>Noida</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <div className="choose">
                      <Typography variant="subtitle2" component="h5">
                        Employment Type
                      </Typography>
                      <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Employment Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="employment_type"
                            value={employment_type}
                            label="Select Employment Type"
                            onChange={handleInputChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Full Time"}>Full Time</MenuItem>
                            <MenuItem value={"Part Time"}>Part Time</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div className="choose">
                      <Typography variant="subtitle2" component="h5">
                        Industry
                      </Typography>
                      <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Industry Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="industry"
                            value={industry}
                            label="Industry Type"
                            onChange={handleInputChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Banking"}>Banking</MenuItem>
                            <MenuItem value={"IT"}>IT</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div className="choose">
                      <Typography variant="subtitle2" component="h5">
                        Functional Area
                      </Typography>
                      <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Functional Area
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="functional_area"
                            value={functional_area}
                            label="Functional Area"
                            onChange={handleInputChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Human Resources"}>
                              Human Resources
                            </MenuItem>
                            <MenuItem value={"IT"}>IT</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      Description
                    </Typography>

                    <TextareaAutosize
                      aria-label="empty textarea"
                      name="description"
                      value={description}
                      type="text"
                      placeholder="Helps the algorithm recommend suitable
               candidares for the requirement"
                      onChange={handleInputChange}
                      style={{ width: "350px", height: 50, marginTop: 5 }}
                    />
                    <Typography variant="subtitle2" color={"gray"}>
                      275 Characters left
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container sx={{ m: 2 }} columnSpacing={{ sm: 2 }}>
                  <Grid item className="main" xs={1.35}>
                    <Typography
                      variant="subtitle2"
                      component="h5"
                      sx={{ position: "absolute", marginTop: 0 }}
                    >
                      Currency
                    </Typography>
                    <Stack sx={{ marginTop: 4, width: 105 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="currency"
                          value={currency}
                          label="currency"
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"INR"}>INR</MenuItem>
                          <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Grid>

                  <Grid item className="main" xs={1.8}>
                    <Typography variant="subtitle2" component="h5">
                      Minimum Salary
                    </Typography>
                    <TextField
                      sx={{ marginTop: 1.3, width:150 }}
                      type="number"
                      name="minimum_salary"
                      value={minimum_salary}
                      label="salary"
                      onChange={handleInputChange}
                      InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  </Grid>

                  <Grid item className="main" xs={1.8}>
                    <Typography variant="subtitle2" component="h5">
                      Maximum Salary
                    </Typography>
                    <TextField
                      sx={{ marginTop: 1.3, width:150 }}
                      type="number"
                      name="maximum_salary"
                      label="salary"
                      value={maximum_salary}
                      onChange={handleInputChange}
                      InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  </Grid>

                  <Grid item className="main" xs={2}>
                    <Typography variant="subtitle2" component="h5">
                      Vacancies Available
                    </Typography>
                    <TextField
                      sx={{ marginTop: 1.3, width:150 }}
                      type="number"
                      name="vacancies"
                      label="vacancies"
                      value={vacancies}
                      onChange={handleInputChange}
                      InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
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
                    sx={{ marginLeft: 34, marginTop: -1 }}
                  />
                </FormGroup>
                <FormGroup aria-label="position">
                  <FormHelperText
                    sx={{ marginLeft: 4, marginBottom: 5, marginTop: -2 }}
                  >
                    Candidates will be able to see the CTC
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: 61, marginTop: -8 }}
                  >
                    Salary can change based on incentives
                  </FormHelperText>
                </FormGroup>
              </Grid>
            </div>

            <br />
            <br />
            <div className="contain" id="candidate" style={{position:"absolute",top:1080}}>
                    <Typography variant="h5" component="h5">
                        Candidate Details
                    </Typography>
                    <br />
                    <Box sx={{ width: "100%" }}>
                        <Grid
                            container
                            rowSpacing={3}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            
                            <Grid item xs={6}>
                                <div className="choose">
                                    <Typography variant="subtitle2" component="h5">
                                        Educational Qualifications
                                    </Typography>
                                    <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Educational Qualifications
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="educational_qualifications"
                                                value={educational_qualifications}
                                                label="Eg: B.Tech (Computre Science)"
                                                onChange={handleInputChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
                                                <MenuItem value={"BE"}>BE</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Grid>

                            

                            <Grid item xs={2}>
                                <div className="choose">
                                    <Typography variant="subtitle2" component="h5">
                                        Work Experience
                                    </Typography>
                                    <Stack spacing={2} sx={{ width: 150, marginTop: 1 }}>
                                        <TextField
                                            label="Minimum"
                                            type="number"
                                            name="minimum"
                                            value={minimum}
                                            onChange={handleInputChange}
                                        />
                                    </Stack>
                                </div>
                            </Grid>
                            

                            <Grid item xs={2}>
                                <div className="choose">
                                    <Stack
                                        spacing={2}
                                        sx={{ width: 150, marginTop: 3.8, marginLeft:-3 }}
                                    >
                                        <TextField
                                            label="Maximum"
                                            type="number"
                                            name="maximum"
                                            value={maximum}
                                            onChange={handleInputChange}
                                        />
                                    </Stack>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="subtitle2" component="h5">
                                    Must-have Keywords
                                </Typography>
                                <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Keywords
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="must_have_keywords"
                                            value={must_have_keywords}
                                            label="Keywords"
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Human Resources"}>
                                                Human Resources
                                            </MenuItem>
                                            <MenuItem value={"IT"}>IT</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Typography variant="subtitle2" color={"gray"}>
                                    Select upto 3
                                </Typography>
                            </Grid>
                            <Grid item xs={4.5}>
                                <Typography variant="subtitle2" component="h5">
                                    Optional Keywords
                                </Typography>
                                <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Keywords
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="optional_keywords"
                                            value={optional_keywords}
                                            label="Keywords"
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Hadoop"}>Hadoop</MenuItem>
                                            <MenuItem value={"BlockChain"}>BlockChain</MenuItem>
                                            <MenuItem value={"CryptoCurrency"}>
                                                CryptoCurrency
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            <Grid item xs={4.5}>
                                <Typography variant="subtitle2" component="h5">
                                    Brief Candidate Description
                                </Typography>

                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    type="text"
                                    name="brief_candidate_description"
                                    value={brief_candidate_description}
                                    placeholder="Helps the algorithm recommend 
                                    suitable candidares for the requirement"
                                    onChange={handleInputChange}
                                    style={{ width: 350, height: 51, marginTop: 8 }}
                                />
                                <Typography variant="subtitle2" color={"gray"}>
                                    275 Characters left
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid item xs={4.5}>
                                <div className="choose">
                                    <Typography variant="subtitle2" component="h5" marginTop={2}>
                                        Questionnaire
                                    </Typography>
                                    <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Educational Qualifications
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                autoWidth
                                                id="demo-simple-select"
                                                name="questionnaire"
                                                value={questionnaire}
                                                label="Choose from existing questionnaire"
                                                onChange={handleInputChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Are you available immediately ?"}>
                                                    Are you available immediately ?
                                                </MenuItem>
                                                <MenuItem value={"What is your experience ?"}>
                                                    What is your experience ?
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Grid>
                    </Box>
                </div>

            <br />
            <br />
            <div className="contain" id="additional" style={{position:"absolute",top:1650}}>
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
                      name="contact_person"
                      type="text"
                      value={contact_person}
                      sx={{ marginTop: 1, width:230 }}
                      label="Point of Contact"
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      Company Name
                    </Typography>
                    <Box spacing={2} sx={{ width: 230, marginTop: 3 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Choose Client
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="company_name"
                          value={company_name}
                          label="Choose Client"
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Pratian"}>Pratian</MenuItem>
                          <MenuItem value={"First Meridian"}>
                            First Meridian
                          </MenuItem>
                          <MenuItem value={"Network Labs"}>
                            Network Labs
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      Phone Number
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      name="phone_number"
                      type="tel"
                      value={phone_number}
                      label="Phone Number"
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{ marginTop: 1, width:230 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      About Company
                    </Typography>

                    <TextareaAutosize
                      aria-label="empty textarea"
                      name="about_company"
                      type="text"
                      value={about_company}
                      placeholder="A brief description about
              company"
                      onChange={handleInputChange}
                      style={{ width: 335, height: 44.5, marginTop: 8 }}
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
                      name="company_website"
                      type="text"
                      value={company_website}
                      label="www.companyname.com"
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{ marginTop: 1, width: 230 }}
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ m: 2 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    onChange={handleInputChange}
                    label="Show on job post"
                  />
                  <FormHelperText
                    sx={{ marginLeft: 3, marginBottom: 2, marginTop: -1 }}
                  >
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
                  <Box spacing={2} sx={{ width: 230, marginTop: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Recruiter
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="select_recruiters"
                        value={select_recruiters}
                        label="Select Recruiters"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Olivia Rhye"}>Olivia Rhye</MenuItem>
                        <MenuItem value={"John"}>John</MenuItem>
                        <MenuItem value={"Mark"}>Mark</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </Grid>
              <br />
            </div>
            <br />
            

            <Grid container style={{position:"absolute", top:2250}}>
              <Switch
                value={state.status || ""}
                onChange={(e) =>{
                  var value= status==="Active" ? "InActive":"Active"
                  setState({ ...state, status: value })}
                } 
              />

              <Typography>
                Requirement Status
              </Typography>
            </Grid>
            <br />
            <br />
            <br />
          </div>
        </Container>
      </form>
    </div>
  );
};

export default AddUser;
