var map = L.map('map')
  .setView([-2.147737, -79.964306], 15); 

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale().addTo(map);

L.marker([-2.147737, -79.964306],{draggable: true}).addTo(map);