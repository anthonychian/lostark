import { createStore, combineReducers } from 'redux'
import { skills, tripods, skillSelected, tripodTooltip } from './reducers'

const reducers = {
    skills,
    tripods,
    skillSelected,
    tripodTooltip,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

