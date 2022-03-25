import React, { useState } from "react";
import "./AddSubscription.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
function AddSubscription() {
  const [pricing, setPricing] = useState("");
  const handleChange = (event) => {
    setPricing(event.target.value);
  };
  return (
    <Container>
      <Typography paddingTop={4} variant="h4" gutterBottom component="div">
        Enter details of Subscription
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
            Package Specifictaion
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
          <Stack spacing={2} direction="row">
            <Button className="btn1" variant="outlined">
              Cancel
            </Button>
            <Button href='/SearchSubscription' className="btn2" variant="contained">
              Create Subscription
            </Button>
          </Stack>
        </Box>
      </form>
    </Container>
  );
}

export default AddSubscription;