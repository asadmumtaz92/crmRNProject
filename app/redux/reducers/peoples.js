import * as types from '../actionTypes/index'
import { Peoples } from '../../constantData/peoples'

const initialState = {
    counter: 0,
    peopleList: Peoples,
    selectedPeople: {},
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
        case types.SELECTED_PEOPLES: {
            return {
                ...state,
                selectedPeople: action.selectedPeople
            }
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer
