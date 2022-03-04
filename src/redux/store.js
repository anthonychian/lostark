import { createStore, combineReducers } from 'redux'
import { skills } from './reducers'

const reducers = {
    skills
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

