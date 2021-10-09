import * as Types from "../types/Types";
import Axios from "axios";
// import moment from "moment";
import axios from "axios";

export const GetSpacexData = () => (dispatch) => {
  const url = "https://api.spacexdata.com/v3/launches";
  dispatch({ type: Types.SPACE_LOADING, payload: true });
  try {
    Axios.get(url)
      .then((res) => {
        console.log(`res`, res);
        if (res.status) {
          dispatch({ type: Types.SPACE_LOADING, payload: false });
          dispatch({ type: Types.SPACE_LIST, payload: res.data });
        }
      })
      .catch((error) => {
        //alert show if network issue
      });
  } catch (err) {
    const message = JSON.parse(err.request.header).message;
    //alert show if system error
  }
};
