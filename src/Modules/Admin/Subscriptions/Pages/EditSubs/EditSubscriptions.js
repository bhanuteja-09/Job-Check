import React from "react";

import {
    Grid,
    MenuItem,
    Switch,
    Stack,
    Typography,
    TextField,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom"
import PopUp from "../../../../Admin/Subscriptions/Pages/Home/Actions/AddSubsPopup"
import "../../../../../Assets/Styles/EditSubscriptions.css"


const products = [
    {
        value: "A",
        label: "JobCheck-1",
    },
    {
        value: "B",
        label: "JobCheck-2",
    },
    {
        value: "C",
        label: "JobCheck-3",
    },
    {
        value: "D",
        label: "JobCheck-4",
    },
];
const pricingTypes = [
    {
        value: "a",
        label: "Pricing type-1",
    },
    {
        value: "b",
        label: "pricing type-2",
    },
    {
        value: "c",
        label: "pricing type-3",
    },
];
const durations = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
];
const Input = styled("input")({
    display: "none",
});
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
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
        backgroundColor: purple[700],
    },
}));


function EditSubscriptions(props) {

    const [product, setProduct] = React.useState("B");
    const [price, setPrice] = React.useState("a");
    const [duration, setDuration] = React.useState("1");
    const [checked, setChecked] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setProduct(event.target.value);
    };

    const handleChange_1 = (event) => {
        setPrice(event.target.value);
    };

    const handleChange_2 = (event) => {
        setDuration(event.target.value);
    };

    const toggleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <form className="page-container">
                <Typography variant="h4" gutterBottom component="div">
                    Enter Details Of Subscription
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    Basic Information
                </Typography>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <p>Name</p>
                        <TextField
                            className="input"
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue="Premium"
                        />
                        <p>Description</p>
                        <TextField
                            className="input"
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Serve basics needs of a small-sized recruiting firm"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom component="div">
                            Logo
                        </Typography>
                        {/* <img src={logo} className="image" alt="logoImage" /> */}
                        <div>
                            <Box sx={{ ...commonStyles }}>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                    >
                                        <CloudUploadIcon />
                                    </IconButton>
                                </label>
                                <Typography variant="body2" gutterBottom>
                                    Click to upload or drag and drop SVG,PNG,JPG or GIF()
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
                <div className="mar">
                    <Typography variant="h5" gutterBottom component="div">
                        Product Details
                    </Typography>
                    <p>Product</p>
                    <TextField
                        id="outlined-select-currency"
                        select
                        value={product}
                        onChange={handleChange}
                        className="select"
                    >
                        {products.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="mar">
                    <Typography variant="h5" gutterBottom component="div">
                        Package Specifications
                    </Typography>
                    <Stack spacing={3} direction="row">
                        <Grid item xs={4}>
                            <p>Base Credits</p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                defaultValue="1000"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <p>Job Posts</p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                defaultValue="20"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <p>Candidate Profile Downloads</p>
                            <TextField
                                id="outlined-basic"
                                className="select"
                                variant="outlined"
                                defaultValue="30"
                            />
                        </Grid>
                    </Stack>
                </div>
                <div className="mar">
                    <Typography variant="h5" gutterBottom component="div">
                        Package Specifications
                    </Typography>
                    <Stack spacing={3} direction="row">
                        <Grid item xs={4}>
                            <p>Pricing Type</p>
                            <TextField
                                id="outlined-select-currency"
                                select
                                value={price}
                                onChange={handleChange_1}
                                className="select"
                            >
                                {pricingTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <p>Duration</p>
                            <TextField
                                id="outlined-select-currency"
                                select
                                value={duration}
                                onChange={handleChange_2}
                                className="select"
                            >
                                {durations.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <p>Price</p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                defaultValue="10000"
                            />
                        </Grid>
                    </Stack>
                </div>
                <div className="mar">
                    <Stack spacing={2} direction="row">
                        <Switch
                            checked={checked}
                            onChange={toggleChange}
                            color="secondary"
                            inputProps={{ "aria-label": "controlled" }}
                        />
                        <div>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Available for purchase
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Sibscription status
                            </Typography>
                        </div>
                    </Stack>
                </div>
                <div className="mar">
                    <div className="buttons col-xs-12">
                        <Stack spacing={1} direction="row">
                            <Button href="/SearchSubscription" variant="outlined" color="secondary">
                                Cancel
                            </Button>
                            <ColorButton variant="contained" onClick={togglePopUp}>
                                Save Changes
                            </ColorButton>
                        </Stack>


                        {isOpen && (
                            <PopUp
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
                                        <Link to="/SearchSubscription">
                                            <button className="btn td">Create</button>
                                        </Link>
                                    </div>
                                }
                                handleClose={togglePopUp}
                            />
                        )}
                    </div>

                </div>
            </form>
        </div>
    );
}
export default EditSubscriptions;
