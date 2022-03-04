import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
// import SkillTooltip from './SkillTooltip';

import { connect } from 'react-redux'
import { onHoverSkill, onLeaveSkill } from '../redux/actions'

const useStyles = makeStyles({
    box: {
        width: '100%', 
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.9,
        color: 'white',
        position: 'relative',
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        fontSize: '20px',
        marginLeft: '1em',
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

function Skill({ skill, onHover, onLeave }) {

    const classes = useStyles()

    return (
        <ListItem key={skill.name} sx={{ height: '100px'}}>
            <Box className={classes.box} >
                <div style={{ width: '100%', height: '100%'}} onMouseEnter={()=> onHover(skill)} onMouseLeave={()=> onLeave()}  >
                    <section className={classes.container}>
                        <div className={classes.icon}>
                            {skill.url &&<img src={skill.url} width='70' height='70' alt={skill.name} />}
                        </div>
                        <div className={classes.text}>
                            {skill.name && <div>{skill.name}</div>}
                        </div>
                    </section>
                </div>
            </Box>
        </ListItem>
    )
}

const mapDispatchToProps = dispatch => ({
    onHover: (skill) => dispatch(onHoverSkill(skill)),
    onLeave: () => dispatch(onLeaveSkill())
})

export default connect(null, mapDispatchToProps)(Skill)