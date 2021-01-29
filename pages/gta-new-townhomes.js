import PreconMap from "../components/precon/PreconMap";
import styled from "styled-components";
import SearchLayout from "../layouts/searchLayout.js";
import Sidebar from "../components/precon/Sidebar";
import React, { useState, useEffect } from "react";
import AppointmentModal from "../components/precon/AppointmentModal";
import ProjectPopUp from "../components/precon/ProjectPopUp";
// GQL
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import gql from "graphql-tag";
import axios from "axios";
//contentful
import ContentfulClient from "../lib/contentful";
import Loader from "react-loader-spinner";

const CoreWrap = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: calc(100% - 130px);
  top: 60px;
  overflow: hidden;
`;
const MapWrap = styled(CoreWrap)`
  right: 0%;
  width: ${(props) =>
    props.toggleSidebar ? "calc(100% - 50%)" : "calc(100%)"};
  z-index: -2;
  height: calc(100vh - 60px);
  @media (max-width: 700px) {
    width: 100%;
    z-index: ${(props) => (props.mapSelected ? "-1" : "-2")};
  }
`;

export default () => {
  const geoData = false;
  const [openModal, setOpenModal] = useState(false);
  const [openProjectsModal, setOpenProjectsModal] = useState(false);
  const [region, setRegion] = useState({});
  const [westRegion, setWestRegion] = useState();
  const [eastRegion, setEastRegion] = useState();
  const [northRegion, setNorthRegion] = useState();
  const [centralRegion, setCentralRegion] = useState();
  const [selectedCityData, setSelectedCityData] = useState();
  const [preconCities, setPreconCities] = useState([]);
  const [allPreconProjects, setAllProjects] = useState();
  const [selectedRegion, setSelectedRegion] = useState();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const[onclick ,setonClick ] = useState(false);
  const [viewState, setViewState] = useState({
    longitude: geoData ? geoData.location.lng : -79.5681310928495,
    latitude: geoData ? geoData.location.lat : 44.083363238877766,
    zoom: geoData
      ? calculateZoom(
          geoData.gmaps.geometry.viewport.west,
          geoData.gmaps.geometry.viewport.east
        )
      : 7,
    maxZoom: 20,
    pitch: 0,
    bearing: 0,
    name: "Toronto, Ontario",
  });

  async function fetchCityDetails() {
    ContentfulClient.getEntries({ content_type: "preConCity" })
      .then((response) =>
        setPreconCities(response.items.map((obj) => obj.fields))
      )
      .catch(console.error);
  }

  async function fetchProjects() {
        try {
          const getProjects = await axios.post("https://precon-projects.herokuapp.com/getProject", {
            "refresh_token": "1000.1c55269651ab9f58c7ece46d5533f13e.6f39d82ad9283883d9e21ac66d4b4f14"
          })
        let precon_projects = getProjects.data.data.data;
        setAllProjects(precon_projects);
        westLatLng(precon_projects);
        northLatLng(precon_projects);
        eastLatLng(precon_projects);
        centralLatLng(precon_projects);
    }
    catch(err) {
      console.log("error",err)
    }
  } 

  async function westLatLng(precon_projects) {
    const West = ["Burlington","Milton","Halton Hills","Oakville","Mississauga","Brampton","Caledon"];
    let prCities = West.map((value) => {
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA`)
        .then(response => response.json())
        .then(data => {
          let filteredList = precon_projects.filter((projects) => projects.City === value);
          return {city: value,coordinates: [data.features[0].center[0], data.features[0].center[1]], 
            cityData: filteredList };
        }) 
    })

    const filteredData = await Promise.all(prCities);
      if(filteredData){
        setWestRegion(filteredData)
      }
    }

  async function northLatLng (precon_projects) {
    const North = ["King","Vaughan","Richmond Hill","Markham","Aurora","New Market","Stouffville","East Gwillimbury"]
    let prCities = North.map((value) => {
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA`)
        .then(response => response.json())
        .then(data => {
          let filteredList = precon_projects.filter((projects) => projects.City === value);
          return {city: value,coordinates: [data.features[0].center[0], data.features[0].center[1]], 
            cityData: filteredList};
        }) 
    })

    const filteredData = await Promise.all(prCities);
    if(filteredData){
      setNorthRegion(filteredData)
    }
  }

  async function eastLatLng (precon_projects) {
    const East = ["Pickering","Ajax","Whitby","Oshawa"]
    let prCities = East.map((value) => {
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA`)
        .then(response => response.json())
        .then(data => {
          let filteredList = precon_projects.filter((projects) => projects.City === value);
          return {city: value,coordinates: [data.features[0].center[0], data.features[0].center[1]], 
            cityData: filteredList };
        }) 
    })

    const filteredData = await Promise.all(prCities);
    if(filteredData) {
      setEastRegion(filteredData);
    }
  }

  async function centralLatLng (precon_projects) {
    const Central = ["Etobicoke","North York","Toronto","Scarborough"]
    let prCities = Central.map((value) => {
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA`)
        .then(response => response.json())
        .then(data => {
          let filteredList = precon_projects.filter((projects) => projects.City === value);
          return {city: value,coordinates: [data.features[0].center[0], data.features[0].center[1]], 
            cityData: filteredList};
        }) 
    })
    const filteredData = await Promise.all(prCities);
    if(filteredData) {
      setCentralRegion(filteredData);
    }
  }

  useEffect(() => {
    fetchCityDetails();
    fetchProjects();
  }, []);

  return (
    <SearchLayout>
      <MapWrap>
        {westRegion && northRegion && eastRegion && centralRegion ?
          <PreconMap {...{ viewState, setViewState, setonClick, region,
            setSelectedRegion ,filteredProjects, eastRegion, westRegion, centralRegion, northRegion,
            setEastRegion, setWestRegion, setCentralRegion, setOpenProjectsModal,
            setNorthRegion, setSelectedCityData  }} />         
          : <div className="loader-center" style={{margin: "100px"}}><Loader type="ThreeDots" color="#f89e37" /></div>
          }
      </MapWrap>
      <Sidebar setOpenModal={setOpenModal} eastRegion={eastRegion} westRegion={westRegion} 
        centralRegion={centralRegion} northRegion={northRegion} 
        selectedRegion={selectedRegion} />
        {openModal && <AppointmentModal setOpenModal={setOpenModal} />}
        {openProjectsModal && (
          <ProjectPopUp selectedCityData={selectedCityData} setOpenProjectsModal={setOpenProjectsModal} />
        )}
    </SearchLayout>
  );
};