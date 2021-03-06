// Initialize and add the map
function initMap(): void {
    // The location of Uluru
    var height = 400;
    var width = 600;
    var osborne_house = { lat: 50.75117684781056, lng: -1.2704974936301787, front: "./images/osborne_house_front.JPG", back: "./images/osborne_house_back.JPG" };
    var louis_vuitton_foundation = { lat: 48.87659588610544, lng: 2.2638564923214624, front: "./images/louis_vuitton_foundation_front.JPG", back: "./images/louis_vuitton_foundation_back.JPG"  };
    var fort_lauderdale = { lat: 26.134006645481247, lng: -80.12634322305998, front: "./images/fort_lauderdale_front.JPG", back: "./images/fort_lauderdale_back.JPG"  };
    var boston_public_garden = { lat: 42.35470759255899, lng: -71.07072062876438, front: "./images/boston_public_garden_front.JPG", back: "./images/boston_public_garden_back.JPG"  };
    var le_morne = { lat: -20.436309564354925, lng: 57.321706470591195, front: "./images/le_morne_front.JPG", back: "./images/le_morne_back.JPG"  };
    var lake_winnipesaukee = { lat: 43.61820460711549, lng: -71.31938349288026, front: "./images/lake_winnipesaukee_front.JPG", back: "./images/lake_winnipesaukee_back.JPG"  };
    var south_shore_bermuda = { lat: 32.25516319201712, lng: -64.81398357443469, front: "./images/south_shore_bermuda_front.JPG", back: "./images/south_shore_bermuda_back.JPG"  };
    var ann_arbor  = { lat: 42.275855420520436, lng: -83.73271174626547 , front: "./images/ann_arbor_front.JPG", back: "./images/ann_arbor_back.JPG"  };
    var pillars_of_hercules = { lat: 17.001048228025983, lng: -61.76113487337774, front: "./images/pillars_of_hercules_front.JPG", back: "./images/pillars_of_hercules_back.JPG"  };
    
    var colorado_national_monument = { lat: 39.16308583268758, lng: -108.74296546476027, front: "./images/colorado_national_monument_front.JPG", back: "./images/colorado_national_monument_back.JPG"  };
    var notre_dame = { lat: 48.85304950233013, lng:  2.3499776842774542, front: "./images/notre_dame_front.JPG", back: "./images/notre_dame_back.JPG"  };
    var arc_de_triomphe = { lat: 48.87389924084303, lng: 2.295037056063764, front: "./images/arc_de_triomphe_front.JPG", back: "./images/arc_de_triomphe_back.JPG"  };
    var planting_fields_arboretum = { lat: 40.86795931441406, lng: -73.55286483070991, front: "./images/planting_fields_arboretum_front.JPG", back: "./images/planting_fields_arboretum_back.JPG"  };
    var st_lucia = { lat: 13.841486249164374, lng: -60.99387176365401, front: "./images/st_lucia_front.JPG", back: "./images/st_lucia_back.JPG"  };
    var bermuda = { lat: 32.30303034662056, lng: -64.75919230873251, front: "./images/bermuda_front.JPG", back: "./images/bermuda_back.JPG"  };
    var st_martin = { lat: 18.074444039993576, lng: -63.05330740257915, front: "./images/st_martin_front.JPG", back: "./images/st_martin_back.JPG"  };
    var st_vincent = { lat: 13.260122452292954, lng: -61.18553536540731, front: "./images/st_vincent_front.JPG", back: "./images/st_vincent_back.JPG"  };
    var hawksbill_rock = { lat: 17.138609670186646, lng: -61.90049260889295, front: "./images/hawksbill_rock_front.JPG", back: "./images/hawksbill_rock_back.JPG"  };
    var castle_valley = { lat: 38.63979319833589, lng: -109.4095532382418, front: "./images/castle_valley_front.JPG", back: "./images/castle_valley_back.JPG"  };
    var komodo_national_park = { lat: -8.526066983092845,  lng: 119.48324469594444, front: "./images/komodo_national_park_front.JPG", back: "./images/komodo_national_park_back.JPG"  };
    var south_africa = { lat: -30.854382410908023, lng: 23.704008595625716, front: "./images/south_africa_front.JPG", back: "./images/south_africa_back.JPG"  };
    var iles_du_salut = { lat: 5.284315997413975, lng: -52.58316167589387, front: "./images/iles_du_salut_front.JPG", back: "./images/iles_du_salut_back.JPG"  };
    var victoria_afred_waterfront= { lat: -33.903026925774434, lng: 18.422665617127947, front: "./images/victoria_afred_waterfront_front.JPG", back: "./images/victoria_afred_waterfront_back.JPG"  };
    var petit_piton = { lat: 13.834082964369115, lng: -61.066924228902906, front: "./images/petit_piton_front.JPG", back: "./images/petit_piton_back.JPG"  };
    var tobago_cays = { lat: 12.633873376390797, lng: -61.34997791518915, front: "./images/tobago_cays_front.JPG", back: "./images/tobago_cays_back.JPG"  };
    var st_helena = { lat: -15.9614424888924, lng: -5.648759873305257, front: "./images/st_helena_front.JPG", back: "./images/st_helena_back.JPG"  };
    var direction_island = { lat: -12.088649910471549, lng: 96.88400551378051, front: "./images/direction_island_front.JPG", back: "./images/direction_island_back.JPG"  };
    var tasmania = { lat: -41.986940909617594, lng: 146.64273165563836, front: "./images/tasmania_front.JPG", back: "./images/tasmania_back.JPG"  };
    var darwin = { lat: -12.457406050456457, lng: 130.84472881899498, front: "./images/darwin_front.JPG", back: "./images/darwin_back.JPG"  };
    var cape_reinga_lighthouse = { lat: -34.421645795457906, lng: 172.67703879093048, front: "./images/cape_reinga_lighthouse_front.JPG", back: "./images/cape_reinga_lighthouse_back.JPG"  };
    var matai_bay  = { lat: -34.824443140842035, lng: 173.40755218850472, front: "./images/matai_bay_front.JPG", back: "./images/matai_bay_back.JPG"  };
    var bathsheba = { lat: 13.214529363762036, lng: -59.5230514468102, front: "./images/bathsheba_front.JPG", back: "./images/bathsheba_back.JPG"  };
    var bay_of_islands = { lat: -35.2033079474575, lng: 174.21199611363585, front: "./images/bay_of_islands_front.JPG", back: "./images/bay_of_islands_back.JPG"  };
    var new_york_city = { lat: 40.69154193082765, lng: -74.04429599390427, front: "./images/new_york_city_front.JPG", back: "./images/new_york_city_back.JPG"  };
    var christmas_island = { lat: -10.48290958404906, lng: 105.62896130622566 , front: "./images/christmas_island_front.JPG", back: "./images/christmas_island_back.JPG"  };
    var ile_maurice = { lat: -20.283171859570988, lng: 57.58249063787892, front: "./images/ile_maurice_front.JPG", back: "./images/ile_maurice_back.JPG"  };
    var eiffel_tower = { lat: 48.858823100765456, lng: 2.294398482255554, front: "./images/eiffel_tower_front.JPG", back: "./images/eiffel_tower_back.JPG"  };
    var london = { lat: 51.515313777637466, lng: -0.12769767773067559, front: "./images/london_front.JPG", back: "./images/london_back.JPG"  };
    var namibia = { lat: -18.860527026281275, lng: 16.442850409130248, front: "./images/namibia_front.JPG", back: "./images/namibia_back.JPG"  };

    var us_virgin_islands = { lat: 17.740140704217065, lng: -64.78051603724586, front: "./images/us_virgin_islands_front.JPG", back: "./images/us_virgin_islands_back.JPG"  };
    var st_barth = { lat: 17.904336099770312, lng:  -62.839798632487, front: "./images/st_barth_front.JPG", back: "./images/st_barth_back.JPG"  };
    var guadeloupe = { lat: 15.85931632603628, lng:  -61.60268758189142, front: "./images/guadeloupe_front.JPG", back: "./images/guadeloupe_back.JPG"  };
    var carriacou = { lat: 12.482395132187953,  lng: -61.44918394092933, front: "./images/carriacou_front.JPG", back: "./images/carriacou_back.JPG"  };
    var st_pierre = { lat: 14.774826709917217, lng: -61.172520974685874, front: "./images/st_pierre_front.JPG", back: "./images/st_pierre_back.JPG"  };
    var nevis = { lat: 17.2991212845433,  lng: -62.73196412733737, front: "./images/nevis_front.JPG", back: "./images/nevis_back.JPG"  };
    var valley_of_fire = { lat: 36.507470157995776, lng: -114.5352834172647 , front: "./images/valley_of_fire_front.JPG", back: "./images/valley_of_fire_back.JPG"  };
    var area_51 = { lat: 36.644091788357024,  lng: -116.39559838842528, front: "./images/area_51_front.JPG", back: "./images/area_51_back.JPG"  };
    var oualie_beach_resort = { lat: 17.20057026618323, lng: -62.61064127337592, front: "./images/oualie_beach_resort_front.JPG", back: "./images/oualie_beach_resort_back.JPG"  };
    var florida = { lat: 27.814263332130327, lng: -81.66206668811625, front: "./images/florida_front.JPG", back: "./images/florida_back.JPG"  };
    var moorea_island = { lat: -17.535756366421428, lng: -149.83033828861994, front: "./images/rapa_island_front.JPG", back: "./images/rapa_island_back.JPG"  };
    var st_germain_en_laye = { lat: 48.8979500641181,  lng: 2.0961770425738453, front: "./images/st_germain_en_laye_front.JPG", back: "./images/st_germain_en_laye_back.JPG"  };
    var agen = { lat: 44.208047052973825, lng: 0.6057021559368202, front: "./images/agen_front.JPG", back: "./images/agen_back.JPG"  };
    var bequia = { lat: 13.009909502131114, lng: -61.231484492380524, front: "./images/bequia_front.JPG", back: "./images/bequia_back.JPG"  };
    var gros_piton= { lat: 13.81071406167727, lng: -61.06799364179963, front: "./images/gros_piton_front.JPG", back: "./images/gros_piton_back.JPG"  };
    var brimstone_hill_fortress = { lat: 17.34639475357884, lng: -62.83668073337931, front: "./images/brimstone_hill_fortress_front.JPG", back: "./images/brimstone_hill_fortress_back.JPG"  };


    var places = [osborne_house, louis_vuitton_foundation, fort_lauderdale, boston_public_garden, le_morne, lake_winnipesaukee, south_shore_bermuda, ann_arbor, pillars_of_hercules, colorado_national_monument,
        notre_dame,
        arc_de_triomphe,
        planting_fields_arboretum,
        st_lucia,
        bermuda,
        st_martin,
        st_vincent,
        hawksbill_rock,
        castle_valley,
        komodo_national_park,
        south_africa,
        iles_du_salut,
        victoria_afred_waterfront,
        petit_piton,
        tobago_cays,
        st_helena,
        direction_island,
        tasmania,
        darwin,
        cape_reinga_lighthouse,
        matai_bay,
        bathsheba,
        bay_of_islands,
        new_york_city,
        christmas_island,
        ile_maurice,
        eiffel_tower,
        london,
        namibia,
        us_virgin_islands,
        st_barth,
        guadeloupe,
        carriacou,
        st_pierre,
        nevis,
        valley_of_fire,
        area_51,
        oualie_beach_resort,
        florida,
        moorea_island,
        st_germain_en_laye,
        agen,
        bequia,
        gros_piton,
        brimstone_hill_fortress
    ];

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2
        center: louis_vuitton_foundation
    });

    for (let i = 0; i < places.length; i++) {
        var marker = new google.maps.Marker({
            position: {lat: places[i].lat, lng: places[i].lng},
            map: map
        });
        marker.addListener("click", function () {
            var front = document.getElementById("postcard-front");
            front.src = places[i].front;
            var back = document.getElementById("postcard-back");
            back.src = places[i].back;
        });
    }
}