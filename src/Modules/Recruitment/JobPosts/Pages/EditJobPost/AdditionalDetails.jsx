import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  FormHelperText,
  Stack,
  Checkbox,
  InputAdornment,
  Button,
  TextareaAutosize,
  FormControlLabel,
  Step,
  StepLabel,
  Stepper,
  Switch,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleJobPost, updateJobPost } from "../Redux/Actions/actions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AdditionalDetails = () => {
  const steps = ["Job Details", "Candidate Details", "Additional Details"];
  const [state, setState] = useState({
    contact_person: "",
    company_name: "",
    phone_number: "",
    about_company: "",
    company_website: "",
    select_recruiters: "",
    status: "",
  });

  let { id } = useParams();
  const { JobPost } = useSelector((state) => state.Job);
  let navigate = useNavigate();
  const [setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleJobPost(id));
  }, []);
  useEffect(() => {
    if (JobPost) {
      setState({ ...JobPost });
    }
  }, [JobPost]);
  const {
    contact_person,
    select_recruiters,
    company_name,
    phone_number,
    about_company,
    company_website,
    status,
  } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateJobPost(state, id));
    navigate("/JobPost");
    setError("");
  };
  return (
    <div>
      <Container sx={{ margin: "10px", marginLeft: "15%" }}>
        <div>
          <h1>Edit Requirement</h1>
          <Box sx={{ width: "100%", marginTop: 15 }}>
            <Stepper activeStep={2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <br />
          <form onSubmit={handleSubmit}>
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
                    label="Name"
                    name="contact_person"
                    value={contact_person}
                    type="text"
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  <br /> <br />
                  <Typography variant="subtitle2" component="h5">
                    Phone Number
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    name="phone_number"
                    label="Phone Number"
                    value={phone_number}
                    type="text"
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  <br /> <br />
                  <Typography variant="subtitle2" component="h5">
                    Company Website
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    name="company_website"
                    value={company_website}
                    type="text"
                    label=" Company Website"
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  <Typography variant="subtitle2" component="h5">
                    <br />
                    Company Name
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    name="company_name"
                    label="Company Name"
                    value={company_name}
                    type="text"
                    onChange={handleInputChange}
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
              <Grid item xs={6}>
                <br />
                <Typography variant="subtitle2" component="h5">
                  About Company
                </Typography>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="A brief description about
              company"
                  id="standard-basic"
                  name="about_company"
                  value={about_company}
                  onChange={handleInputChange}
                  style={{ width: 400, height: 100 }}
                />
                <Typography variant="subtitle2" color={"gray"}>
                  275 Characters left
                </Typography>
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
              <div>
                <Typography variant="subtitle2" component="h5">
                  Assign Recruiters
                </Typography>
                <Stack sx={{ width: 300, marginTop: 1 }}>
                  <Select
                    value={state.select_recruiters}
                    name="select_recruiters"
                    label="Assign Recruiters"
                    onChange={(e) =>
                      setState({ ...state, select_recruiters: e.target.value })
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Olivia Rhye"}>Olivia Rhye</MenuItem>
                    <MenuItem value={"John"}>John</MenuItem>
                    <MenuItem value={"Mark"}>Mark</MenuItem>
                  </Select>
                </Stack>
                <br />
              </div>
            </Grid>
            <br />
            <Grid container>
              <Switch
              
                value={state.status || ""}
                onChange={(e) => {
                  var value = status === { status } ? "InActive" : "Active";
                  setState({ ...state, status: value });
                }}
              />
              <Typography>Requirement Status</Typography>
            </Grid>
            <br />
            <br />
            <br />
            <Stack spacing={2} direction="row">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                onClick={() => navigate(`/JobPostCandidateDetails/${id}`)}
              >
                Back
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onChange={handleInputChange}
                onClick={handleSubmit}
              >
                Update
              </Button>
            </Stack>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AdditionalDetails;
