// Core stuff
import React, { useState, useEffect,useMemo } from 'react';
import styled from 'styled-components'

import Map from './map'

import GenerateIconLayer from './layers/iconLayer'
import GenerateDistanceArcLayer from './layers/distanceArcLayer'
import calculateNearestPoints from './distanceCalculator'
import {ScatterplotLayer,PathLayer} from '@deck.gl/layers';

import SoldStatistics from '../../listing/soldStatistics'

const SelectorWrap = styled.div`
  height: 60px;
  width: 33.33%;
  display: inline-block;
  cursor: ${props => props.active ? 'default' : 'pointer'};
  position: relative;
  box-sizing: border-box;
  border-right: 1px solid grey;
  vertical-align: bottom;
  background-color: ${props => props.active ? '#F89E37' : 'transparent'};
  transition: background-color 0.25s ease;
  :hover {
    background-color: ${props => props.active ? '#F89E37' : '#f89e374d'};
  }
  &:last-of-type {
    border-right: none;
  }
  p {
    color: ${props => props.active ? 'white' : 'black'};;
  }
`;

const SelectorTitle = styled.p`
  display: inline-block;
  width:  ${props => props.center ? '100%' : '50%'} ;
  position: absolute;
  font-size: 20px;
  height: fit-content;
  top: 0;
  bottom: 0;
  left: ${props => props.center ? '0px' : '5px'} ;
  margin: auto;
  text-align: center;
`;
const ClosestPointWrap = styled.div`
  position: absolute;
  width: 50%;
  right: 0px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  text-align: center;
`;
const PointTitle = styled.p`
    font-size: 13px;
    font-weight: 600;
`;
const PointDistance = styled.p`
  font-size: 21px;
  font-weight: 400;
`;

const MapSelector = ({title, setMapType, type, point, active, center}) => {
  return (
    <SelectorWrap active={active} onClick={() => {setMapType(type)}}>
      <SelectorTitle center={center}>{title}</SelectorTitle>  
      {!center &&
        <ClosestPointWrap>
          <PointTitle> {point.name}</PointTitle>
          <PointDistance> {(point.distance / 1000).toFixed(2)}km</PointDistance>
        </ClosestPointWrap>
      }
      
    </SelectorWrap>
  )
}

const ComparisonWrap = styled.div`
  width: 400px;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  box-sizing: border-box;
`;
const Selectors = styled.div`
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid #b3b3b3;
  box-sizing: border-box;
  overflow: hidden;
`;

const MapWrap = styled.div`
  width: ${props => props.topSelectors ? '100%': '800px'};
  display: inline-block;
  vertical-align: top;
  position: relative;
`;

const ToolTip = styled.div`
  position: absolute;
  margin-top: 22px;
  z-index: 999999999999;
  background-color: #000000b3;
  color: white;
  padding: 4px 12px;
  border-radius: 9px;
  h5 {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;


const GeneratePaths = (pathData) => {
  if (!pathData || pathData.length == 0 ){return null;}
  return new PathLayer({
    data: pathData,
    getPath: d => d.points,
    getColor: data => data.color,
    updateTriggers: {
      getColor: pathData[0].type,
      getPath: pathData[0].type
    },
    widthMinPixels: 6
  })
}

const GeneratePoints = (pointData, onHover) => {
  if (!pointData ){return null;}
  return new ScatterplotLayer({
    data: pointData,
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 5,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: d =>  [d.gis_location.coordinates[1], d.gis_location.coordinates[0]],
    getFillColor: d => [255,255,255],
    getLineColor: d => d.color,
    updateTriggers: {
      getPosition: pointData[0].type,
      getLineColor: pointData[0].type
    },
    onHover: onHover
  })
}

const TransitCompMap = ({latitude, longitude, address, pointData, nearbyData, schoolData, compsEnabled, mapType, setMapType}) => {
  const [closestPoints, setClosestPoints] = useState()
  const [layers, setLayers] = useState([])
  const [arcLayer, setArcLayer] = useState()
  const [pathLayer, setPathLayer] = useState()
  const [pointLayer, setPointLayer] = useState()
  const [iconLayer, setIconLayer] = useState()

  // hover object
  const [hoveredObject, sethoveredObject] = useState(null);
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)

  useEffect(() => {
    setLayers([arcLayer, pathLayer, pointLayer, iconLayer])
  }, [arcLayer, pathLayer, pointLayer, iconLayer])

  useEffect(() => {
    setIconLayer(GenerateIconLayer(nearbyData, latitude, longitude, address, onHover))
    setClosestPoints(calculateNearestPoints(nearbyData.map_points, latitude, longitude, onHover))
  }, [nearbyData])

  useEffect(() => {
    if (pointData) {
      setPathLayer(GeneratePaths(pointData.map_paths))
      setPointLayer(GeneratePoints(pointData.map_points, onHover))
    }
  }, [pointData])

  useEffect(() => {
    if (schoolData) {
      setPathLayer(null)
      setPointLayer(GeneratePoints(schoolData.map_points, onHover))
    }
  }, [schoolData])

  useEffect(() => {
    if (mapType != 'school') {
      setArcLayer(GenerateDistanceArcLayer(latitude, longitude, 'Precon', mapType, closestPoints))
    } else {
      setArcLayer(null)
    }
  }, [mapType, closestPoints])


  const onHover = (info) => {
    const {x, y, object} = info;
    setx(x)
    sety(y)
    sethoveredObject(object)
  };


  return (
    <div> 
      <MapWrap compsEnabled={compsEnabled}>
          {
            closestPoints &&
            <Selectors> 
              <MapSelector active={mapType == 'ttc'} point={closestPoints['ttc']} title={'TTC Stations'} type={'ttc'} setMapType={setMapType} />
              <MapSelector active={mapType == 'go'} point={closestPoints['go']} title={'GO Stations'} type={'go'} setMapType={setMapType} />
              <MapSelector center active={mapType == 'school'} point={closestPoints['hw']} title={'Schools'} type={'school'} setMapType={setMapType} />
            </Selectors>

          }
        <Map latitude={latitude} longitude={longitude} layers={layers} />
        {hoveredObject &&
          <ToolTip className="tooltip" style={{left: x, top: y}}>
            <h5>{hoveredObject.name || '-'}</h5>
          </ToolTip>
        }

      </MapWrap>
      {
        compsEnabled && nearbyData &&
        <ComparisonWrap>
          <SoldStatistics listings={nearbyData.listings} soldListings={nearbyData.sold_listings}/>
        </ComparisonWrap>
      }
    </div>
  )
}

export default TransitCompMap;