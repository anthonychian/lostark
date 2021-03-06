import React, { useState } from 'react'
import { Box, TextField, Alert} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    input: {
        color: 'black',
        backgroundColor: 'white',
    },
    button: {
        color: 'white',
        width: '100%'
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
        padding: '1em 0 1em 0'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        padding: '1.5em',
        width: 'auto'
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
    const navigate = useNavigate()

    const classes = useStyles()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            navigate('/classes');
        }
        catch(error) {
            setError(error.toString().slice(25))
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
                    {/* {(password !== '' && email !== '') ? */}
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                className={classes.button}
                                size="large"
                                variant="contained">
                                    Log In
                            </LoadingButton> 
                            {/* : <Button
                                disabled
                                type="submit"
                                className={classes.button}
                                size="large"
                                variant="contained">
                                    Log In
                            </Button>} */}
                    </section>
                    <div className={classes.login}>
                        <Link to='/forgotpassword'className={classes.login}>Forgot Password?</Link>
                    </div>
                    <div className={classes.login}>
                        Don't have an account? <Link to='/signup'>Sign Up</Link>
                    </div>
                </section>
                
            </Box>
        </>
    )
}
