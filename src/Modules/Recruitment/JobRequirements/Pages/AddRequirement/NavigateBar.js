import { HashLink as Link } from "react-router-hash-link";
import { Stack } from "@mui/material";


function NavigateBar() {
    return (
        <Stack sx={{display:"flex",
        flexDirection: 'column',
        position: 'fixed',
        right:150,
        bottom:400,
        top:120,
        alignItems: 'left',
        justifyContent:'start',
        backgroundSize:'cover',
        width:"100px",
        padding: "35px",
          }}>
              <div className="a">
            <nav >
            <Link to="#basic" smooth style={{textDecoration:"none", color:"Black",position:"fixed",}}>Basic Details</Link><br/>
            <Link to="#job" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:200}}>Job Details</Link><br/>
            <Link to="#candidate" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:250}}>Candidate Details</Link><br/>
            <Link to="#additional" smooth style={{textDecoration:"none", color:"Black",position:"fixed", top:300}}>Additional Details</Link><br/>
            </nav>
            </div>
        </Stack>
    )
}

export default NavigateBar;