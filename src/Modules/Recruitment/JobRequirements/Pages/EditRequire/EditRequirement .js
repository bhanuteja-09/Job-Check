import React from "react";
import { Container, InputAdornment, Typography ,Checkbox ,FormControlLabel ,FormHelperText } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormGroup } from '@mui/material';
import { Grid  } from "@mui/material";
import { Select } from "@mui/material";
import {TextareaAutosize} from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ToggleButton from '@mui/material/ToggleButton';
import { InputLabel } from "@mui/material";
import { Stack } from "@mui/material";
import { Autocomplete } from "@mui/material";
import requirementdata from './requirementdata';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Link} from "react-router-dom"

function EditRequirement()  {
  
  const steps = [
    'Job Details',
    'Candidate Details',
    'Additional Details',
  ];
  return (
    <div>
      <Container sx={{ margin: '10px', marginLeft: '15%' }}>
        <div >
          <h1>Edit Requirement</h1>
          <br /> 
          <Box sx={{ width: '100%',marginTop:10 }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box> <br /> 
          <Typography variant="subtitle2" component="h5">
              Title
            </Typography>
            <TextField
              variant="outlined"
              name="Requirement Title"
              placeholder="Eg: Software Engineer"
            /><br /> <br /> 
          <div className="choose">
          <Typography variant="subtitle2" component="h5">
              Prefill from other Requirement
            </Typography>
            <Stack spacing={2} sx={{ width: 300}}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Choose existing Requirement" />
                )}
                
              />
                <InputLabel >This will overwrite below values </InputLabel>
            </Stack>
          </div>
          <br /><br />

          <div className="contain">
            <Typography variant="h5" component="h5">
              Job Details
            </Typography><br />
            <Typography variant="subtitle2" component="h5">
              Job Title
            </Typography>

            <TextField id="outlined-basic" placeholder="Eg: Software Developer" variant="outlined" />
            <Typography
              variant="subtitle2"
              component="h5"
              sx={{
                marginTop: "0.5rem",
              }}
            >
              Employment Type
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                paddingRight: "10rem",
                width: "21rem",
                marginTop: "0.5rem",
              }}
              style={{
                  cursor:"pointer"
              }}>              
            </Select>
            <Typography variant="subtitle2" component="h5" sx={{
                marginTop:"1rem",
                marginBottom:"0.5rem"}}>Description</Typography>

            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Job Description will appear on your job post"
              style={{ width: 400, height:100 }}
            />
             <Typography variant="subtitle2" color={"gray"} >
              275 Characters left
            </Typography><br />
           <div classsName="select"> 
           
    <Grid  Container sx={{ display: 'flex'  }} >
      <Stack spacing={2} sx={{ width: 300, marginTop:-0 }}>
    <Autocomplete
      id="Choose existing Requirement"
      disableClearable
      options={requirementdata.map(
        (option) => option.requirementdata
      )}
      renderInput={(params) => (
        <TextField {...params} label="Normal Text" />
      )}
      
    />
  </Stack><br />
      <Grid marginLeft={4}>
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="Link" aria-label="underlined">
        <InsertLinkIcon />
      </ToggleButton>
      <ToggleButton value="List" aria-label="color">
        <FormatListBulletedIcon />
      </ToggleButton>
      <ToggleButton value="List">
        <FormatListNumberedIcon />
        </ToggleButton>
        </Grid></Grid>
    </div><br/>

    <Grid container sx={{m:1 ,  display: 'flex' }} columnSpacing={{sm:2}} >
            <Grid item className="main" >
            <Typography variant="subtitle2" component="h5">Currency</Typography>
              <Stack sx={{ width: 100 }}>
                <Autocomplete
                  id="Select Employment Type"
                  disableClearable
                  options={requirementdata.map(
                    (option) => option.requirementdata
                  )}
                  renderInput={(params) => (
                    <TextField {...params} label="INR" />
                  )}
                />
              </Stack>
            </Grid>

            <Grid item className="mainw" marginLeft={2} xs={2} sx={{ width: 500 }} >
            <Typography variant="subtitle2" component="h5">Minimum Salary</Typography>
              <TextField name="Minimum Salary" defaultValue="10,000" />
            </Grid>

            <Grid item className="mainw" xs={2}>
            <Typography variant="subtitle2" component="h5">Maximum Salary</Typography>
              <TextField
                name="Maximum Salary"
                defaultValue="10,000"
              />
            </Grid>           
          </Grid>
          <Grid sx={{m:1}}>

    <FormGroup aria-label="position" row>
      <FormControlLabel control={<Checkbox />} label="Show on job post" />
      <FormControlLabel  control={<Checkbox />} label="Variable Component" sx={{marginLeft:20}}/>
    </FormGroup>
    <FormGroup aria-label="position" row>
    <FormHelperText sx={{marginLeft:2}}>Candidates will be able to see the CTC</FormHelperText>
      <FormHelperText sx={{marginLeft:12.5}}>Salary can change based on incentives</FormHelperText>
      </FormGroup>
      </Grid>
        <div id="align">
    <Typography variant="subtitle2" sx={{
        marginTop:"1rem",
        marginRight:"25rem",
        marginBottom:"0.5rem"
    }} >
              Job Location
            </Typography>
                 
            </div>
            
            <div className="option">
          
            <TextField id="outlined-basic" placeholder="Eg: Bengaluru" variant="outlined" 
           InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>
            )         }}
            sx={{
                marginRight:"9rem"}}/>          
            
          </div><br/><br/><br/>
          <div>
          <Typography variant="subtitle2" component="h5">
              Industry
            </Typography>
            <Stack spacing={2} sx={{ width: 300, marginTop:1 }}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="FinTech" />
                )}           
              />
            </Stack><br/>
            <Typography variant="subtitle2" component="h5">
              Functional Area
            </Typography>
            <Stack spacing={2} sx={{ width: 300, marginTop:1 }}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Software Development" />
                )}           
              />
            </Stack><br/>
            <Typography variant="subtitle2" component="h5">
              Role
            </Typography>
            <Stack spacing={2} sx={{ width: 300, marginTop:1 }}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Software Engineer - I" />
                )}           
              />
            </Stack><br/>
            <Typography variant="subtitle2" component="h5">
              Vacancies Available
            </Typography>

            <Stack spacing={2} sx={{ width: 300, marginTop:1 }}>
              <Autocomplete
                id="Choose existing Requirement"
                disableClearable
                options={requirementdata.map(
                  (option) => option.requirementdata
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Vacancies" />
                )}                
            /> </Stack><br/><br/><br/><br/>
            <Stack spacing={2} direction="row">
    <Link to="/ViewAllRequirements"> <Button  variant="outlined">Update</Button> </Link> 
    <Link to="/Candidate-details" > <Button  variant="contained" endIcon={<ArrowForwardIosIcon />}>
        Candidate Details
      </Button>
      </Link>
    </Stack><br/><br/>
    </div></div>
          <div></div></div></Container> 
   </div>
  );
}
export default EditRequirement;
