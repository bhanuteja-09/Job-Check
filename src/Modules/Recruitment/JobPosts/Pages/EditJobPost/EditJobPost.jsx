import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleJobPost, updateJobPost } from "../Redux/Actions/actions";
import { Stack } from "@mui/material";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { InputLabel, TextareaAutosize, Grid } from "@mui/material";
import { FormGroup } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const EditJobPost = () => {
  const [state, setState] = useState({
    title: "",
    choose_existing_JobPost: "",
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
  });

  let { id } = useParams();
  const { JobPost } = useSelector((state) => state.Job);
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    title,
    job_title,
    vacancies,
    maximum_salary,
    minimum_salary,
    description,
  } = state;
  useEffect(() => {
    dispatch(getSingleJobPost(id));
  }, []);
  useEffect(() => {
    if (JobPost) {
      setState({ ...JobPost });
    }
  }, [JobPost]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const steps = ["Job Details", "Candidate Details", "Additional Details"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError("All fields are Mandatory");
    } else {
      dispatch(updateJobPost(state, id));
      setError("");
    }
  };

  return (
    <div>
      <Container sx={{ marginLeft: 30 }}>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          Edit JobPost
        </Typography>
        <Box sx={{ width: "100%", marginTop: 10 }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>{" "}
        <br /> <br />
        <form onSubmit={handleSubmit}>
          <Typography>Title</Typography>
          <TextField
            label="Title"
            marginTop={1}
            name="title"
            value={title}
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <Typography>PreFill from other JobPost</Typography>
          <Stack sx={{ width: 300, marginTop: 1 }}>
            <Select
              value={state.choose_existing_JobPost}
              label="choose_existing_JobPost"
              name="choose_existing_JobPost"
              onChange={(e) =>
                setState({
                  ...state,
                  choose_existing_Requirement: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Software Developer"}>
                Software Developer
              </MenuItem>
              <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
            </Select>
            <InputLabel>This will overwrite below values </InputLabel>
          </Stack>
          <br />
          <Typography variant="h5">Job Details</Typography>
          <br />
          <Typography>Job Title</Typography>
          <TextField
            label="Job Title"
            id="standard-basic"
            name="job_title"
            value={job_title}
            onChange={handleInputChange}
          />
          <Typography sx={{ marginTop: "0.5rem" }}>Employment Type</Typography>
          <Stack sx={{ width: 300, marginTop: 1 }}>
            <Select
              label="Type"
              value={state.employment_type}
              name="employment_type"
              onChange={(e) =>
                setState({ ...state, employment_type: e.target.value })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Full Time"}>Full Time</MenuItem>
              <MenuItem value={"Part Time"}>Part Time</MenuItem>
            </Select>
          </Stack>
          <br />
          <Typography sx={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
            Description
          </Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Job Description will appear on your job post"
            id="standard-basic"
            name="description"
            value={description}
            onChange={handleInputChange}
            style={{ width: 400, height: 100 }}
          />
          <Typography variant="subtitle2" color={"gray"}>
            275 Characters left
          </Typography>
          <br />
          <Grid>
            <Grid sx={{ display: "flex" }} columnSpacing={{ sm: 2 }}>
              <Stack sx={{ width: 100, marginTop: 1 }}>
                <Typography sx={{ marginTop: -1 }} component="h5">
                  Currency
                </Typography>

                <Select
                  value={state.currency}
                  name="currency"
                  label="currency"
                  onChange={(e) =>
                    setState({ ...state, currency: e.target.value })
                  }
                >
                  <MenuItem value={"INR"}>INR</MenuItem>
                  <MenuItem value={"USD"}>USD</MenuItem>
                </Select>
              </Stack>
              <br />
              <Grid marginLeft={5} xs={5}>
                <Typography variant="subtitle2" component="h5">
                  Minimum Salary
                </Typography>

                <TextField
                  sx={{ marginTop: 1 }}
                  label="minimum_salary"
                  type="number"
                  name="minimum_salary"
                  value={minimum_salary}
                  onChange={handleInputChange}
                  InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
              <Grid marginLeft={5} xs={2}>
                <Typography variant="subtitle2" component="h5">
                  Maximum Salary
                </Typography>

                <TextField
                  sx={{ marginTop: 1 }}
                  type="number"
                  label="maximum_salary"
                  name="maximum_salary"
                  value={maximum_salary}
                  onChange={handleInputChange}
                  InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </Grid>
            </Grid>
          </Grid>
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
          </Grid>{" "}
          <br />{" "}
          <div>
            <Typography sx={{ marginBottom: "0.5rem" }}>
              Job Location
            </Typography>
            <Stack sx={{ width: 300, marginTop: 1 }}>
              <Select
                value={state.job_location}
                name="job_location"
                label="job_location"
                onChange={(e) =>
                  setState({ ...state, job_location: e.target.value })
                }
              >
                <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                <MenuItem value={"Chennai"}>Chennai</MenuItem>
              </Select>
            </Stack>
            <br />
            <Typography component="h5">Industry</Typography>
            <Stack sx={{ width: 300, marginTop: 1 }}>
              <Select
                value={state.industry}
                name="industry"
                label="industry"
                onChange={(e) =>
                  setState({ ...state, industry: e.target.value })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Banking"}>Banking</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
              </Select>
            </Stack>
            <br />
            <Typography component="h5">Functional Area</Typography>
            <Stack sx={{ width: 300, marginTop: 1 }}>
              <Select
                value={state.functional_area}
                name="functional_area"
                label="functional_area"
                onChange={(e) =>
                  setState({ ...state, functional_area: e.target.value })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
              </Select>
            </Stack>
            <br />

            <Typography sx={{ marginBottom: 1 }} component="h5">
              Vacancies Available
            </Typography>
            <TextField
              sx={{ marginTop: 1.3 }}
              type="number"
              name="vacancies"
              label="vacancies"
              value={vacancies}
              defaultValue="1"
              onChange={handleInputChange}
              InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <br />
            <br />
            <br />
            <br />
            <Stack spacing={2} direction="row">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                onClick={() => navigate("/JobPost")}
              >
                Go Back
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
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => navigate(`/JobPostCandidateDetails/${id}`)}
              >
                Candidate Details
              </Button>
            </Stack>
            <br />
            <br />
          </div>
        </form>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default EditJobPost;
