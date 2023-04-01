import { combineReducers } from 'redux'

import peopleReducer from './peoples'
// import foodRecipeReducer from './foodRecipe'

const rootReducer = combineReducers({
    peopleReducer: peopleReducer,
    // foodRecipeReducer: foodRecipeReducer,
})

export default rootReducer;
