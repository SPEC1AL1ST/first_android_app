var markersArr=[];
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var mapContainer = document.getElementById('map')
    var map = new google.maps.Map(mapContainer, {
        zoom: 4,
        center: uluru,
        disableDefaultUI: true
    });
    for (var i = 0; i < 5; i++) {
        var pos = {
            lat: 35 + i,
            lng: 36 + i
        };
        map.setCenter(pos);
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            type:"mymarker",
            icon:'https://www.iconexperience.com/_img/g_collection_png/standard/16x16/hospital.png'
        });
        markersArr.push(marker)
    }
}
function removeMarkers() {
    for(var i=0;i<markersArr.length;i++){
        console.log(markersArr[i].type);
        markersArr[i].setMap(null);
    }
}

$(document).ready(function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('#overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '45%'}, 100);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 100,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});