require(["esri/Map", "esri/views/MapView", "esri/Config"], (
  Map,
  MapView,
  esriConfig
) => {
  esriConfig.apiKey = "AAPK7a7ab4389a5d49e6baa08b2db7987c36t7-xSeM7W_C_4WgjNwvZHp-6iY2m0a50YtOBjTaD2LqDhdvOH-tzFAsITV2yCxlQ";

  const map = new Map({
    basemap: "satellite",
  });

  const view = new MapView({
    container: "viewDiv", // Reference to the DOM node that will contain the view
    map: map, // References the map object
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
});
