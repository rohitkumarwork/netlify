import { withApollo } from "../lib/apollo";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import SearchLayout from "../layouts/searchLayout.js";
import SearchFields from "../components/search-townhomes/searchFields/searchFields";
import ListingModal from "../components/search-townhomes/ListingModal";

import SearchMap from "../components/search-townhomes/searchMap";
import ListingGrid from "../components/search-townhomes/listingGrid";
import ListingPanel from "../components/search-townhomes/listingPanel";
import ListingPopup from "../components/search-townhomes/listingPopup";

import LEFTARROW from "../components/search-townhomes/images/left-arrow.png";
const CoreWrap = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: calc(100% - 130px);
  top: 130px;
  overflow: hidden;
`;

const ListingWrap = styled(CoreWrap)`
  overflow-y: scroll;
  left: 0%;
  padding: 0px 5px 5px;
  width: 50%;
  z-index: -1;
  box-shadow: 12px 0 24px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 700px) {
    width: 100%;
    z-index: ${(props) => (props.mapSelected ? "-2" : "-1")};
    background-color: white;
  }
`;

const MapToggleButton = styled.p`
  background-color: rgb(248, 158, 55);
  color: white;
  position: fixed;
  top: 140px;
  right: 17px;
  z-index: 2;
  padding: 3px 8px;
  font-size: 19px;
  border-radius: 7px;
  box-shadow: 2px 4px 8px -3px black;
  @media (min-width: 750px) {
    display: none;
  }
`;

const MapWrap = styled(CoreWrap)`
  right: 0%;
  width: ${(props) =>
    props.toggleSidebar ? "calc(100% - 50%)" : "calc(100%)"};
  z-index: -2;
  @media (max-width: 700px) {
    width: 100%;
    z-index: ${(props) => (props.mapSelected ? "-1" : "-2")};
  }
`;
const Arrow = styled.a`
  width: 50px;
  height: 50px;
  background: #f89e37;
  padding: 10px;
  position: absolute;
  left: ${(props) => (props.toggleSidebar ? "50%" : "5px")};
  z-index: 1;
  box-shadow: 0px 0px 15px 0px #71717170;
  top: 140px;
`;
const ArrowImg = styled.img`
  transform: ${(props) =>
    props.toggleSidebar ? "rotate(0deg)" : "rotate(180deg)"};
  width: 100%;
`;

const SearchPage = () => {
  const router = useRouter();
  const listingData = router.query.listingData
    ? JSON.parse(router.query.listingData)
    : null;
  useEffect(() => {
    if (listingData !== undefined) {
      let v = typeof listingData;
      setViewPopUp(true);
      setSelectedListing(listingData);
    }
  }, []);
  const geoData = router.query.geoData
    ? JSON.parse(router.query.geoData)
    : null;
  const [selectedListing, setSelectedListing] = useState();
  const [mapSelected, setMapSelected] = useState(false);
  const [soldSearch, setSoldSearch] = useState(false);
  const [forSale, setForSale] = useState(true);

  const [forLease, setForLease] = useState(false);
  const [listingQuery, setListingQuery] = useState({
    prop_type: ["Att/Row/Twnhouse", "Condo Townhouse"],
    minPrice: 100000,
    maxPrice: 3000000,
  });
  const [viewportPolygon, setViewportPolygon] = useState({
    type: "Polygon",
    coordinates: [
      [
        [43.674056937989036, -79.32386040742215],
        [43.674056937989036, -79.4424482079348],
        [43.63339073318417, -79.4424482079348],
        [43.63339073318417, -79.32386040742215],
        [43.674056937989036, -79.32386040742215],
      ],
    ],
  });

  useEffect(() => {
    if (forSale) {
      setListingQuery({
        ...listingQuery,
        minPrice: 100000,
        maxPrice: 3000000,
      });
    } else {
      setListingQuery({
        ...listingQuery,
        minPrice: 0,
        maxPrice: 5000,
      });
    }
  }, [forSale]);

  function calculateZoom(swLNG, neLNG) {
    const GLOBE_WIDTH = 256;
    const angle = neLNG - swLNG;
    if (angle < 0) {
      angle += 360;
    }

    return Math.round(Math.log((800 * 360) / angle / GLOBE_WIDTH) / Math.LN2);
  }

  const [viewState, setViewState] = useState({
    longitude: geoData ? geoData.location.lng : -79.384293,
    latitude: geoData ? geoData.location.lat : 43.653908,
    zoom: geoData
      ? calculateZoom(
          geoData.gmaps.geometry.viewport.west,
          geoData.gmaps.geometry.viewport.east
        )
      : 10,
    maxZoom: 20,
    pitch: 0,
    bearing: 0,
  });
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [viewPopUp, setViewPopUp] = useState(false);
  return (
    <SearchLayout>
      {/* {selectedListing && (
        <ListingModal
          soldSearch={soldSearch}
          listingPreview={selectedListing}
          setSelectedListing={setSelectedListing}
        />
      )} */}

      {viewPopUp &&
        typeof selectedListing === "object" &&
        selectedListing !== null && (
          <ListingPopup
            soldSearch={soldSearch}
            listingPreview={selectedListing}
            setSelectedListing={setSelectedListing}
            setViewPopUp={setViewPopUp}
          />
        )}

      <SearchFields
        soldSearch={soldSearch}
        setSoldSearch={setSoldSearch}
        setViewState={setViewState}
        listingQuery={listingQuery}
        setListingQuery={setListingQuery}
        searchNearby={router.query.name}
      />
      {/* <MapToggleButton
        onClick={() => {
          setMapSelected(!mapSelected);
        }}
      >
        {mapSelected ? "Listings" : "Map"}
      </MapToggleButton>  */}
      <MapWrap mapSelected={mapSelected} toggleSidebar={toggleSidebar}>
        <SearchMap
          soldSearch={soldSearch}
          viewState={viewState}
          setViewState={setViewState}
          listingQuery={listingQuery}
          setViewportPolygon={setViewportPolygon}
          setSelectedListing={setSelectedListing}
          setViewPopUp={setViewPopUp}
        />
      </MapWrap>
      {toggleSidebar && (
        <ListingWrap mapSelected={mapSelected}>
          <ListingPanel
            soldSearch={soldSearch}
            setSelectedListing={setSelectedListing}
            listingQuery={listingQuery}
            setListingQuery={setListingQuery}
            viewportPolygon={viewportPolygon}
            setSoldSearch={setSoldSearch}
            setViewPopUp={setViewPopUp}
            forSale={forSale}
            setForSale={setForSale}
            forLease={forLease}
            setForLease={setForLease}
          />
          {/* <ListingGrid
            soldSearch={soldSearch}
            setSelectedListing={setSelectedListing}
            listingQuery={listingQuery}
            viewportPolygon={viewportPolygon}
          /> */}
        </ListingWrap>
      )}
      <Arrow
        onClick={() => setToggleSidebar(!toggleSidebar)}
        toggleSidebar={toggleSidebar}
      >
        <ArrowImg src={LEFTARROW} toggleSidebar={toggleSidebar} />
      </Arrow>
      {!toggleSidebar && (
        <div class="mapShorting">
          <div class="inputBox">
            <button
              class={forSale ? "btn btnSale active pd-15" : "btn btnSale pd-15"}
              onClick={() => setForSale(true)}
            >
              {" "}
              For Sale{" "}
            </button>
            <button
              class={
                forSale ? "btn btnSale  pd-15" : "btn btnSale active pd-15"
              }
              onClick={() => setForSale(false)}
            >
              {" "}
              For Lease{" "}
            </button>
            <button
              class={
                soldSearch ? "btn btnSale active pd-15" : "btn btnSale pd-15"
              }
              onClick={() => setSoldSearch(!soldSearch)}
            >
              {" "}
              Sold{" "}
            </button>
          </div>
        </div>
      )}
    </SearchLayout>
  );
};

export default withApollo(SearchPage);
