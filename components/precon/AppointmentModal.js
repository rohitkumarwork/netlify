import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
`;
const Input = styled.input`
  font-size: 14px;
  width: 24em;
  height: 45px;
  background: #fff;
  border-style: solid;
  border-color: #f2f2f2;
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 14px;
  transition: 0.3s ease all;

  ${Input}:focus ~ & {
    top: -12px;
    left: 5px;
    font-size: 10px;
    opacity: 1;
    color: #f89e37;
  }
`;

function AppointmentModal({ setOpenModal }) {
  return (
    <div className="appointment-wrapper">
      <div className="appointment-modalHeader">
        <div className="appointment-modalHeaderText">
          Book Appointment
          <div
            className="appointment-modalHeaderClose"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </div>
        </div>
        <div className="appointment-ModalText">
          Get online booking and Scheduling for estate agents
        </div>
        {/* <div className="appointment-ModalText">estate agents</div> */}
        <Wrapper>
          <Input />
          <Label>Name</Label>
        </Wrapper>
        <Wrapper>
          <Input />
          <Label>Email</Label>
        </Wrapper>
        <Wrapper>
          <Input />
          <Label>Contact Number</Label>
        </Wrapper>
        <div className="appointment-modalFooter">
          <div className="appointment-modalSubmit">Submit Request</div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
