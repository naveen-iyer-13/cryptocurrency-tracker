import { combineReducers } from 'redux'
import details from './eventsReducers'
// import visibilityFilter from './visibilityFilter'

const eventApp = combineReducers({
  details,
})

export default eventApp
