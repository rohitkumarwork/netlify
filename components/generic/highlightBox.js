import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = styled.div`
  width: 250px;
  svg {
    width: 80px !important;
    height: 80px !important;
    margin: 0px auto 15px;
    display: block;
    color: orange;
    path {
      stroke: #292929;
      stroke-width: 7px;
      stroke-linejoin: round;
    }
  }
`;

const HighlightText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const HighlightSubText = styled.p`
  text-align: center;
  margin-top: 4px;
  letter-spacing: 1px;
`;

const HighlightBox = ({icon, text, subText}) => {
  return (
    <Highlight>
      <FontAwesomeIcon icon={icon} />
      <HighlightText>{text}</HighlightText>
      <HighlightSubText >{subText}</HighlightSubText>
    </Highlight>
  )
}

export default HighlightBox;