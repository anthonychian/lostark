import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    box: {
        margin: '2em',
        width: 300,
        height: 600,
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
})

export default function SkillTooltip({ skill }) {

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
                </div>
            </Box>
        </>
    )
}
