

$(document).ready(function () {
    $.getJSON("/data/content.json", function(json) {
        collapsable_parent = $('#collapsable_parent');

        for (var i = 0; i<json.content.length; i++){
            section = json.content[i];
            section_title = section.section_name;
            collapsable_parent.append(get_section_title_html(section_title));


            for (var j=0; j<section.data.length;j++){

                section_element = section.data[j];
                title_id = hash(section_element.title)+"_title";
                content_id = hash(section_element.title)+"_content";
                collapsable_title_html = get_section_entry_html(section_element);
                collapsable_parent.append(collapsable_title_html);
                collapsable_content_html = '<div class="content" id="'+content_id+'"></div>';
                collapsable_parent.append(collapsable_content_html);
                collapsable_title = $('#'+title_id);
                collapsable_content = $('#'+content_id);
                if (section_element.expanded_content_src.length > 1){
                    collapsable_content.load(section_element.expanded_content_src);
                }
            }
            collapsable_parent.append("<br><br>");
        }
        var coll = document.getElementsByClassName("collapsible");
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    });

    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15c21vcmdhbiIsImEiOiJjaWxjemtvYWEzejR4dHlseGlkaGZmb2t5In0.BOYaLR5RW0tbUPTFuz5Y0g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jeremysmorgan/cjoqhc6zy00q82roi9ggg7jvx',
        center: [-120, 50],
        zoom: 2
    });

    map.on('load', function() {
        // Add a geojson point source.
        // Heatmap layers also work with a vector tile source.
        map.addSource('earthquakes', {
            "type": "geojson",
            "data": "/data/earthquakes.geojson"
        });

        map.addLayer({
            "id": "earthquakes-heat",
            "type": "heatmap",
            "source": "earthquakes",
            "maxzoom": 9,
            "paint": {
                // Increase the heatmap weight based on frequency and property magnitude
                "heatmap-weight": [
                    "interpolate",
                    ["linear"],
                    ["get", "mag"],
                    0, 0,
                    6, 1
                ],
                // Increase the heatmap color weight weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                "heatmap-intensity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0, 1,
                    9, 3
                ],
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                "heatmap-color": [
                    "interpolate",
                    ["linear"],
                    ["heatmap-density"],
                    0, "rgba(33,102,172,0)",
                    0.2, "rgb(103,169,207)",
                    0.4, "rgb(209,229,240)",
                    0.6, "rgb(253,219,199)",
                    0.8, "rgb(239,138,98)",
                    1, "rgb(178,24,43)"
                ],
                // Adjust the heatmap radius by zoom level
                "heatmap-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0, 2,
                    9, 20
                ],
                // Transition from heatmap to circle layer by zoom level
                "heatmap-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7, 1,
                    9, 0
                ]
            }
        }, 'waterway-label');

        map.addLayer({
            "id": "earthquakes-point",
            "type": "circle",
            "source": "earthquakes",
            "minzoom": 7,
            "paint": {
                // Size circle radius by earthquake magnitude and zoom level
                "circle-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7, [
                        "interpolate",
                        ["linear"],
                        ["get", "mag"],
                        1, 1,
                        6, 4
                    ],
                    16, [
                        "interpolate",
                        ["linear"],
                        ["get", "mag"],
                        1, 5,
                        6, 50
                    ]
                ],
                // Color circle by earthquake magnitude
                "circle-color": [
                    "interpolate",
                    ["linear"],
                    ["get", "mag"],
                    1, "rgba(33,102,172,0)",
                    2, "rgb(103,169,207)",
                    3, "rgb(209,229,240)",
                    4, "rgb(253,219,199)",
                    5, "rgb(239,138,98)",
                    6, "rgb(178,24,43)"
                ],
                "circle-stroke-color": "white",
                "circle-stroke-width": 1,
                // Transition from heatmap to circle layer by zoom level
                "circle-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7, 0,
                    8, 1
                ]
            }
        }, 'waterway-label');
    });
});

function get_section_title_html(name){
    return "<h3>"+name+"</h3>";
}

function get_section_entry_html(json){

    html = '<div class="collapsible col-sm-12 col-md-12 col-lg-12" id="'+hash(json.title)+'_title">';
    html += '<div class="row thumbnail header">';
    html += '<div class="col-sm-3 col-md-3 col-lg-3">';
    html += '<img src="'+json.thumbnail+'" class="expandable_img img-rounded img-responsive img-thumbnail">';
    html += '</div>';
    html += '<div class="col-sm-8 col-md-8 col-lg-8">';
    html += '<h4 class="">'+json.title+'</h4>';
    if (json.subtitle.length > 0) {
        html += '<p>' + json.subtitle + '</p>';
    }
    html += '<i>'+json.date+'</i>';
    if (json.link_name.length > 0){
        html += '<a href="'+json.link_url+'">';
        html += '<p>'+json.link_name+'</p></a>';
    }
    if (section_element.expanded_content_src.length > 1){
        html += '</div><button type="button" class="btn btn-warning btn-sm" style="position: absolute; right: 26px; bottom: 10px;"><small>click to expand</small></button></div>';
    }
    return html;
}

function hash(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}