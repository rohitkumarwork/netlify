import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck  } from "@fortawesome/free-solid-svg-icons";
const Wrap = styled.div`
  background-color: ${props => props.active ? '#f89e38b8' : '#cacaca61'};
  width: 95%;
  border-radius: 15px;
  min-height: ${props => props.compressed ? '35px' : '50px'} ;
  margin: 8px auto;
  position: relative;
  .svg-inline--fa {
    width: 25px;
    height: 25px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 12px;
  }
`;

const Content = styled.p`
  width: 80%;
  font-size: ${props => props.compressed ? '12px' : '15px'};
  padding: 1px 0px 1px 10px;
  position: absolute;
  color:  ${props => props.active ? 'black' : '#b7b7b7'};
  font-weight: ${props => props.active ? '600' : '400'};
  line-height: 15px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  white-space: pre;
`;

const PackagePoint = ({content, active, nocheck, compressed}) => (
  <Wrap active={active} compressed={compressed}>
    <Content compressed={compressed} active={active}>{content}</Content>
    {active && !nocheck &&
      <FontAwesomeIcon icon={faCheck} />
    }
  </Wrap>
)

export default PackagePoint;