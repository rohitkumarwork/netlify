import styled from 'styled-components'

const Wrap = styled.div`
  margin: 20px 0px;
  position: relative;
`;

const TitleText = styled.h3`
  text-align: left;
  margin: 5px 0px 5px;
  font-size: 23px;
  font-weight: 600;
`;


const SectionWrap = (props) => (
  <Wrap>
    <TitleText>{props.title}</TitleText>
    {props.children}
  </Wrap>
)

export default SectionWrap;