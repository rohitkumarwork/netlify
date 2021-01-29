import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { withApollo } from "../../../../lib/apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_NEARBY_DATA,
  GET_MAP_DATA,
  GET_SCHOOL_DATA,
} from "../../../../components/generic/mapping/databaseCalls";

import ClientLayout from "../../../../layouts/clientLayout";

import TopHeader from "../../../../components/listing/topHeader";
import ImageSlideshow from "../../../../components/generic/imageSlideshow";
import ListingInfo from "../../../../components/listing/listingInfo";
import ContactBox from "../../../../components/listing/contactBox";
import Remarks from "../../../../components/listing/remarks";
import SoldStatistics from "../../../../components/listing/soldStatistics";

import TransitCompMap from "../../../../components/generic/mapping/transitCompMap";

const GET_LISTING = gql`
  query getListing($address: String!) {
    listings(where: { address: { _eq: $address } }) {
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
`;

const Gutter = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

const LeftGutter = styled(Gutter)`
  width: 65%;
  padding-right: 10px;
`;

const RightGutter = styled(Gutter)`
  width: 35%;
  padding-left: 10px;
`;

const ListingPage = () => {
  const [mapType, setMapType] = useState("ttc");

  const { loading, error, data, networkStatus } = useQuery(GET_LISTING, {
    variables: {
      address: useRouter().query.address.split("-").join(" ").replace("_", "#"),
    },
  });

  let listing = data != undefined ? data.listings[0] : null;
  const { data: nearbyData } = useQuery(GET_NEARBY_DATA, {
    skip: data == undefined,
    variables: {
      viewportPolygon: {
        type: "Point",
        coordinates:
          data != undefined ? [listing.latitude, listing.longitude] : null,
      },
      bedrooms: data != undefined ? listing.bedrooms : null,
      bathrooms: data != undefined ? listing.bathrooms : null,
      mls: data != undefined ? listing.mls : null,
      prop_type: data != undefined ? listing.prop_type : null,
    },
  });

  const { data: pointData } = useQuery(GET_MAP_DATA, {
    skip: mapType == "school",
    variables: { mapType: mapType },
  });

  const { data: schoolData } = useQuery(GET_SCHOOL_DATA, {
    skip: mapType != "school",
    variables: {
      viewportPolygon: {
        type: "Point",
        coordinates: listing ? [listing.latitude, listing.longitude] : null,
      },
    },
  });

  if (loading && networkStatus == 1)
    return (
      <div>
        <h2>Loading Map...</h2>
      </div>
    );

  if (listing) {
    return (
      <ClientLayout>
        {!loading && (
          <>
            <TopHeader listing={listing} />

            <LeftGutter>
              {/* <ImageSlideshow listing={listing}/> */}
              <Remarks listing={listing} />
              {listing && nearbyData && (
                <TransitCompMap
                  mapType={mapType}
                  setMapType={setMapType}
                  topSelectors={true}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                  address={listing.address}
                  pointData={pointData}
                  nearbyData={nearbyData}
                  schoolData={schoolData}
                />
              )}
            </LeftGutter>

            <RightGutter>
              {nearbyData &&
                nearbyData.sold_listings &&
                nearbyData.sold_listings.length > 0 && (
                  <SoldStatistics
                    listing={listing}
                    listings={nearbyData.listings}
                    soldListings={nearbyData.sold_listings}
                  />
                )}
              <ListingInfo listing={listing} />
              <ContactBox listing={listing} />
            </RightGutter>
          </>
        )}
      </ClientLayout>
    );
  }
};

export default withApollo(ListingPage);
