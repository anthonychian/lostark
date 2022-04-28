import React from 'react'
import SkillList from "../components/SkillList"
import Tooltip from "../components/Tooltip"
import Banner from "../components/Banner"
import SaveButton from '../components/SaveButton'
import SkillBar from '../components/SkillBar'
import { useAuth } from '../contexts/AuthContext'


export default function HomePage() {
  const { currentUser } = useAuth()
  return (
    <div style={{ overflowX: 'hidden' }}>
        <Banner />
        <Tooltip />
        <SkillList />
        <SkillBar />
        {currentUser && <SaveButton />}
        
    </div>
  )
}
