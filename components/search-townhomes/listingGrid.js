import ListingPreview from './listingPreview'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';

const GET_GIS_LISTINGS = gql`
  query listingGIS($viewportPolygon: geometry, $prop_type: [String!], $type: String, $bedrooms: [float8!], $bathrooms: [float8!], $minPrice: Int, $maxPrice: Int, $minFootage: Int, $maxFootage: Int) {
    listings(where: {type: {_eq: $type}, prop_type: {_in: $prop_type}, bedrooms: {_in: $bedrooms}, bathrooms: {_in: $bathrooms}, price: {_gte: $minPrice, _lte: $maxPrice}, gis_location: {_st_within: $viewportPolygon}, square_footage: {_gte: $minFootage, _lte: $maxFootage}}, limit: 30) {
      address
      subdivision
      price
      thumbnail
      bedrooms
      bathrooms
      prop_type
      square_footage
      id
    }
  }
`;


const GET_SOLD_GIS_LISTINGS = gql`
query listingGIS($viewportPolygon: geometry, $prop_type: [String!], $type: String, $bedrooms: [float8!], $bathrooms: [float8!], $minPrice: Int, $maxPrice: Int, $minFootage: Int, $maxFootage: Int) {
  sold_listings(where: { prop_type: {_in: $prop_type}, bedrooms: {_in: $bedrooms}, bathrooms: {_in: $bathrooms}, price: {_gte: $minPrice, _lte: $maxPrice}, gis_location: {_st_within: $viewportPolygon}, square_footage: {_gte: $minFootage, _lte: $maxFootage}}, limit: 30) {
    address
    subdivision
    soldPrice
    thumbnail
    bedrooms
    bathrooms
    prop_type
    square_footage
    id
  }
}
`

export default ({viewportPolygon, listingQuery, setSelectedListing, soldSearch}) => {
  const { loading, error, data } = useQuery(GET_GIS_LISTINGS, {
    skip: soldSearch,
    variables: { viewportPolygon, ...listingQuery  },
  });

  const { data: soldData } = useQuery(GET_SOLD_GIS_LISTINGS, {
    skip: !soldSearch,
    variables: {viewportPolygon, ...listingQuery},
  });


  if (loading) return (
    <div>
      <h2>Loading Listings...</h2>
    </div>
  )
  if (error) return (
    <div><h2>ERROR ...</h2></div>
  )
  return (

    <div>
      {
        data 
        ? 
        data.listings.map((listing) => {
          return (
            <ListingPreview setSelectedListing={setSelectedListing} key={listing.address} listing={listing} />
          )
        })
        :
        soldData && soldData.sold_listings.map((listing) => {
          return (
            <ListingPreview sold setSelectedListing={()=>{}} key={listing.address} listing={listing} />
          )
        })
      }
    </div>

  )
}
