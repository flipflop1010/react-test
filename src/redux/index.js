import {combineReducers,createStore} from 'redux'
import NumberReducer from './number_object/NumberReducer'



const rootReducer=combineReducers({
    'state_number':NumberReducer
})

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store