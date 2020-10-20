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
          "yaw": 0.6870784343848602,
          "pitch": -0.14037612784669307,
          "rotation": 0.7853981633974483,
          "target": "1-balcon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1,
          "pitch": -2,
          "title": "Le nouvel amphi",
          "text": "Le nouvel amphi a été crée en 2018 c'est un endroit fondamentale de la vie Centralienne&nbsp;<br>BLABLABLA"
        },
        {
          "yaw": -2,
          "pitch": -0.15,
          "title": "Le nouvel amphi2",
          "text": "Le nouvel amphi a été crée en 2018 c'est un endroit fondamentale de la vie Centralienne&nbsp;<br>BLABLABLA"
        }
      ]
    },
    {
      "id": "1-balcon",
      "name": "Balcon", /*titre en haut de la page*/
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
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
