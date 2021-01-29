import React from "react";
//react-slick
import Slider from "react-slick";

///ui and styling
import styled from "styled-components";
//images
import image1 from "./precon-assets/zip.png";
import image2 from "./precon-assets/building.png";
import image3 from "./precon-assets/interesticon1.png";
import image4 from "./precon-assets/interesticon2.png";
import image5 from "./precon-assets/interesticon3.png";
import image6 from "./precon-assets/interesticon4.png";
import image7 from "./precon-assets/interesticon5.png";
import image8 from "./precon-assets/interesticon6.png";
import image9 from "./precon-assets/statIcon1.png";
import image10 from "./precon-assets/statIcon2.png";
import image11 from "./precon-assets/statIcon3.png";
import image12 from "./precon-assets/statIcon4.png";
import image13 from "./precon-assets/statIcon5.png";
import image14 from "./precon-assets/share.png";
import image15 from "./precon-assets/heartred.png";
import projectpic from "./precon-assets/projectPic1.jpg";
//slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // speed: 5000,
  // autoplay: true,
  // autoplaySpeed:2000,
  // variableWidth: true
};

const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // speed: 5000,
  // autoplay: true,
  // autoplaySpeed:2000,
  variableWidth: true,
};

const Container = styled.div`
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 100%;
  }
  .slick-arrow slick-next {
    z-index: 2;
  }
  .slick-prev {
    left: -25px;
  }
  .slick-next {
    right: -13px;
  }
  .slick-prev:before {
    color: #e9840f;
    font-size: 20px;
  }

  .slick-next:before {
    color: #e9840f;
    font-size: 20px;
  }
`;

const BuildingContentBox = styled.div`
  .slick-arrow slick-next {
    z-index: 2;
  }

  .slick-prev {
    left: 430px;
    top: 430px;
    z-index: 2;
  }
  .slick-next {
    right: 35px;
    top: 430px;
  }
  .slick-prev:before {
    color: #e9840f;
    font-size: 30px;
  }
  .slick-next:before {
    color: #e9840f;
    font-size: 30px;
  }
`;

function PreconProjectHeader({data}) {
  console.log("======>>>>",data)
  return (
    <div className="BannerBox">
      <div className="DownloadZip">
        <img style={{ width: 20 }} src={image1} />
        <span className="DownloadZipSpan">Download Zip</span>
      </div>
      <div className="LeftSidebox">
        <div className="LeftPanel">
          <div className="ProjectTitlePrecon">{data.Community}</div>
          <div className="ProjectRoadPrecon">
            {data.Address}
          </div>
          <div className="ConstrucionDevelop">
            {data.Developer_Builder.name}
          </div>
          <div className="StagePos">
            <div className="PotionsBox">
              <img className="PotionsBoxImg" src={image2} />
              <span className="PotionsBoxSpan">Stage</span>
               {data.Stage}
            </div>
          </div>
        </div>
        <div className="RightPanel">
          <div className="RightPanelStep">
            <span className="Span1" style={{ color: "#f89e37" }}>
              Price
            </span>
            <span className="Span2">${data.Starting_From_Price}</span>
          </div>
          <div className="RightPanelStep">
            <span className="Span1" style={{ color: "#26c601" }}>
              Cash Back
            </span>
            <span className="Span2">N/A</span>
          </div>
          <div className="RightPanelStep">
            <span className="Span1" style={{ color: "#de00cd" }}>
              Selling Since
            </span>
            <span className="Span2">{data.Last_Interaction}</span>
          </div>
        </div>
        <div className="PointInterest">
          <div className="PointInterestHeading">Point Of Interest</div>
          <div className="Points">
            <ul>
              <li>
                <div className="InterestIcons">
                  <img src={image3} />
                  <span>Health Care</span>
                </div>
              </li>
              <li>
                <div className="InterestIcons">
                  <img src={image4} />
                  <span>Education</span>
                </div>
              </li>
              <li>
                <div className="InterestIcons">
                  <img src={image5} />
                  <span>Transmit</span>
                </div>
              </li>
              <li>
                <div className="InterestIcons">
                  <img src={image6} />
                  <span>Food</span>
                </div>
              </li>
              <li>
                <div className="InterestIcons">
                  <img src={image7} />
                  <span>Commute</span>
                </div>
              </li>
              <li>
                <div className="InterestIcons">
                  <img src={image8} />
                  <span>Day Care</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="PreconStatistics">
          <div className="PreconStatisticsHeading">Applewood Statistics</div>
          <div className="Statistics">
            <Container>
              <Slider {...settings}>
                <div className="BrandLogos">
                  <img src={image9} />
                  <div className="StatsSliderContainer">
                    Average Sale Price
                    <span>$N/A</span>
                  </div>
                </div>
                <div className="BrandLogos">
                  <img src={image10} />
                  <div className="StatsSliderContainer">
                    3-Year Appreciation Rate
                    <span>N/A</span>
                  </div>
                </div>
                <div className="BrandLogos">
                  <img src={image11} />
                  <div className="StatsSliderContainer">
                    Average Rental Price
                    <span>N/A</span>
                  </div>
                </div>
                <div className="BrandLogos">
                  <img src={image12} />
                  <div className="StatsSliderContainer">
                    Average Day on Market
                    <span>N/A</span>
                  </div>
                </div>
                <div className="BrandLogos">
                  <img src={image13} />
                  <div className="StatsSliderContainer">
                    $ Sq per Ft
                    <span>${data.Sq_Ft_Range}</span>
                  </div>
                </div>
              </Slider>
            </Container>
          </div>
        </div>
          <div className="shareLinks">
            <ul>
                <li>
                  <a href="#">
                      <img src="../static/images/share.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                      <img src="../static/images/heartred.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                       <img src="../static/images/share.png" />
                  </a>
                </li>
            </ul>
        </div>
      </div>
      <div className="RightSideBox">
        <BuildingContentBox>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{'background-image': 'url(../static/images/slider1.png)'}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{'background-image': 'url(../static/images/slider1.png)'}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{'background-image': 'url(../static/images/slider1.png)'}}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{'background-image': 'url(../static/images/slider1.png)'}}></li>
          </ol>
          <Slider {...settings2}>
            <div className="RightSideBoxSlider">
              <img src={'../static/images/slider1.png'} />
            </div>
            <div className="RightSideBoxSlider">
              <img src={'../static/images/slider1.png'} />
            </div>
            <div className="RightSideBoxSlider">
              <img src={'../static/images/slider1.png'} />
            </div>
          </Slider>
        </BuildingContentBox>
      </div>
    </div>
  );
}

export default PreconProjectHeader;
