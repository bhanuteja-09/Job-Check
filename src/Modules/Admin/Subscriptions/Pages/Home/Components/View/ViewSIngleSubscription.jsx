import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Modal } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  addUsers,
  getSingleUser,
  updateSingleUser,
} from "../../Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Capture22 from "../../../../../../../Assets/Images/Capture22.PNG";
import Reimage from "../../../../../../../Assets/Images/Reimage.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const commonStyles = {
  display: "flex-column",
  justifyContent: "center",
  textAlign: "center",
  m: 1,
  border: 1,
  width: "20rem",
  height: "8rem",
  borderColor: "grey.500",
  borderRadius: 3,
};

const ViewSIngleSubscription = () => {
  const { id } = useParams();
  const { Subscription } = useSelector((state) => state.data);
  const [isdisabled, setIsdisabled] = useState(true);

  const [buttonText, setButtonText] = useState("Edit Subscriptions");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (Subscription) {
      setState({ ...Subscription });
    }
  }, [Subscription]);

  const handleEnable = () => {
    setIsdisabled(false);

    setButtonText("Save Changes");

    if (buttonText == "Save Changes") {
      handleOpen();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    Subscription: "",
    Status: "",
    BaseCredits: "",
    LastUpdated: "",
    Product: "",
    About: "",
    Actions: "",
    JobPosts: "",
    Downloads: "",
    PricingType: "",
    Price: "",
    Duration: ""
  });
  const {
    Status
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSingleUser(state, id));
    navigate("/SearchSubscription");
  };

  return (
    <Container>
      <Box
        sx={{
          margin: "70px",
          paddingLeft: "50px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography paddingTop={4} variant="h4" gutterBottom component="div">
            Subscription Details
          </Typography>

          <Box>
            <Typography variant="h5" gutterBottom component="div">
              Basic Information
            </Typography>
            <Grid container>
              <Grid item>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "50%",
                  }}
                  paddingTop={2}
                  className="form1 "
                >
                  <label htmlFor="text"> Name</label>

                  <br />
                  <Box>
                    <TextField
                      disabled={isdisabled}
                      type="text"
                      name="Subscription"
                      value={state.Subscription || ""}
                      onChange={(e) =>
                        setState({ ...state, Subscription: e.target.value })
                      }
                      variant="outlined"
                      size="small"
                      margin="dense"
                      fullWidth
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item sx={{ marginLeft: "70%" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Logo
                </Typography>
                <img
                  style={{ marginLeft: "22%" }}
                  src={Capture22}
                  alt="logoImage"
                />
                <div>
                  <Box sx={{ ...commonStyles }}>
                    <label htmlFor="icon-button-file">
                      <Input
                        disabled={isdisabled}
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />

                      <CloudUploadIcon sx={{ color: "blueviolet" }} />
                    </label>
                    <Typography variant="body2" gutterBottom fontWeight={"600"}>
                      <span style={{ color: "blueviolet" }}>
                        Click to upload{" "}
                      </span>
                      or drag and drop
                      <br /> SVG,PNG,JPG or GIF()
                    </Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: 500,
                maxWidth: "50%",
              }}
              paddingTop={3}
              marginTop={-35}
              className="form2"
            >
              <label htmlFor="text">Description</label>
              <br />
              <TextField
                disabled={isdisabled}
                type="text"
                name="About"
                value={state.About || ""}
                onChange={(e) => setState({ ...state, About: e.target.value })}
                multiline
                rows={4}
                margin="dense"
                fullWidth
              />
            </Box>
          </Box>
          <Box paddingTop={5}>
            <Box>
              <Typography variant="h5" gutterBottom component="div">
                Product Details
              </Typography>
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "20%",
              }}
              className="form3"
            >
              <label htmlFor="text">Product</label>
              <br />

              <Select
                disabled={isdisabled}
                value={state.Product || ""}
                onChange={(e) =>
                  setState({ ...state, Product: e.target.value })
                }
                label="Product"
                fullWidth
                size="small"
                margin="dense"
              >
                <MenuItem value={"Jobcheck"}>Jobcheck</MenuItem>
                <MenuItem value={"Pratian"}>Pratian</MenuItem>
              </Select>
            </Box>
            <br />
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom component="div">
              Package Specification
            </Typography>
            <Box
              sx={{
                width: 800,
                maxWidth: "50%",
                display: "flex",
              }}
              className="form4 "
            >
              <Box>
                <label htmlFor="text"> Base Credit</label>
                <br />
                <br />
                <TextField
                  disabled={isdisabled}
                  value={state.BaseCredits || ""}
                  type="number"
                  name="BaseCredits"
                  onChange={(e) =>
                    setState({ ...state, BaseCredits: e.target.value })
                  }
                  size="small"
                  margin="dense"
                  fullWidth
                />
              </Box>
              <Box paddingLeft={4}>
                <label htmlFor="text">Job Post</label>
                <br />
                <br />
                <TextField
                  disabled={isdisabled}
                  size="small"
                  margin="dense"
                  fullWidth
                  value={state.JobPosts || ""}
                  onChange={(e) => setState({ ...state, JobPosts: e.target.value })}
                />
              </Box>
              <Box paddingLeft={4}>
                <label htmlFor="text">Candidate Profile Downloads</label>
                <br />

                <TextField
                  size="small"
                  disabled={isdisabled}
                  fullWidth
                  margin="dense"
                  value={state.Downloads || ""}
                  onChange={(e) => setState({ ...state, Downloads: e.target.value })}
                />
              </Box>
            </Box>
            <br />
            <Grid container>
              <Box>
                <Typography variant="h5" gutterBottom component="div">
                  Pricing
                </Typography>
                <Box
                  sx={{
                    width: 800,
                    maxWidth: "50%",
                    display: "flex",
                  }}
                  className="form4 "
                >
                  <Grid item>
                    <Box>
                      <InputLabel>Pricing Type</InputLabel>

                      <Select
                        disabled={isdisabled}

                        label="Pricing"
                        fullWidth
                        size="small"
                        margin="dense"
                        value={state.PricingType || ""}
                        onChange={(e) =>
                          setState({ ...state, PricingType: e.target.value })
                        }
                      >
                        <MenuItem value={"1000"}>1000</MenuItem>
                        <MenuItem value={"2000"}>2000</MenuItem>
                        <MenuItem value={"3000"}>3000</MenuItem>

                      </Select>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box paddingLeft={4}>
                      <label htmlFor="text">Duration</label>

                      <Select
                        disabled={isdisabled}
                        select
                        size="small"
                        margin="dense"
                        fullWidth
                        value={state.Duration || ""}
                        onChange={(e) => setState({ ...state, Duration: e.target.value })}
                      >
                        <MenuItem value={"2 Months"}>2 Months</MenuItem>
                        <MenuItem value={"4 Months"}>4 Months</MenuItem>
                        <MenuItem value={"6 Months"}>6 Months</MenuItem>
                        <MenuItem value={"8 Months"}>8 Months</MenuItem>
                        <MenuItem value={"10 Months"}>10 Months</MenuItem>
                      </Select>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box paddingLeft={4}>
                      <label htmlFor="text">Price</label>

                      <TextField
                        disabled={isdisabled}
                        margin="dense"
                        size="small"
                        fullWidth
                        value={state.Price || ""}
                        onChange={(e) => setState({ ...state, Price: e.target.value })}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Box>
          <br />

          <Grid container>
            <Switch
              disabled={isdisabled}
              value={state.Status || ""}
              onChange={(e) => {
                var value = Status === "Active" ? "In Active" : "Active"
                setState({ ...state, Status: value })
              }
              }
            />

            <Typography>
              Available For Purchase
              <p>
                <small>Subscription Status</small>
              </p>
            </Typography>
          </Grid>
          <br />
          <TextField
            disabled={isdisabled}
            label="LastUpdated"
            type="date"
            name="LastUpdated"
            value={state.LastUpdated || ""}
            onChange={(e) =>
              setState({ ...state, LastUpdated: e.target.value })
            }
            variant="outlined"
            style={{ width: "15%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <br></br>
          <br></br>
          <div>
            <Button variant="outlined" href="/SearchSubscription">
              Close
            </Button>

            <Button
              style={{ marginLeft: "20px" }}
              color="secondary"
              variant="contained"
              onClick={() => {
                handleEnable();
              }}
            >
              {buttonText}
            </Button>
          </div>

          <Modal
            sx={{
              textAlign: "center",
              margin: "20px",
            }}
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 400, height: 300, borderRadius: 2 }}>
              <img style={{ margin: "0" }} src={Reimage} alt="logoImage" />

              <h4>Update Subscription</h4>
              <br></br>
              <br></br>
              <p>Do you want to save cahnges ?</p>
              <Grid container>
                <Grid
                  sx={{
                    paddingTop: "20px",
                    paddingLeft: "45px",
                  }}
                >
                  <Button variant="outlined" onClick={handleClose}>
                    Discard
                  </Button>
                </Grid>
                <Grid
                  item
                  sx={{
                    paddingTop: "20px",
                    paddingLeft: "45px",
                  }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </form>
      </Box>
    </Container>
  );
};

export default ViewSIngleSubscription;
