import {IconLayer} from '@deck.gl/layers';
import ATLAS from '../assets/location-icon-atlas2.png'
import MAPPING from '../assets/location-icon-mapping.json'


const GenerateIconLayer = (data, latitude, longitude, title, onHover) => {
  let markers = [{type: 'listing', coordinates: [longitude, latitude], name: title }]

  if (data && data.sold_listings.length > 0) {
    data.sold_listings.map((listing) => {
      markers.push({type: 'soldListing', coordinates: [listing.longitude, listing.latitude], name: listing.address })
    })
  }

  if (data && data.listings.length > 0) {
    data.listings.map((listing) => {
      markers.push({type: 'marketListing', coordinates: [listing.longitude, listing.latitude], name: listing.address })
    })
  }

  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: markers,
    pickable: true,
    iconAtlas: ATLAS,
    iconMapping: MAPPING,
    getIcon: d => d.type,
    sizeScale: 6,
    getPosition: d => d.coordinates,
    getSize: d => 7,
    onHover: onHover
  });

  return iconLayer;
}


export default GenerateIconLayer;