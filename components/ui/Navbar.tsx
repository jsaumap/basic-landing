import React, { useContext } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { UIContext } from '../../context/ui';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
 import NextLink from 'next/link';
export const Navbar = () => {
     const { openSideMenu } = useContext(UIContext);
   return (
    <AppBar position='sticky' elevation={0} >
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref>
            <Typography variant='h5'>BooKingMe</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
