import { createStore, combineReducers } from 'redux'
import { skills, tripods, skillSelected, tripodTooltip, selectedTripods, storedBuilds } from './reducers'

const reducers = {
    skills,
    tripods,
    skillSelected,
    tripodTooltip,
    selectedTripods,
    storedBuilds,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

