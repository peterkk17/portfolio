import React from 'react';
import Paper from '@mui/material/Paper';
import Image from '../data/background/cream-background.jpg'; // Import using relative path
import './pages.css';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Headshot from '../data/pictures/Headshot.jpg';

import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';



const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

const commonStyles = {
    borderColor: 'black',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

const pages = [
    {
        label: 'About Me',
        link: "/about"
    },
    {
        label: 'Resume',
        link: "/resume"
    },
    
    {
        label: 'My Passions',
        link: "/passions"
    }
];

//font-family: 'Koulen', cursive;

//Muli


class Intro extends React.Component {

constructor(props) {
    super(props);
    let button = props.button;
    this.isButtonClicked = this.buttonClick.bind(this);
    this.state = {isButtonClicked: {button}};
}

buttonClick = val => {
    this.setState({isButtonClicked: true});
    console.log("Button is Clicked");
    
}


render() {
    //const isButtonClicked = this.state.isButtonClicked;
    return(

        <Paper elevation={20} className="section" style={styles.paperContainer}>
            <Grid className="section-portion" container  spacing={2}sx={{flexGrow:1}}>
                <Grid item xs={4}>
                    <Item>
                    <img className="headshot rcorners" src={Headshot}></img>
                    </Item>
                        
                </Grid>
                
                <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center" item xs={8}
                >

               
                    <Item>
                    <Typography variant="h2" gutterBottom component="div" sx={{fontFamily: 'Koulen'}}>
                        Peter Kralovec-Kirchherr
                    </Typography>
                    </Item>
                    <Item>
                    <Typography variant ="h4" gutterBottom component="div" sx={{fontFamily: 'Koulen'}}>
                        Welcome to my website. Feel free to roam about to learn more about me, from the personal to the professional, and everything in between!
                    </Typography>
                    </Item>
                    <Item>
                      
                            <Grid container direction="row" justifyContent="space-between"alignItems="center" sx={{fontFamily: 'Playfair Display', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                <Button onClick={this.props.onButtonClick}
                                    key={page.label}
                                    
                                    sx={{ fontFamily: 'Koulen',my: 3, color: 'black', display: 'block' }}
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



    );

}



};

export default Intro;