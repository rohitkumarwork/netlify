// Core stuff
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {ScatterplotLayer,PathLayer} from '@deck.gl/layers';

// functional pieces
import StaticMap from 'react-map-gl';
import DeckGL from 'deck.gl';	

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWxpYTI0IiwiYSI6ImNqeTNkMmxnbjB3Y3IzbWxxdXJueWxxam8ifQ.aijQPC8lS98itCEeia55YQ'
const mbxDirections = require('@mapbox/mapbox-sdk/services/directions');
const directionsService = mbxDirections({ accessToken: MAPBOX_TOKEN });
const decodePolyline = require('decode-google-map-polyline');


import MapboxClient from 'mapbox'
const mapboxClient = new MapboxClient(MAPBOX_TOKEN);


const MapWrap = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
`;
const DistanceBox = styled.div`
    background-color: #fbfbfbb8;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 5;
    padding: 5px 12px;
    border-radius: 8px;
`;
const DistanceTitle = styled.p`
    font-size: 19px;
    font-weight: 500;
`;

const DistancePiece = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  span {
    color: #F89E37;
  }
`;

const ListingMap = ({listing}) => {
  const [forceRerender, setForceRerender] = React.useState(true);
  const [path, setPath] = useState()
  const [transitDetails, setTransitDetails ]= useState({
    time: 0,
    distance: 0
  })
  const scatter = new ScatterplotLayer({
      data: [[listing.longitude, listing.latitude]],
      pickable: true,
      opacity: 1,
      stroked: true,
      filled: true,
      radiusScale: 10,
      radiusMinPixels: 8,
      radiusMaxPixels: 100,
      lineWidthMinPixels: 2,
      getPosition: d => [d[0], d[1], 0],
      getColor: d =>  [0,0,0],
      getFillColor: d => [248, 158, 55],
    })
  
  const handleMapClick = async (event) => {
    directionsService.getDirections({
      profile: 'driving',
      waypoints: [
        {
          coordinates: [listing.longitude, listing.latitude],
          approach: 'unrestricted'
        },
        {
          coordinates: event.lngLat
        }
      ]
    })
      .send()
      .then(response => {
        const directions = response.body;


        setTransitDetails({
          time: directions.routes[0].duration / 60,
          distance: directions.routes[0].distance / 1000
        })

        const line = decodePolyline(directions.routes[0].geometry).map((item) => [item.lng, item.lat])

        setPath(
           new PathLayer({
              data: [{path: line}],
              getPath: d => d.path,
              widthMinPixels: 6,
              getColor: data => [248, 158, 55],
            })
        )
      });

  }


  const [viewState, setViewState] = useState({
    longitude: listing.longitude,
    latitude: listing.latitude,
    zoom: 14,
    bearing: 0,
    pitch: 25,
    maxZoom: 20
  })

  // useEffect(() => {
  //   setForceRerender(!forceRerender);
  // }, [layers])

  return (
    <MapWrap>
      {listing &&
      <>
        <DistanceBox>
          <DistanceTitle>Commute Times</DistanceTitle>
          <DistancePiece><span>{Math.round(transitDetails.distance)}</span> Km</DistancePiece> | <DistancePiece><span>{Math.round(transitDetails.time > 60 ?  transitDetails.time / 60 : transitDetails.time)}</span> {transitDetails.time > 60 ? 'Hours' : 'Minutes'} </DistancePiece>
          {transitDetails.time === 0 &&
            <p>Click to calculate commute</p>
          }
        </DistanceBox>

        <DeckGL
          layers={[scatter, path]}
          controller={{dragRotate: false}}
          viewState={viewState}
          onClick={handleMapClick}
          onViewStateChange={({viewState}) => {setViewState(viewState)}}
        >
          {/* <div>{forceRerender}</div> */}
          <StaticMap
            reuseMaps
            mapStyle={'mapbox://sprites/mapbox/streets-v9'}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        </DeckGL>
      </>
      }
    </MapWrap>
  )
}

export default ListingMap;