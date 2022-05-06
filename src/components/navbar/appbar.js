import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';



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
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <Container maxWidth="xl">
            <Toolbar disableGutters>
            
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: 'Playfair Display', display: { xs: 'none', md: 'flex' } }}
            >
                <Avatar sx={{ fontFamily: 'Playfair Display'}}>PKK</Avatar>
                
            </Typography>

            <Box style={{position: 'absolute', right: 0}} sx={{fontFamily: 'Playfair Display', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ fontFamily: 'Playfair Display',my: 2, color: 'white', display: 'block' }}
                >
                    <Link style={{textDecoration:"none", color:"white"}} to={page.link}>
                        {page.label}
                        </Link>
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


);
};
export default ResponsiveAppBar;