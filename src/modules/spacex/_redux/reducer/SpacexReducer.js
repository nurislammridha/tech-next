import * as Types from "../types/Types";
const initialState = {
  barndInput: {
    brandName: "",
    brandImg: "",
    imagePreviewUrl: "",
    brandID: "",
  },
  isLoadBrand: false,
  brandList: null,
  isLoadBrandList: false,
  isBrandDeleted: false,
  isSuccessBrand: false,
};
const BrandReducer = (state = initialState, action) => {
  const newState = { ...state };
  //Merchant
  switch (action.type) {
    case Types.GET_BRAND_INPUT:
      const barndInput = { ...state.barndInput };
      barndInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        barndInput: barndInput,
      };
    case Types.IS_SUCCESS_BRAND:
      return {
        ...state,
        isSuccessBrand: action.payload,
        barndInput: initialState.barndInput,
      };
    case Types.IS_LOAD_BRAND:
      return {
        ...state,
        isLoadBrand: action.payload,
      };
    case Types.GET_BRAND_LIST:
      return {
        ...state,
        brandList: action.payload,
      };
    case Types.IS_LOAD_BRAND_LIST:
      return {
        ...state,
        isLoadBrandList: action.payload,
      };
    case Types.IS_BRAND_DELETED:
      return {
        ...state,
        isBrandDeleted: action.payload,
      };
    case Types.SET_BRAND_UPDATED:
      const brandSetInput = { ...state.barndInput };
      brandSetInput.brandName = action.payload.brandName;
      brandSetInput.imagePreviewUrl = action.payload.brandImage;
      brandSetInput.brandID = action.payload.brandID;
      return {
        ...state,
        barndInput: brandSetInput,
      };

    default:
      break;
  }
  return newState;
};
export default BrandReducer;
