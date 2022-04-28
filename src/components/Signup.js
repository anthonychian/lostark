import React, { useState } from 'react'
import { Box, TextField, Button, Alert} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

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


export default function Signup() {

    const { signup } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const classes = useStyles()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await signup(email, password)
            navigate('/');
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
                        Sign Up
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
                    
                    {((password === passwordConfirm) || (password === '' || passwordConfirm === '')) ?
                    <section className={classes.textContainer}>
                        <TextField
                            inputProps={{ className: classes.input }}
                            label="Confirm password"
                            variant="filled"
                            color="primary"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value);
                            }}
                        />
                    </section> :
                    <section className={classes.textContainer}>
                        <TextField
                            inputProps={{ className: classes.input }}
                            error
                            helperText="Password does not match."
                            label="Confirm password"
                            variant="filled"
                            color="primary"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value);
                            }}
                        />
                    </section>}
                    
                    <section className={classes.buttonContainer}>
                    {((password === passwordConfirm) && (password !== '' && email !== '')) ?
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                sx={{ color: 'white'}}
                                size="large"
                                variant="contained">
                                    Sign Up
                            </LoadingButton> :
                            <Button
                                disabled
                                type="submit"
                                sx={{ color: 'white'}}
                                size="large"
                                variant="contained">
                                    Sign Up
                            </Button>}
                    </section>
                    <div className={classes.login}>
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </section>
                
            </Box>
        </>
    )
}
