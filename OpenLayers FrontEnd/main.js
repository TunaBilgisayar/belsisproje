


const raster = new ol.TileLayer({
    source: new OSM(),
})
const source = new ol.VectorSource();
const vector = new ol.VectorLayer({
    source: source, style: {
        "fill-color": "rgba"(255, 255, 255, 0.2),
        "stroke-color": "ffcc33",
        "stroke-width": 2,
        "circle-radius": 7,
        "circle-fill-color": "ffcc33",


    },
});




var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2,
    }),
});
