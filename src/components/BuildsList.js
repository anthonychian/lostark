import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { onLoadBuild } from '../redux/actions'

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

function BuildsList({ listOfBuilds, onLoad }) {

    const classes = useStyles()

    return (
        <Box
            className={classes.boxContainer}
            noValidate
            autoComplete="off"
            backgroundColor="grey"
        >
            <ul>
                {listOfBuilds.map(build =>
                    <li className={classes.buildText} 
                        key={build.name} 
                        onClick={()=> onLoad(build.tripod)} 
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
    listOfBuilds: state.storedBuilds,
})


const mapDispatchToProps = dispatch => ({
    onLoad: (tripod) => dispatch(onLoadBuild(tripod)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(BuildsList)
