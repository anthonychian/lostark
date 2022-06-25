import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
//import ImageListItemBar from '@mui/material/ImageListItemBar';

import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

import Modal from '@mui/material/Modal';

// import { Item } from '@mui/material';

// import ImageList from '@mui/material/ImageList';

// import ListSubheader from '@mui/material/ListSubheader';

import assassin from '../assets/assassinp.jpg'
import warrior from '../assets/warriorp.jpg'
import martialartist from '../assets/martialartistp.jpg'
import mage from '../assets/magep.jpg'
import gunner from '../assets/gunnerp.jpg'
import deathblade from '../assets/deathblade2.jpg'
import shadowhunter from '../assets/sh.jpg'
import sorceress from '../assets/sorceress.jpg'
import bard from '../assets/bard.jpg'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    boxContainer: {
        marginTop: '15vh',
        width: '100vw',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
        overflowX: 'hidden',
        fontSize: '100%'
    },
    buildText: {
        fontSize: '20px',
        paddingTop: '1em',
    },
    classText: {
        color: 'white',
        fontSize: '2rem',
        // display: 'flex',
        position: 'absolute',
        top: '80%',
        // left: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center'
    },
    subclass: {
        color: 'white',
        fontSize: '2rem',
        // display: 'flex',
        // left: '50%',
        marginTop: '-2em',
        textAlign: 'center'
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: 'auto',
        bgcolor: 'background.paper',
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    modalContent: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})


export default function Classes() {

    const classes = useStyles()

    const pulseDuration = 700

    const [assassinHover, setAssassinHover] = useState(false)
    const [warriorHover, setWarriorHover] = useState(false)
    const [mageHover, setMageHover] = useState(false)
    const [martialArtistHover, setMartialArtistHover] = useState(false)
    const [gunnerHover, setGunnerHover] = useState(false)

    const [assassinOpen, setAssassinOpen] = useState(false);
    const handleAssassinOpen = () => setAssassinOpen(true);
    const handleAssassinClose = () => setAssassinOpen(false);
    const [mageOpen, setMageOpen] = useState(false);
    const handleMageOpen = () => setMageOpen(true);
    const handleMageClosed = () => setMageOpen(false);

    function handleAssassinHover() {
        if (assassinHover) {
            setAssassinHover(false)
        }
        else {
            setAssassinHover(true)
        }
    } 
    function handleWarriorHover() {
        if (warriorHover) {
            setWarriorHover(false)
        }
        else {
            setWarriorHover(true)
        }
    } 
    function handleMageHover() {
        if (mageHover) {
            setMageHover(false)
        }
        else {
            setMageHover(true)
        }
    } 
    function handleMartialArtistHover() {
        if (martialArtistHover) {
            setMartialArtistHover(false)
        }
        else {
            setMartialArtistHover(true)
        }
    } 
    function handleGunnerHover() {
        if (gunnerHover) {
            setGunnerHover(false)
        }
        else {
            setGunnerHover(true)
        }
    } 


  return (
    <Box
        className={classes.boxContainer}
        noValidate
        autoComplete="off"
        backgroundColor="grey"
    >
    <Grid container spacing={1}>
        <Grid 
            item xs={2.4}
            onMouseEnter={()=> handleAssassinHover()}
            onMouseLeave={()=> handleAssassinHover()}
            onClick={handleAssassinOpen}
        >
            
            <Pulse spy={assassinHover} duration={pulseDuration}>
                <ImageListItem rows={1} cols={1}>
                    <img
                        src={`${assassin}?w=248&fit=crop&auto=format`}
                        // srcSet={`${assassin}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={'assassin'}
                        loading="lazy"
                    />
                    {/* <ImageListItemBar title={'assassin'} /> */}
                    {assassinHover === true && <Fade spy={assassinHover}>
                        <h1 className={classes.classText}>Asssassin</h1>
                    </Fade>}
                </ImageListItem>
            </Pulse>
            <Modal
                open={assassinOpen}
                onClose={handleAssassinClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <div className={classes.modalContent}>
                        <Link 
                            to={`/build/deathblade`}
                            style={{ color: 'black', textDecoration: 'none'}}
                        >
                            <div>
                                <img
                                    height={384}
                                    width={880}
                                    src={`${deathblade}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${deathblade}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'assassin'}
                                    loading="lazy"
                                />
                                <h1 className={classes.subclass}>deathblade</h1>
                            </div>
                        </Link>
                        <Link 
                            to={`/build/deathblade`}
                            style={{ color: 'black', textDecoration: 'none'}}
                        >
                            <div>
                                <img
                                    height={384}
                                    width={880}
                                    src={`${shadowhunter}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${shadowhunter}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'assassin'}
                                    loading="lazy"
                                />
                                <h1 className={classes.subclass}>shadowhunter</h1>
                            </div>
                        </Link>
                    </div>
                </Box>
            </Modal>
            
        </Grid>



        <Grid 
            item xs={2.4}
            onMouseEnter={()=> handleWarriorHover()}
            onMouseLeave={()=> handleWarriorHover()}
        >
            <Link 
                to={`/classes/warrior`}
                style={{ color: 'black', textDecoration: 'none'}}
            >
                <Pulse spy={warriorHover} duration={pulseDuration}>
                    <ImageListItem rows={1} cols={1}>
                        <img
                            src={`${warrior}?w=248&fit=crop&auto=format`}
                            // srcSet={`${warrior}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={'warrior'}
                            loading="lazy"
                        />
                        {/* <ImageListItemBar title={'warrior'} /> */}
                        {warriorHover === true && <Fade spy={warriorHover}>
                            <h1 className={classes.classText}>Warrior</h1>
                        </Fade>}
                    </ImageListItem>
                </Pulse>
            </Link>
        </Grid>

        
        <Grid 
            item xs={2.4}
            onMouseEnter={()=> handleMageHover()}
            onMouseLeave={()=> handleMageHover()}
            onClick={()=>handleMageOpen()}
        >
            <Pulse spy={mageHover} duration={pulseDuration}>
                <ImageListItem rows={1} cols={1}>
                    <img
                        src={`${mage}?w=248&fit=crop&auto=format`}
                        // srcSet={`${mage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={'mage'}
                        loading="lazy"
                    />
                    {/* <ImageListItemBar title={'mage'} /> */}
                    {mageHover === true && <Fade spy={mageHover}>
                        <h1 className={classes.classText}>Mage</h1>
                    </Fade>}
                </ImageListItem>
            </Pulse>

            <Modal
                open={mageOpen}
                onClose={handleMageClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <div className={classes.modalContent}>
                        <Link 
                            to={`/build/sorceress`}
                            style={{ color: 'black', textDecoration: 'none'}}
                        >
                            <div>
                                <img
                                    height={384}
                                    width={880}
                                    src={`${sorceress}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${sorceress}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'sorceress'}
                                    loading="lazy"
                                />
                                <h1 className={classes.subclass}>sorceress</h1>
                            </div>
                        </Link>
                        <Link 
                            to={`/build/bard`}
                            style={{ color: 'black', textDecoration: 'none'}}
                        >
                            <div>
                                <img
                                    height={384}
                                    width={880}
                                    src={`${bard}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${bard}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'bard'}
                                    loading="lazy"
                                />
                                <h1 className={classes.subclass}>bard</h1>
                            </div>
                        </Link>
                    </div>
                </Box>
            </Modal>
        </Grid>



        <Grid 
            item xs={2.4}
            onMouseEnter={()=> handleMartialArtistHover()}
            onMouseLeave={()=> handleMartialArtistHover()}
        >
            <Link 
                to={`/classes/martialartist`}
                style={{ color: 'black', textDecoration: 'none'}}
            >
                <Pulse spy={martialArtistHover} duration={pulseDuration}>
                    <ImageListItem rows={1} cols={1}>
                        <img
                            src={`${martialartist}?w=248&fit=crop&auto=format`}
                            // srcSet={`${martialartist}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={'martialartist'}
                            loading="lazy"
                        />
                        {/* <ImageListItemBar title={'martialartist'} /> */}
                        {martialArtistHover === true && <Fade spy={martialArtistHover}>
                            <h1 className={classes.classText}>Martial Artist</h1>
                        </Fade>}
                    </ImageListItem>
                </Pulse>
            </Link>
        </Grid>
        <Grid 
            item xs={2.4}
            onMouseEnter={()=> handleGunnerHover()}
            onMouseLeave={()=> handleGunnerHover()}
        >
            <Link 
                to={`/classes/gunner`}
                style={{ color: 'black', textDecoration: 'none'}}
            >
                <Pulse spy={gunnerHover}>
                    <ImageListItem rows={1} cols={1}>
                        <img
                            src={`${gunner}?w=248&fit=crop&auto=format`}
                            // srcSet={`${gunner}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={'gunner'}
                            loading="lazy"
                        />
                        {/* <ImageListItemBar title={'gunner'} /> */}
                        {gunnerHover === true && <Fade spy={gunnerHover}>
                            <div className={classes.classText}>Gunner</div>
                        </Fade>}
                    </ImageListItem>
                </Pulse>
            </Link>
        </Grid>
    </Grid>
   </Box>
  )
}
