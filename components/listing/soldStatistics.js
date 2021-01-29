import styled from 'styled-components'
import Link from 'next/link';

const Title = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

const Subtitle = styled.h4`
  color: #F89E37;
  margin-top: 10px;
  letter-spacing: 2px;
  font-weight: 600;
`;

const BodyText = styled.h4`
  line-height: 18px;
  font-weight: 400;
  margin: 4px 3px;
  font-size: 15px;
  .bolded {
    font-weight: 600;
  }
`;

const Listing = styled.div`
  height: 80px;
  width: 50%;
  background-color: whitesmoke;
  display: inline-block;
  border-radius: 10px;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;
  padding: 10px;
  border: 4px solid white;
`;

const MarketListing = styled(Listing)`
  height: 63px;
  cursor: pointer;
`;

const AddressText = styled.p`
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
const SoldDate = styled.p`
  font-size: 12px;
`;

const SoldStatistics = ({listing, listings, soldListings, setSelectedListing}) => {
  const soldAveragePrice = soldListings.map((soldListing) => {return soldListing.soldPrice})
  const averageSoldPrice = Math.round(soldAveragePrice.reduce( ( p, c ) => p + c, 0 ) / soldAveragePrice.length).toLocaleString();

  const marketAveragePrice = listings.map((listing) => {return listing.price})
  const averageMarketPrice =  Math.round(marketAveragePrice.reduce( ( p, c ) => p + c, 0 ) / marketAveragePrice.length).toLocaleString();

  return (
    <>
      <Title>Nearby Data Comparisons</Title>
      <Subtitle>Sold Listings</Subtitle>
      {listing &&
        <BodyText><span className="bolded">${ averageSoldPrice }</span>  average sold price for a {listing.bedrooms} bed, {listing.bathrooms} bath {listing.prop_type} nearby.</BodyText>
      }
    
      {soldListings.map((listing) => { 
        const soldDate = new Date(listing.soldDate).toLocaleDateString('en-ca', { year: 'numeric', month: 'long', day: 'numeric' })

        return (
        <Listing key={listing.address}>
          <AddressText>{listing.address}</AddressText>
          <Price>${listing.soldPrice.toLocaleString()}</Price>
          <SoldDate>{soldDate}</SoldDate>
        </Listing>
        )
      })}
      <Subtitle>Active Listings</Subtitle>
      {listing &&
        <BodyText><span className="bolded">${averageMarketPrice}</span> average market price for a {listing.bedrooms} bed, {listing.bathrooms} bath {listing.prop_type} nearby.</BodyText>
      }
    
      {listings.map((listing) => {
        return (
          <MarketListing onClick={() => {setSelectedListing(listing)}} >
            <AddressText>{listing.address}</AddressText>
            <Price>${listing.price.toLocaleString()}</Price>
          </MarketListing>
        )
      })}
    </>
  )
}


export default SoldStatistics;