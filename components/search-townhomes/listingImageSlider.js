import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Map from "../search-townhomes/listingPreviewMap";

const settings = {
  // infinite: true,
  // speed: 500,
  // slidesToShow: 2,
  // slidesToScroll: 2,
  // speed: 5000,
  // autoplay: true,
  // autoplaySpeed: 2000,
  // variableWidth: true
  infinite: true,
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  autoplaySpeed: 2000,
};
const Wrap = styled.div`
  background-color: whitesmoke;
  position: relative;
`;

const NavigationButton = styled.button`
  background-color: #f89e37;
  padding: 7px 6px;
  position: absolute;
  top: -115px;
  bottom: 0;
  margin: auto;
  height: 54px;
  svg {
    color: white;
    width: 23px !important;
    height: 35px !important;
  }
`;

const MapButton = styled.p`
  background-color: #f89e37;
  color: white;
  padding: 5px 11px;
  position: absolute;
  bottom: 15px;
  right: 10px;
  z-index: 5;
  font-size: 19px;
  border-radius: 8px;
  cursor: pointer;
`;
const Slide = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.background});
  background-color: lightgray;
  flex: 0 0 auto;
  height: 100px;
  width: 100px;
  border-right: 5px solid whitesmoke;
  box-sizing: border-box;
  .darken {
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  &.is-selected {
    .darken {
      display: none;
    }
  }
`;
const TheatreSlide = styled(Slide)`
  width: 100%;
  height: 500px;
  border-right: none;
  // border-bottom: 0px solid whitesmoke;
  .slick-slide img {
    display: block;
    height: 245px;
    width: 100%;
    padding: 0 5px;
  }
  .slick-list {
    margin-left: 0px;
    margin-right: 0px;
  }
  .slick-arrow slick-next {
    z-index: 2;
  }
  .slick-arrow slick-prev {
    z-index: 2;
  }
  .slick-prev {
    left: 23px;
    z-index: 2;
  }
  .slick-next {
    right: 35px;
  }
  .slick-prev:before {
    // content: "<";
    color: #e9840f;
    font-size: 40px;
  }

  .slick-next:before {
    // content: ">";
    color: #e9840f;
    font-size: 40px;
  }
`;
const MapWrap = styled.div`
  height: 500px;
  display: ${(props) => (props.active ? "inherit" : "none")};
`;
const ListingImage = styled.div`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 250px;
  width: 100%;
  background-position: center;
  background-size: cover;
  object-fit: contain;
`;

const ListingImageSlider = ({ listing }) => {
  const [mapView, setMapView] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {}, []);
  useEffect(() => {
    if (listing) {
      const temp = listing.pictures;
      const filter = temp.substring(1, temp.length - 1);
      const array = filter.split(",");
      setImages(array);
    }
  }, [listing]);
  return (
    <Wrap>
      <div>
        <MapWrap active={mapView}>
          <Map listing={listing} layers={[]} />
        </MapWrap>
        {!mapView && (
          <TheatreSlide>
            <Slider {...settings}>
              {images &&
                images.map((obj) => (
                  <ListingImage imageUrl={obj.slice(1, -1)} />
                ))}
            </Slider>
          </TheatreSlide>
        )}
        <MapButton
          onClick={() => {
            setMapView(!mapView);
          }}
        >
          {mapView ? "Pictures" : "Map"}
        </MapButton>
      </div>
    </Wrap>
  );
};

export default ListingImageSlider;
