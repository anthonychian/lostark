import React from 'react'
import deathblade from '../assets/deathblade2.jpg'
import deathbladelogo from '../assets/deathbladelogo.png'
import { makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';

const useStyles = makeStyles({
    banner: {
        transform: 'scaleX(-1)',
        left: '0',
        objectFit: 'cover',
        position: 'absolute',
        height: '100vh',
        width: '100vw'
    },
    header: {
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '2%',
        left: '49%',
        zIndex: 10,
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
            <div className={classes.header}>
                <img className={classes.logo} src={deathbladelogo} alt='deathblade_logo' />
                <div className={classes.title}>
                    Deathblade
                </div>
            </div>
            <img className={classes.banner} src={deathblade} alt='deathblade' />
        </>
    )
}
