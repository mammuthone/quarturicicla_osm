var map = L.map('map', {zoomControl: false}).setView([39.23688, 9.17387], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFtbXV0aG9uZSIsImEiOiJjbDFxZmFjc3QwbWZvM2NucXBoM2MwZzk5In0.zC03qCnPL6NnAR3eD-1DKg'
}).addTo(map);

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

getJSON('https://raw.githubusercontent.com/mammuthone/deviziaquarturoads/main/s1.geojson', function (err, data) {
    L.geoJSON(data).addTo(map)
});
