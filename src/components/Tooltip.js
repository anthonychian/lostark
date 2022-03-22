import React from 'react'
import SkillTooltip from './SkillTooltip';
import TripodTooltip from './TripodTooltip';

import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    outer: {
        backgroundColor: 'black',
        position: 'relative',
    },
    skillInner: {
        // top: '20vh',
        // right: '77vw',
        position: 'fixed',
    },
    tripodInner: {
        // top: '20vh',
        // left: '77vw',
        top: 'auto',
        left: '77vw',
        position: 'fixed',
    }
})

function Tooltip({ skill, tripod }) {

    const classes = useStyles()

    return (
        <div className={classes.outer}>
            <div className={classes.skillInner}>
                {skill && <SkillTooltip skill={skill} />}
            </div>
            <div className={classes.tripodInner}>
                {tripod && <TripodTooltip tripod={tripod} />}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    skill: state.skills.skill,
    tripod: state.tripodTooltip.tripod,
})

export default connect(mapStateToProps)(Tooltip)

