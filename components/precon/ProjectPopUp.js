import React, {useState, useEffect} from "react";
//slider
import Slider from "react-slick";
//style
import styled from "styled-components";
//images
import image1 from "./precon-assets/heartIcon.png";
import image2 from "./precon-assets/calculatorIcon.png";
import image3 from "./precon-assets/calanderIcon.png";
import image4 from "./precon-assets/submitIcon.png";
import Projectpic1 from "./precon-assets/projectPic1.jpg";
import image5 from "./precon-assets/bed.png";
import image6 from "./precon-assets/bath.png";
import image7 from "./precon-assets/Garage.png";
import Loader from "react-loader-spinner";
import { useRouter } from 'next/router'

const settings = {
  infinite: true,
  // speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 2000,
  // variableWidth: true
};

const Slide = styled.div`
  width: 90%;
  float: left;
  margin-left: 50px;
  margin-top: 20px;

  .slick-slide {
    height: 100px;
    // width:100px;
  }

  .slick-slide img {
    height: 100px;
    border-radius: 10px;
  }
  .slick-slide {
    // margin-left:  15px;
    // margin-right:  15px;
  }

  .slick-list {
    margin-left: -15px;
    margin-right: -15px;
  }
  .slick-arrow slick-next {
    z-index: 2;
  }
  .slick-prev {
    left: -48px;
  }
  .slick-next {
    right: -13px;
  }
  .slick-prev:before {
    // content: "<";
    color: #e9840f;
    font-size: 20px;
  }

  .slick-next:before {
    // content: ">";
    color: #e9840f;
    font-size: 20px;
  }
`;

function ProjectPopUp({ setOpenProjectsModal, selectedCityData }) {
  const [loading , setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if(selectedCityData !== undefined) {
      setLoading(false);
    }
  })

  return (
    <div className="PopUpWrap">
      <div>
        <div className="ModalHeading">
          <span
            className="CloseButton"
            onClick={() => setOpenProjectsModal(false)}
          >
            close x
          </span>
        </div>
        <div className="TotalDevlopProject"> 3 development projects</div>
        <div className="LeftSection">
    {loading === true ? <div className="loader-center"><Loader type="ThreeDots" color="#f89e37" /></div> : 
      <>
        {/* {selectedCityData.map((value) => value.cityData.map((value) => { */}
          {/* return <> */}
            <div className="DevelopedProjectDetails">
              <div className="TopHead">
                <div className="ProjectTitle">
                  {selectedCityData.Community}
                  <span className="Stage">VIP Launch</span>
                </div>
                <div className="PriceTitle">${selectedCityData.Starting_From_Price}</div>
              </div>
            </div>
            <Slide>
              <Slider {...settings}>
                {/* { images && images.map((obj)=>
                  <div style={{width:100 ,height:100,marginLeft:12}}><img src={obj.slice(1,-1)} /></div>
                )} */}
                <div style={{ width: 100, height: 100, marginLeft: 12 }}>
                  <img src={Projectpic1} />
                </div>
                <div style={{ width: 100, height: 100, marginLeft: 12 }}>
                  <img src={Projectpic1} />
                </div>
                <div style={{ width: 100, height: 100, marginLeft: 12 }}>
                  <img src={Projectpic1} />
                </div>
                <div style={{ width: 100, height: 100, marginLeft: 12 }}>
                  <img src={Projectpic1} />
                </div>
              </Slider>
            </Slide>
            <div className="ProjectInner">
              <ul className="ProjectInnerList">
                <li className="ProjectInnerListItem">
                  <div className="ProjectInterior">
                    <img src={image5} style={{ width: 20, marginRight: 4 }} />1 +
                      1 Bed Room
                  </div>
                </li>
                <li className="ProjectInnerListItem">
                  <div className="ProjectInterior">
                    <img src={image6} style={{ width: 20, marginRight: 4 }} />2
                    Bath Room
                  </div>
                </li>
                <li className="ProjectInnerListItem">
                  <div className="ProjectInterior">
                    <img src={image7} style={{ width: 20, marginRight: 4 }} />1 +
                    3 parking slots
                  </div>
                </li>
                <li className="ProjectInnerListItem">
                  <div className="ProjectInterior" onClick={() =>  router.push({
                      pathname: '/precon-project/[project]',
                      query: { project: selectedCityData.Community, data: JSON.stringify(selectedCityData) },
                    })}
                  >
                    <p className="InfoBtn">View Project Details</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* </> */}
        {/* }))}         */}
      </>
    }
    </div>
    <div className="RightSection">
          <div className="HeadLine">In your personal purchase timeline</div>
          <div className="FollowLinksBox">
            <ul className="FollowLinksBoxList">
              <li className="FollowLinksBoxListItem">
                <div className="LinkList">
                  <img className="LinkListImg" src={image1} />
                  <div className="ContantIn">
                    Don’t Need to Speal to anyone yet
                    <p className="ContantInText">Register & Follow</p>
                  </div>
                </div>
              </li>
              <li className="FollowLinksBoxListItem">
                <div className="LinkList">
                  <img className="LinkListImg" src={image2} />
                  <div className="ContantIn">
                    Is this a Good buy?
                    <p className="ContantInText">Investment Analysis</p>
                  </div>
                </div>
              </li>
              <li className="FollowLinksBoxListItem">
                <div className="LinkList">
                  <img className="LinkListImg" src={image3} />
                  <div className="ContantIn">
                    I want to Register For
                    <p className="ContantInText">VIP platinum Access</p>
                  </div>
                </div>
              </li>
              <li className="FollowLinksBoxListItem">
                <div className="LinkList">
                  <img className="LinkListImg" src={image4} />
                  <div className="ContantIn">
                    I’m interested in buying
                    <p className="ContantInText">Submit Purchase Request</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="NeedInfo">
              <p className="InfoBtn">Need more Info? Speak to an Expert</p>
              <p className="InfoBtn2">Are you Agent? use our Agent Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopUp;
