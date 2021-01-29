import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Nouislider from "nouislider-react";
const Wrap = styled.div`
  text-align: center;
  width: 350px;
  @media (max-width: 550px) {
    width: 300px;
  }
`;

const SliderTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const SliderValue = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export default ({ listingQuery, setListingQuery, forSale }) => {
  const [priceRange, setPriceRange] = useState([
    listingQuery.minPrice || forSale ? 100000 : 0,
    listingQuery.maxPrice || forSale ? 3000000 : 5000,
  ]);
  // const [depositRange, setDepositRange] = useState([ (listingQuery.minPrice || 400000)/5, (listingQuery.maxPrice || 800000)/5   ])

  const [squareFootage, setSquareFootage] = useState([
    listingQuery.minFootage || 0,
    listingQuery.maxFootage || 5000,
  ]);

  const handlePriceChange = (event) => {
    setPriceRange(event);

    setListingQuery({
      ...listingQuery,
      minPrice: parseInt(event[0]),
      maxPrice: parseInt(event[1]),
    });
  };
  const handleSquareFootageChange = (event) => {
    setSquareFootage(event);

    setListingQuery({
      ...listingQuery,
      minFootage: parseInt(event[0]),
      maxFootage: parseInt(event[1]),
    });
  };
  console.log("priceRange", priceRange);
  console.log("squareFootage", squareFootage);
  console.log("listingQuery in slider", listingQuery);

  const handleDepositChange = (event) => {
    // setDepositRange(event)
    // console.log(event)
    // setListingQuery({
    //   ...listingQuery,
    //   minPrice: parseInt(event[0]) * 5,
    //   maxPrice: parseInt(event[1]) * 5,
    // })
  };

  // useEffect(() => {

  //   setListingQuery({
  //     ...listingQuery,
  //     minPrice: parseInt(priceRange[0]) < (parseInt(depositRange[0]) * 5) ? parseInt(priceRange[0]) : (parseInt(depositRange[0]) * 5),
  //     maxPrice: parseInt(priceRange[1]) > (parseInt(depositRange[1]) * 5) ? parseInt(priceRange[1]) : (parseInt(depositRange[1]) * 5),
  //   })
  //   console.log(listingQuery)
  // }, [priceRange, depositRange])

  return (
    <Wrap>
      <SliderTitle>Home Cost</SliderTitle>
      <SliderValue>
        ${parseInt(listingQuery.minPrice).toLocaleString()} - $
        {parseInt(listingQuery.maxPrice).toLocaleString()}
      </SliderValue>
      {forSale ? (
        <Nouislider
          range={{ min: 100000, max: 3000000 }}
          connect
          step={10000}
          value={[
            listingQuery.minPrice || forSale ? 100000 : 0,
            listingQuery.maxPrice || forSale ? 3000000 : 5000,
          ]}
          start={[
            listingQuery.minPrice || forSale ? 100000 : 0,
            listingQuery.maxPrice || forSale ? 3000000 : 5000,
          ]}
          onChange={handlePriceChange}
        />
      ) : (
        <Nouislider
          range={{ min: 0, max: 8000 }}
          connect
          step={100}
          value={[listingQuery.minPrice || 0, listingQuery.maxPrice || 5000]}
          start={[listingQuery.minPrice || 0, listingQuery.maxPrice || 5000]}
          onChange={handlePriceChange}
        />
      )}

      <br></br>
      <SliderTitle>Square Footage</SliderTitle>
      <SliderValue>
        {parseInt(squareFootage[0]).toLocaleString()} -{" "}
        {parseInt(squareFootage[1]).toLocaleString()}
      </SliderValue>
      <Nouislider
        range={{ min: 500, max: 5000 }}
        connect
        step={100}
        value={squareFootage}
        start={squareFootage}
        onChange={handleSquareFootageChange}
      />

      {/* 
      <SliderTitle>Deposit</SliderTitle>
      <SliderValue>${parseInt(depositRange[0]).toLocaleString()} - ${parseInt(depositRange[1]).toLocaleString()}</SliderValue>
      <Nouislider 
        range={{ min: 10000, max: 500000 }} 
        connect 
        step={10000}
        value={depositRange} 
        start={depositRange} 
        onChange={handleDepositChange} 
      /> */}
    </Wrap>
  );
};
