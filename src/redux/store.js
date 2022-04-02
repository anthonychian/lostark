import { createStore, combineReducers } from 'redux'
import { skills, tripods, skillSelected, tripodTooltip, selectedTripods, storedTripods, equippedSkills, storedSkills } from './reducers'

const reducers = {
    skills,
    tripods,
    skillSelected,
    tripodTooltip,
    selectedTripods,
    storedTripods,
    equippedSkills,
    storedSkills,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

