import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { withApollo } from '../../lib/apollo'

import { useQuery } from '@apollo/react-hooks';
import {GET_NEARBY_DATA, GET_MAP_DATA, GET_SCHOOL_DATA} from '../../components/generic/mapping/databaseCalls'

import gql from 'graphql-tag'

import TopHeader from '../../components/listing/topHeader'
import ImageSlideshow from '../../components/generic/imageSlideshow'
import ListingInfo from '../../components/listing/listingInfo'
import Remarks from '../../components/listing/remarks'

import ContactBox from '../../components/listing/contactBox'


import SoldStatistics from '../../components/listing/soldStatistics'


const Darken = styled.div`
  position: fixed;
  background-color: #00000059;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99;
`
const ModalWrap = styled.div`
  position: fixed;
  width: 1000px;
  margin: auto;
  top: 100px;
  height: calc(100% - 100px);
  left: 0;
  right: 0;
  background-color: white;
  overflow: auto;
  
  @media (max-width:1200px) {
    width: 900px;
  }

  @media (max-width:1000px) {
    width: 800px;
  }
`

const MainWrap = styled.div`
  width: 100%;
`;

const ListingWrap = styled.div`
  width: 60%;
  display: inline-block;
  padding-left: 10px;
    box-sizing: border-box;
`;
const ContactGutter = styled.div`
  width: 40%;
  display: inline-block;
  height: 40px;
  vertical-align: top;
  text-align: center;
  padding: 0% 10px 0% 15px;
  box-sizing: border-box;
`;
const SectionsWrap = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
`;
const SectionButton = styled.p`
  width: 25%;
  text-align: center;
  background-color:  ${props => props.active ? '#F89E37' : 'whitesmoke'};
  color: ${props => props.active ? 'white' : 'black'};
  padding: 9px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;

`


const GET_LISTING = gql`
  query getListing($id: Int) {
    listings(where: {id: {_eq: $id}}) {
      address 
      amenities
      bathrooms
      bedrooms
      city
      condo_fees
      createdAt
      gis_location
      home_page
      interiorRemarks
      latitude
      list_date
      longitude
      mls
      mlsID
      parking_spots
      parking
      pictures
      postal_code
      price
      prop_type
      remarks
      rooms
      square_footage
      stories
      style
      subdivision
      thumbnail
      updatedAt
    }
  }
`

const GET_SOLD_LISTING = gql`
  query getListing($id: Int) {
    sold_listings(where: {id: {_eq: $id}}) {
      address 
      amenities
      bathrooms
      bedrooms
      city
      condo_fees
      createdAt
      gis_location
      interiorRemarks
      latitude
      list_date
      longitude
      mls
      mlsID
      parking_spots
      parking
      pictures
      postal_code
      price
      prop_type
      remarks
      rooms
      square_footage
      stories
      style
      subdivision
      thumbnail
      updatedAt
    }
  }
`


const RoomWrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #f1f1f1;
  height: 50px;
  padding: 5px;
  margin: 5px 0px;
  border-radius: 11px;
  box-sizing: border-box;
`;

const RoomTitles = styled.div`
  float: left;
  margin-left: 2px;
  margin-top: 2px;
`;

const Title = styled.p`
  font-size: 21px;
`;

const RoomSize = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  right: 15px;
  margin: auto;
  font-size: 17px;
`;

export default ({listingPreview, setSelectedListing, soldSearch}) => {
  const [selectedSection, setSelectedsection] = useState('details')


  const { loading, error, data, networkStatus } = useQuery(GET_LISTING, {
    skip: (listingPreview == null) || soldSearch,
    variables: {id: listingPreview.id}
  });

  const {  data: soldData, error: soldErr } = useQuery(GET_SOLD_LISTING, {
    skip: (listingPreview == null) || !soldSearch,
    variables: {id: listingPreview.id}
  });

  let listing = (data != undefined) ? data.listings[0] : (soldData != undefined) ? soldData.sold_listings[0] : null


  const {data: nearbyData} = useQuery(GET_NEARBY_DATA, {
    skip: data == undefined,
    variables: {      
      viewportPolygon: {"type": "Point","coordinates": data != undefined ? [listing.latitude, listing.longitude] : null}, 
      bedrooms: data != undefined ? listing.bedrooms : null,
      bathrooms: data != undefined ? listing.bathrooms : null,
      mls: data != undefined ? listing.mls : null,
      prop_type: data != undefined ? listing.prop_type : null
    }
  });

  return (
    <Darken onClick={() => {setSelectedListing(null)}}>
      <ModalWrap onClick={(event) => {event.stopPropagation()}}>
      {!loading && 
        <>
          <ImageSlideshow listing={listing}/>
          <MainWrap>
            <ListingWrap>
              <TopHeader soldSearch={soldSearch} listing={listing} />
              <SectionsWrap>
                <SectionButton onClick={() => {setSelectedsection('details')}} active={selectedSection == 'details'} >Details</SectionButton>
                <SectionButton onClick={() => {setSelectedsection('description')}} active={selectedSection == 'description'} >Description</SectionButton>
                <SectionButton onClick={() => {setSelectedsection('comps')}} active={selectedSection == 'comps'} >Comps</SectionButton>
                <SectionButton onClick={() => {setSelectedsection('rooms')}} active={selectedSection == 'rooms'} >Rooms</SectionButton>
              </SectionsWrap>
              {selectedSection == 'details' &&
                <ListingInfo listing={listing}/> 
              }
              {selectedSection == 'description' &&
                <Remarks listing={listing}/>
              }
              {selectedSection == 'comps' && nearbyData &&
                <>
                  <SoldStatistics setSelectedListing={setSelectedListing} listings={nearbyData.listings} soldListings={nearbyData.sold_listings}/>
                </>
              }
              {selectedSection == 'rooms' &&
                <>
                  {JSON.parse(listing.rooms).map((room) => {
                    return (
                      <RoomWrap>
                        <RoomTitles>
                          <Title>{room.typeText}</Title>
                          <p>{room.features}</p>
                        </RoomTitles>
                        <RoomSize>{room.width} x {room.length}</RoomSize>
                      </RoomWrap>
                    )
                  })
                  }
                </>
              }

            </ListingWrap>
            <ContactGutter>
              <ContactBox listing={listing}/>
            </ContactGutter>
          </MainWrap>
        
        
        </>
      }
      </ModalWrap>
    </Darken>
  )
}