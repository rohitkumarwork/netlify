import SectionWrap from './sectionWrap'
import styled from 'styled-components'

const Para = styled.p`
  width: 100%;
  font-size: 15px;
  line-height: 24px;
`;


const Remarks = ({listing}) => (
  <SectionWrap>
    <Para>{listing.remarks}</Para>
  </SectionWrap>
)

export default Remarks;