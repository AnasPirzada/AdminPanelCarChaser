import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./BidsModal.css";
const BidsModal = ({ handleClose }) => {
  const [bidSelected, setBidSelected] = useState(null);

  const handleAccept = (amount) => {
    setBidSelected(amount);
  };

  const resetModal = () => {
    setBidSelected(null);
    handleClose();
  };
  const data = [
    {
      name: "Mohsin zulfqar",
      amount: "$25000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$22000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$18000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$15000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$10000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$8000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$7000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$7000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$7000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$7000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
    {
      name: "Mohsin zulfqar",

      amount: "$7000",
      bidStatus: {
        textAccept: " Accept ",
        textDeny: "Deny",
        backgroundColorAccept: "#4E9C0B",
        backgroundColorDeny: "#FF3737",
      },
    },
  ];

  const headerCellStyle = {
    background: "#F1AD3D",
    borderBottom: "transparent !important",
    color: "white",
    fontWeight: "500",
  };

  const headertable = {
    padding: "40px",
    border: "1px solid #ffff",
    borderRadius: "15px",
  };

  const tablerow = {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "400",
  };

  return (
    <>
      {bidSelected ? (
        <>
          <Row>
            <Col xs={12}>
              <Container>
                <div
                  className="d-flex justify-content-center mt-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  <p>
                    Are you agree to sell that car at the bid of{" "}
                    <span style={{ color: "#4E9C0B" }}>{bidSelected}</span>?
                  </p>
                </div>
              </Container>
            </Col>
          </Row>
          <Row
            className="mx-2 mb-3 rounded-4 "
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Col>
              <div className="text-center">
                <button
                  className="p-1 w-25 border-0  rounded-3 ms-4"
                  style={{ background: "#4E9C0B", color: "white" }}
                >
                  Agree
                </button>
                <button
                  className="p-1 w-25 bg-transparent  rounded-3 ms-4"
                  style={{ color: "#4E9C0B", border: "1px solid #4E9C0B " }}
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col xs={12}>
              <div style={{ float: "right" }} className="p-2">
                <img
                  src="./cancel.svg"
                  alt="close Modal"
                  style={{ cursor: "pointer" }}
                  onClick={handleClose}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Container>
                <div
                  className="d-flex justify-content-center my-3"
                  style={{
                    fontStyle: "Poppins",
                    fontWeight: "700",
                    fontSize: "27px",
                  }}
                >
                  Bids
                </div>
                <div className="scrollBar">
                  <Table
                    responsive
                    style={{
                      border: "1px solid white",
                      borderRadius: "20px",
                    }}
                  >
                    <thead style={headertable}>
                      <tr
                        className="tbody,td,tfoot,th,thead,tr"
                        style={headertable}
                      >
                        <th style={headerCellStyle}>Dealers Name</th>
                        <th style={headerCellStyle}>Bids Amount</th>
                        <th style={headerCellStyle}>Pending Bids Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index} className="border-bottom">
                          <td>
                            <p
                              className=" my-0 py-1 text-nowrap "
                              style={tablerow}
                            >
                              {item.name}
                            </p>
                          </td>

                          <td>
                            {" "}
                            <p
                              className=" my-0 py-1 text-nowrap "
                              style={tablerow}
                            >
                              {item.amount}
                            </p>
                          </td>

                          <td>
                            <p className=" my-0 py-1 text-nowrap  ">
                              <button
                                className="border-0 p-1"
                                style={{
                                  backgroundColor:
                                    item.bidStatus.backgroundColorAccept,
                                  borderRadius: "6px",
                                  color: "white",
                                  width: "50%",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAccept(item.amount);
                                }}
                              >
                                <img
                                  src="./accept.svg"
                                  style={{ marginRight: "5px" }}
                                />
                                {item.bidStatus.textAccept}
                              </button>
                              <button
                                className="border-0 p-1 "
                                style={{
                                  backgroundColor:
                                    item.bidStatus.backgroundColorDeny,
                                  borderRadius: "6px",
                                  color: "white",
                                  width: "50%",
                                  marginLeft: "5px",
                                }}
                              >
                                <img
                                  src="./deny.svg"
                                  style={{ marginRight: "18px" }}
                                />
                                {item.bidStatus.textDeny}
                              </button>
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Container>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BidsModal;
