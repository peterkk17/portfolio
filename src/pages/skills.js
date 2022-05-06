import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from '../data/background/cream-background.jpg';
import SkillsTimeline from '../components/skillsTimeline.js';


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};


class Skills extends React.Component {


render() {


    return(

        <Paper className="section" style={styles.paperContainer}>
               <Grid className="section-portion-2" container direction="column" justifyContent="center" alignItems="center" sx={{fontFamily: 'Playfair Display',flexGrow: 1, height:'100%', width:'100%', maxWidth:'100%', maxHeight:'100%'}} >
                   <Grid item xs={{alignItems:"center"}}>
                       <Typography variant="h3" sx={{fontFamily: 'Koulen'}}>My Skills</Typography>

                   </Grid>
                    
                    
                    
                    <Grid className="full-width" item>
                    
                    <SkillsTimeline />
                    </Grid>
                    <Grid item>
                        <Typography variant='h5' sx={{fontWeight:'bold', fontFamily:'Koulen'}}>Additional Skills: Python, Node JS, JQuery, Apache, Agile, JIRA, Ruby </Typography>
                    </Grid>


                        
                   
                       

                    
                    
                     
                    
                        
                </Grid>
                
            </Paper>



    );

}



};

export default Skills;