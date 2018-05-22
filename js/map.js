//Функция initMap инициализирует и добавляет карту во время загрузки веб-страницы. 
      function initMap() {
//Координаты на карте указываются в следующем порядке: широта, долгота. 
        var uluru = {lat: 53.904716, lng: 27.565358};
//создать карту в элементе div.
        var map = new google.maps.Map(document.getElementById('map'), {
//Свойство center сообщает API-интерфейсу, где расположен центр карты. Свойство zoom определяет уровень масштабирования для карты.
          zoom: 17,
          center: uluru,
//Стили для карты
          styles: [
  {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFFAF0"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#d9edf7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on",
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#CCAA88"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#EEEEEE"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#FF0000"
            },
            {
                "gamma": 9
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#FF0000"
            },
            {
                "gamma": 8
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#FF0000"
            },
            {
                "gamma": 4
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#DDDDDD"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#CCCCCC"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#AAAAAA"
            },
            {
                "gamma": 4
            }
        ]
    }
]
        });
//Код, чтобы разместить маркер на карте. position устанавливает положение маркера.
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: "Магазин \"Сукенка\". Мы вас ждем!",
          animation: google.maps.Animation.DROP
        });
      }
