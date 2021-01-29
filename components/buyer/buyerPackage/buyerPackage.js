import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import BuyerBook from "../buyerBooking/buyerBook";
import GreenPackage from "./greenPackage";
import BluePackage from "./bluePackage";
import OrangePackage from './orangePackage';

const buyerPackage = () => {
  const [show, setShow] = useState(false);
  const [showMe, setShowMe] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseMe = () => setShowMe(false);
  const handleShowMe = () => setShowMe(true);

  return (
    <>
      <div className="card-body">
        <div className="innerblock">
          <div className="knowladgePanel">
            <div className="packageSelect">
              <div className="row">
                <div className="packfooter">
                  <BuyerBook />
                  <button
                    type="button"
                    className="btn btn-orange-outline float-right"
                    onClick={handleShow}
                  >
                    Compare Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        style={{ zIndex: "9999" }}
        show={show}
        size="xl"
        onHide={handleClose}
        className='buyer-package-modal'
      >
        <Modal.Header>
          <h3>OUR BUYER PACKAGES</h3>
          <span onClick={handleClose} className="close">
            &times;
          </span>
        </Modal.Header>
        <div className="comparePackages">
        <div style={{padding: '0px 20px 20px'}}>CUSTOMIZE YOUR OWN PACKAGE - CONTACT US NOW!</div>

          <div className="row">
            <OrangePackage />
            <GreenPackage />
            <BluePackage />
          </div>
          <Modal.Body>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <button
                  style={{
                    float: "right",
                    width: "25%",
                    padding: "5px",
                    marginRight: "6%",
                    border: 'none',
                    background: '#f89e37',
                    color: 'white',
                    borderRadius: '5px',
                  }}
                  onClick={() => {
                    handleClose(), handleShowMe();
                  }}
                >
                  Select
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <button
                  style={{
                    float: "right",
                    width: "25%",
                    padding: "5px",
                    marginRight: "4%",
                    border: 'none',
                    background: '#f89e37',
                    color: 'white',
                    borderRadius: '5px',
                  }}
                  onClick={() => {
                    handleClose(), handleShowMe();
                  }}
                >
                  Select
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <button
                  style={{
                    float: "right",
                    width: "25%",
                    padding: "5px",
                    marginRight: "4%",
                    border: 'none',
                    background: '#f89e37',
                    color: 'white',
                    borderRadius: '5px',
                  }}
                  onClick={() => {
                    handleClose(), handleShowMe();
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      <Modal
        centered
        style={{ zIndex: "9999" }}
        show={showMe}
        onHide={handleCloseMe}
      >
        <Modal.Header>
          <Modal.Title>
            <span style={{ color: "orange" }}>Contact Us</span>
          </Modal.Title>
          <span onClick={handleCloseMe} className="close">
            &times;
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write a message here..."
              />
            </Form.Group>

            <Button
              style={{ width: "100%" }}
              className="btn btn-orange"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default buyerPackage;
