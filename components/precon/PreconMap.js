// Core stuff
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Projectpic1 from "./precon-assets/projectPic1.jpg";
// functional pieces
import StaticMap, { Popup } from "react-map-gl";
import DeckGL from "deck.gl";
import { PolygonLayer, ScatterplotLayer } from "@deck.gl/layers";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA";

//map data
const central = [
  [43.58028706246416, -79.52229539554033],
  [43.69359023575162, -79.59370652835283],
  [43.7336548473907, -79.61975345395994],
  [43.83952141047993, -79.25131422124842],
  [43.73771978453271, -79.18266484495362],
  [43.70888882965389, -79.24186292564406],
  [43.63965334965294, -79.34774688520156],
  [43.63028450900237, -79.40649021395812],
  [43.63681855075271, -79.47072670677719],
];

const eastern = [
  [43.979895108899655, -79.2058038331062],
  [44.03642697652308, -78.92070814597852],
  [43.86422326842375, -78.81055142310454],
  [43.84781496215848, -78.90304613141792],
  [43.84725068790175, -78.94884894520007],
  [43.827796514026986, -78.99582261475656],
  [43.749184868269246, -79.18527432211745],
  [43.86067186203622, -79.2595521464039],
  [43.95445831736257, -79.29696605648468],
];

const north = [
  [43.978419549291814, -79.79366074832846],
  [43.7336548473907, -79.61975345395994],
  [43.828966515699946, -79.25131422124842],
  [44.224071981795696, -79.41058077425258],
  [44.1940291519981, -79.48405041197988],
  [44.13675098920775, -79.49725164108656],
];

const west = [
  [43.59423020733486, -79.53370312244846],
  [43.49120168171012, -79.61747387440158],
  [43.37377398740479, -79.73077038319065],
  [43.32596488367938, -79.78741863758518],
  [43.278118122747465, -79.87153271229221],
  [43.2881153354459, -79.97590282947971],
  [43.35006138455429, -79.89075878651096],
  [43.59224098630771, -80.27665356190158],
  [43.77051168031722, -80.00542858631565],
  [43.89607451276586, -80.16507366688205],
  [43.93895167563291, -79.99860504658176],
  [43.936015869304434, -79.77385738880588],
];

//map data conversion
const polygonData1 = [
  {
    contours: central.map((subarray) => subarray.reverse()),
    name: "firstPolygon",
  },
];

const polygonData2 = [
  {
    contours: eastern.map((subarray) => subarray.reverse()),
    name: "firstPolygon",
  },
];

const polygonData3 = [
  {
    contours: north.map((subarray) => subarray.reverse()),
    name: "firstPolygon",
  },
];

const polygonData4 = [
  {
    contours: west.map((subarray) => subarray.reverse()),
    name: "firstPolygon",
  },
];

const PreconMap = ({
  viewState,
  setViewState,
  setonClick,
  setSelectedRegion,
  eastRegion,
  westRegion,
  centralRegion,
  northRegion,
  setOpenProjectsModal,
  setWestRegion,
  setEastRegion,
  setNorthRegion,
  setCentralRegion,
  setSelectedCity,
  selectedScatterplot,
  selectedHome,
}) => {
  const [layers, setLayers] = useState([]);
  const [popup, setPopup] = useState(false);
  const [totalProjectsPopup, setTotalProjectsPopup] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [projects, setProjects] = useState();
  const [hoveredRegion, setHoveredRegion] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [xAxis, setXAxis] = useState();
  const [yAxis, setYAxis] = useState();
  const [selectedLayerData, setSelectedLayerData] = useState();
  const [isSelected, setIsSelected] = useState(false);

  console.log("northRegion", northRegion);

  const LAYER_POLY1 = new PolygonLayer({
    id: "poly-layers",
    data: polygonData1,
    stroked: true,
    filled: true,
    extruded: false,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: (d) => d.contours,
    getLineColor: [23, 44, 99],
    getFillColor: [23, 44, 99, 0.8],
    getLineWidth: 1000,
    pickable: true,
    onClick: (info, event) => {
      setLayers([LAYER_POLY1, centralRegionScatterplot]);
      setTotalProjectsPopup(false);
      setSelectedRegion("Central");
      setonClick(true);
      setIsSelected(true);
      setViewState({
        ...viewState,
        zoom: viewState.zoom + 1,
        transitionDuration: 5000,
      });
    },
    onHover: (info) => {
      console.log("info", info);
      setHoveredRegion("Central");
      setTotalProjectsPopup(true);
      setXAxis(info.x);
      setYAxis(info.y);
      setSelectedLayerData(centralRegion);
    },
  });

  //map polygon layer
  const LAYER_POLY2 = new PolygonLayer({
    id: "poly-layers2",
    data: polygonData2,
    stroked: true,
    filled: true,
    extruded: false,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: (d) => d.contours,
    getLineColor: [228, 0, 255],
    getFillColor: [228, 0, 255, 0.8],
    getLineWidth: 800,
    pickable: true,
    onClick: (info, event) => {
      setSelectedRegion("East");
      setTotalProjectsPopup(false);
      setLayers([LAYER_POLY2, eastRegionScatterplot]);
      setonClick(true);
      setIsSelected(true);
      setViewState({
        ...viewState,
        zoom: viewState.zoom + 1,
        transitionDuration: 5000,
      });
    },
    onHover: (info) => {
      console.log("info", info);
      setHoveredRegion("East");
      setTotalProjectsPopup(true);
      setXAxis(info.x);
      setYAxis(info.y);
      setSelectedLayerData(eastRegion);
    },
  });

  //map polygon layer
  const LAYER_POLY3 = new PolygonLayer({
    id: "poly-layers3",
    data: polygonData3,
    stroked: true,
    filled: true,
    extruded: false,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: (d) => d.contours,
    getLineColor: [255, 0, 0],
    getFillColor: [255, 0, 0, 0.8],
    getLineWidth: 800,
    pickable: true,
    onClick: (info, event) => {
      setSelectedRegion("North");
      setTotalProjectsPopup(false);
      setLayers([LAYER_POLY3, northRegionScatterplot]);
      setonClick(true);
      setIsSelected(true);
      setViewState({
        ...viewState,
        zoom: viewState.zoom + 1,
        transitionDuration: 5000,
      });
    },
    onHover: (info) => {
      console.log("info", info);
      setHoveredRegion("North");
      setTotalProjectsPopup(true);
      setXAxis(info.x);
      setYAxis(info.y);
      setSelectedLayerData(northRegion);
    },
  });

  // map polygon layer
  const LAYER_POLY4 = new PolygonLayer({
    id: "poly-layers4",
    data: polygonData4,
    stroked: true,
    filled: true,
    extruded: false,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: (d) => d.contours,
    getLineColor: [0, 255, 0],
    getFillColor: [0, 255, 0, 0.8],
    getLineWidth: 800,
    pickable: true,
    onClick: (info, event) => {
      setSelectedRegion("West");
      setTotalProjectsPopup(false);
      setLayers([LAYER_POLY4, westRegionScatterplot]);
      setonClick(true);
      setIsSelected(true);
      setViewState({
        ...viewState,
        zoom: viewState.zoom + 1,
        transitionDuration: 5000,
      });
    },
    onHover: (info) => {
      console.log("info", info);
      setHoveredRegion("West");
      setTotalProjectsPopup(true);
      setXAxis(info.x);
      setYAxis(info.y);
      setSelectedLayerData(westRegion);
    },
  });

  const westRegionScatterplot = new ScatterplotLayer({
    id: "scatterplot-layer1",
    data: westRegion,
    pickable: true,
    getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 7,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: (d) => d.coordinates,
    getRadius: 10,
    getFillColor: (d) => [248, 158, 55],
    getLineColor: (d) => [248, 158, 55],
    onClick: (info, event) => {
      setWestRegion([info.object]);

      let obj = {
        name: info.object.city,
        region: "west",
      };
      console.log("infoooooooo", info);
      setSelectedCity(obj);
      setLayers([LAYER_POLY4, selectedCityScatterplot]);
      setViewState({
        longitude: info.object.coordinates[0],
        latitude: info.object.coordinates[1],
        zoom: 11,
        transitionDuration: 3000,
      });
      // setSelectedCityData([info.object]);
      // setOpenProjectsModal(true);
    },

    onHover: (info) => {
      if (info.object) {
        setPopup(true);
        setLatitude(info.coordinate[1]);
        setLongitude(info.coordinate[0]);
        setProjects(info.object);
        setX(info.x);
        setY(info.y);
      }
    },
  });

  const northRegionScatterplot = new ScatterplotLayer({
    id: "scatterplot-layer2",
    data: northRegion,
    pickable: true,
    getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 7,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: (d) => d.coordinates,
    getRadius: 10,
    getFillColor: (d) => [248, 158, 55],
    getLineColor: (d) => [248, 158, 55],
    onClick: (info, event) => {
      // setNorthRegion([info.object]);
      let obj = {
        name: info.object.city,
        region: "north",
      };
      console.log("infoooooooo", info);
      setSelectedCity(obj);
      setLayers([LAYER_POLY3, selectedCityScatterplot]);
      setViewState({
        longitude: info.object.coordinates[0],
        latitude: info.object.coordinates[1],
        zoom: 11,
        transitionDuration: 3000,
      });
    },
    onHover: (info) => {
      if (info.object) {
        console.log("info.object:::>>>", info.object);
        setPopup(true);
        setLatitude(info.coordinate[1]);
        setLongitude(info.coordinate[0]);
        setProjects(info.object);
        setX(info.x);
        setY(info.y);
      }
    },
  });

  const centralRegionScatterplot = new ScatterplotLayer({
    id: "scatterplot-layer3",
    data: centralRegion,
    pickable: true,
    getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 7,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: (d) => d.coordinates,
    getRadius: 10,
    getFillColor: (d) => [248, 158, 55],
    getLineColor: (d) => [248, 158, 55],
    onClick: (info, event) => {
      setCentralRegion([info.object]);

      let obj = {
        name: info.object.city,
        region: "central",
      };
      console.log("infoooooooo", info);
      setSelectedCity(obj);
      setLayers([LAYER_POLY1, selectedCityScatterplot]);
      setViewState({
        longitude: info.object.coordinates[0],
        latitude: info.object.coordinates[1],
        zoom: 11,
        transitionDuration: 3000,
      });

      // setSelectedCityData([info.object]);
      // setOpenProjectsModal(true)
    },
    onHover: (info) => {
      if (info.object) {
        setPopup(true);
        setLatitude(info.coordinate[1]);
        setLongitude(info.coordinate[0]);
        setProjects(info.object);
        setX(info.x);
        setY(info.y);
      }
    },
  });

  const eastRegionScatterplot = new ScatterplotLayer({
    id: "scatterplot-layer4",
    data: eastRegion,
    pickable: true,
    getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 7,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: (d) => d.coordinates,
    getRadius: 10,
    getFillColor: (d) => [248, 158, 55],
    getLineColor: (d) => [248, 158, 55],
    onClick: (info, event) => {
      setEastRegion([info.object]);

      let obj = {
        name: info.object.city,
        region: "east",
      };
      console.log("infoooooooo", info);
      setSelectedCity(obj);
      setLayers([LAYER_POLY2, selectedCityScatterplot]);
      setViewState({
        longitude: info.object.coordinates[0],
        latitude: info.object.coordinates[1],
        zoom: 11,
        transitionDuration: 3000,
      });

      // setSelectedCityData([info.object]);
      // setOpenProjectsModal(true)
    },
    onHover: (info) => {
      if (info.object) {
        setPopup(true);
        setLatitude(info.coordinate[1]);
        setLongitude(info.coordinate[0]);
        setProjects(info.object);
        setX(info.x);
        setY(info.y);
      }
    },
  });
  // debugger;
  console.log("---------selectedHome-------", selectedHome);

  const selectedCityScatterplot = new ScatterplotLayer({
    id: "scatterplot-layer4",
    data: selectedHome,
    pickable: true,
    getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 7,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2,
    getPosition: (d) => d.coordinates,
    getRadius: 10,
    getFillColor: (d) => [248, 158, 55],
    getLineColor: (d) => [248, 158, 55],
    // onClick: (info, event) => {
    //   setEastRegion([info.object]);
    //   // setSelectedCityData([info.object]);
    //   // setOpenProjectsModal(true)
    // },
    onHover: (info) => {
      if (info.object) {
        setPopup(true);
        setLatitude(info.coordinate[1]);
        setLongitude(info.coordinate[0]);
        setProjects(info.object);
        setX(info.x);
        setY(info.y);
      }
    },
  });

  useEffect(() => {
    setLayers([LAYER_POLY4, LAYER_POLY3, LAYER_POLY2, LAYER_POLY1]);
    setTimeout(
      () =>
        setViewState({
          ...viewState,
          zoom: viewState.zoom + 0.3,
          transitionDuration: 500,
        }),
      2000
    );
  }, []);
  console.log("selectedScatterplot", selectedScatterplot);

  const handleProjectModal = (selectedData) => {
    setOpenProjectsModal(true);
    // setSelectedCityData(selectedData);
  };

  return (
    <div>
      <DeckGL
        viewState={viewState}
        onViewStateChange={({ viewState }) => {
          setViewState(viewState);
        }}
        controller={true}
        layers={[layers]}
      >
        <StaticMap
          //   ref={setmapComponent}
          reuseMaps
          mapStyle={"mapbox://styles/rohitkumar1/ckdo3fykp4n3t1ilibsish1cd"}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </DeckGL>
      {popup === true ? (
        <div className="tooltip1">
          <div
            className="tooltipContent"
            style={{
              top: y,
              left: x,
            }}
          >
            {projects && projects.cityData.length === 0 && (
              <div>No projects</div>
            )}
            {projects &&
              projects.cityData &&
              projects.cityData.map((value) => {
                return (
                  <div
                    className="projectCard"
                    onClick={() => handleProjectModal(value)}
                  >
                    <div
                      className="projectImg"
                      style={{ background: `url(${Projectpic1})` }}
                    ></div>
                    <div class="headTitle">
                      <div class="projectName">{value.Community}</div>
                      <div class="stage">VIP Launch</div>
                    </div>
                    <div className="price">$ {value.Starting_From_Price}</div>
                    <div class="area">{value.Address}</div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : null}
      {totalProjectsPopup === true && isSelected !== true && (
        <div
          className="total-projects-tooltip"
          style={{
            top: yAxis,
            left: xAxis,
          }}
        >
          <div className="region-text">{hoveredRegion}</div>
          <div className="flex-space-between border-bottom">
            <div>Comming Soon</div>
            <div>3</div>
          </div>
          <div className="flex-space-between border-bottom">
            <div>Registration</div>
            <div>3</div>
          </div>
          <div className="flex-space-between">
            <div>VIP Launch</div>
            <div>3</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreconMap;
