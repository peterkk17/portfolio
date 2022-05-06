import React from 'react';
import Paper from '@mui/material/Paper';
import './pages.css';

import Image from '../data/background/wood-2.jpg';
import PapyrusImage from '../data/background/cream-background.jpg' // Import using relative path
import About from './about.js';
import Resume from './resume.js';
import Skills from './skills.js';
import Button from '@mui/material/Button';
import $ from 'jquery';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Headshot from '../data/pictures/Headshot.jpg';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ContactBar from '../components/navbar/contactbar.js';


const styles = {
  container: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

const paperStyles = {
  paperContainer: {
      backgroundImage: `url(${PapyrusImage})`
  }
};


const pages = [
  {
      label: 'About Me',
      link: "/about",
      class:".about"
  },
  {
      label: 'Resume',
      link: "/resume",
      class:".resume"
  },
  {
    label:"Skills",
    link: "/skills",
    class:".skills"
  },
  {
      label: 'Contact Me',
      link: "/contact",
      class:".contact"
  }
];




class Home extends React.Component {

constructor(props) {
    super(props);
    this.isButtonClicked = this.buttonClick.bind(this);
    this.state = {isButtonClicked: false};
}

buttonClick = val => {
  this.setState({isButtonClicked: true});
  console.log("Button is Clicked");
  
}

scrollToElement(el) {
  $(el.target.id)[0].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
});
} 




render() {


    return(
        
      <div className="main-page" style={styles.container}>
        
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: 'Koulen', display: { xs: 'none', md: 'flex' } }}
            >
                <Avatar sx={{ fontFamily: 'Koulen'}}>PKK</Avatar>
                
            </Typography>

            <Box style={{position: 'absolute', right: 0}} sx={{fontFamily: 'Koulen', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button onClick={this.scrollToElement}
                    key={page.label}
                    id={page.class}
                    sx={{ fontFamily: 'Koulen', my: 3, color: 'white', display: 'block' }}
                >{page.label}
                </Button>
                ))}
              
                <IconButton target="_blank"href="https://www.facebook.com/peter.kraloveckirchherr">
                
                <FacebookIcon style={{color:'white'}} />
                </IconButton>
                <IconButton target="_blank"href="https://www.linkedin.com/in/peter-kralovec-kirchherr-29363683/">
                <LinkedInIcon style={{color:'white'}} />
                </IconButton>
            </Box>

            
            </Toolbar>
        </Container>







        <Paper elevation={20} className="section" style={paperStyles.paperContainer}>
            <Grid className="section-portion"container  spacing={2}sx={{flexGrow:1}}>
                <Grid item xs={4}>
                    <Item>
                    <img className="headshot rcorners" src={Headshot} alt=""></img>
                    </Item>
                        
                </Grid>
                
                <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center" item xs={8}
                >

               
                    <Item>
                      
                      <Typography variant="h2" gutterBottom component="div" sx={{fontFamily: 'Koulen', color:"darkcyan"}}>
                          Peter Kralovec-Kirchherr
                      </Typography>

                     
                    
                    </Item>
                    <Item>
                    <Typography variant ="h4" gutterBottom component="div" sx={{fontFamily: 'Koulen'}}>
                        Welcome to my website. Feel free to roam about to learn more about me, from the personal to the professional, and everything in between!
                    </Typography>
                    </Item>
                    <Item>
                      
                            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{fontFamily: 'Koulen', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                <Button onClick={this.scrollToElement}
                                    key={page.label}
                                    id={page.class}
                                    sx={{ fontFamily: 'Koulen', my: 3, color: 'black', display: 'block', size:'large' }} style={{size:'medium'}}
                                >{page.label}
                                </Button>
                                ))}
                                <IconButton target="_blank"href="https://www.facebook.com/peter.kraloveckirchherr">
                                
                                <FacebookIcon style={{color:'black'}} />
                                </IconButton>
                                <IconButton target="_blank"href="https://www.linkedin.com/in/peter-kralovec-kirchherr-29363683/">
                                <LinkedInIcon style={{color:'black'}} />
                                </IconButton>
                            </Grid>
                       
                       
                    </Item>
                </Grid>
            </Grid>
            
            
            
        </Paper>








        

        <div className="about">
        <About/>
        </div>
        
        
        <div className="resume">
          <Resume />
        </div>

        <div className="skills">
          <Skills />
        </div>


        
        
        
        <ContactBar className="contact"/>

      </div>

    );

}



};

export default Home;


/*

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/