import React from "react";
import RegionListing from "./RegionListing";
import Regions from "./regions/index";

function Region(props) {
  const {
    eastRegion,
    northRegion,
    westRegion,
    centralRegion,
    selectedRegion,
    selectedCity
  } = props;

  return (
    <div className="regionBox">
      {selectedRegion === "North" ? (
        <>
          <Regions
            regionName="North"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={northRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
            selectedCity={selectedCity}
          />
          <RegionListing data={northRegion} selectedCity={selectedCity} />
        </>
      ) : selectedRegion === "East" ? (
        <>
          <Regions
            regionName="East"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={eastRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
            selectedCity={selectedCity}
          />
          <RegionListing data={eastRegion} selectedCity={selectedCity} />
        </>
      ) : selectedRegion === "West" ? (
        <>
          <Regions
            regionName="West"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={westRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
            selectedCity={selectedCity}
          />
          <RegionListing data={westRegion} selectedCity={selectedCity} />
        </>
      ) : selectedRegion === "Central" ? (
        <>
          <Regions
            regionName="Central"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={centralRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
            selectedCity={selectedCity}
          />
          <RegionListing data={centralRegion} selectedCity={selectedCity} />
        </>
      ) : (
        <>
          <Regions
            regionName="North"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={northRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
          />
          <Regions
            regionName="East"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={eastRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
          />
          <Regions
            regionName="West"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={westRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
          />
          <Regions
            regionName="Central"
            mainHeading="Pre-Construction Stats"
            heading1="Average Sale Price"
            heading2="3-Year Appreciation Rate"
            heading3="Average Rental Price"
            regionData={centralRegion}
            vipText="Vip Launch"
            registrations="Registrations"
            commingSoonText="Comming Soon"
            soldText="Sold"
          />
        </>
      )}
    </div>
  );
}

export default Region;
