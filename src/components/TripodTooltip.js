import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    box: {
        margin: '2em',
        width: 300,
        height: 'auto',
        backgroundColor: 'black',
        opacity: 0.9,
        color: 'white',
        '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
        },
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 0 5px 0',

        backgroundColor: '#1b1b33',
        fontSize: '20px',
    },
    icon: {
        margin: '1em',
        display: 'flex',
        alignItems: 'center',
    },
    
    level: {
        paddingTop: '2em',
        margin: '1em',
        fontSize: '15px',
    },
    desc: {
        margin: '1em',
        fontSize: '15px',
        paddingBottom: '3em'
    },
})

export default function TripodTooltip({ tripod }) {
    console.log(tripod)
    const classes = useStyles()

    return (
        <>
            <Box className={classes.box}>
                <div style={{ width: '100%'}}>
                    <section className={classes.header}>
                        {tripod.name && <div>{tripod.name}</div>}
                    </section>
                    <section className={classes.icon}>
                        {tripod.url &&<img src={tripod.url} width='70' height='70' alt={tripod.name} />}
                    </section>

                    <section className={classes.level}>
                        Skill Lv. {tripod.level}
                    </section>

                    <section className={classes.desc}>
                        {tripod.desc && <div>
                            {tripod.desc.map((text, idx) => {   
                                if (text.type === 'regular') {
                                    return <span style={{ color: 'white'}} key={idx}>{text.text}</span>
                                }
                                if (text.type === 'stat') {
                                    return <span style={{ color: 'cyan'}} key={idx}>{text.text}</span>
                                }
                                if (text.type === 'time') {
                                    return <span style={{color: '#f0fc6d'}} key={idx}>{text.text}</span>
                                }
                                return ''
                            })}
                        </div>}
                    </section>

                </div>
            </Box>
        </>
    )
}
