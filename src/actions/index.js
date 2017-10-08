import { GET_TOP, GET_DATA, SET_FILTER } from '../constant'

//have to remove, thsi si the static data
import data from '../fixturex/data'

export const getTop = (top, time, categories) => {
    return {
        type: GET_TOP,
        top,
        time,
        categories
    }
}

// should use middleware !!!
export const getData = () => {
    return {
        type: GET_DATA,
        payload: data
    }
}


export const filterByCategories = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}