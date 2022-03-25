import React from 'react'
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { Container } from '@material-ui/core';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Modal } from '@mui/material';
// import ElectricBoltIcon from "@mui/material"
// import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
// import "../../../../../Assets/Styles/ViewSubscription.css"
import "../../../../../../../Assets/Styles/ViewSingleSubs.css"
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';




const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: ${blue[500]};
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
);

const blue = {
    500: '#007FFF',
};

const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
};
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
const ViewSingleSubscription = (props) => {

    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

    const [disabled, setdisabled] = useState(true);

    const [ButtonText, setButtonText] = useState("Edit Subscriptions");

    const [open, setOpen] = useState(false);


    const handleClick = (text) => {
        setButtonText("Save Changes");              //Set EditSubscription button to Save Changes button
        setdisabled(false);                         //Disable Form Editing

        if (ButtonText == "Save Changes") {
            handleOpen();                           //Change EditSubs Button

        }

    }
    const handleOpen = () => {

        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };



    const blue = {
        100: '#DAECFF',
        200: '#99CCF3',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        100: '#E7EBF0',
        200: '#E0E3E7',
        300: '#CDD2D7',
        400: '#B2BAC2',
        500: '#A0AAB4',
        600: '#6F7E8C',
        700: '#3E5060',
        800: '#2D3843',
        900: '#1A2027',
    };

    const StyledButton = styled('button')(                  //Button Styles
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        min-height: calc(1.5em + 22px);
        min-width: 220px;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 0.75em;
        margin: 0.5em;
        padding: 10px;
        text-align: left;
        line-height: 1.5;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      
        &:hover {
          background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
          border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
      
        &.${selectUnstyledClasses.focusVisible} {
          outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
        }
      
        &.${selectUnstyledClasses.expanded} {
          &::after {
            content: '▴';
          }
        }
      
        &::after {
          content: '▾';
          float: right;
        }
        `,
    );

    const StyledListbox = styled('ul')(                         //List style
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        padding: 5px;
        margin: 10px 0;
        min-width: 320px;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 0.75em;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        overflow: auto;
        outline: 0px;
        `,
    );

    const StyledOption = styled(OptionUnstyled)(                //Popup Box style
        ({ theme }) => `
        list-style: none;
        padding: 8px;
        border-radius: 0.45em;
        cursor: default;
      
        &:last-of-type {
          border-bottom: none;
        }
      
        &.${optionUnstyledClasses.selected} {
          background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
          color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
        }
      
        &.${optionUnstyledClasses.highlighted} {
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
      
        &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
          background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
          color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
        }
      
        &.${optionUnstyledClasses.disabled} {
          color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
      
        &:hover:not(.${optionUnstyledClasses.disabled}) {
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
        `,
    );

    const StyledPopper = styled(PopperUnstyled)`                //Popup z index
        z-index: 1;
      `;

    const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
        const components = {
            Root: StyledButton,
            Listbox: StyledListbox,
            Popper: StyledPopper,
            ...props.components,
        };

        return <SelectUnstyled {...props} ref={ref} components={components} />;
    });

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
            width: '100%',
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


    return (                                                        //Return Function
        <Container className=''>

            <fieldset className='feild' disabled={disabled}>

                <Box className='main'>

                    <form className=''>
                        <Typography variant='h3'>
                            Subscription Details
                        </Typography>
                        <br></br>
                        <Typography variant='h4'>
                            Basic Information
                        </Typography>

                        <br></br>

                        <InputLabel htmlFor="bootstrap-input">
                            Name
                        </InputLabel>
                        <BootstrapInput defaultValue="Free" id="bootstrap-input" style={{ width: 500 }} />

                        <InputLabel htmlFor="bootstrap-input">
                            Description
                        </InputLabel>

                        <TextareaAutosize htmlFor="bootstrap-input"

                            minRows={3}
                            defaultValue="Serves basic needs of small-sized recruiting firm"


                            style={{ width: 500, height: 100, borderRadius: 5 }}
                        />


                        <Typography variant='h4'>
                            Product Details
                        </Typography>

                        <br></br>
                        <InputLabel htmlFor="bootstrap-input">
                            Product
                        </InputLabel>

                        <CustomSelect defaultValue={10}>
                            <StyledOption value={10}>Jobcheck</StyledOption>
                            <StyledOption value={20}></StyledOption>
                            <StyledOption value={30}></StyledOption>
                        </CustomSelect>
                        <br></br><br></br>
                        <Typography variant='h4'>
                            Package Specifications
                        </Typography>
                        <br></br>
                        <Grid container >
                            <Grid item >
                                <InputLabel htmlFor="bootstrap-input">
                                    Base Credits
                                </InputLabel>
                                <BootstrapInput value="1000" id="bootstrap-input" />
                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input">
                                    Job Post
                                </InputLabel>
                                <BootstrapInput value="20" id="bootstrap-input" />
                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input">
                                    Candidate Profile Downloads
                                </InputLabel>
                                <BootstrapInput value="20" id="bootstrap-input" />
                            </Grid>
                        </Grid>
                        <br></br>
                        <Typography variant='h4'>
                            Pricing
                        </Typography>
                        <br></br>
                        <Grid container>

                            <Grid item>
                                <InputLabel htmlFor="bootstrap-input">
                                    Pricing Type
                                </InputLabel>
                                <CustomSelect defaultValue={10}>
                                    <StyledOption value={10}>Jobcheck</StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                </CustomSelect>

                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input">
                                    Duration
                                </InputLabel>
                                <CustomSelect defaultValue={10}>
                                    <StyledOption value={10}>Select Pricing Type</StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                </CustomSelect>
                            </Grid>
                            <Grid item className='main'>
                                <InputLabel htmlFor="bootstrap-input">
                                    Price
                                </InputLabel>
                                <CustomSelect defaultValue={10}>
                                    <StyledOption value={10}>Duration</StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                    <StyledOption value={10}></StyledOption>
                                </CustomSelect>
                            </Grid>
                        </Grid>
                        <br></br>
                        <label>

                            <Grid container>
                                <SwitchUnstyled component={Root} {...label} />
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

                        <Grid container>

                            <Button color='' variant='contained' href='/SearchSubscription' >Close</Button>

                            <Grid item className='main'>
                                <Button className='main' color='primary' variant='contained' onClick={() => { handleClick() }}>{ButtonText}</Button>
                            </Grid>
                        </Grid>

                        <Modal className="pop"
                            hideBackdrop
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                {/* <ElectricBoltIcon className="ic" /> */}
                                <h2 >Update Subscription</h2>
                                <p>
                                    Do you want to save cahnges ?
                                </p>
                                <Grid container>
                                    <Grid item className='main'>
                                        <Button color='primary' variant='contained' onClick={handleClose}>Discard</Button>
                                    </Grid>
                                    <Grid item className='main'>
                                        <Button color='primary' variant='contained' href="/SearchSubscription">Update</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </form>
                </Box>
            </fieldset>
        </Container >
    )
}

export default ViewSingleSubscription
