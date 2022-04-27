import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import '../../../../../Assets/Styles/JobRequirementStats.css';

function ViewRequirementStats() {
    const {total} = useSelector((state)=>state.requirement)
    // console.log(total)
    const {totalDraft}=useSelector((state)=>state.draft)
    console.log(totalDraft)

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
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>{total}</Typography>
            </CardContent>
        </Card>
        <Card className='c' elevation={5}>
            <CardContent>
                <Typography variant="subtitle1" component="h5" style={{
                    color:"gray"
                }}>
                    Closed
                </Typography>
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>0</Typography>
            </CardContent>
        </Card>
        <Card className='c' elevation={5} >
            <CardContent >
                <Typography variant="subtitle1" component="h5" sx={{
                    color:"gray"
                }}>
                    Cancelled 
                </Typography>
                <Typography variant="h4" component="h4" sx={{display:'flex', justifyContent: 'top', top: -0}}>0</Typography>
            </CardContent>
        </Card>
        </div>
    </div>
        )
        }
    export default ViewRequirementStats;