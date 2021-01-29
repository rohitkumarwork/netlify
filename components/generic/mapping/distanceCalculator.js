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

const calculateNearestPoints = (nearbyPoints, latitude, longitude) => {
  let closestPoints = {
    ttc: {name: 'placeholder', distance: 15000, color: "0,0,0"},
    go: {name: 'placeholder', distance: 15000, color: "0,0,0"},
  };

  if (nearbyPoints) {
    nearbyPoints.map((point) => {
      const newDistance = distance(latitude, longitude, point.gis_location.coordinates[0], point.gis_location.coordinates[1])
      if (newDistance < closestPoints[point.type].distance) 
        closestPoints[point.type] = {color: point.color, name: point.name, latitude: point.gis_location.coordinates[0], longitude: point.gis_location.coordinates[1], distance: newDistance}
    })
  }


  return closestPoints;
}

export default calculateNearestPoints;