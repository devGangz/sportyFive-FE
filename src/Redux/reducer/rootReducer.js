
import { combineReducers } from "redux";
import SportyFiveReducer from "./sporty5.Reducer";
import AdminReducer from "../../Admin/Redux/ReducerAdmin";


const rootReducer = combineReducers({
    SportyFiveReducer,
    AdminReducer
})
export default rootReducer