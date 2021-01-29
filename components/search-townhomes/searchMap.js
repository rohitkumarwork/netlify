import Map from "./map";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_MAP_LISTINGS = gql`
  query allListings(
    $prop_type: [String!]
    $type: String
    $bedrooms: [float8!]
    $bathrooms: [float8!]
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
        bathrooms: { _in: $bathrooms }
        price: { _gte: $minPrice, _lte: $maxPrice }
        square_footage: { _gte: $minFootage, _lte: $maxFootage }
      }
    ) {
      id
      latitude
      longitude
      thumbnail
      price
      address
      city
      bathrooms
      bedrooms
      bathrooms
      bedrooms
      square_footage
    }
  }
`;

const GET_SOLD_LISTINGS = gql`
  query allListings(
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
        price: { _gte: $minPrice, _lte: $maxPrice }
        square_footage: { _gte: $minFootage, _lte: $maxFootage }
      }
    ) {
      id
      latitude
      longitude
      thumbnail
      price
      address
      city
      bathrooms
      bedrooms
      square_footage
    }
  }
`;

export default ({
  listingQuery,
  setViewportPolygon,
  viewState,
  setViewState,
  soldSearch,
  setSelectedListing,
  setViewPopUp,
}) => {
  const { loading, error, data, networkStatus } = useQuery(GET_MAP_LISTINGS, {
    skip: soldSearch,
    variables: { ...listingQuery },
  });

  const { data: soldData } = useQuery(GET_SOLD_LISTINGS, {
    skip: !soldSearch,
    variables: { ...listingQuery },
  });

  if (loading && networkStatus == 1)
    return (
      <div>
        <h2>Loading Map...</h2>
      </div>
    );

  if (error)
    return (
      <div>
        <h2>ERROR ...</h2>
      </div>
    );

  return (
    <Map
      viewState={viewState}
      setViewState={setViewState}
      setViewport={setViewportPolygon}
      listings={data ? data.listings : soldData && soldData.sold_listings}
      setSelectedListing={setSelectedListing}
      setViewPopUp={setViewPopUp}
    />
  );
};
