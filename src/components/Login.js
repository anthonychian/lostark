import React, { useState } from 'react'
import { Box, TextField, Button, Alert} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    input: {
        color: 'black',
        backgroundColor: 'white'
    },
    boxContainer: {
        padding: '2em',
        position: 'absolute',
        top: '35vh',
        left: '50%',
        marginLeft: '-150px',
        maxWidth: '300px',
        backgroundColor: '#1c1c1c',
    },
    form: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    alertBox: {
        padding: '1em',
        position: 'absolute',
        top: '25vh',
        left: '50%',
        marginLeft: '-150px',
        width: '300px',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: '25px',
    },
    login: {
        textAlign: 'center',
        color: 'white',
        fontSize: '16px',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        padding: '1.5em'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em',
        backgroundColor: '#1c1c1c',
    }
    
})


export default function Login() {

    const { login } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const classes = useStyles()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            .then(() => {
                console.log('success')
            })
        }
        catch(error) {
            setError('Failed to sign in')
            console.log('error')
        }
        setLoading(false)
    }

    return (
        <>
            <Box 
                className={classes.alertBox}
                backgroundColor="grey"
            >
                {error && <Alert variant="filled" severity="error">
                    {error}
                </Alert>}
            </Box>
            <Box
                
                className={classes.boxContainer}
                component="form"
                noValidate
                autoComplete="off"
                backgroundColor="grey"
                onSubmit={handleSubmit}
            >
                <section className={classes.form}>
                    <div className={classes.title}>
                        Log In
                    </div>
                    {/* <div style={{color: 'white'}}> 
                        {currentUser.email}
                    </div> */}
                    
                    
                    <section className={classes.textContainer}>
                        <TextField
                            inputProps={{ className: classes.input }}
                            label="Email"
                            variant="filled"
                            color="primary"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
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
                    {(password !== '' && email !== '') ?
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                sx={{ color: 'white'}}
                                size="large"
                                variant="contained">
                                    Log In
                            </LoadingButton> :
                            <Button
                                disabled={loading}
                                type="submit"
                                sx={{ color: 'white'}}
                                size="large"
                                variant="contained">
                                    Log In
                            </Button>}
                    </section>
                    <div className={classes.login}>
                        Don't have an account? <Link to='/signup'>Sign Up</Link>
                    </div>
                </section>
                
            </Box>
        </>
    )
}
