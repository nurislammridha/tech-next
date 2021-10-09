import { combineReducers } from "redux";
import SpacexReducer from "../../modules/spacex/_redux/reducer/SpacexReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  spaceInfo: SpacexReducer,
});

export default rootReducer;
