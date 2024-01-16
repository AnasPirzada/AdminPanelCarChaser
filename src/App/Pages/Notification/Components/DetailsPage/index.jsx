import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SideBar from "../../../../Components/SideNavBar/SideBar.jsx";
import NaveBar from "../../../../Components/Navbar/index.jsx";
import CarSpec from "./Carspec.jsx";
import Crousel from "./Crousel.jsx";
import BidsModal from "./BidsModal.jsx";

export const index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid>
        <Row>
          <NaveBar />
        </Row>
        <Row>
          <Col
            md={2}
            xs={2}
            className=" text-center p-0"
            style={{ backgroundColor: "#FFFFFF " }}
          >
            <SideBar activeeTab="Notification" />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ overflowY: "auto", overflowX: "hidden" }}
          >
            <Row className="p-5 pb-0 ">
              <Col md={12}>
                <Row className="mt-4 mt-md-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <p
                      style={{
                        color: "#4C4C4C",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Volkswagen Altas Exceline
                    </p>

                    <button
                      className="text-white border-0 rounded-3  p-2"
                      style={{ backgroundColor: "#4E9C0B" }}
                    >
                      Chat support
                    </button>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row
              className="m-2 rounded-4 "
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <Col md={8} className="mt-4">
                <Crousel />
                <div className="text-center">
                  <button
                    className="p-2 w-25 bg-transparent rounded-3 "
                    style={{ border: "1px solid #F1AD3D", color: "#F1AD3D" }}
                  >
                    Back
                  </button>
                  <button
                    variant="primary"
                    onClick={handleShow}
                    className="p-2 w-25 border-0  rounded-3 ms-4"
                    style={{ backgroundColor: " #F1AD3D", color: "#FFFFFF" }}
                  >
                    Show Bids
                  </button>
                </div>
              </Col>
              <Col md={4} className="mt-4">
                <CarSpec />
              </Col>
            </Row>
          </Col>
          <div>
            <Modal
              show={show}
              aria-labelledby="contained-modal-title-vcenter"
              onClick={handleClose}
              centered
            >
              <BidsModal />
            </Modal>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default index;
