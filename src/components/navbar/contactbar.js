import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';


const ContactBar = () => {

  return (

    <Container maxWidth="xl">
            <Toolbar disableGutters sx={{py:2}}>
            
            

            <Grid container direction="row" justifyContent="space-between" style={{position: 'absolute', left: 0, bottom:'10%'}} sx={{fontFamily: 'Koulen', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Grid item>
                  <Grid container direction="row" style={{position: 'absolute', left: 0, bottom:0}}>
                    <Grid item>
                      <Typography variant="h5" sx={{fontFamily: 'Koulen', color: 'white'}}>Contact Me</Typography>
                    </Grid>
                    <Grid item sx={{px:5}}>
                      <Grid container direction="column" alignItems="flex-start">
                        <Typography sx={{fontFamily: 'Koulen', color: 'white'}}>Email: peter.kraloveckirchherr@gmail.com</Typography>
                        <Typography sx={{fontFamily: 'Koulen', color: 'white'}}>Phone: (708)-256-2750</Typography>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                </Grid>
                

                <Grid item>

                <IconButton target="_blank"href="https://www.facebook.com/peter.kraloveckirchherr">
                
                <FacebookIcon style={{color:'white'}} />
                </IconButton>
                <IconButton target="_blank"href="https://www.linkedin.com/in/peter-kralovec-kirchherr-29363683/">
                <LinkedInIcon style={{color:'white'}} />
                </IconButton>


                </Grid>
                
                
            </Grid>

            
            </Toolbar>
        </Container>


);
};
export default ContactBar;