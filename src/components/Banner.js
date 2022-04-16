import React from 'react'
import deathblade from '../assets/deathblade2.jpg'
import deathbladelogo from '../assets/deathbladelogo.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    banner: {
        transform: 'scaleX(-1)',
        objectFit: 'cover',
        position: 'absolute',
        height: '90vh',
        width: '100vw'
    },
    bannerContainer: {
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        zIndex: '-1',
    },
    banner2: {
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        minWidth: '50%',
        minHeight: '50%',

        pointerEvents: 'none'
    },
    header: {
        width: '100px',
        // height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '7%',
        placeSelf: 'center',
        left: '50%',
        marginLeft: '-50px',
        zIndex: 1,
        position: 'absolute',
    },
    logo: {
        height: '70px',
    },
    title: {
        color: 'white',
        fontSize: '30px',
    }
})

export default function Banner() {

    const classes = useStyles()

    return (
        <>
            <section className={classes.bannerContainer}>
                
                <img className={classes.banner2} src={deathblade} alt='deathblade' />
            </section>
            {/* <section className={classes.header}>
                <img className={classes.logo} src={deathbladelogo} alt='deathblade_logo' />
                <span className={classes.title}>
                    Deathblade
                </span>
            </section> */}
        </>
    )
}
