import { useState } from "react";
import { Modal } from "react-bootstrap";

const buyerBook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="btn btn-green float-left"
        onClick={handleShow}
      >
        Book The Package
      </button>

      <Modal
        className='book-package'
        centered
        show={show}
        onHide={handleClose}
      >
        <div className="modal-body">
          <span
            aria-hidden="true"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            {" "}
            &times;
          </span>
          <div className="headerContent">
            <div className="title">Book the Package</div>
            {/* <div className="subtitleContent">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </div> */}
          </div>
          <div className="form">
            <div className="input-form">
              <div className="label">Email</div>
              <div className="input-field">
                <input type="" name="" className="form-control" />
              </div>
            </div>
            <div className="input-form">
              <div className="label">Phone Number</div>
              <div className="input-field">
                <input type="" name="" className="form-control" />
              </div>
            </div>
            <div className='input-form'>
              <div className='label'>Package Name</div>
              <div className='input-field'>
                <input type='text' name='package-name' className='form-control' />
              </div>
            </div>
            <div className="input-form">
              <input type="" name="" className="orageBtn" value="Submit " />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default buyerBook;
