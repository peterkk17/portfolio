import React from 'react';
import Paper from '@mui/material/Paper';
import Image from '../data/background/cream-background.jpg'; // Import using relative path
import Timeline from '../components/timeline.js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from '@mui/material/ListItem';
import DownloadLink from "react-download-link";
import ResumeFile from '../data/pdf/Resume.pdf';
import './pages.css';


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
        
    }
};

/*
const resumeStyles = {
    container: {
        direction:"column",
        justifyContent:"center"
    }
};
*/

class Resume extends React.Component {




render() {


    return(
       
            <Paper className="section" style={styles.paperContainer}>
                    <Grid className="section-portion-2" container direction="column" justifyContent="center" alignItems="center" sx={{fontFamily: 'Koulen',flexGrow: 1, height:'100%', width:'100%', maxWidth:'100%', maxHeight:'100%'}} >
                        <Item item sx={{justifyContent:"center", fontFamily: 'Koulen'}}><Typography variant='h3'sx={{fontFamily: 'Koulen', color:'darkcyan'}}>My Journey</Typography></Item>
                            
                        <Item><Timeline /></Item>
                        
                    </Grid>
                    <Grid container justifyContent="flex-end" className="download-link"sx={{px:2}}>
                    <DownloadLink className="download-link"
                    variant="h3"
                    filename={ResumeFile}
                    label="Download Full Resume"
                    >
                    </DownloadLink>

                    </Grid>
                    

            </Paper>
        



    );

}



};

export default Resume;



