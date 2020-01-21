import { combineReducers } from 'redux'

// import all reducer
import engineer from './Engineer'
import company from './Company'

const rootReducer = combineReducers({
    engineer,
    company
})

export default rootReducer