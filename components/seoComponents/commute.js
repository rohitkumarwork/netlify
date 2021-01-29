import styled from 'styled-components'
import {Title} from '../generic/GenericComponents'

import StructuralWrap from '../generic/structural/wrap'

import StaticMap from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWxpYTI0IiwiYSI6ImNqeTNkMmxnbjB3Y3IzbWxxdXJueWxxam8ifQ.aijQPC8lS98itCEeia55YQ'

export default ({title}) => (
  <StructuralWrap backgroundColor="#f1f0f0">
    <Title>Commute</Title>
    <Content>
      <Text>Sed semper odio vitae urna interdum maximus. Praesent quis purus dolor. Mauris molestie placerat nibh non lobortis. Nulla facilisi. </Text>
    </Content>
    <MapBox>
    <StaticMap
            width={'100%'}
            height={'100%'}
            reuseMaps
            mapStyle={'mapbox://sprites/mapbox/streets-v9'}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />

    </MapBox>
  </StructuralWrap>
)

const Text = styled.p`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  margin-bottom: 15px;
`;
const ContentBox = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

const MapBox = styled(ContentBox)`
  width: 500px;
  height: 300px;
  background-color: darkblue;


`;

const Content = styled(ContentBox)`
  width: calc(100% - 500px);
`;