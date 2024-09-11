import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css

const WBS = [52.457131, 13.54007]; // WBS coordinates
const map = Leaflet.map('map').setView(WBS, 13); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map
// My locations
const myLocations = [
  {
    name: 'WBS CODING SCHOOL',
    location: [52.457131, 13.54007],
    description: 'The best coding school in the world'
  },
  {
    name: 'My Home',
    location: [52.47941311569279, 13.423584627220302],
    description: 'My Home - Home to the most famous coder in Neukölln'
  },
  {
    name: 'Blauer Affe',
    location: [52.479146373729215, 13.423630181680208],
    description: "Blauer Affe - Ali's famous Ecckneipe, serves the best Mexikaner in town"
  },
  {
    name: 'Tempelhofer Feld',
    location: [52.47371551608548, 13.403349025338455],
    description: 'Tempelhofer Feld - Good for sports, BBQs or watching skaters do cool stuff.'
  },
  {
    name: 'Berghain',
    location: [52.51118007608629, 13.44300522722133],
    description: 'Berghain - Best techno club ever.'
  },
  {
    name: 'Sisyphos',
    location: [52.49301833546976, 13.49123540949776],
    description: 'Sisyphos - Second best techno club ever (the best during summer).'
  },
  {
    name: 'Stella Nera',
    location: [52.47508599214339, 13.427940627220066],
    description: 'Stella Nera - Best vegan Pizza in town.'
  },
  {
    name: 'Dreiländereck',
    location: [52.4906244443289, 13.43883969251723],
    description: 'Dreiländereck - Good for a beer during sunset.'
  }

  

];
// Add markers to the map with a popup
myLocations.forEach(location => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);