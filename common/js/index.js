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

$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('#overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

    open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                    .animate({opacity: 1, top: '45%'}, 100); // плaвнo пoкaзывaем
            });
    });

    close.click( function(){ // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0, top: '45%'}, 100, // плaвнo прячем
                function(){ // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });
});