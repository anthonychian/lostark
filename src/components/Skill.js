import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
// import SkillTooltip from './SkillTooltip';

import { connect } from 'react-redux'
import { onHoverSkill, onLeaveSkill, onClickSkill, onClickSelected } from '../redux/actions'

const useStyles = makeStyles({
    boxSelected: {
        width: '100%', 
        height: '100%',
        opacity: 0.9,
        color: 'white',
        position: 'relative',
        border: '2px solid #4db8ff',
    },
    box: {
        width: '100%', 
        height: '100%',
        // backgroundColor: 'red',
        opacity: 0.9,
        color: 'white',
        position: 'relative',
    },
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
    },
    icon: {
        fontSize: '20px',
        marginLeft: '1em',

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
    
    text: {
        fontSize: '20px',
        marginLeft: '0.5em',
    },
    tooltipContainer: {
        position: 'absolute',
        overflow: 'visible',
        width: '100px',
        height: '100px',
        top: '0',
        right: '0',
        zIndex: 10
    }

})

function Skill({ current, skill, onHover, onLeave, onClick, onClickSelected, tripods }) {

    const classes = useStyles()
     
    let currentlySelected = (current === skill.name)
           

    return (
        <ListItem key={skill.name} sx={{ height: '100px', width: '100%'}}>
            {currentlySelected && <Box className={classes.boxSelected} >
                <div style={{ width: '100%', height: '100%'}} onMouseEnter={()=> onHover(skill)} onMouseLeave={()=> onLeave()}  
                    onClick={()=> {
                        onClick(skill.tripod)
                        onClickSelected(skill.name)
                    }} >
                    <div className={classes.container}>
                        <div className={classes.icon}>
                            {skill.url && <img src={skill.url} width='60' height='60' alt={skill.name} />}
                        </div>
                        <div className={classes.text}>
                            {skill.name && <div>{skill.name}</div>}
                        </div>
                        <div className={classes.icon}>
                            {tripods[0] && <img src={tripods[0].url} width='60' height='60' alt={tripods[0].name} />}
                        </div>
                        <div className={classes.icon}>
                            {tripods[1] && <img src={tripods[1].url} width='60' height='60' alt={tripods[1].name} />}
                        </div> <div className={classes.icon}>
                            {tripods[2] && <img src={tripods[2].url} width='60' height='60' alt={tripods[2].name} />}
                        </div>
                    </div>
                </div>
            </Box>}
            {!currentlySelected && <Box className={classes.box} >
                <div style={{ width: '100%', height: '100%'}} onMouseEnter={()=> onHover(skill)} onMouseLeave={()=> onLeave()}  
                    onClick={()=> {
                        onClick(skill.tripod)
                        onClickSelected(skill.name)
                    }} >
                    <div className={classes.container}>
                        <div className={classes.icon}>
                            {skill.url &&<img src={skill.url} width='60' height='60' alt={skill.name} />}
                        </div>
                        <div className={classes.text}>
                            {skill.name && <div>{skill.name}</div>}
                        </div>
                    </div>
                </div>
            </Box>}
        </ListItem>
    )
}
const mapStateToProps = state => ({
    current: state.skillSelected,
    tripods: state.selectedTripods,
})


const mapDispatchToProps = dispatch => ({
    onHover: (skill) => dispatch(onHoverSkill(skill)),
    onLeave: () => dispatch(onLeaveSkill()),
    onClick: (tripod) => dispatch(onClickSkill(tripod)),
    onClickSelected: (name) => dispatch(onClickSelected(name))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Skill)