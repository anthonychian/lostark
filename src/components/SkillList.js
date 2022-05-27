import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import Tripod from './Tripod'
import deathbladeSkills from '../data/deathblade'
import sorceressSkills from '../data/sorceress'
import List from '@mui/material/List'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useParams } from "react-router-dom";


const useStyles = makeStyles({
  box: {
    objectFit: 'cover',
    height: '700px',
    width: '550px',
    display: 'flex',
    alignItems: 'center',
  },
  boxContainer: {
    height: '90vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skill: {
    
  }
})

export default function SkillList() {

  const classes = useStyles()

  const [skills, setSkills] = useState([])

  const { classSkill } = useParams()

  
  useEffect(() => {
    switch(classSkill) {
      case 'deathblade': 
        setSkills(deathbladeSkills)
        break;
      case 'sorceress':
        setSkills(sorceressSkills)
        break;
      default:
        return
    }
  }, [classSkill])

  return (
    
    <section className={classes.boxContainer} >
      <Box className={classes.box}>
        <List sx={{
          width: '100%',
          height: '60vh',
          bgcolor: 'black',
          opacity: '0.90',
          position: 'relative',
          overflow: 'auto',
          '& ul': { padding: 0 },
        }} subheader={<li />}>

          

          {skills.map(skill =>
            <div className={classes.skill} key={skill.name} >
              <Skill skill={skill} />
            </div>
          )}

        </List>
        
      </Box>
      <Tripod />
    </section>
  )
}
