import React, { useState } from "react";
// import "../../../../../Assets/Styles/AddSubscription.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import PopUp from "../EditSubs/PopUp";
import AddSubsPopup from "../Actions/AddSubsPopup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

function AddSubscription(props) {
  const [pricing, setPricing] = useState("");
  const handleChange = (event) => {
    setPricing(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const togglePopUp = () => {
    setIsOpen(!isOpen);

  };
  return (
    <Container>
      <Typography paddingTop={4} variant="h4" gutterBottom component="div">
        Subscription Details
      </Typography>
      <form>
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
            <label for="text"> Name</label>

            <br />
            <Box>
              <TextField
                id="Premium"
                placeholder="Premium"
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "50%",
            }}
            paddingTop={3}
            className="form2"
          >
            <label for="text">Description</label>
            <br />
            <TextField
              id="outlined-multiline-static"
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
            <label for="text">Product</label>
            <br />
            <Select
              id="Product"
              label="Product"
              fullWidth
              size="small"
              margin="dense"
            ></Select>
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
              <label for="text"> Base Credit</label>

              <TextField
                id="credit"
                placeholder="1000"
                size="small"
                margin="dense"
                fullWidth
              />
            </Box>
            <Box paddingLeft={4}>
              <label for="text">Job Post</label>

              <TextField
                id="post"
                placeholder="20"
                size="small"
                margin="dense"
                fullWidth
              />
            </Box>
            <Box paddingLeft={4}>
              <label for="text">Candidate Profile Download</label>

              <TextField
                id="download"
                placeholder="20"
                size="small"
                fullWidth
                margin="dense"
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
                  id="pricing"
                  label="Pricing"
                  value={pricing}
                  size="small"
                  margin="dense"
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1000</MenuItem>
                  <MenuItem value={20}>2000</MenuItem>
                  <MenuItem value={30}>3000</MenuItem>
                </Select>
              </Box>
              <Box paddingLeft={4}>
                <label for="text">Duration</label>

                <TextField
                  id="duration"
                  placeholder="20"
                  select
                  size="small"
                  margin="dense"
                  fullWidth
                />
              </Box>
              <Box paddingLeft={4}>
                <label for="text">Price</label>

                <TextField
                  id="price"
                  margin="dense"
                  placeholder="1000"
                  size="small"
                  fullWidth
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingTop={4} paddingBottom={6}>
          <div className="buttons col-xs-12">
            <input onClick={() => history.push("/SearchSubscription")}
              type="button"
              className="btn btn-outline-secondary  t"
              value="Close"
            />

            <input
              type="button"
              className="btn btn-primary t"
              value="Create Subscription"
              onClick={togglePopUp}
            />

            {isOpen && (
              <AddSubsPopup
                content={
                  <div className="pop">
                    <svg
                      className="mb-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="purple"
                      class="bi bi-lightning-charge"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                    </svg>
                    <br></br>
                    <b className="mt-2">New Subscription </b>
                    <p className="mt-2 pb-3">
                      Do you want to create Subscription?
                    </p>
                    <button
                      className="btn btn-light tb "
                      onClick={props.handleClose}
                    >
                      Discard
                    </button>

                    <button onClick={() => history.push("/SearchSubscription")} className="btn  td">Create</button>

                  </div>
                }
                handleClose={togglePopUp}
              />
            )}
          </div>
        </Box>
      </form>
    </Container>
  );
}

export default AddSubscription;
