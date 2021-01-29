// Core stuff
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// functional pieces
import StaticMap from "react-map-gl";
import DeckGL from "deck.gl";
// import IconClusterLayer from "./icon-cluster-layer";
import { ScatterplotLayer } from "@deck.gl/layers";

import ATLAS from "./images/location-icon-atlas2.png";
import MAPPING from "./images/location-icon-mapping.json";

import BedImage from "./images/bed.png";
import BathroomImage from "./images/toilet.png";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoicm9oaXRrdW1hcjEiLCJhIjoiY2tkbzJheWxpMW5zazJybGNwYXVxMWo1aSJ9.xIbmejDwM0vDos0zZfB6DA";

const Wrap = styled.div`
  position: relative;
`;
const SatelliteButton = styled.p`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: orange;
  z-index: 5;
  color: white;
  padding: 3px 7px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;
const ProjectCard = styled.div`
  float: left;
  position: relative;
  padding-left: 90px !important;
  padding: 7px;
  box-shadow: 0px 2px 12px 0px #d5d5d53b;
  border-radius: 0px;
  margin-bottom: 10px;
  background-color: #fff;
  height: auto;
  width: 17em;
  // overflow:scroll;
  // overflow-x: hidden;
  // ::-webkit-scrollbar {
  //   width: 5px;
  //   height:5px;
  // }
  // ::-webkit-scrollbar-thumb {
  //   background-color: #f89e37;
  //   outline: 1px solid #f89e37;
  //   border-radius: 30px;
  // }

  .homePro {
    ul {
      li {
        display: inline-block;
        margin-right: 10px;
        .bedDetails {
          font-size: 13px;
          img {
            width: 20px;
          }
        }
      }
    }
  }
`;
const HeadTitle = styled.div`
  float: left;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  font-weight: 700;
  flex-direction: column;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProjectName = styled.div`
  font-weight: 400;
  font-size: 13px;
  text-align: left;
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-weight: 600;
  color: #f89e37;
  float: left;
  font-size: 14px;
`;
const ProjectImage = styled.div`
  width: 80px;
  height: 110px;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 5px;
  position: absolute;
  left: 5px;
`;

const ListingSearchMap = ({
  listings,
  setViewport,
  viewState,
  setViewState,
  setSelectedListing,
  setViewPopUp,
}) => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [hoveredObject, sethoveredObject] = useState(null);
  const [expandedObjects, setexpandedObjects] = useState(null);
  const [mapComponent, setmapComponent] = useState(null);

  const [layers, SetLayers] = useState([]);
  const [forceRerender, setForceRerender] = React.useState(true);

  const [satellite, setSatellite] = useState(false);
  const [hoveredObjectScatterplot, sethoveredObjectScatterplot] = useState(
    null
  );
  const [xScatterplot, setxScatterplot] = useState(0);
  const [yScatterplot, setyScatterplot] = useState(0);

  useEffect(() => {
    // SetLayers([
    //   new IconClusterLayer({
    //     data: listings,
    //     pickable: true,
    //     wrapLongitude: true,
    //     getPosition: (d) => d.coordinates,
    //     iconAtlas: ATLAS,
    //     iconMapping: MAPPING,
    //     onHover: onHover,
    //     id: "icon-cluster",
    //     sizeScale: 60,
    //   }),
    // ]);
    SetLayers([
      new ScatterplotLayer({
        id: "scatterplot-layer1",
        data: listings,
        pickable: true,
        opacity: 1,
        stroked: true,
        filled: true,
        radiusScale: 7,
        radiusMinPixels: 8,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 2,
        getPosition: (d) => [d.longitude, d.latitude],
        getRadius: 10,
        getFillColor: (d) => [255, 140, 0],
        getLineColor: (d) => [211, 211, 211],
        onHover: onHoverScatterplot,
        onClick: onClickScatterplot,
      }),
    ]);
  }, [listings]);
  const onClickScatterplot = (info) => {
    console.log("info scatterplot", info);
    console.log("info", info.object);
    setSelectedListing(info.object);
    setViewPopUp(true);
  };

  const onHoverScatterplot = (info) => {
    const { x, y, object } = info;
    setxScatterplot(x);
    setyScatterplot(y);
    sethoveredObjectScatterplot(object);
  };
  // This is some premium bullshit. But deckgl is being a shit and not properly
  // following state. Probably soemthing i did wrong.
  useEffect(() => {
    setForceRerender(!forceRerender);
  }, [layers]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mapComponent) {
        const bounds = mapComponent.getMap().getBounds();
        setViewport({
          type: "Polygon",
          coordinates: [
            [
              bounds.getSouthWest().toArray().reverse(),
              bounds.getSouthEast().toArray().reverse(),
              bounds.getNorthEast().toArray().reverse(),
              bounds.getNorthWest().toArray().reverse(),
              bounds.getSouthWest().toArray().reverse(),
            ],
          ],
        });
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, [viewState]);

  function onHover(info) {
    if (expandedObjects) return;

    const { x, y, object } = info;
    setx(x);
    sety(y);
    sethoveredObject(object);
  }

  function onClick(info) {
    const { showCluster = true } = props;
    const { x, y, objects, object } = info;

    if (object && showCluster) {
      setx(x);
      sety(y);
      setexpandedObjects(objects || [object]);
    } else {
      closePopup();
    }
  }

  function closePopup() {
    if (expandedObjects) {
      setexpandedObjects(null);
      sethoveredObject(null);
    }
  }

  function renderhoveredItems() {
    if (expandedObjects) {
      return (
        <div className="tooltip interactive" style={{ left: x, top: y }}>
          {expandedObjects.map(({ name, year, mass, class: meteorClass }) => {
            return (
              <div key={name}>
                <h5>{name}</h5>
                <div>Year: {year || "unknown"}</div>
                <div>Class: {meteorClass}</div>
                <div>Mass: {mass}g</div>
              </div>
            );
          })}
        </div>
      );
    }

    if (!hoveredObject) {
      return null;
    }

    return hoveredObject.cluster ? (
      <div className="tooltip" style={{ left: x, top: y }}>
        <h5>{hoveredObject.point_count} records</h5>
      </div>
    ) : (
      <div className="tooltip" style={{ left: x, top: y }}>
        <h5>
          {hoveredObject.name}{" "}
          {hoveredObject.year ? `(${hoveredObject.year})` : ""}
        </h5>
      </div>
    );
  }

  return (
    <div>
      <SatelliteButton
        onClick={() => {
          setSatellite(!satellite);
        }}
      >
        {" "}
        {satellite ? "Streets" : "Satellite"}{" "}
      </SatelliteButton>
      <DeckGL
        layers={layers}
        controller={{ dragRotate: false }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => {
          setViewState(viewState);
        }}
      >
        <div>{forceRerender}</div>
        <StaticMap
          ref={setmapComponent}
          reuseMaps
          mapStyle={
            satellite
              ? "mapbox://sprites/mapbox/satellite-v9"
              : "mapbox://styles/rohitkumar1/ckdo3fykp4n3t1ilibsish1cd"
          }
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />

        {renderhoveredItems}
        {hoveredObjectScatterplot && (
          <ProjectCard style={{ left: xScatterplot, top: yScatterplot }}>
            <ProjectImage
              style={{
                backgroundImage: `url(${hoveredObjectScatterplot.thumbnail})`,
              }}
            ></ProjectImage>
            <HeadTitle>
              {hoveredObjectScatterplot.address}
              <ProjectName>{hoveredObjectScatterplot.city}</ProjectName>
            </HeadTitle>

            {/* <div>
              <img src={BedImage} />
              {hoveredObjectScatterplot.bedrooms} BD
            </div>
            <div>
              <img src={BathroomImage} />
              {hoveredObjectScatterplot.bathrooms} BD
            </div> */}
            <div class="homePro">
              <ul>
                <li>
                  <div class="bedDetails">
                    <img src={BedImage} />
                    {hoveredObjectScatterplot.bedrooms} BD
                  </div>
                </li>
                <li>
                  <div class="bedDetails">
                    <img src={BathroomImage} />
                    {hoveredObjectScatterplot.bathrooms} BR
                  </div>
                </li>
              </ul>
            </div>
            <div class="pricePanel">
              <Price> ${hoveredObjectScatterplot.price}</Price>
              <div class="sq">
                {hoveredObjectScatterplot.square_footage}sq ft
              </div>
            </div>
          </ProjectCard>
        )}
      </DeckGL>
    </div>
  );
};

export default ListingSearchMap;
