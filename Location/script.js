var map;
function initMap() {
  map = new L.Map("map", {
      center: new L.LatLng(-12.37, 130.87),
      zoom: 14,
      layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
  });
}

/**
* @param {number} lat The latitude to add a marker at
* @param {number} lng The longitude to add a marker at
* @return {google.maps.Marker} The created marker
**/

function addMarker(lat, lng) {
  var marker = new L.Marker(new L.LatLng(lat, lng));
  marker.bindPopup("You are here");
  map.addLayer(marker);
  return marker;
}

/**
* @param {google.maps.Marker} Marker A marker to move
* @param {number} lat The latitude to add a marker at
* @param {number} lng The longitude to add a marker at
* @return {google.maps.Marker} The moved marker
**/
function moveMarker(marker, lat, lng) {
  var newLatLng = new L.LatLng(lat, lng);
  marker.setLatLng(newLatLng);
  return marker;
}

initMap();

// Write your code here

if("geolocation" in navigator) {
    // location services are available
  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log(position);
      console.log('Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}');
      addMarker(position.coords.latitude, position.coords.longitude);
    }
  )
};
