import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import StyledGeoSearch from "../generic/styledGeoSearch";
import { useRouter } from "next/router";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 500px;
  float: right;
`;

const ButtonBar = styled.div`
  padding: 7px 0px 11px;
  width: calc(100% - 81px);
  button {
    font-size: 16px;
    font-weight: bold;
    height: 22px;
    padding: 15px 30px;
    background-color: transparent;
    border: none;
    color: #363636;
    box-sizing: content-box;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s ease-in-out;
  }
  .active {
    border-bottom: 5px solid #da7d16;
  }
  button:focus {
    outline: 0;
  }
`;

// const SearchBar = styled(StyledGeoSearch)`
//   width: calc(100% - 81px);
//   height: 100%;
//   display: inline-block;

//   .geosuggest__input {
//     font-size: 20px;
//     padding: 0px 15px;
//     box-sizing: border-box;
//     margin-top: 0px;
//   }
//   .geosuggest__input::placeholder {
//     font-size: 16px;
//     font-weight: thin;
//     line-height: 19px;
//     color: #1e1f25;
//   }
// `;
const SearchBar = styled.input`
  width: calc(100% - 81px);
  height: 100%;
  display: inline-block;
`;

const SearchContainer = styled.div`
  width: 100%;
      
  text-align: center;
      
  display: flex;
      
  align-items: center;
      
  vertical-align: baseline;
      
  flex-direction: column;
  input {
      width: 100%;    
      padding: 15px;
      text-align: center;
      border-radius: 8px;
      border: 0;
      height: 60px;
      line-height: 60px;
      margin-bottom: 25px;
      font-size: 18px;
      font-weight: 300;
      max-width: 560px;
  }

  button {
    background: #f89e37f0;
    height: 56px;    
    line-height: 55px;
    padding: 0 30px;
    border-radius: 10px;
    border: 2px solid #fff;
    color: #ffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    @media(min-width:320px) and (max-width:480px){
      height: 48px;    
      line-height: 48px;
      border: 1px solid #fff;
      font-size: 14px;
    }
}
  }
  button:focus {outline:0;}

`;

export default () => {
  const [searchOption, setSearchOption] = useState("buy");
  const [search, setSearch] = useState("");
  const router = useRouter();
  const SendToSearch = (geoData) => {
    router.push(
      {
        pathname: "/search-townhomes",
        query: { geoData: JSON.stringify(geoData) },
      },
      "/search-townhomes"
    );
  };
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setSearch(data.city);
      })
      .catch((error) => {
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContainer>
      {/* <SearchBar
        placeholder="City, Neighborhood, Address, etc"
        onSuggestSelect={SendToSearch}
        initialValue={search}
        country="CA"
      /> */}
      <SearchBar
        placeholder="City, Neighborhood, Address, etc"
        onChange={(e) => handleChange(e)}
        value={search}
        country="CA"
      />
      <Link href={{ pathname: "/search-townhomes", query: { name: search } }}>
        <button>SEARCH NEARBY</button>
      </Link>
    </SearchContainer>
  );
};
