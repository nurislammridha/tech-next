import * as Types from "../types/Types";
import Axios from "axios";
import moment from "moment";
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
          dispatch({ type: Types.SPACE_FOR_FILTER, payload: res.data });
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
export const GetInputvalue = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.SEARCH_AND_FILTER, payload: formData });
};
export const StatusOptions = () => {
  return [
    { value: true, label: "Success" },
    { value: false, label: "Fail" },
  ];
};
export const FilterStatus = (search, list) => (dispatch) => {
  let arr = [];

  list.forEach((item) => {
    if (search.strStatus.length > 0) {
      if (item.launch_success === search.bolStatus) {
        arr.push(item);
      }
    } else if (search.date.length === undefined) {
      if (
        moment(item.launch_date_local).format("dd-mm-yyyy") ===
        moment(search.date).format("ddd-mm-yyyy")
      ) {
        arr.push(item);
      }
    } else {
      if (
        item.launch_success === item.bolStatus &&
        moment(item.launch_date_local).format("ddd-mm-yyyy") ===
          moment(search.date).format("ddd-mm-yyyy")
      ) {
        arr.push(item);
      }
    }
  });
  dispatch({ type: Types.SPACE_LIST, payload: arr });
};
