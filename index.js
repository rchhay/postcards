// Initialize and add the map
function initMap() {
    // The location of Uluru
    var height = 400;
    var width = 600;
    var osborne_house = { lat: 50.75117684781056, lng: -1.2704974936301787, front: "./images/osborne_house_front.jpg", back: "./images/osborne_house_back.jpg" };
    var louis_vuitton_foundation = { lat: 48.87659588610544, lng: 2.2638564923214624, front: "./images/louis_vuitton_foundation_front.jpg", back: "./images/louis_vuitton_foundation_back.jpg" };
    var fort_lauderdale = { lat: 26.134006645481247, lng: -80.12634322305998, front: "./images/fort_lauderdale_front.jpg", back: "./images/fort_lauderdale_back.jpg" };
    var boston_public_garden = { lat: 42.35470759255899, lng: -71.07072062876438, front: "./images/boston_public_garden_front.jpg", back: "./images/boston_public_garden_back.jpg" };
    var ile_maurice = { lat: -19.930973619985778, lng: 57.57698179514941, front: "./images/ile_maurice_front.jpg", back: "./images/ile_maurice_back.jpg" };
    var lake_winnipesaukee = { lat: 43.61820460711549, lng: -71.31938349288026, front: "./images/lake_winnipesaukee_front.jpg", back: "./images/lake_winnipesaukee_back.jpg" };
    var places = [osborne_house, louis_vuitton_foundation, fort_lauderdale, boston_public_garden, ile_maurice, lake_winnipesaukee];
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: louis_vuitton_foundation
    });
    var _loop_1 = function (i) {
        marker = new google.maps.Marker({
            position: { lat: places[i].lat, lng: places[i].lng },
            map: map
        });
        marker.addListener("click", function () {
            var front = document.getElementById("postcard-front");
            front.src = places[i].front;
            var back = document.getElementById("postcard-back");
            back.src = places[i].back;
        });
    };
    var marker;
    for (var i = 0; i < places.length; i++) {
        _loop_1(i);
    }
}
