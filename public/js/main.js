

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
                collapsable_content.load(section_element.expanded_content_src);
            }
            collapsable_parent.append("<br><br>");
        }

        var coll = document.getElementsByClassName("collapsible");
        var i;

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
    html += '</div></div>';
    return html;
}

function hash(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}