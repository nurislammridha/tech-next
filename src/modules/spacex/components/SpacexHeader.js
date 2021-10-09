import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SpacexHeader = () => {
  const options = [
    { value: "Success", label: "Success" },
    { value: "Fail", label: "Fail" },
  ];
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
            selected={new Date()}
            className="form-control"
            //   onSelect={handleDateSelect} //when day is clicked
            //   onChange={handleDateChange} //only when value has changed
          />
        </div>
        <div className="col-sm-2">Filter by status</div>
        <div className="col-sm-2">
          <Select options={options} />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <input className="form-control" placeholder="Search rocket name" />
        </div>
      </div>
    </>
  );
};

export default SpacexHeader;
