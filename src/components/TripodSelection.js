import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    box: {
        margin: '2em',
        width: 300,
        height: 600,
        backgroundColor: 'black',
        opacity: 0.9,
        color: 'white',
        '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
        },
    }
})

export default function TripodSelection({ tripod }) {

    const classes = useStyles()

    return (
        <>
            <Box className={classes.box}>
            </Box>
        </>
    )
}
