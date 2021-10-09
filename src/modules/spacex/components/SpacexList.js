import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetSpacexData } from "../_redux/action/SpacexAction";
import SpacexHeader from "./SpacexHeader";
import moment from "moment";
const SpacexList = () => {
  const dispatch = useDispatch();
  const spaceList = useSelector((state) => state.spaceInfo.spaceList);
  const isLoading = useSelector((state) => state.spaceInfo.isLoading);
  useEffect(() => {
    dispatch(GetSpacexData());
  }, []);
  console.log(`spaceList`, spaceList);
  return (
    <>
      <div className="container mt-3">
        <SpacexHeader />

        <div className="mt-4">
          {isLoading && (
            <>
              <div class="d-flex justify-content-center  mt-5 mt-5 mt-5">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </>
          )}

          {!isLoading && spaceList && spaceList.length === 0 && (
            <>
              <div
                class="alert alert-success text-center mt-5 mt-5"
                role="alert"
              >
                Sorry ! No data found.
              </div>
            </>
          )}
          {!isLoading && spaceList && spaceList.length > 0 && (
            <div className="row mb-5 pb-3">
              {spaceList.map((item, index) => (
                <div className="col-sm-4 mt-3">
                  <Card border="primary" style={{ width: "100%" }}>
                    <Card.Header className="text-center">
                      Mission Name: {item.mission_name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <div className="row">
                          <div className="col-sm-6">Flight Number</div>
                          <div className="col-sm-6">: {item.flight_number}</div>
                          <div className="col-sm-6">Mission Status:</div>
                          <div className="col-sm-6">
                            : {item.launch_success ? "Success" : "Fail"}
                          </div>
                          <div className="col-sm-6">Launch Date</div>
                          <div className="col-sm-6">
                            : {moment(item.launch_date_local).format("lll")}
                          </div>
                          <div className="col-sm-6">Rocket Name</div>
                          <div className="col-sm-6">
                            : {item.rocket.rocket_name}
                          </div>
                          <div className="col-sm-6">Rocket Type</div>
                          <div className="col-sm-6">
                            : {item.rocket.rocket_type}
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <div className="col-sm-4"></div>
              <div className="col-sm-4"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SpacexList;
