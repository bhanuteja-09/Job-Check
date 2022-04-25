import { Card, CardContent, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCancel } from "../Redux/Actions/actions";
import '../../../../../Assets/Styles/ViewJobPostStatistics.css';

function ViewJobPostStatistics() {
    const dispatch = useDispatch();
    const { total } = useSelector((state) => state.Job);
    const { cancel } = useSelector((state) => state.Job);
    const { JobPosts } = useSelector((state) => state.Job)
    const inActive = JobPosts.filter((user) => user.status === "InActive");
    const inActiveCount = inActive.length;
    console.log("JobPostsInView" + JobPosts);


    useEffect(() => {
        dispatch(getCancel(inActiveCount))
    }, [cancel, JobPosts]);
    return (
        <div className='entire'>
            <div className="cards" >
                <Card className='c' elevation={5}>
                    <CardContent>
                        <Typography variant="subtitle1" component="h5" style={{
                            color: "gray"
                        }}>
                            Total
                        </Typography>
                        <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'top', top: -0 }}>{total}</Typography>
                    </CardContent>
                </Card>
                <Card className='c' elevation={5}>
                    <CardContent>
                        <Typography variant="subtitle1" component="h5" style={{
                            color: "gray"
                        }}>
                            Closed
                        </Typography>
                        <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'top', top: -0 }}>0</Typography>
                    </CardContent>
                </Card>
                <Card className='c' elevation={5} >
                    <CardContent >
                        <Typography variant="subtitle1" component="h5" sx={{
                            color: "gray"
                        }}>
                            Cancelled
                        </Typography>
                        <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'top', top: -0 }}>{cancel}</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default ViewJobPostStatistics;
