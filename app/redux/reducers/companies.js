import * as types from '../actionTypes/index'
import { Companies } from '../../constantData/companies'

const initialState = {
    companiesList: Companies,
}

const companiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.COMPANIES: {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}

export default companiesReducer
