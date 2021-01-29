import gql from "graphql-tag";

const GET_NEARBY_DATA = gql`
  query getNearbySoldListings(
    $viewportPolygon: geometry!
    $bedrooms: float8
    $bathrooms: float8
    $mls: String
    $prop_type: String
  ) {
    sold_listings(
      where: {
        gis_location: {
          _st_d_within: { distance: 0.05, from: $viewportPolygon }
        }
        bedrooms: { _eq: $bedrooms }
        prop_type: { _eq: $prop_type }
        bathrooms: { _eq: $bathrooms }
        price: { _gt: 10000 }
      }
      order_by: { soldDate: desc_nulls_last }
      limit: 4
    ) {
      id
      address
      bedrooms
      bathrooms
      soldDate
      soldPrice
      longitude
      latitude
      thumbnail
      parking
      parking_spots
    }
    listings(
      where: {
        gis_location: {
          _st_d_within: { distance: 0.05, from: $viewportPolygon }
        }
        mls: { _neq: $mls }
        prop_type: { _eq: $prop_type }
        bedrooms: { _eq: $bedrooms }
        bathrooms: { _eq: $bathrooms }
        price: { _gt: 10000 }
      }
      order_by: { createdAt: desc_nulls_last }
      limit: 4
    ) {
      id
      address
      bedrooms
      bathrooms
      price
      subdivision
      longitude
      latitude
      thumbnail
      parking
      parking_spots
    }
    map_points(
      where: {
        gis_location: {
          _st_d_within: { distance: 0.080, from: $viewportPolygon }
        }
        type: { _neq: "school" }
      }
    ) {
      name
      type
      color
      gis_location
    }
  }
`;

const GET_MAP_DATA = gql`
  query getNearbyData($mapType: String) {
    map_points(where: { type: { _eq: $mapType } }) {
      name
      type
      color
      gis_location
    }
    map_paths(where: { type: { _eq: $mapType } }) {
      name
      type
      color
      points
    }
  }
`;
const GET_SCHOOL_DATA = gql`
  query getNearbySoldListings($viewportPolygon: geometry!) {
    map_points(
      where: {
        gis_location: {
          _st_d_within: { distance: 0.070, from: $viewportPolygon }
        }
        type: { _eq: "school" }
      }
    ) {
      name
      type
      color
      gis_location
    }
  }
`;

export { GET_NEARBY_DATA, GET_MAP_DATA, GET_SCHOOL_DATA };
