// Core stuff
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {ScatterplotLayer} from '@deck.gl/layers';

// functional pieces
import StaticMap from 'react-map-gl';
import DeckGL from 'deck.gl';	

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWxpYTI0IiwiYSI6ImNqeTNkMmxnbjB3Y3IzbWxxdXJueWxxam8ifQ.aijQPC8lS98itCEeia55YQ'
const MapWrap = styled.div`
  height: 400px;
  width: 100%;
  display: block;
  position: relative;
`;

const ListingMap = ({latitude, longitude, layers}) => {
  const [forceRerender, setForceRerender] = React.useState(true);

  const [viewState, setViewState] = useState({
    longitude: longitude,
    latitude: latitude,
    zoom: 14,
    bearing: 0,
    pitch: 25,
    maxZoom: 20
  })

  // This is some premium bullshit. But deckgl is being a shit and not properly 
  // following state. Probably soemthing i did wrong.
  useEffect(() => {
    setForceRerender(!forceRerender);
  }, [layers])

  return (
    <div >
      <MapWrap>
        <DeckGL
        layers={layers}
        controller={{dragRotate: false}}
        viewState={viewState}
        onViewStateChange={({viewState}) => {setViewState(viewState)}}
      >
        <div>{forceRerender}</div>
        <StaticMap
          reuseMaps
          mapStyle={'mapbox://sprites/mapbox/streets-v9'}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </DeckGL>
      </MapWrap>
    </div>
  )
}

export default ListingMap;