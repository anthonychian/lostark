import React from 'react'
import SkillTooltip from './SkillTooltip';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux'


const useStyles = makeStyles({
    outer: {
        backgroundColor: 'black',
        position: 'relative',
    },
    inner: {
        top: '20vh',
        left: '70vw',
        position: 'absolute',
    }
})

function Tooltip({ skill }) {

    const classes = useStyles()

    return (
        <div className={classes.outer}>
            <div className={classes.inner}>
                {skill &&<SkillTooltip skill={skill} />}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    skill: state.skills.skill,
})

export default connect(mapStateToProps)(Tooltip)

