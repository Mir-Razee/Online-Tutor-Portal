import React from "react";
import { Grid, Paper, Button } from "@mui/material";
import Container  from 'react-bootstrap/Container';
import CourseCard1 from "./CourseCard";
import CourseCard from "./../../../components/CourseCard/CourseCard";
import "./styles.css"


const myStyle = {
    // backgroundImage: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()",
    backgroundRepeat: 'no-repeat',
    width:'97.2%',
    height: '450px',
    color: 'white',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 67,
    //position:'absolute',
};

const Courselist=()=>{
    const [spacing, setSpacing] = React.useState(2);

    return(
        <>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
                <Grid item>
                  <Paper
                    sx={{
                      height: 140,
                      width: 200,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#e63946',
                    }}
                  >
                  <Container><h4>Put what u want</h4>
                    <hr/>
                    <div>Same here</div>
                  </Container>
                  </Paper>
                </Grid>
              <Grid item>
              <Grid item>
                <Paper
                  sx={{
                    height: 510,
                    width: 1116,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#457b9d',
                  }}>
                  <Container>
                    <h2>View Enrolled Courses</h2>
                            <hr/>
                    <div className="card" style={myStyle}>
                        <Container>
                        <div className="card-block">
                            <CourseCard1 />
                        </div>
                        </Container>
                    </div>
                  </Container>
                </Paper>
              </Grid>
              <br/>
              <Grid item>
              <Paper
                sx={{
                  height: 500,
                  width: 1116,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#457b9d',
                }}
              >
                <Container>
                <Container>
                <h2>View All Courses</h2>
                <hr/>
                <div className="card" style={myStyle}>
                  <Container>
                  <div className="card-block">
                      <CourseCard />
                  </div>
                   </Container>
              </div>
                </Container>
        </Container>
              </Paper>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
    </>
    )
}

export default Courselist;