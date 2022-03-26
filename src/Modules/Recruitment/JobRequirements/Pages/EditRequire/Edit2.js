import { Typography,Box ,Grid,Stack, Autocomplete,TextField,TextareaAutosize,InputAdornment, Container,Button} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import requirementdata from './requirementdata';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import {Link} from "react-router-dom"

const Edit2 = () => {
  const Steps = [
    'Job Details',
    'Candidate Details',
    'Additional Details',
  ];
  return (
    <div>
      <Container sx={{ margin: '10px', marginLeft: '15%' }} >
      <div >
          <h1>Edit Requirement</h1>
          <br /> 
      <Box sx={{ width: '100%',marginTop:10 }}>
      <Stepper activeStep={1} alternativeLabel>
        {Steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box><br/>
              <div className="contain">
                <Typography variant="h5" component="h5">Candidate Details</Typography><br/>
                <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <Typography variant="subtitle2" component="h5">
                   Brief Candidate Description
                </Typography>
    
                <TextareaAutosize
                  aria-label="empty textarea" style={{ width: 400, height:100 }}
                  placeholder="Helps the algorithm recommend suitable
                   candidares for the requirement"
                //   style={{ width: "500", height:50 }}
                />
                 <Typography variant="subtitle2" color={"gray"} >
                  275 Characters left
                </Typography>
            </Grid><br /><br />
            <Grid item xs={6}>
            {/* <div className="choose"> */}
              <Typography variant="subtitle2" component="h5">
                  Educational Qualifications
                </Typography>
                <Stack spacing={2} sx={{ width:380, marginTop:-0 }}>
                  <Autocomplete
                    id="Choose from existing Questionnaires"
                    disableClearable
                    options={requirementdata.map(
                      (option) => option.requirementdata
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Eg: B.Tech (COmputer Science)" />
                    )}
                    
                  />
                </Stack>
            </Grid><br /><br />
    
            <Grid  sx={{ display: 'flex'  }} item xs={3}><br />
            <div className="choose">
              <Typography variant="subtitle2" component="h5">
                  Work Experience
                </Typography>
                <Stack spacing={2} sx={{ width:150, marginTop: 0 }}>
                  <Autocomplete
                    id="Choose from existing Questionnaires"
                    disableClearable
                    options={requirementdata.map(
                      (option) => option.requirementdata
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Minimum" />
                    )}
                    
                  />
                </Stack>
              </div>
            </Grid><br />
    
            <Grid item xs={6}>
            <div className="choose">
                <Stack spacing={1} sx={{ width:150, marginTop:2.8 ,marginLeft:-15}}>
                  <Autocomplete
                    id="Choose from existing Questionnaires"
                    disableClearable
                    options={requirementdata.map(
                      (option) => option.requirementdata
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Maximum" />
                    )}                    
                  />
                </Stack>
              </div>
            </Grid><br />    
            <Grid  item xs={6}><br />
            <Typography variant="subtitle2" component="h5">Must-have Keywords</Typography>
              <TextField id="outlined-basic" placeholder="Eg: IT Software-Middleware" variant="outlined"
              InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )         }}
              />
              <Typography variant="subtitle2" color={"gray"} >
                  Select upto 3
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="subtitle2" component="h5">Optional Keywords</Typography>
              <TextField id="outlined-basic" placeholder="Eg: Hadoop" variant="outlined"
              InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )         }}
              />
            </Grid><br />
    
            <Grid item xs={6}>
            <div className="choose">
              <Typography variant="subtitle2" component="h5">
                  Questionnaire
                </Typography>
                <Stack spacing={2} sx={{ width:380, marginTop:-0 }}>
                  <Autocomplete
                    id="Choose from existing Questionnaires"
                    disableClearable
                    options={requirementdata.map(
                      (option) => option.requirementdata
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Choose from existing Questionnaires" />
                    )}                    
                  />
                </Stack>
              </div>
            </Grid><br />    
          </Grid>
        </Box>
              </div><br/><br/>
              <Stack spacing={2} direction="row">
           <Link to="/EditRequirement" > <Button  variant="text" startIcon={<ArrowBackIosIcon /> } >Back</Button></Link> 

   <Link to="/ViewAllRequirements" >  <Button  variant="outlined">Update</Button></Link>
   <Link to="/Educational-Details"> <Button  variant="contained" endIcon={<ArrowForwardIosIcon />}>
        Educational Details
      </Button>
      </Link> 
    </Stack><br/><br/>
           </div>   </Container>
    </div>
  )
}

export default Edit2
