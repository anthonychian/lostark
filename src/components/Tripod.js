import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import icon_1 from '../assets/icon1.webp'
import icon_2 from '../assets/icon2.webp'
import icon_3 from '../assets/icon3.webp'
import { onClickTripod, onHoverTripod, onLeaveTripod } from '../redux/actions';

const useStyles = makeStyles({
    tripodContainer: {
        height: '60vh',
        width: 500,
        backgroundColor: 'black',
        
        // height: '100%',
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box: {
        // backgroundColor: 'red',
        textAlign: 'center',
        width: '100px',
        // height: '50px',
        margin: 'auto',
        color: 'white',
    },
    level: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        // height: '33%',
        // border: '2px solid red',
        // backgroundColor: 'black'
    },
    tierAvatarContainer: {
        // paddingTop: '1em',
        // paddingBottom: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },

    avatar_t1: {
        cursor: 'pointer',
        filter: 'saturate(0%)',

        overflow: 'hidden',
        position: 'relative',

        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #4db8ff`,

            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
        },
    },
    avatar_t1_selected: {
        overflow: 'hidden',
        position: 'relative',
        opacity: 1.0,
        borderRadius:' 50%',
        boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #4db8ff`,
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
        },
    },
    avatar_t2: {
        cursor: 'pointer',
        filter: 'saturate(0%)',

        overflow: 'hidden',
        position: 'relative',

        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #00ff00`,

            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
        },
    },
    avatar_t2_selected: {
        overflow: 'hidden',
        position: 'relative',
        opacity: 1.0,
        borderRadius:' 50%',
        boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #00ff00`,
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
        },
    },
    avatar_t3: {
        cursor: 'pointer',
        filter: 'saturate(0%)',

        overflow: 'hidden',
        position: 'relative',

        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            filter: 'saturate(100%)',
            opacity: 1.0,
            borderRadius:' 50%',
            boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #ffff00`,

            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
        },
    },
    avatar_t3_selected: {
        overflow: 'hidden',
        position: 'relative',
        opacity: 1.0,
        borderRadius:' 50%',
        boxShadow: `0 0 5px 1px #fff, 0 0 15px 10px #ffff00`,
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.5)',
            width: '60px',
            height: '100%',
            top: 0,
            fliter: 'blur(30px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '30px',
            height: '100%',
            top: 0,
            fliter: 'blur(5px)',
            transform: 'translateX(-100px) skew(-15deg)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.3s'
            },
            '&:after': {
                transform: 'translateX(300px) skew(-15deg)',
                transition: '1.0s'
            }
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
        // textAlign: 'center',
        // width: '100%'
    },
    levelContainer: {
        fontSize: '14px',
        display: 'flex',
        paddingBottom: '1em',
        justifyContent: 'center',
        alignContent: 'center',
    }
})

function Tripod({ current, tripod, tripodSelected, onHover, onLeave, onSelect}) {

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
                    <Box key={x.name} className={classes.box}>
                        <div className={classes.avatarContainer} 
                            onMouseEnter={()=> onHover(x)} 
                            onMouseLeave={()=> onLeave()} 
                            onClick={()=> { 
                                onSelect(current, x)
                        }}>
                            {tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 50, height: 50 }}
                                className={classes.avatar_t1_selected}
                            />}
                            {!tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 50, height: 50 }}
                                className={classes.avatar_t1}
                            />}
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
                        <div className={classes.avatarContainer} 
                            onMouseEnter={()=> onHover(x)} 
                            onMouseLeave={()=> onLeave()}
                            onClick={()=> {
                                onSelect(current, x)
                        }}>
                            {tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 50, height: 50 }}
                                className={classes.avatar_t2_selected}
                            />}
                            {!tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                                alt={x.name}
                                src={x.url} 
                                sx={{ width: 50, height: 50 }}
                                className={classes.avatar_t2}
                            />}
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
                        <div className={classes.avatarContainer} 
                            onMouseEnter={()=> onHover(x)} 
                            onMouseLeave={()=> onLeave()}
                            onClick={()=> {
                                onSelect(current, x)
                        }}>
                        {tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                            alt={x.name}
                            src={x.url} 
                            sx={{ width: 50, height: 50 }}
                            className={classes.avatar_t3_selected}
                        />}
                        {!tripodSelected.find(a => a.name === x.name && a.skillName === current) &&  <Avatar
                            alt={x.name}
                            src={x.url} 
                            sx={{ width: 50, height: 50 }}
                            className={classes.avatar_t3}
                        />}
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
    current: state.skillSelected,
    tripod: state.tripods.tripod,
    tripodSelected: state.selectedTripods,
})
const mapDispatchToProps = dispatch => ({
    onHover: (tripod) => dispatch(onHoverTripod(tripod)),
    onLeave: () => dispatch(onLeaveTripod()),
    onSelect: (skillName, tripod) => dispatch(onClickTripod(skillName, tripod)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Tripod)