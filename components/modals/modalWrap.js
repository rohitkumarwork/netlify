import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000b8;
  top: 0;
  right: 0;
  z-index: 9999;
`;

const Modal = styled.div`
  background-color: white;
  width: 500px;
  height: fit-content;
  border-radius: 25px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  position: absolute;
  padding: 25px 30px;
  box-sizing: border-box;
`;
const CloseButton = styled(FontAwesomeIcon)`
  color: #424b5a;
  position: absolute;
  top: 17px;
  right: 15px;
  background: none;
  border: none;
  font-size: 25px;
  width: 30px;
  height: 30px;
`;

const ModalWrap = (props) => {
  return (
    <ModalBackground
      onClick={() => {
        props.setDisplayContactModal(false);
      }}
    >
      <Modal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton
          icon={faTimes}
          onClick={() => {
            props.setDisplayContactModal(false);
          }}
        />
        {props.children}
      </Modal>
    </ModalBackground>
  );
};

export default ModalWrap;
