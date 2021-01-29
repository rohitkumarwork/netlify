
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft  } from "@fortawesome/free-solid-svg-icons";
import EmblaCarouselReact from 'embla-carousel-react'
import Map from '../search-townhomes/listingPreviewMap'

const Wrap = styled.div`
  background-color: whitesmoke;
  position: relative;
`;

const Slide  = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.background});
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
  border-bottom: 5px solid whitesmoke;
`;

const NavigationButton = styled.button`
  background-color: #F89E37;
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
const LeftButton = styled(NavigationButton)`
  left: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

`;
const RightButton = styled(NavigationButton)`
  right: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const MapButton = styled.p`
  background-color: #F89E37;
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
const WrappedCarousel = styled(EmblaCarouselReact)`
  display: ${props => props.active ? 'inherit' : 'none'};
`;

const MapWrap = styled.div`
  height: 500px;
  display: ${props => props.active ? 'inherit' : 'none'};
`;

const Images = ({pictures, theatre}) => (
  <div style={{ display: 'flex' }}>
    {pictures.map((picture) => {
      if (theatre) {
        return <TheatreSlide key={picture} background={picture}/>
      } else {
        return <Slide key={picture} background={picture}>
          <div className="darken"/>
        </Slide>
      }
    })}
  </div>
)


const ImageSlideshow = ({listing}) => {
  const [embla, setEmbla] = useState(null)
  const [theatre, setTheatre] = useState(null)
  const [sliderIndex, setSliderIndex] = useState(null)
  const [mapView, setMapView] = useState(false)

  useEffect(() => {
    if (embla) {
      embla.on('dragEnd', () => {
        setSliderIndex(embla.selectedScrollSnap())
      })
    }
    if (theatre) {
      theatre.on('dragEnd', () => {
        setSliderIndex(theatre.selectedScrollSnap())
      })
    }
  }, [embla, theatre])

  useEffect(() => {
    if (sliderIndex) {
      embla.scrollTo(sliderIndex)
      theatre.scrollTo(sliderIndex)
      setMapView(false);

    }
  }, [sliderIndex])

  const scrollNext = () => {
    embla.scrollNext();
    theatre.scrollNext();
  }

  const scrollPrev = () => {
    embla.scrollPrev();
    theatre.scrollPrev();
  }
  const scrollToPage = (index) => {
    setSliderIndex(index) 
  }

  return (
    <Wrap>

      <div style={{position: 'relative'}}>
        <MapWrap active={mapView} >
          <Map listing={listing} layers={[]}/>
        </MapWrap>
        <WrappedCarousel
          active={!mapView}
          emblaRef={setTheatre}
          options={{ loop: false, align: 'start' }}
          >
            <Images theatre pictures={JSON.parse(listing.pictures)}/>
          </WrappedCarousel>
          <MapButton onClick={() => {setMapView(!mapView)}}>{mapView ? 'Pictures' : 'Map'}</MapButton>
      </div>

      <EmblaCarouselReact
        emblaRef={setEmbla}
        options={{ loop: false, align: 'start' }}
        >
          <Images pictures={JSON.parse(listing.pictures)}/>
      </EmblaCarouselReact>
      {!mapView &&
        <>
          <LeftButton onClick={() => scrollPrev()}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>
          <RightButton onClick={() => scrollNext()}><FontAwesomeIcon icon={faChevronRight} /></RightButton>
        </>
      }


    </Wrap>
  )
}

export default ImageSlideshow;