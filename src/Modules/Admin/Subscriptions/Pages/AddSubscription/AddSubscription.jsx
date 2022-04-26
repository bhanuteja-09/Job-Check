import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { addUsers } from "../Home/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Input, Modal, Switch } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Capture22 from "../../../../../Assets/Images/Capture22.PNG";
import Reimage from "../../../../../Assets/Images/Reimage.png";

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

function AddSubscription(props) {
  const navigate = useNavigate();
  const [pricing, setPricing] = useState("");
  const handleChange = (event) => {
    setPricing(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    Subscription: "",
    Status: "In Active",
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
    Status,
  } = state
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

  const { users } = useSelector((state) => state.data);

  const [popup, setPopup] = useState();

  const handleEnable = () => {
    handleOpen();
  };

  const handleOpen = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUsers(state));
    console.log(state);
    navigate("/SearchSubscription");
  };

  return (
    <Container sx={{ marginLeft: "8%" }}>
      <Typography paddingTop={4} variant="h4" gutterBottom component="div">
        Subscription Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography variant="h5" gutterBottom component="div">
            Basic Information
          </Typography>

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
                id="Premium"
                type="text"
                name="Subscription"
                value={state.Subscription}
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
          <Grid item sx={{ marginLeft: "60%" }}>
            <Typography variant="h6" gutterBottom component="div">
              Logo
            </Typography>
            <div>
              <Box sx={{ ...commonStyles }}>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />

                  <CloudUploadIcon sx={{ color: "blueviolet" }} />
                </label>
                <Typography variant="body2" gutterBottom fontWeight={"600"}>
                  <span style={{ color: "blueviolet" }}>Click to upload </span>
                  or drag and drop
                  <br /> SVG,PNG,JPG or GIF()
                </Typography>
              </Box>
            </div>
          </Grid>
          <Box
            sx={{
              width: 500,
              maxWidth: "50%",
            }}
            paddingTop={3}
            marginTop={-20}
            className="form2"
          >
            <label htmlFor="text">Description</label>
            <br />
            <TextField
              id="outlined-multiline-static"
              type="text"
              name="About"
              value={state.About}
              onChange={(e) => setState({ ...state, About: e.target.value })}
              placeholder="Description"
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
              value={state.Product}
              onChange={(e) => setState({ ...state, Product: e.target.value })}
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

              <TextField
                id="credit"
                value={state.BaseCredits}
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

              <TextField
                id="post"

                size="small"
                margin="dense"
                value={state.JobPosts}
                onChange={(e) =>
                  setState({ ...state, JobPosts: e.target.value })
                }
                fullWidth
              />
            </Box>
            <Box paddingLeft={4}>
              <label htmlFor="text">Candidate Profile Download</label>

              <TextField
                id="download"

                size="small"
                fullWidth
                margin="dense"
                value={state.Downloads}
                onChange={(e) =>
                  setState({ ...state, Downloads: e.target.value })
                }
              />
            </Box>
          </Box>
          <br />
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
              <Box>
                <InputLabel id="pricing">Pricing Type</InputLabel>

                <Select

                  label="Pricing"
                  size="small"
                  margin="dense"
                  fullWidth
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
              <Box paddingLeft={4}>
                <label htmlFor="text">Duration</label>

                <Select
                  id="duration"
                  placeholder="20"
                  select
                  size="small"
                  margin="dense"
                  fullWidth
                  value={state.Duration}
                  onChange={(e) =>
                    setState({ ...state, Duration: e.target.value })
                  }
                >
                  <MenuItem value={"2 Months"}>2 Months</MenuItem>
                  <MenuItem value={"4 Months"}>4 Months</MenuItem>
                  <MenuItem value={"6 Months"}>6 Months</MenuItem>
                  <MenuItem value={"8 Months"}>8 Months</MenuItem>
                  <MenuItem value={"10 Months"}>10 Months</MenuItem>
                </Select>
              </Box>
              <Box paddingLeft={4}>
                <label htmlFor="text">Price</label>

                <TextField
                  id="price"
                  margin="dense"

                  size="small"
                  fullWidth
                  value={state.Price || ""}
                  onChange={(e) => {
                    setState({ ...state, Price: e.target.value });
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <br />

        <Grid container>
          <Switch
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
          label="LastUpdated"
          type="date"
          name="LastUpdated"
          value={state.LastUpdated}
          onChange={(e) => setState({ ...state, LastUpdated: e.target.value })}
          variant="outlined"
          style={{ width: "15%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Box paddingTop={4} paddingBottom={6}>
          <div className="buttons col-xs-12">
            <Grid container>
              <Grid items sx={{ marginRight: "20px" }}>
                <Button variant="outlined" href="/SearchSubscription">
                  Close
                </Button>
              </Grid>

              <Grid items>
                <Button
                  style={{ marginLeft: "20px" }}
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    handleEnable();
                  }}
                >
                  Create Subscription
                </Button>
              </Grid>
            </Grid>
          </div>

          <Modal
            className="pop"
            hideBackdrop
            open={popup}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box
              sx={{
                ...style,
                width: 420,
                height: 300,
                borderRadius: 2,
              }}
            >
              <img
                style={{ marginLeft: "8rem" }}
                src={Reimage}
                alt="logoImage"
              />
              <h4 style={{ marginLeft: "5rem" }}>New Subscription</h4>
              <br></br>
              <br></br>
              <p style={{ marginLeft: "3rem" }}>
                Do you want to create Subscription ?
              </p>
              <Grid container>
                <Grid
                  item
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
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Box>
      </form>
    </Container>
  );
}

export default AddSubscription;
