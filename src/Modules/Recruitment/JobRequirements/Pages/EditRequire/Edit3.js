import { Container,Typography,Grid,Box,TextField,FormHelperText,Stack,Checkbox,Autocomplete,InputAdornment,Button,TextareaAutosize,FormControlLabel} from '@mui/material'
import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import requirementdata from './requirementdata';
import { Switch } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { Modal } from '@mui/material';
import Reimage from '../../../../../Assets/Images/Reimage.png';
// import '../../../../../Assets/Styles/editrequirements.css'
import {Link} from "react-router-dom"

const Edit3 = () => {
        const [toggle, setToggle] = useState(false);
      const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
      }
      const Steps = [
        'Job Details',
        'Candidate Details',
        'Additional Details',
      ];
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
  return (
    <div>
        <Container sx={{ margin: '10px', marginLeft: '15%' }} >
 
      <div >
          <h1>Edit Requirement</h1>
          <br /> 
      <Box sx={{ width: '100%',marginTop:10 }}>
      <Stepper activeStep={2} alternativeLabel>
        {Steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box><br />
    <Typography variant="h5" component="h5">Additional Details</Typography><br/>
            <Box sx={{ width: '1000%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Typography variant="subtitle2" component="h5">
              Contact Person
            </Typography>
            <TextField id="outlined-basic" placeholder="Eg: Software Developer" variant="outlined" /><br />        
        <Typography variant="subtitle2" component="h5"><br />              Phone Number
            </Typography>
            <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" />              
        <Typography variant="subtitle2" component="h5"><br />              Company Website
            </Typography>
            <TextField id="outlined-basic" placeholder="www.companyname.com" variant="outlined" /><br />
        <Typography variant="subtitle2" component="h5"><br />
              Company Name
            </Typography>
          <TextField id="outlined-basic" placeholder="Company Name" variant="outlined"
          InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>
            )         }}
          />
        </Grid>
      </Grid>
      <Grid item xs={6}><br />
      <Typography variant="subtitle2" component="h5">
               About Company
            </Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="A brief description about
              company"
              style={{ width: 400, height:100 }}
            />
             <Typography variant="subtitle2" color={"gray"} >
              275 Characters left
            </Typography>
      <FormControlLabel control={<Checkbox />} label="Show on job post" />
    <FormHelperText sx={{marginLeft:2}}>Candidates will be able to see the CTC</FormHelperText>
    </Grid>
    </Box><br/>
    <Grid item>
        <div className="choose">
          <Typography variant="subtitle2" component="h5">
              Assign Recruiters
            </Typography>
            <Stack spacing={2} sx={{ width:335, marginTop:-0 }}>
              <Autocomplete
                id="Choose from existing Questionnaires"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Select Recruiters" />
                )}                
              />
            </Stack>
          </div>
        </Grid>
                    <br/>                    
                 <Switch onClick={toggler}/>
                    {toggle ? <span> Requirement Active </span> : <span> Requirement In-Active </span> } <br/><br/><br/>

                    <Stack spacing={2} direction="row">
          <Link to="/Candidate-details" >  <Button  variant="text" startIcon={<ArrowBackIosIcon /> } >Back</Button></Link> 
      <Button variant="contained" onClick={handleOpen}>Update Requirement</Button>      
            <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}>
              <Box sx={{...style, width:400}}>
              <img src={Reimage} alt="logo" className="logo" />
                <h2 className="text">Update Requirement</h2>
                <p className="para">Do you wish to update requirement ?</p>
                <Grid Container className="cancel">
                  <Grid item className="main" sx={{marginLeft:2}}> <Button onClick={handleClose}>Cancel</Button></Grid>                  
                <Grid item className="main" sx={{marginLeft:18, marginTop:-4.5}}>
               <Link to="/ViewAllrequirements">  <Button color="primary" variant="contained" onClick={handleClose}>Update</Button></Link> 
                </Grid>
                </Grid>
              </Box>
            </Modal>
            </Stack><br/><br/>
                    <br/>
          </div>
      </Container>
    </div>
  )
}

export default Edit3;
