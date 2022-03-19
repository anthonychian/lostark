import { createStore, combineReducers } from 'redux'
import { skills, tripods, skillSelected, tripodTooltip, selectedTripods } from './reducers'

const reducers = {
    skills,
    tripods,
    skillSelected,
    tripodTooltip,
    selectedTripods,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

