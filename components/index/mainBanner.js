import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchSelector from "./searchSelector";
import StarRatingComponent from "react-star-rating-component";
import HomeWorth from "./HomeWorth";

const Wrap = styled.div`
  width: 100%;
  float: left;
  position: relative;
  // margin-top: 96px;
  display: flex;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  float: left;
  position: relative;
  padding: 50px;
  margin-top: 96px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    margin-top: 0px;
    order: 2;
  }
`;

const HeadingTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  font-size: 66px;
  font-weight: 700;
  color: #363636;
  line-height: 80px;
  margin-bottom: 30px;
  box-sizing: border-box;
  span {
    color: #f89e37;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 42px !important;
    line-height: 48px;
  }
  @media (max-width: 1440px) and (min-width: 1200px) {
    font-size: 54px;
    line-height: 66px;
  }
`;

const BannerSubtitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  margin-bottom: 50px;
  max-width: 500px;
  line-height: 30px;
  box-sizing: border-box;
`;

const HomeWorthSection = styled.div`
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px 0px #d5d5d559;
  padding: 25px;
`;

const Title = styled.div`
  width: 100%;
  float: left;
  position: relative;
  font-size: 24px;
  font-weight: 500;
  box-sizing: border-box;
  padding-bottom: 5px;
  margin-bottom: 0px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px !important;
    font-weight: 700;
  }
`;

const Subtitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const WorthBox = styled.div`
  width: 100%;
  float: left;
  position: relative;
  padding: 0px 0 0;

  border-radius: 10px;
  box-sizing: border-box;
`;

const FormBox = styled.div`
  width: 100%;
  float: left;
  position: relative;
  border: 1px solid #d5d5d5;
  display: inline-block;
  padding-right: 155px !important;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 30px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    border-radius: 10px;
    padding-right: 5px !important;
    padding-bottom: 50px;
  }
  @media (max-width: 1440px) and (min-width: 1200px) {
    border-radius: 10px;
    padding-right: 5px !important;
    padding-bottom: 50px;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    border-radius: 10px;
    padding-right: 5px !important;
    padding-bottom: 50px;
  }
`;
const InputField = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  padding: 0 15px;
  max-width: 316px;
  float: left;
  line-height: 40px;
  height: 40px;
  background: transparent;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100% !important;
    border-bottom: 1px solid #d5d5d552;
    border-radius: 0;
  }
  @media (max-width: 1440px) and (min-width: 1200px) {
    max-width: 100% !important;
    border-bottom: 1px solid #d5d5d552;
    border-radius: 0;
  }
  @media (max-width: 1880px) and (min-width: 1441px) {
    max-width: 204px;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    max-width: 100%;
    border-bottom: 1px solid #d5d5d552;
    border-radius: 0;
  }
`;

const ShowMe = styled.div`
  background: #f89e37;
  width: 140px;
  position: absolute;
  right: 7px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 30px;
  font-size: 14px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    width: calc(100% - 20px);
    right: 10px;
    bottom: 4px;
  }
  @media (max-width: 1440px) and (min-width: 1200px) {
    width: calc(100% - 20px);
    right: 10px;
    bottom: 4px;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    width: calc(100% - 20px);
    right: 10px;
    bottom: 4px;
  }
`;

const GoogleRating = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  vertical-align: middle;
  justify-content: center;
  border-top: 1px dashed #f89e3742;
  padding-top: 20px;
  img {
    padding: 8px;
    width: 110px;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 15px;
  }
`;
const GoogleReviwe = styled.a`
  width: 100%;
  float: left;
  text-align: center;
  font-size: 13px;
  font-weight: 300;
  color: #f89e37;
`;

const RightSection = styled.div`
  width: 50%;
  float: left;
  position: relative;
  height: 100%;
  display: flex;
  min-height: 777px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  align-items: center;
  box-sizing: border-box;
  margin-top: 96px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    min-height: 280px;
    order: 1;
    margin-top: 0px !important;
  }
`;

const MainBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleAddress = (e) => {
    if (e.target.name == "address") {
      setAddress(e.target.value);
    }
    if (e.target.name == "unit") {
      setUnit(e.target.value);
    }
  };
  var autocomplete;
  useEffect(() => {
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );

    autocomplete.addListener("place_changed", handlePlaceSelect);
  }, []);

  const handlePlaceSelect = () => {
    let addressObject = autocomplete.getPlace();
    let address = addressObject.address_components;

    let asds = addressObject.formatted_address;
    if (asds) {
      setAddress(asds);
    }
  };

  return (
    <Wrap>
      {/* <AccentImage src="../../static/images/home-hero.jpg"  alt="Our image banner"/> */}
      <LeftSection>
        <HeadingTitle
          style={{ fontSize: "66px", fontWeight: 700, marginBottom: 30 }}
        >
          GTA <span>Townhomes</span>
          <br />
          This is what we do.
        </HeadingTitle>
        <BannerSubtitle>
          Why go anywhere else when you could have the specialists?
          <br />
          We give you choice and transparency with every step of the realty
          process
        </BannerSubtitle>
        <HomeWorthSection>
          <Title>What Is Your Home Worth Today?</Title>
          <Subtitle>Ask The Specialists!</Subtitle>
          <WorthBox>
            <FormBox>
              <InputField
                type="text"
                id="autocomplete"
                placeholder="Please enter your address"
                name="address"
                onChange={(e) => handleAddress(e)}
              />
              <InputField
                type="text"
                placeholder="Unit #"
                name="unit"
                onChange={(e) => handleAddress(e)}
              />
              <ShowMe onClick={handleClick} style={{ cursor: "pointer" }}>
                show me
              </ShowMe>
            </FormBox>
            <GoogleRating>
              4.0
              <StarRatingComponent
                name="rate1"
                style={{ marginBottom: 0 }}
                starCount={5}
                value={4}
              />
              and 28
              <img src="../../static/images/google.png" />
              reviews
            </GoogleRating>
            <GoogleReviwe
              target="_blank"
              href="https://www.google.com/search?sxsrf=ALeKk01aQ1H1lvsNOIhyIE5RiyQCemzQFA%3A1593521872943&source=hp&ei=0Db7XovANqGtytMP2pqDwA0&q=mytownhome&oq=mytownhome&gs_lcp=CgZwc3ktYWIQAzIECCMQJzICCAAyAggAMgIIADICCAAyBAgAEAo6BwgjEOoCECc6BQgAELEDOgUIABCDAToHCAAQsQMQClDV6gFYg4ICYLuGAmgCcAB4AIABngGIAfcHkgEDOC4zmAEAoAEBqgEHZ3dzLXdperABBg&sclient=psy-ab&ved=0ahUKEwiL6LPJy6nqAhWhlnIEHVrNANgQ4dUDCAk&uact=5#lrd=0x882b47ab8530ad41:0x9223662e52f22a4b,1"
            >
              {" "}
              See All Reviews
            </GoogleReviwe>
          </WorthBox>
        </HomeWorthSection>
      </LeftSection>
      {isOpen && <HomeWorth setIsOpen={setIsOpen} address={address} />}
      <RightSection
        style={{
          backgroundImage: `url(${"../../static/images/home-hero.png"})`,
        }}
      >
        <SearchSelector />
      </RightSection>
    </Wrap>
  );
};
export default MainBanner;
