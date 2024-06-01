import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 2 }}>
              Gerenciar de Projetos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;