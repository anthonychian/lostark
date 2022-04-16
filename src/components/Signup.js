import React, { useState } from 'react'
import { Box, TextField, Button} from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    input: {
        color: 'black',
        backgroundColor: 'white'
    },
    boxContainer: {
        // marginTop: '10em',
        position: 'absolute',
        top: '35vh',
        height: '30vh',
        left: '50%',
        marginLeft: '-200px',
        maxWidth: '400px',
        backgroundColor: '#1c1c1c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        height: '10vh',
        width: '20vw',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        width: '20vw',
        backgroundColor: '#1c1c1c',
    }
    
})


export default function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const classes = useStyles()

    function handleSubmit(event) {
        event.preventDefault()
        console.log('logging in')
    }

    return (
        <>
            <Box
                className={classes.boxContainer}
                component="form"
                noValidate
                autoComplete="off"
                backgroundColor="grey"
                onSubmit={handleSubmit}
            >
                <section className={classes.form}>
                    <section className={classes.textContainer}>
                        <TextField
                            inputProps={{ className: classes.input }}
                            label="Username"
                            variant="filled"
                            color="primary"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        
                    </section>
                    <section className={classes.textContainer}>
                        <TextField
                            inputProps={{ className: classes.input }}
                            label="Password"
                            variant="filled"
                            color="primary"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        
                    </section>
                    <section className={classes.buttonContainer}>
                        <Button
                            type="submit"
                            sx={{ color: 'white'}}
                            size="large"
                            variant="contained">
                                Sign Up
                        </Button>
                    </section>
                </section>
            </Box>
        </>
    )
}
