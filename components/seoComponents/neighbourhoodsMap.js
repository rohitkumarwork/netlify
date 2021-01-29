import styled from 'styled-components'
import {Title} from '../generic/GenericComponents'

import StructuralWrap from '../generic/structural/wrap'
import DoubleImage from './structural/doubleImage';
import SingleImage from './structural/singleImage'

export default ({title}) => (
  <StructuralWrap backgroundColor="#f1f0f0">
    <Title>{title} Neighbourhoods</Title>
    <MapWrap>

    </MapWrap>
  </StructuralWrap>
)


const MapWrap = styled.div`
  background-color: lightblue;
  height: 500px;
  width: 100%;
`;