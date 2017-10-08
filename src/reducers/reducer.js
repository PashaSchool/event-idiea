import {GET_DATA, GET_TOP, SET_FILTER, SHOW_ALL} from '../constant'
import {combineReducers} from 'redux'

import data from '../fixturex/data'

const reducer = (state = [], {type, top, time, categories, filter}) => {
    switch(type) {
        case GET_TOP:
            return [...state, {top, time, categories} ]
        case SET_FILTER:
            return data.filter(x => (x.categories === filter))
        // case SHOW_ALL:
        // // get all data
        //     return [...state, {top, time, categories} ]
        default:
            return state
    }
}

const eventsReducer = (state = [], action) => {
    switch(action.type) {
        case GET_DATA:
            return [...state, ...action.payload];
        default:
            return state
    } 
}

const filtersReducer = (state = SHOW_ALL, action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state
    }
}

// const dataInCategories = (state = [], {type,top, time, categories}) => {
//     switch(type) {
//         case SET_FILTER:
//             return [{top, time, categories}]
//         default:
//             return state
//     }
// }

const store = combineReducers({
    timerLabel: reducer,
    events: eventsReducer,
    filter: filtersReducer
})

export default store