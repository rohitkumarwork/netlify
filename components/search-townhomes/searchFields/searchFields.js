import styled from "styled-components";
import GeoSearch from "./geoSearch";

import Options from "./options";
import React, { useState } from "react";

import SearchCheckbox from "./SearchCheckbox";
import MultiPopover from "./multiPopover";

import Checkbox from "./checkbox";

import Slider from "./slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SearchFieldsWrap = styled.div`
  width: 100%;
  height: 58px;
  padding: 5px 5px 5px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgrey;
  z-index: 9;
  background-color: white;
  position: absolute;
  margin-top: 11px;
`;

const GeocodeBox = styled.div`
  width: calc(50% - 110px);
  box-sizing: border-box;
  display: inline-block;
  z-index: 998;
  height: 100%;
  vertical-align: top;
  @media (max-width: 750px) {
    width: 80%;
  }
`;

const SearchBoxes = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 750px) {
    position: fixed;
    top: 130px;
    left: 0px;
    background-color: white;
    width: 100%;
    height: calc(100% - 62px);
    border-top: 1px solid #f3f3f3;
    display: ${(props) => (props.mobileVisible ? "block" : "none")};
  }
`;

const Seperator = styled.div`
  width: 1px;
  height: 70%;
  top: 15%;
  position: relative;
  background-color: rgb(228, 228, 227);
  @media (max-width: 750px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  border: 1px solid dimgrey;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
`;
const PropButton = styled.div`
  background-color: ${(props) =>
    props.active ? "rgb(248, 158, 55)" : "white"};
  color: ${(props) => (props.active ? "white" : "dimgrey")};
  cursor: pointer;
  font-size: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  display: inline-block;
  border: none;
  min-width: 50%;
  text-align: center;
`;

const MobileToggle = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 15px;
  color: #ababab;
  font-size: 30px;
  display: none;
  @media (max-width: 750px) {
    display: inherit;
  }
`;
const RentalFilter = styled.label`
  background-color: #f3f3f3;
  padding: 4px 8px;
  display: block;
  width: fit-content;
  box-sizing: content-box;
  border-radius: 9px;
  margin: 0px auto 6px;
`;
const SoldToggle = styled.div`
  width: 110px;
  display: inline-block;
  position: relative;
  bottom: 6px;
  cursor: pointer;
  p {
    width: fit-content;
    font-size: 14px;
    display: inline;
    margin-left: 5px;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const MobileSoldToggle = styled.div`
  width: 100%;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  padding: 11px 0px 14px;
  border-bottom: 1px solid rgb(234, 234, 234);
  display: none;
  p {
    font-size: 24px;
    display: inline;
    margin-left: 5px;
    position: relative;
    top: 3px;
  }
  @media (max-width: 750px) {
    display: inherit;
  }
`;

const SearchFields = ({
  listingQuery,
  setListingQuery,
  setViewState,
  setSoldSearch,
  soldSearch,
  searchNearby,
}) => {
  const toggleProptype = (type) => {
    setListingQuery({
      ...listingQuery,
      type: type,
    });
  };
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      toggleProptype("RNT");
    } else {
      toggleProptype("CND");
    }
  };

  const [showMobile, setShowMobile] = useState(false);

  return (
    <SearchFieldsWrap>
      <GeocodeBox>
        <GeoSearch setViewState={setViewState} searchNearby={searchNearby} />
      </GeocodeBox>

      {/* <SoldToggle
        onClick={() => {
          setSoldSearch(!soldSearch);
        }}
      >
        <Checkbox checked={soldSearch}></Checkbox>
        <p>Sold Search</p>
      </SoldToggle>

      <MobileToggle
        icon={faCog}
        onClick={() => {
          setShowMobile(!showMobile);
        }}
      />

      <SearchBoxes mobileVisible={showMobile}>
        <MobileSoldToggle
          onClick={() => {
            setSoldSearch(!soldSearch);
          }}
        >
          <Checkbox checked={soldSearch}></Checkbox>
          <p>Sold Search</p>
        </MobileSoldToggle>

        <Seperator />

        <MultiPopover label="Property Type">
          <ButtonContainer>
            <PropButton
              active={listingQuery.type == "CND"}
              onClick={() => toggleProptype("CND")}
            >
              Condo
            </PropButton>
            <PropButton
              active={listingQuery.type == "RES"}
              onClick={() => toggleProptype("RES")}
            >
              Freehold
            </PropButton>
          </ButtonContainer>
          {!soldSearch && (
            <RentalFilter>
              <input
                name="isGoing"
                type="checkbox"
                checked={listingQuery.type == "RNT"}
                onChange={handleCheckbox}
              />
              View Rentals
            </RentalFilter>
          )}

          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Att/Row/Twnhouse"
            label="Townhouse"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Condo Townhouse"
            label="Condo Townhouse"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Co-Op Apt"
            label="Co-Op Apt"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Det. Condo"
            label="Det. Condo"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Duplex"
            label="Duplex"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Triplex"
            label="Triplex"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Fourplex"
            label="Fourplex"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Multiplex"
            label="Multiplex"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Semi-Detached"
            label="Semi-Detached"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Semi-Det Condo"
            label="Semi-Detached Condo"
          />
          <SearchCheckbox
            setListingQuery={setListingQuery}
            listingQuery={listingQuery}
            formName="prop_type"
            value="Store W/Apt/Offc"
            label="Store W/Apt/Office"
          />
        </MultiPopover>

        <Seperator />

        <MultiPopover label="Price">
          <Slider
            listingQuery={listingQuery}
            setListingQuery={setListingQuery}
          />
        </MultiPopover>
        <Seperator />

        <MultiPopover label="Bedrooms">
          {Options.bedOptions.map((option) => (
            <SearchCheckbox
              setListingQuery={setListingQuery}
              listingQuery={listingQuery}
              formName="bedrooms"
              value={option.value}
              label={option.label}
            />
          ))}
        </MultiPopover>
        <Seperator />

        <MultiPopover label="Bathrooms">
          {Options.bathOptions.map((option) => (
            <SearchCheckbox
              setListingQuery={setListingQuery}
              listingQuery={listingQuery}
              formName="bathrooms"
              value={option.value}
              label={option.label}
            />
          ))}
        </MultiPopover>
        <Seperator />
      </SearchBoxes> */}
    </SearchFieldsWrap>
  );
};

export default SearchFields;
