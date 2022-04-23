import React from 'react'
import { Link } from 'react-router-dom'
// import deathbladelogo2 from '../assets/deathbladelogo2.png'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const pages = ['Classes', 'Build', 'My Builds'];

let themeHeader = createTheme({
    palette: {
      primary: {
        main: '#1c1c1c',
      },
    },
})

const classes = {
  root: `header`,
}
const MyAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.header}`]: {
    backgroundColor: theme.palette.primary,
  },
}))



export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav>
            <ThemeProvider theme={themeHeader}>
            <MyAppBar position="fixed" color={classes.header} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    {/* <img src={deathbladelogo2} alt={'deathblade_logo'} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Lost Ark
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page === 'Classes' &&
                            <Link to={`/classes`} style={{ color: 'white', textDecoration: 'none'}}>{page}</Link>}
                            {page === 'Build' &&
                            <Link to={`/`} style={{ color: 'white', textDecoration: 'none'}}>{page}</Link>}
                            {page === 'My Builds' &&
                            <Link to={`/mybuilds`} style={{ color: 'white', textDecoration: 'none'}}>{page}</Link>}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                {page === 'Classes' &&
                                <Link to={`/classes`} style={{ color: 'white', textDecoration: 'none'}}>{page}</Link>}
                                {page === 'Build' &&
                                <Link to={`/`} style={{ color: 'black', textDecoration: 'none'}}>{page}</Link>}
                                {page === 'My Builds' &&
                                <Link to={`/mybuilds`} style={{ color: 'black', textDecoration: 'none'}}>{page}</Link>}
                               
                            </Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Lost Ark
                    </Typography>
                    </Toolbar>
                </Container>
            </MyAppBar>
            </ThemeProvider>
        </nav>
    )
}
