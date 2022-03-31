import React from 'react'
import SkillList from "../components/SkillList"
import Tooltip from "../components/Tooltip"
import Banner from "../components/Banner"
import SaveButton from '../components/SaveButton'
import SkillBar from '../components/SkillBar'

export default function HomePage() {
  return (
    <>
        <Banner />
        <Tooltip />
        <SkillList />
        <SkillBar />
        <SaveButton />
        
    </>
  )
}
