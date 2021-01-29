import styled from 'styled-components'

import { useEffect, useState } from 'react'
import ContentfulClient from '../../lib/contentful'

import GridContainer from '../generic/grids/gridContainer'
import GridItem from '../generic/grids/gridItem'

const CityThumbnail = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;  
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
`;

const Shadow = styled.div`
  box-shadow: inset 0px -70px 50px -40px black;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const CityName = styled.p`
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  font-size: 27px;
  font-weight: 500;
  color: white;
  z-index: 3;
`;

export default ({preconCities}) => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    ContentfulClient.getEntries({content_type: preconCities ? 'preConCity' : 'city'}).then(entry => {
        setCities(entry.items)
      })
  }, [])

  return (
    <GridContainer title={preconCities ? 'Pre Construction City Guides' : 'City Guides'}>
      {
        cities.map((city) => {
          return (
            <GridItem url={`/${preconCities ? 'new-townhome-developments' : 'townhomes'}/${city.fields.slug}`}>
              <CityThumbnail src={city.fields.thumbnailUrl}/>
              <Shadow/>
              <CityName>{city.fields.title}</CityName>
            </GridItem>
          )
        })
      }
    </GridContainer>
  )
}
