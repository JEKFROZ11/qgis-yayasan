var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yayasan_1 = new ol.format.GeoJSON();
var features_Yayasan_1 = format_Yayasan_1.readFeatures(json_Yayasan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yayasan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yayasan_1.addFeatures(features_Yayasan_1);
var lyr_Yayasan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yayasan_1, 
                style: style_Yayasan_1,
                popuplayertitle: 'Yayasan',
                interactive: true,
                title: '<img src="styles/legend/Yayasan_1.png" /> Yayasan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Yayasan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Yayasan_1];
lyr_Yayasan_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'yayasan': 'yayasan', });
lyr_Yayasan_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'yayasan': 'TextEdit', });
lyr_Yayasan_1.set('fieldLabels', {'lintang': 'inline label - always visible', 'bujur': 'inline label - always visible', 'yayasan': 'inline label - always visible', });
lyr_Yayasan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});