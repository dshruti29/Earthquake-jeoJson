In this module,I have used the Leaflet.js Application Programming Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. Each earthquake was visually represented by a circle and color, where a higher magnitude has a larger diameter and higher the depth,its darker in color. In addition, each earthquake has a popup marker that, when clicked, shows the magnitude of the earthquake,depth and the location of the earthquake.

ResourcesU
sed the Leaflet library to plot the data through an API request and created interactivity for the earthquake data. Also added the USGS URL for earthquake data by navigating to the USGS Hazards Program, clicking the Earthquakes link to open the Real-time Data Feeds link and scrolled down to "GeoJSON Summary" Feed. There, clicked the All Earthquakes link under the “Past 7 Days” heading

Imported and visualized the data by doing the following:

Using Leaflet, created a map that plots all the earthquakes from the dataset based on their longitude and latitude.

dDta markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes  appear larger, and earthquakes with greater depth appear darker in color.


popups that provide additional information about the earthquake when its associated marker is clicked.

legend to provide context for map data