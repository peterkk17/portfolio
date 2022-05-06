import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { JoinRight } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import  './index.css';

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
    <AppBar position="static">
      <Container className="app-bar" maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link style={{textDecoration:"none", color:"white"}} to="/">
              Peter Kralovec-Kirchherr's Website
            </Link>
            
          </Typography>

          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Peter Kralovec-Kirchherr's Website
          </Typography>
          
          <Box style={{}} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              {pages.map((page) => (
                
                
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right" style={{flex:1}}>
                    <Link style={{textDecoration:"none", color:"white"}} to={page.link}>
                      {page.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box style={{position: 'absolute', right: 0}} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link style={{textDecoration:"none", color:"white"}} to={page.link}>
                      {page.label}
                    </Link>
              </Button>
            ))}
            <IconButton target="_blank"href="https://www.facebook.com/peter.kraloveckirchherr">
            
              <FacebookIcon />
            </IconButton>
            <IconButton target="_blank"href="https://www.linkedin.com/in/peter-kralovec-kirchherr-29363683/">
              <LinkedInIcon />
            </IconButton>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
//<Avatar alt="Remy Sharp">PKK</Avatar>

/*


<Box style={{position: 'absolute', right: 0}} sx={{ flexGrow: 1 }}>
            <Tooltip title="Open Navigation">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <DehazeIcon />
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration:"none", color:"black"}} to={page.link}>
                      {page.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>









          */