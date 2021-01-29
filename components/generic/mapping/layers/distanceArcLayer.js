import {ArcLayer} from '@deck.gl/layers';

const distance = (lat1, lon1, lat2, lon2) => { 
  const earthRadius = 6371e3; // metres
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians((lat2-lat1));
  const Δλ = toRadians((lon2-lon1));
  
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return earthRadius * c;
}

const toRadians = (degrees) => {
  return degrees * Math.PI / 180;
}

const GenerateDistanceArcLayer = (startLat, startLng, title, transitType, closestPoints) => {
  if (startLat && startLng && closestPoints) {
    const arcData = [
      {
        from: {
          name: title,
          coordinates: [startLng, startLat]
        },
        to: {
          name: closestPoints[transitType].name,
          coordinates: [closestPoints[transitType].longitude, closestPoints[transitType].latitude]
        }
      }
    ]

   return new ArcLayer({
      data: arcData,
      pickable: true,
      getWidth: 6,
      getSourcePosition: d => d.from.coordinates,
      getTargetPosition: d =>  d.to.coordinates,
      getSourceColor: [55, 202, 55],
      getTargetColor: [55, 202, 56],
      updateTriggers: {
        getSourcePosition: true,
        getTargetPosition: true,
      },
      onHover: ({object, x, y}) => {
        // const tooltip = `${object.from.name} to ${object.to.name}`;
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      }
    });
  }
}


export default GenerateDistanceArcLayer;