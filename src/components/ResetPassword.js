import React, { useState } from 'react'
import { Box, TextField, Button, Alert} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    input: {
        color: 'black',
        backgroundColor: 'white',
    },
    button: {
        color: 'white',
        width: '100%'
    },
    form: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    container: {
        // padding: '2em',
        position: 'absolute',
        top: '35%',
        left: '50%',
        marginLeft: '-150px',
        maxWidth: '300px',
        // backgroundColor: 'green',
    },
    containerAlert: {
        // padding: '2em',
        position: 'absolute',
        top: '23%',
        left: '50%',
        marginLeft: '-150px',
        maxWidth: '350px',
        // backgroundColor: 'green',
    },
    boxContainer: {
        padding: '2em',
        // position: 'absolute',
        // top: '35vh',
        // left: '50%',
        // marginLeft: '-150px',
        // maxWidth: '300px',
        backgroundColor: '#1c1c1c',
    },
    alertBox: {
        padding: '0',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // position: 'absolute',
        // top: '25vh',
        // left: '50%',
        // marginLeft: '-150px',
        // width: '300px',
        // backgroundColor: 'yellow'
    },
    alert: {
        width: '100%',
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


export default function ResetPassword() {

    const { resetPassword } = useAuth()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const classes = useStyles()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await resetPassword(email)
            setMessage('Success! Check your email for further instructions.')
        }
        catch(error) {
            setError(error.toString().slice(25))
        }
        setLoading(false)
    }

    return (
        <>
            <Box className={classes.containerAlert}>
                <Box className={classes.alertBox}
                    backgroundColor="grey">
                    {error && <Alert className={classes.alert} variant="filled" severity="error">
                        {error}
                    </Alert>}
                    {message && <Alert className={classes.alert} variant="filled" severity="success">
                        {message}
                    </Alert>}
                </Box>
            </Box>

            <Box className={classes.container}>
                <Box className={classes.boxContainer}
                    component="form"
                    noValidate
                    autoComplete="off"
                    backgroundColor="grey"
                    onSubmit={handleSubmit}
                >
                    <section className={classes.form}>
                        <div className={classes.title}>
                            Reset Password
                        </div>
                        
                        <section className={classes.textContainer}>
                            {!message && <TextField
                                inputProps={{ className: classes.input }}
                                label="Email"
                                variant="filled"
                                color="primary"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />}
                        </section>
                        
                    <section className={classes.buttonContainer}>
                        {email !== '' || !message ? <LoadingButton
                            loading={loading}
                            type="submit"
                            className={classes.button}
                            size="large"
                            variant="contained">
                                Confirm
                        </LoadingButton> :
                        <Button
                            disabled
                            type="submit"
                            className={classes.button}
                            size="large"
                            variant="contained">
                                Confirm
                        </Button>}
                    </section>
                        <div className={classes.login}>
                            Go back to login? <Link to='/login'>Login</Link>
                        </div>
                        <div className={classes.login}>
                            Don't have an account? <Link to='/signup'>Sign Up</Link>
                        </div>
                    </section>
                </Box>
            </Box>
        </>
    )
}
