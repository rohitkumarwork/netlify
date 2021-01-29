import styled from 'styled-components'
import ModalWrap from './modalWrap'

import ContactFields from '../generic/contactFields'

const Title = styled.h2`
  color: #f89e37;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const contactModal = ({setDisplayContactModal}) => {

  return (
    <ModalWrap setDisplayContactModal={setDisplayContactModal}>
      <Title>Lets Talk</Title>
      <ContactFields/>
    </ModalWrap>
  )
}


export default contactModal;