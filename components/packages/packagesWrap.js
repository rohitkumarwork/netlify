import styled from 'styled-components'
import {Wrap, Title} from '../generic/GenericComponents'

const ModifiedWrap = styled(Wrap)`
  width: 1260px;
`;

const FlatTitle = styled(Title)`
  margin-bottom: 0px;
  font-size: 34px;
`
const SubTitle = styled.p`
  color: #525252;
  letter-spacing: 1px;
  font-size: 14px;
  max-width: 779px;
`;

export default (props) => (
  <ModifiedWrap>
    <FlatTitle>{props.title}</FlatTitle>
    <SubTitle>{props.subTitle}</SubTitle>
    {props.children}
  </ModifiedWrap>    
)


