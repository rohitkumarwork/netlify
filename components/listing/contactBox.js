import styled from 'styled-components'

const Wrap = styled.div`
  border: 1px solid lightgrey;
  padding: 20px 0px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: whitesmoke;
`;

const TitleText = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 5px 0px 15px;
`;

const InputWrap = styled.div`
  width: 95%;
  margin: 0px auto;
`;

const GenericInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 5px;
  box-sizing: border-box;
  margin: 3px 0px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

const Textbox = styled.textarea`
  width: 100%;
  height: 70px;
  font-size: 16px;
  padding: 5px;
  box-sizing: border-box;
  margin: 3px 0px;
  border: 1px solid lightgrey;

`;

const Submit = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #F89E37;
  padding: 13px 42px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin: 10px auto 0px;
  display: block;
`;


const ContactBox = ({listing}) => (
  <Wrap>
    <TitleText>Contact MyTownhome Today</TitleText>
    <InputWrap>
      <GenericInput placeholder="Name"/>
      <GenericInput placeholder="Email"/>
      <GenericInput placeholder="Phone Number"/>
      <Textbox placeholder={`Hello, I would like some more information on ${listing.address}`}/>
    </InputWrap>
    <Submit>Get In Touch</Submit>
  </Wrap>
)

export default ContactBox;