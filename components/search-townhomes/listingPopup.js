import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";
import DatePicker from "react-datepicker";
import {
  monthlyMortgage,
  mortgageInsurance,
  landTransferTax,
} from "../search-townhomes/mortgageCalculations";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_NEARBY_DATA,
  GET_MAP_DATA,
  GET_SCHOOL_DATA,
} from "../../components/generic/mapping/databaseCalls";
import TimePicker from "rc-time-picker";
import gql from "graphql-tag";
import TopHeader from "../../components/listing/topHeader";
import ImageSlideshow from "../../components/generic/imageSlideshow";
import ListingInfo from "../../components/listing/listingInfo";
import Remarks from "../../components/listing/remarks";
import ListingImageSlider from "../search-townhomes/listingImageSlider";
import ContactBox from "../../components/listing/contactBox";
import { successMsg } from "./../generic/alerts/FlashMessage";
import SoldStatistics from "../../components/listing/soldStatistics";
import BedImage from "./images/bed.png";
import BathroomImage from "./images/toilet.png";
import garageImage from "./images/garage-c.png";
import squareFeetImage from "./images/sq.png";
import CTA1Image from "./images/cta1.png";
import CTA2Image from "./images/cta2.png";
import CTA3Image from "./images/cta3.png";

const Darken = styled.div`
  position: fixed;
  background-color: #00000059;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99;
`;
const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  max-width: 80%;
  margin: auto;
  top: 100px;
  height: calc(100% - 100px);
  left: 0;
  right: 0;
  background-color: white;
  overflow: auto;

  @media (max-width: 1200px) {
    width: 900px;
  }

  @media (max-width: 1000px) {
    width: 800px;
  }
`;

const MainWrap = styled.div`
  width: 100%;
  padding: 25px;
`;

const ListingWrap = styled.div`
  width: 65%;
  display: inline-block;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
`;
const ContactGutter = styled.div`
  width: 35%;
  float: left;
  display: inline-block;
  height: 40px;
  vertical-align: top;
  //   text-align: center;
  padding: 0% 10px 0% 15px;
  box-sizing: border-box;
`;
const SectionsWrap = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
`;
const SectionButton = styled.p`
  width: 25%;
  text-align: center;
  background-color: ${(props) => (props.active ? "#F89E37" : "#f5f5f500")};
  color: ${(props) => (props.active ? "white" : "#7d7d7d")};
  padding: 9px;
  border: 1px solid white;
  border-radius: 5px 5px 0px 00px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #00000012;
`;

const GET_LISTING = gql`
  query getListing($id: Int) {
    listings(where: { id: { _eq: $id } }) {
      address
      amenities
      bathrooms
      bedrooms
      city
      condo_fees
      createdAt
      gis_location
      home_page
      interiorRemarks
      latitude
      list_date
      longitude
      mls
      mlsID
      parking_spots
      parking
      pictures
      postal_code
      price
      prop_type
      remarks
      rooms
      square_footage
      stories
      style
      subdivision
      thumbnail
      updatedAt
      lotDescription
      maintenance
      annualTax
      list_date
    }
  }
`;

const GET_SOLD_LISTING = gql`
  query getListing($id: Int) {
    sold_listings(where: { id: { _eq: $id } }) {
      address
      amenities
      bathrooms
      bedrooms
      city
      condo_fees
      createdAt
      gis_location
      interiorRemarks
      latitude
      list_date
      longitude
      mls
      mlsID
      parking_spots
      parking
      pictures
      postal_code
      price
      prop_type
      remarks
      rooms
      square_footage
      stories
      style
      subdivision
      thumbnail
      updatedAt
      lotDescription
      maintenance
      annualTax
      list_date
    }
  }
`;

const RoomWrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #f1f1f1;
  height: 50px;
  padding: 5px;
  margin: 5px 0px;
  border-radius: 11px;
  box-sizing: border-box;
`;

const RoomTitles = styled.div`
  float: left;
  margin-left: 2px;
  margin-top: 2px;
`;

const Title = styled.p`
  font-size: 21px;
`;

const RoomSize = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  height: fit-content;
  right: 15px;
  margin: auto;
  font-size: 17px;
`;

export default ({
  listingPreview,
  setSelectedListing,
  soldSearch,
  setViewPopUp,
}) => {
  const [selectedSection, setSelectedsection] = useState("details");
  const [downpayment, setDownpayment] = useState("5");
  const [downpaidPrice, setdownpaidPrice] = useState("");
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [monthlyMort, setMonthlyMort] = useState("");
  const [propType, setPropType] = useState("");
  const [amenities, setAmenities] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState(moment());
  // const { loading, error, data, networkStatus } = useQuery(GET_LISTING, {
  //   // skip: listingPreview == null || soldSearch,
  //   skip: listingPreview == soldSearch,
  //   variables: { id: listingPreview.id },
  // });

  // const { data: soldData, error: soldErr } = useQuery(GET_SOLD_LISTING, {
  //   skip: listingPreview == !soldSearch,
  //   variables: { id: listingPreview.id },
  // });
  const { loading, data, error } = soldSearch
  ? useQuery(GET_SOLD_LISTING, {
    variables: { id: listingPreview.id },
  })
  : useQuery(GET_LISTING, {
    variables: { id: listingPreview.id },
  });


  let listing =
    data != undefined && data.listings !== undefined
      ? data.listings[0]
      : data != undefined
      ? data.sold_listings[0]
      : null;

  // let listing =
  //   data != undefined
  //     ? data.listings[0]
  //     : soldData != undefined
  //     ? soldData.sold_listings[0]
  //     : null;

  const { data: nearbyData } = useQuery(GET_NEARBY_DATA, {
    skip: data == undefined,
    variables: {
      viewportPolygon: {
        type: "Point",
        coordinates:
          data != undefined ? [listing.latitude, listing.longitude] : null,
      },
      bedrooms: data != undefined ? listing.bedrooms : null,
      bathrooms: data != undefined ? listing.bathrooms : null,
      mls: data != undefined ? listing.mls : null,
      prop_type: data != undefined ? listing.prop_type : null,
    },
  });

  // var price = "";
  // if (data) {
  //   price = listing.price || listing.soldPrice;
  //   var downpaid = price * (price > 1000000 ? 0.8 : 0.9);
  //   var amortizationPeriod = 25;
  //   var interestRate = 3.19;
  //   var mortgageInsuranceRequired = mortgageInsurance(
  //     price > 1000000 ? 10 : 20,
  //     price
  //   );
  //   var totalPrice = downpaid + mortgageInsuranceRequired;
  //   var monthlyMort = monthlyMortgage(
  //     interestRate,
  //     totalPrice,
  //     amortizationPeriod
  //   );
  // }

  useEffect(() => {
    if (data) {
      // console.log("listing", listing);
      // debugger;
      let p = listing.price || listing.soldPrice;
      setPrice(p);
      let dpTotal = p * (downpayment / 100);
      // console.log("dp", dpTotal);
      setdownpaidPrice(dpTotal);
      var amortizationPeriod = 25;
      var interestRate = 3.19;
      var mortgageInsuranceRequired = mortgageInsurance(downpayment, p);
      // console.log("mortgageInsuranceRequired", mortgageInsuranceRequired);
      var totalPrice = dpTotal + mortgageInsuranceRequired;
      // console.log("totalPrice", totalPrice);
      let mM = monthlyMortgage(interestRate, totalPrice, amortizationPeriod);
      // console.log("mM", mM);
      setMonthlyMort(mM);
    }
  }, [downpayment, data]);

  var ame = "";
  useEffect(() => {
    if (listing) {
      setPropType(listing.prop_type);
      setAmenities(JSON.parse(listing.amenities));
      // ame = JSON.parse(listing.amenities);
    }
  }, [propType, data]);
  console.log({ propType, amenities, listing });
  // console.log("ame", amenities["Lot size"]);
  const convertDate = (str) => {
    const date = new Date(str);
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    const d = dd + "/" + mm + "/" + yyyy;
    return d;
  };
  const numberWithCommas = (x) => {
    let y = parseInt(x);
    return y.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleChangeDownpayment = (e) => {
    const v = e.target.value;
    setDownpayment(v);
  };

  const LandTax = (price, city) => {
    const l = landTransferTax(price, city);
    const f = numberWithCommas(l);
    return f;
  };
  const handleDateChange = (date) => {
    setDate(date);
  };
  // console.log("date", date);
  const handlePopUpClose = (e) => {
    setSelectedListing(null);
    setViewPopUp(false);
  };
  const calculateDateDiff = (date) => {
    var start = moment(date);
    var end = moment();
    return end.diff(start, "days");
  };

  const getDate = (date) => {
    let m = moment(date).format("YYYY/MM/DD");
    return m;
  };
  const calculateBAge = (id) => {
    let year = moment().format("YYYY");
    // if (year == "2020") {
    //   let result = 20 - id;
    //   // debugger;
    //   return result;
    // }
    return id;
  };
  const monthlyPropertyTax = (price) => {
    if (price) {
      return Math.round(price / 12).toLocaleString();
    }
  };
  const totalMonthlyCost = (monthlyMort, annualTax, maintenance) => {
    if ((monthlyMort, annualTax)) {
      let total = monthlyMort + annualTax / 12 + maintenance;
      return Math.round(total).toLocaleString();
    }
  };

  const handleFormChange = (e) => {
    const filter = e.target.name;
    if (filter == "name") {
      setName(e.target.value);
    }
    if (filter == "phone") {
      setPhone(e.target.value);
    }
    if (filter == "email") {
      setEmail(e.target.value);
    }
  };
  const handleTimeChange = (value) => {
    debugger;
    setTime(value);
  };
  // console.log("listing1", amenities);
  const handleFormSubmit = () => {
    successMsg();
  };
  console.log({ name, phone, email, date, time });
  return (
    <Darken onClick={(e) => handlePopUpClose(e)}>
      <ModalWrap
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {!loading && (
          <>
            {/* <ImageSlideshow listing={listing} /> */}
            <ListingImageSlider listing={listing} />
            <MainWrap>
              <ListingWrap>
                <div class="inforamtionDetail">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
                      <div class="informationPanle">
                        <div class="title">{listing.address}</div>
                        <div class="address">{listing.city}</div>
                        <div class="condos">{listing.prop_type}</div>
                        <div class="cashback">
                          Cash Back : $
                          {Math.round(price * 0.015).toLocaleString()}
                        </div>
                        <div class="homePro">
                          <ul>
                            <li>
                              <div class="bedDetails">
                                <img src={BedImage} />
                                {listing.bedrooms} Bedroom
                              </div>
                            </li>
                            <li>
                              <div class="bedDetails">
                                <img src={BathroomImage} />
                                {listing.bathrooms} Bathroom
                              </div>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <div class="bedDetails">
                                <img src={garageImage} />
                                {listing.parking_spots} Garage
                              </div>
                            </li>
                            <li>
                              <div class="bedDetails">
                                <img src={squareFeetImage} />
                                {listing.square_footage} Sq ft
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5">
                      <div class="priceDetails">
                        <div class="price">
                          Listed for:
                          <span> $ {numberWithCommas(price)}</span>
                        </div>
                        <div class="deposit">
                          Deposit:$
                          {Math.round(
                            price > 1000000 ? price * 0.1 : price * 0.2
                          ).toLocaleString()}
                        </div>
                        <div class="mortgage">
                          Mortgage: ${Math.round(monthlyMort).toLocaleString()}
                        </div>

                        <div class="listedDate">Listed 11 days ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <TopHeader soldSearch={soldSearch} listing={listing} /> */}
                <SectionsWrap>
                  <SectionButton
                    onClick={() => {
                      setSelectedsection("details");
                    }}
                    active={selectedSection == "details"}
                  >
                    Details
                  </SectionButton>
                  <SectionButton
                    onClick={() => {
                      setSelectedsection("description");
                    }}
                    active={selectedSection == "description"}
                  >
                    Description
                  </SectionButton>
                  <SectionButton
                    onClick={() => {
                      setSelectedsection("comps");
                    }}
                    active={selectedSection == "comps"}
                  >
                    Comps
                  </SectionButton>
                  <SectionButton
                    onClick={() => {
                      setSelectedsection("rooms");
                    }}
                    active={selectedSection == "rooms"}
                  >
                    Rooms
                  </SectionButton>
                  <SectionButton
                    onClick={() => {
                      setSelectedsection("cost");
                    }}
                    active={selectedSection == "cost"}
                  >
                    Cost
                  </SectionButton>
                </SectionsWrap>
                {selectedSection == "details" && (
                  <React.Fragment>
                    <div class="detailBox">
                      <div class="title">Key Facts</div>
                      <div class="discriptions">
                        Key facts for {listing.address},{listing.city}
                      </div>

                      <div class="facts">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="factList">
                              <div class="lableTask">
                                <div class="leftLable">Tax:</div>
                                <div class="rightLable">
                                  $
                                  {listing.annualTax
                                    ? Math.round(
                                        listing.annualTax
                                      ).toLocaleString()
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Property Type:</div>
                                <div class="rightLable">
                                  {listing.prop_type},{listing.style}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Building Age:</div>
                                <div class="rightLable">
                                  {" "}
                                  {!!amenities["Year built"]
                                    ? `${calculateBAge(
                                        amenities["Year built"]
                                      )} years`
                                    : "NA"}{" "}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Square Footage :</div>
                                <div class="rightLable">
                                  {listing.square_footage
                                    ? listing.square_footage
                                    : ""}{" "}
                                  feet
                                  <sup>2</sup>
                                </div>
                              </div>
                              {(propType == "Att/Row/Twnhouse" ||
                                propType == "Det. Condo" ||
                                propType == "Semi-Detached") && (
                                <div class="lableTask">
                                  <div class="leftLable">Lot Size :</div>
                                  <div class="rightLable">
                                    {amenities["Lot size"]
                                      ? `${amenities["Lot size"]} feet `
                                      : "NA"}{" "}
                                  </div>
                                </div>
                              )}
                              {propType == "Condo Townhouse" && (
                                <div class="lableTask">
                                  <div class="leftLable">Maintenance :</div>
                                  <div class="rightLable">
                                    $
                                    {!!listing.maintenance
                                      ? Math.round(
                                          listing.maintenance
                                        ).toLocaleString()
                                      : "NA"}{" "}
                                  </div>
                                </div>
                              )}
                              {propType == "Det. Condo" ||
                                (propType == "Semi-Detached" && (
                                  <div class="lableTask">
                                    <div class="leftLable">
                                      Lot Irregularities :
                                    </div>
                                    <div class="rightLable">
                                      {amenities["Lot size"]
                                        ? amenities["Lot size"]
                                        : "NA"}{" "}
                                    </div>
                                  </div>
                                ))}
                              <div class="lableTask">
                                <div class="leftLable">Parking:</div>
                                <div class="rightLable">
                                  {listing.parking_spots}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Basement:</div>
                                <div class="rightLable">
                                  {listing.Basement ? listing.Basement : "NA"}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="factList">
                              <div class="lableTask">
                                <div class="leftLable">Listing #:</div>
                                <div class="rightLable">{listing.mls}</div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Days on Market:</div>
                                <div class="rightLable">
                                  {calculateDateDiff(listing.createdAt)} days
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Listed on:</div>
                                <div class="rightLable">
                                  {getDate(listing.createdAt)}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Updated on:</div>
                                <div class="rightLable">
                                  {getDate(listing.updatedAt)}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Market Demand:</div>
                                <div class="rightLable">N/A</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="detailBox">
                      <div class="title">Details</div>
                      <div class="discriptions">
                        {/* Detail for Unit 3005 - 125 Redpath Ave, Mount Pleasant
                        West, Toronto */}
                      </div>

                      <div class="facts">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="factList">
                              <div class="lableTask">
                                <div class="leftLable">Property</div>
                                {/* <div class="rightLable">Owner</div> */}
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">
                                  Intersection :
                                </div>
                                <div class="rightLable">
                                  {listing.Intersection
                                    ? listing.Intersection
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Style :</div>
                                <div class="rightLable">{listing.style}</div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Exposure :</div>
                                <div class="rightLable">
                                  {listing.Exposure ? listing.Exposure : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Amenities:</div>
                                <div class="rightLable">
                                  {amenities["A/C"] !== null && "A/C ,"}
                                  {amenities["Pool"] !== "None" && "Pool ,"}
                                  {amenities["Heating"] !== null && "Heating ,"}
                                  {amenities["Parking spaces"] > 0 && "parking"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">AC & Heating</div>
                                {/* <div class="rightLable">21-2-2020</div> */}
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">AC System :</div>
                                <div class="rightLable">
                                  {amenities["A/C"] !== null
                                    ? amenities["A/C"]
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Heat Source :</div>
                                <div class="rightLable">
                                  {amenities["Heating"] !== null
                                    ? amenities["Heating"]
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Fire Place :</div>
                                <div class="rightLable">
                                  {amenities["Fireplace"] !== null
                                    ? amenities["Fireplace"]
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Construction</div>
                                {/* <div class="rightLable">
                                  Under Contsructions
                                </div> */}
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">
                                  Construction :
                                </div>
                                <div class="rightLable">
                                  {amenities["Construction"] !== null
                                    ? amenities["Construction"]
                                    : "NA"}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="factList">
                              <div class="lableTask">
                                <div class="leftLable">Parking</div>
                                {/* <div class="rightLable">
                                  {listing.square_footage} sq/foot
                                </div> */}
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Garage :</div>
                                <div class="rightLable">
                                  {amenities["Garage spaces"] !== null
                                    ? amenities["Garage spaces"]
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Parking :</div>
                                <div class="rightLable">
                                  {amenities["Parking spaces"] !== null
                                    ? amenities["Parking spaces"]
                                    : "NA"}
                                </div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLable">Land</div>
                                {/* <div class="rightLable">
                                  Under Contsructions
                                </div> */}
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Sewer :</div>
                                <div class="rightLable">N/A</div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">Zoning :</div>
                                <div class="rightLable">N/A</div>
                              </div>
                              <div class="lableTask">
                                <div class="leftLableDetail">
                                  Municipality :
                                </div>
                                <div class="rightLable">N/A</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                  // <ListingInfo listing={listing} />
                )}
                {selectedSection == "description" && (
                  <Remarks listing={listing} />
                )}
                {selectedSection == "comps" && nearbyData && (
                  <>
                    <div class="detailBox">
                      <div class="title">Nearby Sold</div>
                      <div class="discriptions"></div>

                      <div class="listPropertyies">
                        <div class="row">
                          {nearbyData.sold_listings &&
                            nearbyData.sold_listings.map((o) => (
                              <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pd-5">
                                <div class="applewoodProject">
                                  <div
                                    class="homePicBox"
                                    style={{
                                      backgroundImage: `url(${o.thumbnail})`,
                                    }}
                                  >
                                    <div class="soldDate">
                                      Sold on {convertDate(o.soldDate)}
                                    </div>
                                  </div>
                                  <div class="homeDetails">
                                    <div class="projectName">{o.address}</div>
                                    {/* <div class="projectNameRoad">
                                      Chinguacousy Rd & Remembrance Rd
                                    </div> */}
                                    <div class="homePro">
                                      <ul>
                                        <li>
                                          <div class="bedDetails">
                                            <img src={BedImage} />
                                            {o.bedrooms} BD
                                          </div>
                                        </li>
                                        <li>
                                          <div class="bedDetails">
                                            <img src={BathroomImage} />
                                            {o.bathrooms} BR
                                          </div>
                                        </li>
                                        <li>
                                          <div class="bedDetails">
                                            <img src={garageImage} />
                                            {o.parking_spots} Grg.
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="sqFeet">
                                      <div class="sq">1092 Sq Ft</div>
                                      <div class="Price">
                                        ${numberWithCommas(o.soldPrice)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {nearbyData.listings && (
                      <div class="detailBox">
                        <div class="title">Nearby Active</div>
                        <div class="discriptions"></div>

                        <div class="listPropertyies">
                          <div class="row">
                            {nearbyData.listings &&
                              nearbyData.listings.map((o) => (
                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pd-5">
                                  <div class="applewoodProject">
                                    <div
                                      class="homePicBox"
                                      style={{
                                        backgroundImage: `url(${o.thumbnail})`,
                                      }}
                                    >
                                      {/* <div class="soldDate">
                                      Sold on {convertDate(o.soldDate)}
                                    </div> */}
                                    </div>
                                    <div class="homeDetails">
                                      <div class="projectName">{o.address}</div>
                                      {/* <div class="projectNameRoad">
                                      Chinguacousy Rd & Remembrance Rd
                                    </div> */}
                                      <div class="homePro">
                                        <ul>
                                          <li>
                                            <div class="bedDetails">
                                              <img src={BedImage} />
                                              {o.bedrooms} BD
                                            </div>
                                          </li>
                                          <li>
                                            <div class="bedDetails">
                                              <img src={BathroomImage} />
                                              {o.bathrooms} BR
                                            </div>
                                          </li>
                                          <li>
                                            <div class="bedDetails">
                                              <img src={garageImage} />
                                              {o.parking_spots} Grg.
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="sqFeet">
                                        <div class="sq">1092 Sq Ft</div>
                                        <div class="Price">
                                          ${numberWithCommas(o.price)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* <SoldStatistics
                      setSelectedListing={setSelectedListing}
                      listings={nearbyData.listings}
                      soldListings={nearbyData.sold_listings}
                    /> */}
                  </>
                )}
                {selectedSection == "rooms" && (
                  <>
                    <div class="detailBox">
                      <div class="title">Rooms</div>
                      <div class="discriptions"></div>
                      {JSON.parse(listing.rooms).map((room) => {
                        return (
                          <div class="roomDimonsions">
                            <div class="areaDimonsions">
                              <div class="leftSide">
                                <div class="areaName">{room.typeText}</div>
                                <div class="madeComponent">{room.features}</div>
                              </div>
                              <div class="rightSide">
                                <div class="areaSqFt">
                                  {room.width} x {room.length}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
                {selectedSection == "cost" && (
                  <div class="detailBox">
                    <div class="title">Costs</div>
                    <div class="discriptions"></div>
                    <div class="mortgageInfo">
                      <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div class="mortgageInputes">
                            <div class="title">Mortgage Info</div>
                            <div class="inputForm">
                              <div class="label">Downpayment</div>
                              <div class="formInput">
                                <select
                                  type="text"
                                  class="form-control"
                                  onChange={(e) => handleChangeDownpayment(e)}
                                  value={downpayment}
                                >
                                  <option value="5">5%</option>
                                  <option value="10">10%</option>
                                  <option value="15">15%</option>
                                  <option value="20">20%</option>
                                </select>
                              </div>
                            </div>
                            <div class="inputForm">
                              <div class="label"> Monthly Mortgage</div>
                              <div class="formInput">
                                <div class="form-control">
                                  ${Math.round(monthlyMort).toLocaleString()}
                                </div>
                                {/* <input
                                  type="text"
                                  class="form-control"
                                  value={Math.round(
                                    monthlyMort
                                  ).toLocaleString()}
                                  disabled="disabled"
                                /> */}
                              </div>
                            </div>
                            <div class="inputForm">
                              <div class="label">Monthly Maintenance Fee</div>
                              <div class="formInput">
                                <div class="form-control">
                                  {!!listing.maintenance
                                    ? `$${listing.maintenance}`
                                    : "NA"}
                                </div>
                              </div>
                            </div>
                            <div class="inputForm">
                              <div class="label"> Monthly Property Tax</div>
                              <div class="formInput">
                                <div class="form-control">
                                  ${monthlyPropertyTax(listing.annualTax)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div class="mortgageInputes">
                            <div class="topHeadings">
                              <div class="totalMortgage blue">
                                <div class="totalMortgagetitle">
                                  Downpayment
                                </div>
                                <div class="totalMortgageprice">
                                  ${numberWithCommas(downpaidPrice)}
                                  {/* {Math.round(
                                    price > 1000000 ? price * 0.1 : price * 0.2
                                  ).toLocaleString()} */}
                                </div>
                              </div>
                              <div class="totalMortgage green">
                                <div class="totalMortgagetitle">
                                  Total Montaly Cost
                                </div>
                                <div class="totalMortgageprice">
                                  $
                                  {totalMonthlyCost(
                                    monthlyMort,
                                    listing.annualTax,
                                    listing.maintenance
                                  )}
                                </div>
                              </div>
                            </div>

                            <div class="mortageDetails">
                              <div class="title">Closing Cost</div>

                              <div class="closingDetails">
                                <div class="name">Land transfer Tax</div>
                                <div class="ammount">
                                  ${LandTax(price, listing.city)}
                                </div>
                              </div>
                              <div class="closingDetails">
                                <div class="name">Title Insurance</div>
                                <div class="ammount">$500</div>
                              </div>
                              <div class="closingDetails">
                                <div class="name">Appraisal</div>
                                <div class="ammount">$500</div>
                              </div>
                              <div class="closingDetails">
                                <div class="name">Home Inspection</div>
                                <div class="ammount">FREE with MTH</div>
                              </div>
                              <div class="closingDetails">
                                <div class="name">Lawyer</div>
                                <div class="ammount">FREE with MTH</div>
                              </div>
                              <div class="closingDetails">
                                <div class="name">Movers/Boxes</div>
                                <div class="ammount">FREE with MTH</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ListingWrap>
              <ContactGutter>
                {/* <ContactBox listing={listing} /> */}
                <div class="ctaBoxform">
                  <div class="scheduleProcess">
                    <div class="heading">Schedule Process</div>
                    <div class="FormBox">
                      <div class="inputForm">
                        <div class="label">Name</div>
                        <div class="formInput">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            onChange={(e) => handleFormChange(e)}
                          />
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="label">Email</div>
                        <div class="formInput">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            onChange={(e) => handleFormChange(e)}
                          />
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="label">Phone Number</div>
                        <div class="formInput">
                          <input
                            type="phone"
                            class="form-control"
                            name="phone"
                            onChange={(e) => handleFormChange(e)}
                          />
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="label">Date</div>
                        <div class="formInput">
                          <DatePicker
                            class="form-control"
                            selected={date}
                            onChange={handleDateChange}
                          />
                          {/* <input type="date" class="form-control" /> */}
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="label">Time</div>
                        <div class="formInput">
                          {/* <TimePicker
                            value={time}
                            onChange={(value) => handleTimeChange(value)}
                          /> */}
                          <input type="time" class="form-control" />
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="label">Message</div>
                        <div class="formInput">
                          {/* <textarea type="number" class="form-control"/>
                                     </textarea> */}
                        </div>
                      </div>
                      <div class="inputForm">
                        <div class="formInput">
                          <input
                            type="submit"
                            class="formsubmit"
                            value="Request Info"
                            onClick={() => handleFormSubmit()}
                          />
                        </div>
                      </div>
                      <div class="input-theme">
                        <div class="checkbox-theme checkbox-color">
                          <input
                            id="signinkeep"
                            class="styled"
                            type="checkbox"
                          />
                          <label for="signinkeep" class="arrow-label">
                            I want to show NEARBY SOLD listings for comparisions
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="options">
                      <div class="lableHeading">Have a Question Now?</div>
                      <div class="actionBox">
                        <ul>
                          <li>
                            <a href="#">
                              <img src={CTA1Image} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={CTA2Image} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={CTA3Image} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="actBtn">
                      <input
                        type="submit"
                        class="addList"
                        value=" ADD TO MY LIST OF SHOWINGS"
                      />
                    </div>
                  </div>
                </div>
              </ContactGutter>
            </MainWrap>
          </>
        )}
      </ModalWrap>
    </Darken>
  );
};
