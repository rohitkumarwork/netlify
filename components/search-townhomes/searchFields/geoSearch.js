import StyledGeoSearch from "../../generic/styledGeoSearch";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100%;
`;

export default ({ setViewState, searchNearby }) => {
  function calculateZoom(swLNG, neLNG) {
    const GLOBE_WIDTH = 256; // a constant in Google's map projection
    const angle = neLNG - swLNG;
    if (angle < 0) {
      angle += 360;
    }

    return Math.round(Math.log((800 * 360) / angle / GLOBE_WIDTH) / Math.LN2);
  }

  const processGeo = (geoData) => {
    if (geoData && geoData.gmaps) {
      const viewportData = geoData.gmaps.geometry.viewport;
      const zoomLevel = calculateZoom(
        viewportData.getSouthWest().lng(),
        viewportData.getNorthEast().lng()
      );
      setViewState({
        longitude: geoData.location.lng,
        latitude: geoData.location.lat,
        zoom: zoomLevel,
      });
    }
  };

  return (
    <Wrap>
      <StyledGeoSearch
        placeholder="Neighborhood, City, etc"
        onSuggestSelect={processGeo}
        country="CA"
        initialValue={searchNearby}
        autoFocus
      />
    </Wrap>
  );
};
