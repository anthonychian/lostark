import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import icon_1 from '../assets/icon1.webp'
import icon_2 from '../assets/icon2.webp'
import icon_3 from '../assets/icon3.webp'
import { onHoverTripod, onLeaveTripod } from '../redux/actions';

const useStyles = makeStyles({
    box: {
        // backgroundColor: 'red',
        textAlign: 'center',
        width: '100px',
        margin: 'auto',
        opacity: 0.9,
        color: 'white',
    },
    tripodContainer: {
        height: 700,
        width: 500,
        backgroundColor: 'black',
        // height: '100%',
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    level: {
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        // height: '33%',
        // border: '2px solid red',
        // backgroundColor: 'black'
    },
    tierAvatarContainer: {
        paddingTop: '1em',
        paddingBottom: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    avatar_t1: {
        cursor: 'pointer',
        filter: 'saturate(0%)',
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #4db8ff`
        },
    },
    avatar_t2: {
        cursor: 'pointer',
        filter: 'saturate(0%)',
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #00ff00`
        },
    },
    avatar_t3: {
        cursor: 'pointer',
        filter: 'saturate(0%)',
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #ffff00`,
            color: '#ffff00'
        },
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    nameContainer: {
        fontSize: '14px',
        display: 'flex',
        paddingTop: '1em',
        paddingBottom: '1em',
        justifyContent: 'center',
        alignContent: 'center',
    },
    levelContainer: {
        fontSize: '14px',
        display: 'flex',
        paddingBottom: '1em',
        justifyContent: 'center',
        alignContent: 'center',
    }
})

function Tripod({ tripod, onHover, onLeave }) {

    const classes = useStyles()

    return (
        
        <div className={classes.tripodContainer}>
            <div className={classes.tierAvatarContainer}>
                <Avatar
                    alt='icon_1'
                    src={icon_1}
                    sx={{ width: 40, height: 40 }}
                />
            </div>
            <div className={classes.level}>
                {tripod && tripod.level1.map(x => 
                    <Box key={x.name}className={classes.box}>
                        <div className={classes.avatarContainer} onMouseEnter={()=> onHover(x)} onMouseLeave={()=> onLeave()}  >
                            <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 64, height: 64 }}
                                className={classes.avatar_t1}
                            />
                        </div>
                        <div className={classes.nameContainer}>
                            <div>{x.name}</div>
                        </div>
                        <div className={classes.levelContainer}>
                            <div>Lv. {x.level}</div>
                        </div>
                    </Box>
                )}
            </div>
            <div className={classes.tierAvatarContainer}>
                <Avatar
                    alt='icon_2'
                    src={icon_2}
                    sx={{ width: 40, height: 40 }}
                />
            </div>
            <div className={classes.level}>
                {tripod && tripod.level2.map(x => 
                    <Box key={x.name} className={classes.box}>
                        <div className={classes.avatarContainer} onMouseEnter={()=> onHover(x)} onMouseLeave={()=> onLeave()}  >
                            <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 64, height: 64 }}
                                className={classes.avatar_t2}
                            />
                        </div>
                        <div className={classes.nameContainer}>
                            <div>{x.name}</div>
                        </div>
                        <div className={classes.levelContainer}>
                            <div>Lv. {x.level}</div>
                        </div>
                    </Box>
                )}
            </div>
            <div className={classes.tierAvatarContainer}>
                <Avatar
                    alt='icon_3'
                    src={icon_3}
                    sx={{ width: 40, height: 40 }}
                />
            </div>
            <div className={classes.level}>
                {tripod && tripod.level3.map(x => 
                    <Box key={x.name} className={classes.box}>
                        <div className={classes.avatarContainer} onMouseEnter={()=> onHover(x)} onMouseLeave={()=> onLeave()}  >
                        <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 64, height: 64 }}
                                className={classes.avatar_t3}
                            />
                        </div>
                        <div className={classes.nameContainer}>
                            <div>{x.name}</div>
                        </div>
                        <div className={classes.levelContainer}>
                            <div>Lv. {x.level}</div>
                        </div>
                    </Box>
                )}
             </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tripod: state.tripods.tripod,
})
const mapDispatchToProps = dispatch => ({
    onHover: (tripod) => dispatch(onHoverTripod(tripod)),
    onLeave: () => dispatch(onLeaveTripod()),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Tripod)