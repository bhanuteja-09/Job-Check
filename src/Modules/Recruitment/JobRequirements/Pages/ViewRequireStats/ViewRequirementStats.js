import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
// import AddIcon from '@mui/icons-material/Add';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import SearchIcon from '@mui/icons-material/Search'
// import { TextField } from '@mui/material';
// import { InputAdornment } from '@mui/material';
import '../../../../../Assets/Styles/ViewJobPostStatistics.css';

function ViewRequirementStats() {
  return (
    <div className='entire'>
        <div className="cards" >
        <Card className='c' elevation={5}>
            <CardContent>
                <Typography variant="subtitle1" component="h5" style={{
                    color:"gray"
                }}>
                    Total
                </Typography>
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>2500</Typography>
            </CardContent>
        </Card>
        <Card className='c' elevation={5}>
            <CardContent>
                <Typography variant="subtitle1" component="h5" style={{
                    color:"gray"
                }}>
                    Closed
                </Typography>
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>15</Typography>
            </CardContent>
        </Card>
        <Card className='c' elevation={5} >
            <CardContent >
                <Typography variant="subtitle1" component="h5" sx={{
                    color:"gray"
                }}>
                    Cancelled 
                </Typography>
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>100</Typography>
            </CardContent>
        </Card>
        </div>
    </div>
        )
        }
    export default ViewRequirementStats;