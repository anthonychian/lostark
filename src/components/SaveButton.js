import React, { useState } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'

import { connect } from 'react-redux'
import { onSaveBuild, onResetBuild } from '../redux/actions'


const useStyles = makeStyles({
    input: {
        color: "white",
    },
    boxContainer: {
        // marginTop: '10vh',
        // marginBottom: '-15vh',
        // paddingTop: '10vh',
        // boxSizing: 'border-box',
        height: '10vh',
        width: '100vw',
        // backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        width: '20vw',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        width: '10vw',
    }
    
})

function SaveButton({ tripods, onSave, onReset }) {

    const classes = useStyles()

    const [value, setValue] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(value, tripods)
        onSave(value, tripods)
    }

    return (
        <Box
            className={classes.boxContainer}
            component="form"
            noValidate
            autoComplete="off"
            backgroundColor="grey"
            onSubmit={handleSubmit}
        >
            <section className={classes.textContainer}>
                <TextField
                    inputProps={{ className: classes.input }}
                    label="Name"
                    color="primary" 
                    focused
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </section>
            <section className={classes.buttonContainer}>
                <Button
                    type="submit"
                    sx={{ color: 'white'}}
                    size="large"
                    variant="contained">
                        Save
                </Button>
            </section>
            <section className={classes.buttonContainer}>
                <Button
                    onClick={() => onReset()}
                    sx={{ color: 'white'}}
                    color="secondary"
                    size="large"
                    variant="contained">
                        Reset
                </Button>
            </section>
        </Box>
    )
}

const mapStateToProps = state => ({
    tripods: state.selectedTripods,
})


const mapDispatchToProps = dispatch => ({
    onSave: (name, tripod) => dispatch(onSaveBuild(name, tripod)),
    onReset: () => dispatch(onResetBuild())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)