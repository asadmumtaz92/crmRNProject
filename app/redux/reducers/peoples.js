import * as types from '../actionTypes/index'
import { Peoples } from '../../constantData/peoples'

const initialState = {
    counter: 0,
    peopleList: Peoples,
}

const peopleReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.INCREEMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case types.DECREEMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer
