var APP_DATA = {
  "scenes": [
    {
      "id": "0-nouvel-amphi",
      "name": "Nouvel amphi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 24.51,
          "pitch": -0.3,
          "rotation": 9.5,
          "target": "1-balcon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1,
          "pitch": -0.15,
          "title": "Centrale Marseille",
          "text": "Centrale Marseille est une jeune école qui est née en 2006. Elle est héritière d’une histoire plus que centenaire. De plus, elle est avant tout une École Centrale, à ce titre elle partage avec les autres Écoles Centrales les mêmes modalités d’accès, le même modèle pédagogique, des relations internationales mutualisées et une conception identique de l’ingénieur. Centrale Marseille est un Établissement Public à Caractère Scientifique, Culturel et Professionnel. Elle est située à Marseille, au cœur du Technopôle de Château-Gombert où se croisent établissements d’enseignement supérieur, centres de recherche et entreprises dans le 13ème arrondissement, au pied du massif de l’Étoile. L’École est facilement accessible en transport en commun (métro et bus) depuis le centre ville de Marseille. Plusieurs résidences étudiantes proposent des logements à proximité.&nbsp;<br>L’École centrale de Marseille est dotée de locaux et d’équipements adaptés aux enjeux de la pédagogie et de la recherche. Centrale Marseille s’engage aussi fortement en faveur de la vie associative des élèves et accueille, chaque année, de nombreuses manifestations.&nbsp;<br>Plus d’information sur le site Internet : https://www.centrale-marseille.fr"
        }
      ]
    },
    {
      "id": "1-balcon",
      "name": "Passerelle Nouvel Amphi", /*titre en haut de la page*/
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 50000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.4
      },
      "linkHotspots": [],
      "infoHotspots": [],
    },
    {
      "id": "2-milan",
      "name": "Milan",
      "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          }
        ],
        "faceSize": 5000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.2,
        },
        "linkHotspots": [   
          {
          "yaw": 0.6870784343848602,
          "pitch": -0.14037612784669307,
          "rotation": 0.7853981633974483,
          "target": "1-balcon"
        }
      ],
        "infoHotspots": [
        {          
        "yaw": -1.1734860226828978,
        "pitch": 0.017285182985926184,
        "title": "Le nouvel amphi",
        "text": "Le nouvel amphi a été crée en 2018 c'est un endroit fondamentale de la vie Centralienne&nbsp;<br>BLABLABLA"
        }
      ],
    },
    {
      "id": "3-360-aplati",
      "name": "360-aplati",
      "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          }
        ],
        "faceSize": 5000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.2,
        },
        "linkHotspots": [   
          {
          "yaw": 0.6870784343848602,
          "pitch": -0.14037612784669307,
          "rotation": 0.7853981633974483,
          "target": "1-balcon"
        }
      ],
        "infoHotspots": [
        {          
        "yaw": -1.1734860226828978,
        "pitch": 0.017285182985926184,
        "title": "Le nouvel amphi",
        "text": "Le nouvel amphi a été crée en 2018 c'est un endroit fondamentale de la vie Centralienne&nbsp;<br>BLABLABLA"
        }
      ],
    },
    {
      "id": "4-foys23",
      "name": "foys",
      "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          }
        ],
        "faceSize": 5000,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.2,
        },
        "linkHotspots": [   
          {
          "yaw": 0.6870784343848602,
          "pitch": -0.14037612784669307,
          "rotation": 0.7853981633974483,
          "target": "1-balcon"
        }
      ],
        "infoHotspots": [
        {          
        "yaw": -1.1734860226828978,
        "pitch": 0.017285182985926184,
        "title": "Le nouvel amphi",
        "text": "Le nouvel amphi a été crée en 2018 c'est un endroit fondamentale de la vie Centralienne&nbsp;<br>BLABLABLA"
        }
      ],
    },
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
