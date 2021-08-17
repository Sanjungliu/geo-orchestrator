const mapid = document.getElementById("mapid");

const mymap = L.map(mapid).setView([-6.2, 106.816666], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibGl1LWNhbmp1bmciLCJhIjoiY2tzZW81Z2J0MGwxbTJ2bnVpaGZicmEzMyJ9.RTGKt28NuDI1Qals7HgJug",
  }
).addTo(mymap);

var marker = L.marker([-6.25, 106.847666]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

state.forEach((katalog) => {
  L.marker([katalog.data.lat, katalog.data.lon])
    .addTo(mymap)
    .bindPopup(
      `
    <p>Bank: ${katalog.data.bank}</p>
    <p>School: ${katalog.data.school}</p>
    <p>Minimarket: ${katalog.data.minimarket}</p>
    <p>Population: ${katalog.data.population}</p>
    `
    )
    .openPopup();
});
