import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { Button, Container, FormControl, Switch, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Modal } from '@mui/material';
import "../../../../../../../Assets/Styles/ViewSingleSubs.css"
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { border, borderRadius } from '@mui/system';
import { FloatingLabel } from "react-dom"
import { Label } from '@mui/icons-material';







const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const ViewSingleSubscription = () => {

    const [isdisabled, setIsdisabled] = useState(true);

    const [buttonText, setButtonText] = useState("Edit Subscriptions");

    const [open, setOpen] = useState(false);

    const handleEnable = () => {
        setIsdisabled(false);

        setButtonText("Save Changes");


        if (buttonText == "Save Changes") {
            handleOpen();

        }

    }



    const handleOpen = () => {

        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };






    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };





    const BootstrapInput = styled(InputBase)(({ theme }) => ({          //Input Styles
        'label + &': {
            marginBottom: theme.spacing(4),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: '1px solid #ced4da',
            fontSize: 16,

            padding: '10px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),

            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));






    return (
        <Container >
            <FormControl disabled={isdisabled}>
                <Box className='main' >
                    <form >

                        <Typography variant='h3'>
                            Subscription Details
                        </Typography>
                        <br></br>
                        <Typography variant='h4'>
                            Basic Information
                        </Typography>
                        <br></br>
                        <br></br>

                        <InputLabel htmlFor="bootstrap-input" /> Name
                        <br></br>


                        <BootstrapInput defaultValue="Free" id="bootstrap-input" style={{ width: 500 }} />
                        <br></br>
                        <br></br>
                        <InputLabel htmlFor="bootstrap-input" />
                        Description
                        <br></br>


                        <BootstrapInput id="bootstrap-input" disabled={isdisabled}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px', width: '500px', borderRadius: '5px', border: '2px solid lightgrey' }}
                        />





                        <br></br>
                        <Typography variant='h4'>
                            Product Details
                        </Typography>
                        <br></br>
                        <br></br>
                        <InputLabel htmlFor="bootstrap-input" />
                        Product
                        <br></br>

                        <select disabled={isdisabled} className="form-select sel" >
                            <option selected>JobCheck</option>

                        </select>

                        <br></br>
                        <br></br>
                        <Typography variant='h4'>
                            Package Specifications
                        </Typography>
                        <br></br>
                        <br></br>
                        <Grid container >
                            <Grid item >
                                <InputLabel htmlFor="bootstrap-input" />
                                Base Credits
                                <br></br>
                                <BootstrapInput value="1000" id="bootstrap-input" />
                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input" />
                                Job Post
                                <br></br>
                                <BootstrapInput value="20" id="bootstrap-input" />
                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input" />
                                Candidate Profile Downloads
                                <br></br>
                                <BootstrapInput value="20" id="bootstrap-input" />
                            </Grid>
                        </Grid>
                        <br></br>
                        <Typography variant='h4'>
                            Pricing
                        </Typography>
                        <br></br>
                        <br></br>

                        <div style={{ display: 'flex' }} >
                            <div>
                                <InputLabel htmlFor="bootstrap-input" />
                                Pricing Type

                                <br></br>

                                <select disabled={isdisabled} className="form-select  " style={{ height: '45px' }} >
                                    <option className='sel' selected>Select Pricing Type</option>
                                    <option className='sel' value=""></option>

                                </select>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <InputLabel htmlFor="bootstrap-input" />
                                Duration
                                <br></br>
                                <select disabled={isdisabled} className="form-select  " style={{ height: '45px' }} >
                                    <option className='sel' selected>Select Duration</option>
                                    <option className='sel' value="1"></option>

                                </select>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <InputLabel htmlFor="bootstrap-input" />
                                Price
                                <br></br>
                                <BootstrapInput value="1000" id="bootstrap-input" />
                            </div>
                        </div>
                        <br></br>
                        <label>

                            <Grid container>
                                <Switch {...label} />

                                <Typography >
                                    Available For Purchase
                                    <p>
                                        <small>
                                            Subscription Status
                                        </small>
                                    </p>
                                </Typography>
                            </Grid>
                        </label>

                        <br></br>
                        <br></br>
                        <div>

                            <Button color="secondary" variant='contained' href='/SearchSubscription' >Close</Button>
                            <Button className='main' color='primary' variant='contained' onClick={() => { handleEnable() }}>{buttonText}</Button>

                        </div>

                        <Modal className="pop"
                            hideBackdrop
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 400, height: 200 }}>

                                <h2 >Update Subscription</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <p>
                                    Do you want to save cahnges ?
                                </p>
                                <Grid container>
                                    <Grid item className='mains'>
                                        <Button color='primary' variant='contained' onClick={handleClose}>Discard</Button>
                                    </Grid>
                                    <Grid item className='mains'>
                                        <Button color='primary' variant='contained' href="/SearchSubscription">Update</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </form>
                </Box>

            </FormControl>
        </Container >
    )
}

export default ViewSingleSubscription
