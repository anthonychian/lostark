import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { onLoadSkills, onLoadTripods } from '../redux/actions'

const useStyles = makeStyles({
    boxContainer: {
        marginTop: '20vh',
        width: '100vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buildText: {
        fontSize: '20px',
        paddingTop: '1em',
    },
})

function BuildsList({ listOfTripods, listOfSkills, onLoadTripods, onLoadSkills}) {

    const classes = useStyles()

    return (
        <Box
            className={classes.boxContainer}
            noValidate
            autoComplete="off"
            backgroundColor="grey"
        >
            <ul>
                {listOfTripods.map(build =>
                    <li className={classes.buildText} 
                        key={build.name} 
                        onClick={()=> {
                            onLoadTripods(build.tripod)
                            onLoadSkills(listOfSkills.filter((skill) => skill.name === build.name)[0].skills)
                        }} 
                    >
                        <Link to={`/`} style={{ color: 'white', textDecoration: 'none'}}>
                            {build.name}
                        </Link>
                    </li>
                )}
            </ul>
        </Box>
    )
}


const mapStateToProps = state => ({
    listOfTripods: state.storedTripods,
    listOfSkills: state.storedSkills,
})


const mapDispatchToProps = dispatch => ({
    onLoadTripods: (tripod) => dispatch(onLoadTripods(tripod)),
    onLoadSkills: (skills) => dispatch(onLoadSkills(skills))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(BuildsList)
