import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.div`
  width: 1250px;
  border: ${props => props.black ? '3px solid black' : '3px solid #F89E37'};
  border-radius: 19px;
  margin: 0px auto;
  box-sizing: border-box;
  display: block;
  margin-bottom: 10px;
  padding-bottom: 5px;
  overflow: hidden;
`;

const ColorBar = styled.div`
  padding: 5px 15px;
  background-color: ${props => props.black ? 'black' : '#F89E37'};
`;

const Name = styled.h3`
  color: ${props => props.black ? '#F89E37' : 'white'};
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-block;
`;
const Title = styled.h3`
  color: ${props => props.black ? 'white' : 'black'};
  font-size: 25px;
  font-style: italic;
  display: inline-block;
  margin-left: 15px;
  font-weight: 500;
`;

const ListTitle = styled.p`
  margin-left: 3px;
  margin-top: 3px;
  color: black;
  font-weight: 600;
  font-size: 19px;
`;

const ListWrap = styled.ol`
  width: 680px;
  color: #2b2b2b;
  line-height: 25px;
  margin: 0px;
  font-size: 18px;
  li {
    margin: 10px 0px;
  }
`;
const TextWrap = styled.div`
  padding: 12px;
  position: relative;
  .svg-inline--fa {
    width: 105px;
    height: 105px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 10px;
    right: 135px;
    color: #F89E37;
    path {
      stroke: #292929;
      stroke-width: 7px;
      stroke-linejoin: round;
    }
  }
`;

const SubText = styled.p`
  width: 730px;
  padding-left: 18px;
  color: black;
  font-weight: 500;
`;

 
const FullWidthPackage = ({count, title, listText, listItems, icon, subText, black}) => (
  <Wrap black={black}>
    <ColorBar black={black}>
      <Name black={black}>Package {count}</Name>
      <Title black={black}>"{title}"</Title>
    </ColorBar>

    <TextWrap>
      <ListTitle>{listText}</ListTitle>
      <ListWrap>
        {listItems.map((item) => {
          return <li>{item}</li>
        })}
      </ListWrap>
      <SubText>{subText}</SubText>
      <FontAwesomeIcon icon={icon} />
    </TextWrap>
  </Wrap>
)

export default FullWidthPackage;