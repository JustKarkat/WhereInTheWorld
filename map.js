import 'ol/ol.css';
import {Map, View} from 'ol';
import {Fill, Style, Stroke, Text} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

var style = Style({
  fill: new Fill({
    color: '#baddd7',
  }),
  stroke: new Stroke({
    color: '#304a5a',
    width: 1,
  }),
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: '#000',
    }),
    stroke: new Stroke({
      color: '#fff',
      width: 3,
    }),
  }),
});

var vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: "https://raw.githubusercontent.com/JustKarkat/geojson/main/countries.geojson",
    format: new GeoJSON(),
  }),
  style: function (feature) {
    style.getText().setText(feature.get('name'));
    return style;
  },
});

var map = new Map({
  renderer: 'webgl',
  layers: [vectorLayer],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 3.2,
    minZoom: 3.2,
    smoothExtentConstraint: true,
  }),
});

var highlightStyle = new Style({
  stroke: new Stroke({
    color: '#5e836e',
    width: 1,
  }),
  fill: new Fill({
    color: '#87ab70',
  }),
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: '#baddd7',
    }),
    stroke: new Stroke({
      color: '#2c3549',
      width: 3,
    }),
  }),
});

var featureOverlay = new VectorLayer({
  source: new VectorSource(),
  map: map,
  style: function (feature) {
    highlightStyle.getText().setText(feature.get('ADMIN'));
    return highlightStyle;
  },
});

var highlight;
var displayFeatureInfo = function (pixel) {
  vectorLayer.getFeatures(pixel).then(function (features) {
    var feature = features.length ? features[0] : undefined;
    var info = document.getElementById('info');
    if (features.length) {
      info.innerHTML = feature.get('ADMIN');
    } else {
      info.innerHTML = '&nbsp;';
    }

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }
  });
};

map.on('pointermove', function (evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on('click', function (evt) {
	var feature = features.length ? features[0] : undefined;
	//var selected = feature.get('ADMIN');
	    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }
});
