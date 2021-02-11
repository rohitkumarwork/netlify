import React, { useState, useEffect } from "react";
import Projectpic1 from "./precon-assets/projectPic1.jpg";
 
import StaticMap, { Popup } from "react-map-gl";
import DeckGL from "deck.gl";
import { ScatterplotLayer } from "@deck.gl/layers";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA";


const PreconCityMap = ({
  viewState,
  setViewState,
  selectedHome,
  setOpenProjectsModal,
  setSelectedCityData
}) => {
  const [layers, setLayers] = useState([]);
  const [popup, setPopup] = useState(false);
  const [projects, setProjects] = useState();
  const [hoveredRegion, setHoveredRegion] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [xAxis, setXAxis] = useState();
  const [yAxis, setYAxis] = useState();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
      setLayers([selectedCityScatterplot]);
  },[])

  const handleProjectModal = (selectedData) => {
    setOpenProjectsModal(true);
    setSelectedCityData(selectedData);
  };

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
    //   setSelectedCityData([info.object]);
    //   setOpenProjectsModal(true)
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
          {projects && projects.cityData &&
            <div
                    className="projectCard"
                    onClick={() => handleProjectModal(projects.cityData)}
                  >
                    <div
                      className="projectImg"
                      style={{ background: `url(${Projectpic1})` }}
                    ></div>
                    <div class="headTitle">
                      <div class="projectName">{projects.cityData.Community}</div>
                      <div class="stage">VIP Launch</div>
                    </div>
                    <div className="price">$ {projects.cityData.Starting_From_Price}</div>
                    <div class="area">{projects.cityData.Address}</div>
                  </div>
          }
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PreconCityMap;
