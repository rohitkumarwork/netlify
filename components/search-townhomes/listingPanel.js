import ListingPreview from "./listingPreview";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Select from "react-dropdown-select";
import styled from "styled-components";
import { useState, useEffect } from "react";
import MultiPopover from "./searchFields/multiPopover";
import Slider from "./searchFields/slider";
import BedImage from "./images/bed.png";
import BathroomImage from "./images/toilet.png";
import Loader from "react-loader-spinner";
import moment from "moment";
import MultiSelect from "react-multi-select-component";

const ListingImage = styled.div`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 150px;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

const GET_GIS_LISTINGS = gql`
  query listingGIS(
    $viewportPolygon: geometry
    $prop_type: [String!]
    $type: String
    $bedrooms: [float8!]
    $bathrooms: [float8!]
    $parking_spots: [float8!]
    $minPrice: Int
    $maxPrice: Int
    $minFootage: Int
    $maxFootage: Int
  ) {
    listings(
      where: {
        type: { _eq: $type }
        prop_type: { _in: $prop_type }
        bedrooms: { _in: $bedrooms }
        parking_spots: { _in: $parking_spots }
        bathrooms: { _in: $bathrooms }
        price: { _gte: $minPrice, _lte: $maxPrice }
        gis_location: { _st_within: $viewportPolygon }
        square_footage: { _gte: $minFootage, _lte: $maxFootage }
      }
      limit: 30
    ) {
      address
      subdivision
      price
      thumbnail
      bedrooms
      bathrooms
      prop_type
      square_footage
      id
      createdAt
    }
  }
`;

const GET_SOLD_GIS_LISTINGS = gql`
  query listingGIS(
    $viewportPolygon: geometry
    $prop_type: [String!]
    $type: String
    $bedrooms: [float8!]
    $bathrooms: [float8!]
    $minPrice: Int
    $maxPrice: Int
    $minFootage: Int
    $maxFootage: Int
  ) {
    sold_listings(
      where: {
        prop_type: { _in: $prop_type }
        bedrooms: { _in: $bedrooms }
        bathrooms: { _in: $bathrooms }
        parking_spots: { _in: $parking_spots }
        price: { _gte: $minPrice, _lte: $maxPrice }
        gis_location: { _st_within: $viewportPolygon }
        square_footage: { _gte: $minFootage, _lte: $maxFootage }
      }
      limit: 30
    ) {
      address
      subdivision
      soldPrice
      thumbnail
      bedrooms
      bathrooms
      prop_type
      square_footage
      id
      createdAt
    }
  }
`;
export default ({
  viewportPolygon,
  setSelectedListing,
  listingQuery,
  soldSearch,
  setSoldSearch,
  setListingQuery,
  setViewPopUp,
  forSale,
  setForSale,
  // forLease,
  // setForLease,
}) => {
  const PropertyTypeOptions = [
    { label: "Freehold Townhouse", value: "Att/Row/Twnhouse" },
    { label: "Condo Townhouse", value: "Condo Townhouse" },
    { label: "Semi-Detached", value: "Semi-Detached" },
    { label: "Detached", value: "Det. Condo" },
    { label: "Condo Apt", value: "Co-Op Apt" },
    { label: "Multiplex", value: "Multiplex" },
  ];
  const BathroomOptions = [
    { label: "1BR", value: "1BR" },
    { label: "2BR", value: "2BR" },
    { label: "3BR", value: "3BR" },
    { label: "4BR", value: "4BR" },
    { label: "5BR", value: "5BR" },
    { label: "6BR", value: "6BR" },
  ];
  const BedroomOptions = [
    { label: "1BD", value: "1BD" },
    { label: "2BD", value: "2BD" },
    { label: "3BD", value: "3BD" },
    { label: "4BD", value: "4BD" },
    { label: "5BD", value: "5BD" },
    { label: "6BD", value: "6BD" },
  ];
  const GarageOptions = [
    { label: "1P", value: "1P" },
    { label: "2P", value: "2P" },
    { label: "3P", value: "3P" },
    { label: "4P", value: "4P" },
    { label: "5P", value: "5P" },
    { label: "6P", value: "6P" },
  ];
  const OpenHouseOptions = [
    { label: "Any", value: "Any" },
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "7 days", value: "7 days" },
  ];
  const BasementOptions = [
    { label: "Finished", value: "Finished" },
    { label: "Seperate Enterance", value: "Seperate Enterance" },
    { label: "Walk-Out", value: "Walk-Out" },
  ];
  const SoldOptions = [
    { label: "All", value: "All" },
    { label: "Last 1 day", value: "Last 1 day" },
    { label: "Last 7 day", value: "Last 7 day" },
    { label: "Last 30 day", value: "Last 30 day" },
    { label: "Last 90 day", value: "Last 90 day" },
    { label: "Last 180 day", value: "Last 180 day" },
    { label: "Last 360 day", value: "Last 360 day" },
    { label: "Year 2019", value: "Year 2019" },
    { label: "Year 2018", value: "Year 2018" },
    { label: "Year 2017", value: "Year 2017" },
    { label: "Year 2016", value: "Year 2016" },
    { label: "Year 2015", value: "Year 2015" },
    { label: "Year 2014", value: "Year 2014" },
  ];
  const ActiveOption = [
    { label: "All", value: "All" },
    { label: "Last 1 day", value: "Last 1 day" },
    { label: "Last 7 day", value: "Last 7 day" },
    { label: "Last 30 day", value: "Last 30 day" },
    { label: "Last 90 day", value: "Last 90 day" },
  ];
  // console.log("soldSearch", soldSearch);
  // const [forSale, setForSale] = useState(true);
  // const [forLease, setForLease] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [soldFilter, setSoldFilter] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sld, setSld] = useState([]);
  const [act, setAct] = useState([]);
  const [bathroom, setBathroom] = useState([]);
  const [bedroom, setBedroom] = useState([]);
  const [garage, setGarage] = useState([]);
  const [basement, setBasement] = useState([]);
  const [openHouse, setOpenHouse] = useState([]);
  const propertyChange = (event, value) => {
    // console.log("event.target", event);
    if (event.length !== 0) {
      let length = event.length;
      var array = [];
      for (let i = 0; i < length; i++) {
        array.push(event[i].value);
      }
      listingQuery.prop_type = array;
      // console.log("array", array);
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.prop_type;
      setListingQuery({ ...listingQuery });
    }
  };
  // const BathroomChange = (event, value) => {
  //   //debugger
  //   if (event.length !== 0) {
  //     // debugger;
  //     let length = event.length;
  //     var array = [];
  //     for (let i = 0; i < length; i++) {
  //       array.push(event[i].value.charAt(0));
  //     }
  //     listingQuery["bathrooms"] = array;
  //     console.log("array", array);
  //     setListingQuery({ ...listingQuery });
  //   } else {
  //     delete listingQuery.bathrooms;
  //     setListingQuery({ ...listingQuery });
  //   }
  // };
  // const BedroomChange = (event, value) => {
  //   // debugger;
  //   if (event.length !== 0) {
  //     // debugger;
  //     let length = event.length;
  //     var array1 = [];
  //     for (let i = 0; i < length; i++) {
  //       array1.push(event[i].value.charAt(0));
  //     }
  //     listingQuery["bedrooms"] = array1;
  //     console.log("array", array1);
  //     setListingQuery({ ...listingQuery });
  //   } else {
  //     delete listingQuery.bedrooms;
  //     setListingQuery({ ...listingQuery });
  //   }
  // };
  // const GarageChange = (event, value) => {
  //   // debugger;
  //   if (event.length !== 0) {
  //     // debugger;
  //     let length = event.length;
  //     var array2 = [];
  //     for (let i = 0; i < length; i++) {
  //       array2.push(event[i].value.charAt(0));
  //     }
  //     listingQuery["parking_spots"] = array2;
  //     console.log("array", array2);
  //     setListingQuery({ ...listingQuery });
  //   } else {
  //     delete listingQuery.parking_spots;
  //     setListingQuery({ ...listingQuery });
  //   }
  // };
  const OpenHouseChange = (event, value) => {
    // debugger;

    if (event.length !== 0) {
      // debugger;
      let length = event.length;
      var array3 = [];
      array3.push(event[0].value);
      // for (let i = 0; i < length; i++) {
      //   array3.push(event[i].value);
      // }
      listingQuery["open_house"] = array3;
      console.log("array", array3);
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.open_house;
      setListingQuery({ ...listingQuery });
    }
  };
  // const BasementChange = (event, value) => {
  //   // debugger;
  //   if (event.length !== 0) {
  //     // debugger;
  //     let length = event.length;
  //     var array4 = [];
  //     for (let i = 0; i < length; i++) {
  //       array4.push(event[i].value);
  //     }
  //     listingQuery["basement"] = array4;
  //     console.log("array", array4);
  //     setListingQuery({ ...listingQuery });
  //   } else {
  //     delete listingQuery.basement;
  //     setListingQuery({ ...listingQuery });
  //   }
  // };

  const SoldChange = (event, value) => {
    // debugger;
    if (event.length !== 0) {
      setSoldFilter(event[0].value);
    }
  };
  const ActiveChange = (event, value) => {
    // debugger;
    if (event.length !== 0) {
      setActiveFilter(event[0].value);
    }
  };

  const { loading, error, data } = useQuery(GET_GIS_LISTINGS, {
    skip: soldSearch,
    variables: { viewportPolygon, ...listingQuery },
  });

  const { data: soldData } = useQuery(GET_SOLD_GIS_LISTINGS, {
    // skip: !soldSearch,
    variables: { viewportPolygon, ...listingQuery },
  });
  // if (loading)
  //   return (
  //     <div>
  //       <h2>Loading Listings...</h2>
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div>
  //       <h2>ERROR ...</h2>
  //     </div>
  //   );
  // console.log("soldData", soldData);
  var sldData = [];
  useEffect(() => {
    // debugger;
    var endAct = moment();
    var endDateAct = new Date(endAct);
    var startAct = "";
    if (activeFilter !== "All") {
      if (activeFilter == "Last 1 day") {
        startAct = moment().subtract(1, "days");
      }
      if (activeFilter == "Last 7 day") {
        startAct = moment().subtract(7, "days");
      }
      if (activeFilter == "Last 30 day") {
        startAct = moment().subtract(30, "days");
      }
      if (activeFilter == "Last 90 day") {
        startAct = moment().subtract(90, "days");
      }
    }

    var startDateAct = new Date(startAct);
    var dateAct = "";
    if (data !== undefined && activeFilter !== "All") {
      // debugger;
      let d = data.listings.filter((a) => {
        // debugger;
        dateAct = new Date(a.createdAt);
        return dateAct >= startDateAct && dateAct <= endDateAct;
      });
      setAct(d);
    }
    if (data !== undefined && activeFilter == "All") {
      // debugger;
      let d = data.listings;
      setAct(d);
    }
  }, [activeFilter, soldSearch, data]);
  useEffect(() => {
    // debugger;
    var endSld = moment();
    var startSld = "";
    if (soldFilter !== "All") {
      if (soldFilter == "Last 1 day") {
        startSld = moment().subtract(1, "days");
      }
      if (soldFilter == "Last 7 day") {
        startSld = moment().subtract(7, "days");
      }
      if (soldFilter == "Last 30 day") {
        startSld = moment().subtract(30, "days");
      }
      if (soldFilter == "Last 90 day") {
        startSld = moment().subtract(90, "days");
      }
      if (soldFilter == "Last 180 day") {
        startSld = moment().subtract(180, "days");
      }
      if (soldFilter == "Last 360 day") {
        startSld = moment().subtract(360, "days");
      }
      if (soldFilter == "Year 2019") {
        startSld = moment("01/01/2019").startOf("year");
        endSld = moment("01/01/2019").endOf("year");
      }
      if (soldFilter == "Year 2018") {
        startSld = moment("01/01/2018").startOf("year");
        endSld = moment("01/01/2018").endOf("year");
      }
      if (soldFilter == "Year 2017") {
        startSld = moment("01/01/2017").startOf("year");
        endSld = moment("01/01/2017").endOf("year");
      }
      if (soldFilter == "Year 2016") {
        startSld = moment("01/01/2016").startOf("year");
        endSld = moment("01/01/2016").endOf("year");
      }
      if (soldFilter == "Year 2015") {
        startSld = moment("01/01/2015").startOf("year");
        endSld = moment("01/01/2015").endOf("year");
      }
      if (soldFilter == "Year 2014") {
        startSld = moment("01/01/2014").startOf("year");
        endSld = moment("01/01/2014").endOf("year");
      }
    }
    var endDateSld = new Date(endSld);
    var startDateSld = new Date(startSld);
    if (soldData !== undefined && soldFilter !== "All") {
      // actData = data;
      // debugger;
      let d = soldData.sold_listings.filter((a) => {
        var dateSld = new Date(a.createdAt);
        // debugger;
        return dateSld >= startDateSld && dateSld <= endDateSld;
        // debugger;
      });
      setSld(d);
    }
    if (soldData !== undefined && soldFilter == "All") {
      // debugger;
      let d = soldData.sold_listings;
      setSld(d);
    }
  }, [soldFilter, soldSearch, soldData]);

  // console.log("act", act);
  // console.log("sld", sld);
  // console.log("solds", soldSearch);
  var v = [];
  if (listingQuery.prop_type !== undefined) {
    v = PropertyTypeOptions.filter((el) => {
      return listingQuery.prop_type.some((f) => {
        return el.value.includes(f);
      });
    });
  }
  // var bath = [];
  // if (listingQuery.bathrooms !== undefined) {
  //   bath = BathroomOptions.filter((el) => {
  //     return listingQuery.bathrooms.some((f) => {
  //       return el.value.includes(f);
  //     });
  //   });
  // }
  // console.log("bath", bath);
  // var bed = [];
  // if (listingQuery.bedrooms !== undefined) {
  //   bed = BedroomOptions.filter((el) => {
  //     return listingQuery.bedrooms.some((f) => {
  //       return el.value.includes(f);
  //     });
  //   });
  // }
  // var park = [];
  // if (listingQuery.parking_spots !== undefined) {
  //   park = GarageOptions.filter((el) => {
  //     return listingQuery.parking_spots.some((f) => {
  //       return el.value.includes(f);
  //     });
  //   });
  // }
  // var openHouse = [];
  // if (listingQuery.open_house !== undefined) {
  //   openHouse = OpenHouseOptions.filter((el) => {
  //     return listingQuery.open_house.some((f) => {
  //       return el.value.includes(f);
  //     });
  //   });
  // }
  // var basement = [];
  // if (listingQuery.basement !== undefined) {
  //   basement = BasementOptions.filter((el) => {
  //     return listingQuery.basement.some((f) => {
  //       return el.value.includes(f);
  //     });
  //   });
  // }
  // console.log("bed", bed);

  // const contentRenderer = () => {
  //   return <div>Property type</div>;
  // };
  // const contentRendererBathroom = () => {
  //   return <div>Bathrooms</div>;
  // };
  // const contentRendererBedroom = () => {
  //   return <div>Bedrooms</div>;
  // };
  // const contentRendererGarage = () => {
  //   return <div>Parking Spots</div>;
  // };
  // const contentRendererOpenHouse = () => {
  //   return <div>Open house</div>;
  // };
  // const contentRendererBasement = () => {
  //   return <div>Basement</div>;
  // };
  const numberWithCommas = (x) => {
    // console.log(x);
    let y = parseInt(x);
    return y.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleClickListing = (listing) => {
    // debugger;
    setSelectedListing(listing);
    setViewPopUp(true);
  };
  // console.log("v", v);
  // console.log("lisiting panel ", soldData);
  // console.log("soldFilter", soldFilter);
  const handleSelectBathroom = (e) => {
    setBathroom(e);
    if (e.length !== 0) {
      let length = e.length;
      var array = [];
      for (let i = 0; i < length; i++) {
        array.push(e[i].value.charAt(0));
      }
      listingQuery["bathrooms"] = array;
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.bathrooms;
      setListingQuery({ ...listingQuery });
    }
  };

  const handleSelectBedroom = (e) => {
    setBedroom(e);
    if (e.length !== 0) {
      // debugger;
      let length = e.length;
      var array1 = [];
      for (let i = 0; i < length; i++) {
        array1.push(e[i].value.charAt(0));
      }
      listingQuery["bedrooms"] = array1;
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.bedrooms;
      setListingQuery({ ...listingQuery });
    }
  };
  const handleSelectGarage = (e) => {
    setGarage(e);
    if (e.length !== 0) {
      // debugger;
      let length = e.length;
      var array2 = [];
      for (let i = 0; i < length; i++) {
        array2.push(e[i].value.charAt(0));
      }
      listingQuery["parking_spots"] = array2;
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.parking_spots;
      setListingQuery({ ...listingQuery });
    }
  };
  const handleSelectBasement = (e) => {
    setBasement(e);
    if (event.length !== 0) {
      // debugger;
      let length = event.length;
      var array4 = [];
      for (let i = 0; i < length; i++) {
        array4.push(event[i].value);
      }
      listingQuery["basement"] = array4;
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.basement;
      setListingQuery({ ...listingQuery });
    }
  };
  const handleSelectOpenHouse = (e) => {
    setOpenHouse(e);
    if (event.length !== 0) {
      // debugger;
      let length = event.length;
      var array3 = [];
      for (let i = 0; i < length; i++) {
        array3.push(event[i].value);
      }
      listingQuery["open_house"] = array3;
      setListingQuery({ ...listingQuery });
    } else {
      delete listingQuery.open_house;
      setListingQuery({ ...listingQuery });
    }
  };

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  console.log({ sld, act, soldSearch });
  return (
    <div>
      <div class="filterSecFirst filterBox d-f-space">
        <div class="inputBox propertyAll">
          <Select
            placeholder="Property Type"
            style={{
              height: "50px",
              width: "100%",
              fontWeight: "500px",
              fontSize: "14px",
            }}
            color="#f89e37"
            options={PropertyTypeOptions}
            multi={true}
            values={v}
            onChange={(e, values) => propertyChange(e, values)}
            // contentRenderer={(innerProps, innerState) =>
            //   contentRenderer(innerProps, innerState)
            // }
          />
        </div>
        <div class="inputBox">
          <button class="btn btnAlert"> Get Alerts</button>
        </div>
      </div>
      <div class="filterSecFirst filterBox">
        <div class="inputBox FW-1">
          <button
            class={forSale ? "btn btnSale active FW-1" : "btn btnSale FW-1"}
            onClick={() => setForSale(true)}
          >
            {" "}
            FOR SALE{" "}
          </button>
          <button
            class={forSale ? "btn btnSale  FW-1" : "btn btnSale active FW-1"}
            onClick={() => setForSale(false)}
          >
            {" "}
            FOR LEASE{" "}
          </button>
        </div>
      </div>

      <div class="filterSecFirst filterBox filterBoxArea d-f-space">
        <div class="inputBox">
          <div class="formInput d-flex i-d-n">
            <button
              class={soldSearch ? "btn btnSale active" : "btn btnSale "}
              onClick={() => setSoldSearch(!soldSearch)}
            >
              {" "}
              Sold{" "}
            </button>
            {/* <Select
              style={{ height: "50px", fontSize: "14px" }}
              color="#f89e37"
              options={SoldOptions}
              values={SoldOptions.filter((opt) => opt.value === soldFilter)}
              onChange={(e, values) => SoldChange(e, values)}
            /> */}
          </div>
        </div>
        <div class="inputBox">
          <div class="formInput d-flex i-d-n">
            <button
              class={soldSearch ? "btn btnSale " : "btn btnSale active "}
              onClick={() => setSoldSearch(!soldSearch)}
            >
              {" "}
              Active{" "}
            </button>
            {/* <Select
              style={{ height: "50px", fontSize: "14px" }}
              color="#f89e37"
              options={ActiveOption}
              values={ActiveOption.filter((opt) => opt.value === activeFilter)}
              onChange={(e, values) => ActiveChange(e, values)}
            /> */}
          </div>
        </div>
        <div class="inputBox">
          <div class="formInput">
            <MultiPopover class="price-filter" label="Price and Area">
              <Slider
                listingQuery={listingQuery}
                setListingQuery={setListingQuery}
                forSale={forSale}
              />
            </MultiPopover>
          </div>
        </div>
        <div class="inputBox">
          <div class="formInput">
            <button
              class={
                showFilters
                  ? "btn btnSale moreFilters pd-15 active"
                  : "btn btnSale pd-15 "
              }
              data-toggle="collapse"
              href="#moreFilters"
              role="button"
              aria-expanded="false"
              aria-controls="moreFilters"
              onClick={() => setShowFilters(!showFilters)}
            >
              More Filter...{" "}
            </button>
          </div>
        </div>
      </div>

      {showFilters && (
        <div class="filterSecFirst filterBox moreFilterBox d-f-space">
          <div class="inputBox">
            <div class="formInput">
              {/* <Select
                style={{ height: "50px", fontSize: "14px" }}
                color="#f89e37"
                options={BathroomOptions}
                multi={true}
                values={bath}
                onChange={(e, values) => BathroomChange(e, values)}
                contentRenderer={(innerProps, innerState) =>
                  contentRendererBathroom(innerProps, innerState)
                }
              /> */}
              <div class="label">Bathroom</div>
              <MultiSelect
                options={BathroomOptions}
                value={bathroom}
                onChange={(e) => handleSelectBathroom(e)}
                labelledBy={"Bathrooms"}
                disableSearch={true}
              />
            </div>
          </div>
          <div class="inputBox">
            <div class="formInput">
              {/* <Select
                style={{ height: "50px", fontSize: "14px" }}
                color="#f89e37"
                options={BedroomOptions}
                multi={true}
                values={bed}
                onChange={(e, values) => BedroomChange(e, values)}
                contentRenderer={(innerProps, innerState) =>
                  contentRendererBedroom(innerProps, innerState)
                }
              /> */}
              <div class="label">Bedroom</div>
              <MultiSelect
                options={BedroomOptions}
                value={bedroom}
                onChange={(e) => handleSelectBedroom(e)}
                labelledBy={"Bedroom"}
                disableSearch={true}
              />
            </div>
          </div>
          <div class="inputBox">
            <div class="formInput">
              {/* <Select
                style={{ height: "50px", fontSize: "14px" }}
                color="#f89e37"
                options={GarageOptions}
                multi={true}
                values={park}
                onChange={(e, values) => GarageChange(e, values)}
                contentRenderer={(innerProps, innerState) =>
                  contentRendererGarage(innerProps, innerState)
                }
              /> */}
              <div class="label">Garage</div>
              <MultiSelect
                options={GarageOptions}
                value={garage}
                onChange={(e) => handleSelectGarage(e)}
                labelledBy={"garage"}
                disableSearch={true}
              />
            </div>
          </div>
          {/* <div class="inputBox"> */}
          {/* <div class="formInput"> */}
          {/* <Select
                style={{ height: "50px", fontSize: "14px" }}
                color="#f89e37"
                options={OpenHouseOptions}
                values={openHouse}
                onChange={(e, values) => OpenHouseChange(e, values)}
                contentRenderer={(innerProps, innerState) =>
                  contentRendererOpenHouse(innerProps, innerState)
                }
              /> */}
          {/* <div class="label">Openhouse</div> */}
          {/* <MultiSelect
                options={OpenHouseOptions}
                value={openHouse}
                onChange={(e) => handleSelectOpenHouse(e)}
                labelledBy={"openHouse"}
                disableSearch={true}
                hasSelectAll={false}
              /> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div class="inputBox"> */}
          {/* <div class="formInput"> */}
          {/* <Select
                style={{ height: "50px", fontSize: "14px" }}
                color="#f89e37"
                options={BasementOptions}
                multi={true}
                values={basement}
                onChange={(e, values) => BasementChange(e, values)}
                contentRenderer={(innerProps, innerState) =>
                  contentRendererBasement(innerProps, innerState)
                }
              /> */}
          {/* <div class="label">Basement</div> */}
          {/* <MultiSelect
                options={BasementOptions}
                value={basement}
                onChange={(e) => handleSelectBasement(e)}
                labelledBy={"basement"}
                disableSearch={true}
                hasSelectAll={false}
              /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      )}
      {loading ? (
        <Loader type="Puff" color="#f89e37" height={200} width={200} />
      ) : (
        <div class="searchListingPanel">
          <div class="row">
            {!soldSearch
              ? act.length > 0 &&
                shuffle(act).map((listing) => (
                  <div
                    class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-1"
                    onClick={() => handleClickListing(listing)}
                  >
                    <div class="salesHouses">
                      <ListingImage imageUrl={listing.thumbnail} />
                      {/* <div
                        class="housesPic"
                        style={{ backgroundImage: `url(${listing.thumbnail})` }}
                      ></div> */}
                      <div class="housesDetails">
                        <div class="housePrice">
                          ${numberWithCommas(listing.price)}
                        </div>
                        <div class="houseName">{listing.address}</div>
                        <div class="houseAddres">{listing.subdivision} </div>
                        <div class="homePro">
                          <ul>
                            <li>
                              <div class="bedDetails">
                                <img src={BedImage} />
                                {listing.bedrooms} BD
                              </div>
                            </li>
                            <li>
                              <div class="bedDetails">
                                <img src={BathroomImage} />
                                {listing.bathrooms} BR
                              </div>
                            </li>
                          </ul>
                          <div class="sqFeet">
                            {listing.square_footage} Sq Ft
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : sld.length > 0 &&
                shuffle(sld).map((listing) => (
                  <div
                    class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-5"
                    onClick={() => handleClickListing(listing)}
                  >
                    <div class="salesHouses">
                      <ListingImage imageUrl={listing.thumbnail} />
                      {/* <div
                        class="housesPic"
                        style={{ backgroundImage: `url(${listing.thumbnail})` }}
                      ></div> */}
                      <div class="housesDetails">
                        <div class="housePrice">
                          ${numberWithCommas(listing.soldPrice)}
                        </div>
                        <div class="houseName">{listing.subdivision} </div>
                        <div class="houseAddres">{listing.address}</div>
                        <div class="homePro">
                          <ul>
                            <li>
                              <div class="bedDetails">
                                <img src={BedImage} />
                                {listing.bedrooms} BD
                              </div>
                            </li>
                            <li>
                              <div class="bedDetails">
                                <img src={BathroomImage} />
                                {listing.bathrooms} BR
                              </div>
                            </li>
                          </ul>
                          <div class="sqFeet">
                            {listing.square_footage} Sq Ft
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}

      {/* {data
        ? data.listings.map((listing) => {
            return (
              <ListingPreview
                // setSelectedListing={setSelectedListing}
                key={listing.address}
                listing={listing}
              />
            );
          })
        : soldData &&
          soldData.sold_listings.map((listing) => {
            return (
              <ListingPreview
                sold
                setSelectedListing={() => {}}
                key={listing.address}
                listing={listing}
              />
            );
          })} */}
    </div>
  );
};
