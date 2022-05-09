import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';

import { connect } from 'react-redux'
import { onLoadSkills, onLoadTripods } from '../redux/actions'

import { getDatabase, ref, query, onValue, equalTo, orderByChild } from "firebase/database";

import { useAuth } from '../contexts/AuthContext'

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

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}))
  

function BuildsList({ onLoadTripods, onLoadSkills}) {

    const { currentUser } = useAuth()

    const classes = useStyles()

    const [buildData, setBuildData] = useState([])

    useEffect(() => {
        const db = getDatabase();

        const buildsRef = query(ref(db, 'builds/'), orderByChild("author"), equalTo(currentUser.email))

        onValue(buildsRef, (snapshot) => {
            const data = snapshot.val();
            setBuildData(data)
        });
    }, [currentUser])

    

    return (
        <Box
            className={classes.boxContainer}
            noValidate
            autoComplete="off"
            backgroundColor="grey"
        >
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Avatar with text and icon
                </Typography>
                <Demo>
                    <List className={classes.list}>
                        {Object.entries(buildData).map(([ key, value ], i) =>
                            <Link to={`/`} 
                                key={value.name}
                                style={{ color: 'black', textDecoration: 'none'}}
                            >
                                <ListItemButton
                                    
                                    onClick={()=> {
                                        onLoadTripods(value.tripods)
                                        onLoadSkills(value.skills)
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                        <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        classes={{ primary: classes.text }}
                                        primary={value.name}
                                        secondary={'created by:' + value.author}
                                    />
                                </ListItemButton>
                            </Link>
                        )}
                    </List>
                </Demo>
            </Grid>
        </Box>
    )
}


// <ul>
//                 {listOfTripods.map(build =>
//                     <li className={classes.buildText} 
//                         key={build.name} 
//                         onClick={()=> {
//                             onLoadTripods(build.tripods)
//                             onLoadSkills(build.skills)
//                             // onLoadTripods(build.tripod)
//                             // onLoadSkills(listOfSkills.filter((skill) => skill.name === build.name)[0].skills)
//                         }} 
//                     >
//                         <Link to={`/`} style={{ color: 'white', textDecoration: 'none'}}>
//                             {build.name}
//                         </Link>
//                     </li>
//                 )}
//             </ul>

// const mapStateToProps = state => ({
//     listOfTripods: state.storedTripods,
//     listOfSkills: state.storedSkills,
// })


const mapDispatchToProps = dispatch => ({
    onLoadTripods: (tripod) => dispatch(onLoadTripods(tripod)),
    onLoadSkills: (skills) => dispatch(onLoadSkills(skills))
}) 

export default connect(null, mapDispatchToProps)(BuildsList)
