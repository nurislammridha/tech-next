import * as Types from "../types/Types";
const initialState = {
  spaceList: [],
  spaceFilter: [],
  isLoading: false,
  searchValue: {
    date: new Date(),
    search: "",
    bolStatus: "",
    strStatus: "",
  },
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
    case Types.SPACE_FOR_FILTER:
      return {
        ...state,
        spaceFilter: action.payload,
      };
    case Types.SEARCH_AND_FILTER:
      const { name, value } = action.payload;
      const searchValue = { ...state.searchValue };
      searchValue[name] = value;
      return {
        ...state,
        searchValue: searchValue,
      };

    default:
      break;
  }
  return newState;
};
export default SpacexReducer;
