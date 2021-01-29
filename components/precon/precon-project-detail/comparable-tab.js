import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  
  const Slide = styled.div`
    width: 90%;
    float: left;
    margin-left: 50px;
    margin-top: 20px;
  
    .slick-slide {
      height: 300px;
      // width:100px;
    }
  
    .slick-slide img {
      height: 300px;
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
      right: -45px;
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

const CompareableTabs = ({activeKey, handleKeyChange}) => {
    return (
        <div className={ activeKey=="Comparables" ? "tab-pane fade show active" : "tab-pane fade " } id="Comparables" role="tabpanel" aria-labelledby="contact-tab" onClick={(e)=> handleKeyChange(e, "Comparables")}>
            <div className="innerContentzone">
                <div className="peraContent">
                    <div className="title"> APPLEWOOD Comparables PROJECTS </div>
                    <div className="subtitle"> A boutique community of condominium townhomes by the creek, a place to gather and grow. With a location that puts you just steps from shopping, restaurants, schools, parks, the Zum transit system, and a short drive from highways 407 and 401, you’ll find yourself at home in this coveted Brampton neighbourhood. </div>
                </div>
                <Slide>
                <Slider {...settings}>
                <div className="peraContent">
                    <div className="title"> APPLEWOOD PRECON PROJECTS </div>
                    <div className="subtitle"> Chinguacousy Rd & Remembrance Rd </div>
                    <div className="projectSlider">
                        <div className="container">
                            <div className="row text-center projectSliderBox">
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="peraContent">
                    <div className="title"> APPLEWOOD PRECON PROJECTS </div>
                    <div className="subtitle"> Chinguacousy Rd & Remembrance Rd </div>
                    <div className="projectSlider">
                        <div className="container">
                            <div className="row text-center projectSliderBox">
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad">Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="peraContent">
                    <div className="title"> APPLEWOOD PRECON PROJECTS </div>
                    <div className="subtitle"> Chinguacousy Rd & Remembrance Rd </div>
                    <div className="projectSlider">
                        <div className="container">
                            <div className="row text-center projectSliderBox">
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="peraContent">
                    <div className="title"> APPLEWOOD PRECON PROJECTS </div>
                    <div className="subtitle"> Chinguacousy Rd & Remembrance Rd </div>
                    <div className="projectSlider">
                        <div className="container">
                            <div className="row text-center projectSliderBox">
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-inn">
                                    <div className="applewoodProject">
                                        <div className="homePicBox" style={{ 'background': 'url(../static/images/home.png)'}}> </div>
                                        <div className="homeDetails">
                                            <div className="projectName"> Mount Pleasant North </div>
                                            <div className="projectNameRoad"> Chinguacousy Rd & Remembrance Rd </div>
                                            <div className="homePro">
                                                <ul>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bed.png" />3 Bedrooms </div>
                                                    </li>
                                                    <li>
                                                        <div className="bedDetails"> <img src="../static/images/bath.png" />2 Bathroom </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sqFeet">
                                                <div className="sq"> 1092 Sq Ft </div>
                                                <div className="Price"> $594,999 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Slider>
                </Slide>
            </div>
        </div>
    )
}

export default CompareableTabs;