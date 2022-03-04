import React from 'react'
import Skill from './Skill'
import deathbladeSkills from '../data/deathblade'

import List from '@mui/material/List'


import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  box: {
    height: '700px',
    width: '450px',
    display: 'flex',
    alignItems: 'center',
    
  },
  boxContainer: {
    height: '100vh',
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

  return (
    
    <section className={classes.boxContainer} >
      <Box className={classes.box}>
        <List sx={{
          width: '100%',
          height: '70vh',
          bgcolor: 'black',
          position: 'relative',
          overflow: 'auto',
          '& ul': { padding: 0 },
          }} subheader={<li />}>

          

          {deathbladeSkills.map(skill =>
            <div className={classes.skill} key={skill.name} >
              <Skill skill={skill} />
            </div>
          )}

        </List>
      </Box>
    </section>
  )
}
