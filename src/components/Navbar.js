import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import { useAuth } from '../contexts/AuthContext'

const pages = ['Classes', 'Build', 'My Builds'];
// const pagesLoggedOut = ['Classes', 'Build'];

let settings = ['Profile', 'Logout'];

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

    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            settings[0] = currentUser.email
        }
    }, [currentUser])

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    async function handleLogout() {
        
        try {
            setError('')
            await logout()
            navigate('/login');
        }
        catch(error) {
            setError(error.toString().slice(25))
        }
    }

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

                    {<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
                                {page === 'My Builds' && currentUser &&
                                <Link to={`/mybuilds`} style={{ color: 'white', textDecoration: 'none'}}>{page}</Link>}
                            </Button>
                        ))} 
                        
                    </Box>}

                    <Box sx={{ flexGrow: 0 }}>

                        {currentUser && <Tooltip title="Open settings">
                            <AccountCircle onClick={handleOpenUserMenu}/>
                        </Tooltip>}
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
                        
                        {currentUser && <MenuItem key={'Profile'} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{currentUser.email}</Typography>
                        </MenuItem>}
                        {currentUser && <MenuItem key={'Logout'} onClick={handleLogout}>
                            <Typography textAlign="center">Logout</Typography>
                        </MenuItem>}

                        </Menu>
                        {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && !currentUser && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                    key='Login'
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={`/login`} style={{ color: 'white', textDecoration: 'none'}}>Login</Link>
                            </Button>
                        </Box>}
                        
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
                                        {page === 'My Builds' && currentUser &&
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
