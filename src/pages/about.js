import React from 'react';
import Paper from '@mui/material/Paper';
import Image from '../data/background/cream-background.jpg';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import './pages.css';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
       
        
    }
};



class About extends React.Component {


render() {


    return(

        <Paper className="section" style={styles.paperContainer}>
                <Grid container direction="column" sx={{height:'100%', width:'100%'}}>
                    <Grid item>
                        <Grid container direction="row" justifyContent="space-evenly" sx={{py:4}}>
                            <Typography variant="h3" sx={{ fontFamily: 'Koulen', color:"darkcyan"}}>
                                Software Engineer
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h3" sx={{ fontFamily: 'Koulen', color:"darkmagenta"}}>
                                Pastor
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h3" sx={{ fontFamily: 'Koulen', color:"dodgerblue"}}>
                                Teacher
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h3" sx={{ fontFamily: 'Koulen', color:"crimson"}}>
                                Tutor
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justifyContent="space-evenly" >
                            <Typography variant="h4" sx={{ fontFamily: 'Koulen', color:"crimson"}}>
                                Husband
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h4" sx={{ fontFamily: 'Koulen', color:"dodgerblue"}}>
                                Dog Dad
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h4" sx={{ fontFamily: 'Koulen', color:"darkmagenta"}}>
                                Traveller
                            </Typography>
                            <Grid item container alignItems="center" justifyContent="center" sx={{width:"fit-content"}}>
                                <FiberManualRecordIcon />
                            </Grid>
                            <Typography variant="h4" sx={{ fontFamily: 'Koulen', color:"darkcyan"}}>
                                Woodworker
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <AllInclusiveIcon fontSize='large' />
                    </Grid>

                    <Grid item container direction="column" alignItems="center" justifyContent="space-evenly" xs={{width:'100%'}}>
                            <Grid item>
                                <Typography variant="h4" sx={{ fontFamily: 'Koulen'}}>
                                You Name it - I've done it!
                                </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography variant="h5" sx={{ fontFamily: 'Koulen', paddingTop:'2em'}}>
                                I have been enormously privileged to be able to work in so many different and fascinating fields.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" sx={{ fontFamily: 'Koulen', paddingTop:'2em'}}>
                                Being a minister and teacher has provided me with invaluable perspective
                                </Typography>
                                <Typography variant="h5" sx={{ fontFamily: 'Koulen'}}>
                                that I bring with me to any work that I do.
                                </Typography>
                            </Grid>
                            
                    </Grid>

                </Grid>
                

        </Paper>



    );

}



};

export default About;

/*
<Grid className="section headshot" container item direction="row" justifyContent="space-between">
                                <Grid item >
                                    <img src={FamilyPicture}></img>
                                </Grid>
                                <Grid item >
                                    <img src={FinnPicture}></img>
                                </Grid>
                            </Grid>

                            */