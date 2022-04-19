import { HashLink as Link } from "react-router-hash-link";
import { Stack } from "@mui/material";


function NavigateBar() {
    return (
        <Stack sx={{display:"flex",
            flexDirection: "column",
            position: "fixed",
            right: 0,
            alignItems: "center",
            
            bgcolor:"white",
            height:"65%",
            width:"200px",
            padding: "15px 40px"
          }}>
            <nav>
            <Link to="#basic" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:250 }}>Basic Details</Link><br/>
            <Link to="#job" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:300}}>Job Details</Link><br/>
            <Link to="#candidate" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:350}}>Candidate Details</Link><br/>
            <Link to="#additional" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:400}}>Additional Details</Link><br/>
            </nav>
        </Stack>
    )
}

export default NavigateBar;