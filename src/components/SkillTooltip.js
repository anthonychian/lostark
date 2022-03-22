import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    box: {
        margin: '2em',
        paddingBottom: '1em',
        width: 300,
        height: 'auto',
        backgroundColor: 'black',
        opacity: 0.9,
        color: 'white',
        '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
        },
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 0 5px 0',

        backgroundColor: '#1b1b33',
        fontSize: '20px',
    },
    icon: {
        margin: '1em',
        display: 'flex',
        alignItems: 'center',
    },
    type: {
        marginLeft: '0.5em',
        paddingTop: '0.5em',
        lineHeight: '1.3em',
    },
    level: {
        paddingTop: '2em',
        margin: '1em',
        fontSize: '15px',
    },
    desc: {
        margin: '1em',
        fontSize: '15px',
    },
    details: {
        color: 'orange',
        margin: '1em',
        fontSize: '15px',
    },
    tripodDetails: {
        display: 'flex',
        paddingLeft: '1em'
    },
    tripodNameLevelContainer: {
        paddingLeft: '1em',
    },
    tripodName: {
        color: 'orange',
    },
    tripodLevel: {
        color: 'gold'
    }
})

function SkillTooltip({ skill, tripods }) {

    const classes = useStyles()

    return (
        <>
            <Box className={classes.box}>
                <div style={{ width: '100%'}}>
                    <section className={classes.header}>
                        {skill.name && <div>{skill.name}</div>}
                    </section>
                    <section className={classes.icon}>
                        {skill.url &&<img src={skill.url} width='70' height='70' alt={skill.name} />}
                        <section className={classes.type}>
                            {skill.type && <div>
                                {skill.type === 'Normal' && <div style={{color: '#f0fc6d'}}>
                                    {skill.type}
                                </div>}
                                {(skill.type === 'Combo' || skill.type === 'Charge') && <div style={{color: 'cyan'}}>
                                    {skill.type}
                                </div>}
                                {skill.type === 'Chain' && <div style={{color: '#4044f7'}}>
                                    {skill.type}
                                </div>}
                                {skill.type === 'Holding' && <div style={{color: 'green'}}>
                                    {skill.type}
                                </div>}
                            </div>}
                            {skill.skill_type && <div>
                                {skill.skill_type === 'Awakening Skill' && <div style={{color: 'red'}}>
                                    {skill.skill_type}
                                </div>}
                                {skill.skill_type === '[Normal Skill]' && <div style={{color: 'white'}}>
                                    {skill.skill_type}
                                </div>}
                            </div>}
                            
                            {skill.cooldown && <div>{`Cooldown ${skill.cooldown}s`}</div>}
                        </section>
                    </section>

                    <section className={classes.level}>
                        Skill Lv. 1
                        {skill.mpcost && <div>{`MP ${skill.mpcost} Consumption`}</div>}
                    </section>

                    <section className={classes.desc}>
                        {skill.desc && <div>
                            {skill.desc.map((text, idx) => {   
                                if (text.type === 'regular') {
                                    return <span style={{ color: 'white'}} key={idx}>{text.text}</span>
                                }
                                if (text.type === 'dmg') {
                                    return <span style={{ color: 'orange'}} key={idx}>{text.text}</span>
                                }
                                if (text.type === 'dist' || text.type === 'time') {
                                    return <span style={{color: '#f0fc6d'}} key={idx}>{text.text}</span>
                                }
                                if (text.type === 'dot') {
                                    return <span style={{color: 'cyan'}} key={idx}>{text.text}</span>
                                }
                                return ''
                            })}
                        </div>}
                    </section>

                    <section className={classes.details}>
                        {skill.part_break && <div>{skill.part_break}</div>}
                        {skill.stagger && <div>{skill.stagger}</div>}
                        {skill.attack_type && <div>{skill.attack_type}</div>}
                        {skill.super_armor && <div>{skill.super_armor}</div>}
                        {skill.counter && <div>{skill.counter}</div>}
                    </section>

                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 1) && <div>
                        <section className={classes.tripodDetails}>
                            <img src={tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 1).url}
                                width='45' height='45'
                                alt={'first'} 
                            />
                            <div className={classes.tripodNameLevelContainer}>
                                <div className={classes.tripodName}>
                                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 1).name}
                                </div>
                                <div className={classes.tripodLevel}>Lv. 1</div>
                            </div>
                        </section>

                        <section className={classes.desc}>
                            <div>
                                {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 1).desc.map((text, idx) => {   
                                    if (text.type === 'regular') {
                                        return <span style={{ color: 'white'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'stat') {
                                        return <span style={{ color: 'cyan'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'time') {
                                        return <span style={{color: '#f0fc6d'}} key={idx}>{text.text}</span>
                                    }
                                    return ''
                                })}
                            </div>
                        </section>
                    </div>}

                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 2) && <div>
                        <section className={classes.tripodDetails}>
                            <img src={tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 2).url}
                                width='45' height='45'
                                alt={'first'} 
                            />
                            <div className={classes.tripodNameLevelContainer}>
                                <div className={classes.tripodName}>
                                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 2).name}
                                </div>
                                <div className={classes.tripodLevel}>Lv. 1</div>
                            </div>
                        </section>

                        <section className={classes.desc}>
                            <div>
                                {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 2).desc.map((text, idx) => {   
                                    if (text.type === 'regular') {
                                        return <span style={{ color: 'white'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'stat') {
                                        return <span style={{ color: 'cyan'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'time') {
                                        return <span style={{color: '#f0fc6d'}} key={idx}>{text.text}</span>
                                    }
                                    return ''
                                })}
                            </div>
                        </section>
                    </div>}

                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 3) && <div>
                        <section className={classes.tripodDetails}>
                            <img src={tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 3).url}
                                width='45' height='45'
                                alt={'first'} 
                            />
                            <div className={classes.tripodNameLevelContainer}>
                                <div className={classes.tripodName}>
                                    {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 3).name}
                                </div>
                                <div className={classes.tripodLevel}>Lv. 1</div>
                            </div>
                        </section>

                        <section className={classes.desc}>
                            <div>
                                {tripods.find(tripod => tripod.skillName === skill.name && tripod.tier === 3).desc.map((text, idx) => {   
                                    if (text.type === 'regular') {
                                        return <span style={{ color: 'white'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'stat') {
                                        return <span style={{ color: 'cyan'}} key={idx}>{text.text}</span>
                                    }
                                    if (text.type === 'time') {
                                        return <span style={{color: '#f0fc6d'}} key={idx}>{text.text}</span>
                                    }
                                    return ''
                                })}
                            </div>
                        </section>
                    </div>}

                   
                    
                </div>
            </Box>
        </>
    )
}

const mapStateToProps = state => ({
    tripods: state.selectedTripods,
})

export default connect(mapStateToProps, null)(SkillTooltip)
