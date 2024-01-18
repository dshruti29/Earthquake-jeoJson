

// tile layer that will be the background of our map.
let street = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

	

// Create a base layer that holds both maps.
let baseMaps = {
	"Streets": street
	//"Satellite": satelliteStreets
  };
// Create the earthquake layer for our map.
let earthquakes = new L.LayerGroup();
//This layer will be there always
let overlays = {
    Earthquakes: earthquakes
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('map', {
	center: [39.5, -98.5],
    zoom: 3,
	layers: [street]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

function styleInfo(feature) {
        return {
            opacity: 0.5,
            fillOpacity: 0.5,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.3
    };
  }


  function getColor(depth) {
    if (depth > 200) {
      return "#ea2c2c";
    }
    if (depth > 100) {
      return "#ea822c";
    }
    if (depth > 50) {
      return "#ee9c00";
    }
    if (depth > 20) {
      return "#eecc00";
    }
   
    return "#98ee00";
  }
function getRadius(magnitude){

        if (magnitude === 0){
            return 1;
    }
        
            return magnitude * 4;
    }

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{

        pointToLayer: function(feature,latlng){
                console.log(data);
      		        return L.circleMarker(latlng);
        },
        style: styleInfo,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>depth: " + feature.geometry.coordinates[2] );
          }
  }).addTo(earthquakes);


  earthquakes.addTo(map);


// Create a legend control object.
    var legend = L.control({
        position: 'bottomright'
    });
    // Then add all the details for the legend.
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        const depth = [5, 20, 50, 100, 150, 200];
        const colors = [
            "#98ee00",
            "#d4ee00",
            "#eecc00",
            "#ee9c00",
            "#ea822c",
            "#ea2c2c"
        ];
        for (var i = 0; i < depth.length; i++) {
            console.log(colors[i]);
            div.innerHTML +=
            "<i style='background: " + colors[i] + "'></i> " +
            depth[i] + (depth[i + 1] ? "–" + depth[i + 1] + "<br>" : "+");
        }
        return div;
    };
    legend.addTo(map);
        
});









