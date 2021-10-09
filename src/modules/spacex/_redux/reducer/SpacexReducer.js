import * as Types from "../types/Types";
const initialState = {
  spaceList: [],
  isLoading: false,
};
const SpacexReducer = (state = initialState, action) => {
  const newState = { ...state };
  //Merchant
  switch (action.type) {
    case Types.SPACE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.SPACE_LIST:
      return {
        ...state,
        spaceList: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default SpacexReducer;
