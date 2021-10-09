import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { GetInputvalue, StatusOptions } from "../_redux/action/SpacexAction";
const SpacexHeader = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.spaceInfo.searchValue);

  const handleChangeInput = (name, value) => {
    dispatch(GetInputvalue(name, value));
  };
  return (
    <>
      <div className="alert alert-secondary">
        <h5 className="text-center text-muted">Spacex Information</h5>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">Filter by date</div>
        <div className="col-sm-2">
          {/* <input className="form-control" type="date" /> */}
          <DatePicker
            selected={searchValue.date}
            className="form-control"
            onChange={(e) => {
              handleChangeInput("search", "");
              handleChangeInput("date", e);
            }}
          />
        </div>
        <div className="col-sm-2">Filter by status</div>
        <div className="col-sm-2">
          <Select
            options={StatusOptions()}
            value={{ label: searchValue.strStatus }}
            onChange={(e) => {
              handleChangeInput("bolStatus", e.value);
              handleChangeInput("strStatus", e.label);
              handleChangeInput("search", "");
            }}
          />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <input
            className="form-control"
            placeholder="Search rocket name"
            value={searchValue.search}
            onChange={(e) => {
              handleChangeInput("search", e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SpacexHeader;
