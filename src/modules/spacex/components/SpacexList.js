import React from "react";
import Card from "react-bootstrap/Card";
import SpacexHeader from "./SpacexHeader";
import ListGroup from "react-bootstrap/ListGroup";
const SpacexList = () => {
  return (
    <>
      <div className="container mt-3">
        <SpacexHeader />
        <div className="mt-4">
          <div className="row">
            <div className="col-sm-4">
              <Card border="primary" style={{ width: "100%" }}>
                <Card.Header className="text-center">
                  Mission Name: XYZ
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div className="row">
                      <div className="col-sm-6">Flight Number</div>
                      <div className="col-sm-6">: 1</div>
                      <div className="col-sm-6">Mission Name:</div>
                      <div className="col-sm-6">: Falcon</div>
                      <div className="col-sm-6">Launch Date</div>
                      <div className="col-sm-6">: 20/02</div>
                      <div className="col-sm-6">Rocket Name</div>
                      <div className="col-sm-6">: seter</div>
                      <div className="col-sm-6">Rocket Type</div>
                      <div className="col-sm-6">: 20/02</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpacexList;
