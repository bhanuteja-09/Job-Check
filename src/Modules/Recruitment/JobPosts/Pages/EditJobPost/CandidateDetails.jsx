import {
  Typography,
  Box,
  TextField,
  Grid,
  Stack,
  TextareaAutosize,
  Container,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleJobPost, updateJobPost } from "../Redux/Actions/actions";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const JobPostCandidateDetails = () => {
  const [state, setState] = useState({
    brief_candidate_description: "",
    educational_qualifications: "",
    minimum: "",
    maximum: "",
    must_have_keywords: "",
    optional_keywords: "",
    questionnaire: "",
  });
  const { minimum, maximum } = state;
  let { id } = useParams();
  const { user } = useSelector((state) => state.requirement);
  let navigate = useNavigate();
  const [setError] = useState("");
  const dispatch = useDispatch();
  const { brief_candidate_description } = state;
  useEffect(() => {
    dispatch(getSingleJobPost(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const steps = ["Job Details", "Candidate Details", "Additional Details"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brief_candidate_description) {
      setError("All fields are Mandatory");
    } else {
      dispatch(updateJobPost(state, id));
      // navigate("/Requirements");
      setError("");
    }
  };
  return (
    <div>
      <Container sx={{ margin: "10px", marginLeft: "15%" }}>
        <div>
          <h1>Edit Requirement</h1>
          <Box sx={{ width: "100%", marginTop: 15 }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <br /> <br />
          <form onSubmit={handleSubmit}>
            <div>
              <Typography variant="h5" component="h5">
                Candidate Details
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{ marginTop: "1rem", marginBottom: "0.5rem" }}
                    >
                      Description
                    </Typography>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="Job Description will appear on your job post"
                      id="standard-basic"
                      name="brief_candidate_description"
                      value={brief_candidate_description}
                      onChange={handleInputChange}
                      style={{ width: 400, height: 100 }}
                    />
                    <Typography variant="subtitle2" color={"gray"}>
                      275 Characters left
                    </Typography>
                    <br />{" "}
                  </Grid>
                  <br />
                  <br />
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" component="h5">
                      Educational Qualifications
                    </Typography>
                    <Stack sx={{ width: 300, marginTop: 1 }}>
                      <Select
                        value={state.educational_qualifications}
                        name="educational_qualifications"
                        onChange={(e) =>
                          setState({
                            ...state,
                            educational_qualifications: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
                        <MenuItem value={"BE"}>BE</MenuItem>
                      </Select>
                    </Stack>
                    <br />
                  </Grid>
                  <br />
                  <br />

                  <Grid item xs={3}>
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

                  <Grid item xs={6}>
                    <div className="choose">
                      <Stack spacing={2} sx={{ width: 150, marginTop: 4 }}>
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
                    <Typography>Must-Have Keywords</Typography>
                    <Stack sx={{ width: 300, marginTop: 1 }}>
                      <Select
                        value={state.must_have_keywords}
                        name="must_have_keywords"
                        onChange={(e) =>
                          setState({
                            ...state,
                            must_have_keywords: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Human Resources"}>
                          Human Resources
                        </MenuItem>
                        <MenuItem value={"IT"}>IT</MenuItem>
                      </Select>
                    </Stack>
                    <br />

                    <Typography variant="subtitle2" color={"gray"}>
                      Select upto 3
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Optional Keywords</Typography>
                    <Stack sx={{ width: 300, marginTop: 1 }}>
                      <Select
                        value={state.optional_keywords}
                        name="optional_keywords"
                        onChange={(e) =>
                          setState({
                            ...state,
                            optional_keywords: e.target.value,
                          })
                        }
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
                    </Stack>
                    <br />
                  </Grid>
                  <br />

                  <Grid item xs={6}>
                    <div>
                      <Typography component="h5">Questionnaire</Typography>
                      <Stack sx={{ width: 300, marginTop: 1 }}>
                        <Select
                          value={state.questionnaire}
                          name="questionnaire"
                          onChange={(e) =>
                            setState({
                              ...state,
                              questionnaire: e.target.value,
                            })
                          }
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
                      </Stack>
                      <br />
                    </div>
                  </Grid>
                  <br />
                </Grid>
              </Box>
            </div>
            <br />
            <br />
            <Stack spacing={2} direction="row">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                onClick={() => navigate("/editrequirement/:id")}
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
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => navigate(`/AdditionalDetails/${user.id}`)}
              >
                Educational Details
              </Button>
            </Stack>
            <br />
            <br />
          </form>
        </div>{" "}
      </Container>
    </div>
  );
};

export default JobPostCandidateDetails;
