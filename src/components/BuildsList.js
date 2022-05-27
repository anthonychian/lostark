import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import { styled } from '@mui/material/styles';

import deathblade from '../assets/blade.jpg'
import sorceress from '../assets/sorc.jpg'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import { connect } from 'react-redux'
import { onLoadSkills, onLoadTripods } from '../redux/actions'

import { getDatabase, ref, query, onValue, equalTo, orderByChild } from "firebase/database";

import { useAuth } from '../contexts/AuthContext'

const useStyles = makeStyles({
    boxContainer: {
        marginTop: '30vh',
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

    useEffect(()=> {

    })

    

    return (
        <Box
            className={classes.boxContainer}
            noValidate
            autoComplete="off"
            backgroundColor="grey"
        >

            <ImageList sx={{ width: '50vw', height: 'auto' }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">My Builds</ListSubheader>
                </ImageListItem>
                {Object.entries(buildData).map(([ key, value ], i) => (
                    <Link to={`/build/${value.class}`} 
                        key={value.name}
                        style={{ color: 'black', textDecoration: 'none'}}
                    >
                        <ImageListItem
                            onClick={()=> {
                                onLoadTripods(value.tripods)
                                onLoadSkills(value.skills)
                            }}
                            key={value.name}>
                            {value.class === 'deathblade' && <img
                                src={`${deathblade}?w=248&fit=crop&auto=format`}
                                srcSet={`${deathblade}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={value.name}
                                loading="lazy"
                            />}
                            {value.class === 'sorceress' && <img
                                src={`${sorceress}?w=248&fit=crop&auto=format`}
                                srcSet={`${sorceress}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={value.name}
                                loading="lazy"
                            />}
                            <ImageListItemBar
                                title={value.name}
                                subtitle={'created by:' + value.author}
                            />
                        </ImageListItem>
                    </Link>
                ))}
            </ImageList>
            
        </Box>
    )
}


const mapDispatchToProps = dispatch => ({
    onLoadTripods: (tripod) => dispatch(onLoadTripods(tripod)),
    onLoadSkills: (skills) => dispatch(onLoadSkills(skills))
}) 

export default connect(null, mapDispatchToProps)(BuildsList)
