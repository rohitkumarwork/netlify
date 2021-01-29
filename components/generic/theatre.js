
import styled from 'styled-components'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft  } from "@fortawesome/free-solid-svg-icons";
import EmblaCarouselReact from 'embla-carousel-react'

const TheatreSlide = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.background});
  background-color: lightgray;
  flex: 0 0 auto;
  width: 100px;
  border-right: 5px solid whitesmoke;
  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  border-right: none;
  border-bottom: 5px solid whitesmoke;
`;
const ImageWrap = styled.div`
    height: 100%;
    display: flex;
`;
const Images = ({pictures, theatre}) => (
  <ImageWrap>
    {pictures.map(picture => 
      <TheatreSlide key={picture} background={picture}/>
    )}
  </ImageWrap>
)

const Wrap = styled.div`
  background-color: whitesmoke;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  .embla {
    height: 100%;
  }
`;





const NavigationButton = styled.button`
  background-color: #f89e3770;
  padding: 0px 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 80px;
  border: none;
  transition: background-color 0.25s ease;
  svg {
    color: #ffffffbf;
    width: 23px;
    height: 32px;
    transition: color 0.25s ease;
  }
  :focus {
    outline: none;
  }
  :hover {
    background-color: #f89e37;
    svg {
      color: white;
    }
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


const Theatre = ({pictures}) => {
  const [theatre, setTheatre] = useState(null)
  const pics = ["https://images.pexels.com/photos/2976190/pexels-photo-2976190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]

  const scrollNext = () => {
    theatre.scrollNext();
  }

  const scrollPrev = () => {
    theatre.scrollPrev();
  }

  return (
    <Wrap>
      <EmblaCarouselReact
        className="embla"
        emblaRef={setTheatre}
        options={{ loop: false, align: 'start' }}
        >
          <Images theatre pictures={pics}/>
      </EmblaCarouselReact>

      <LeftButton onClick={() => scrollPrev()}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>
      <RightButton onClick={() => scrollNext()}><FontAwesomeIcon icon={faChevronRight} /></RightButton>
    </Wrap>
  )
}

export default Theatre;