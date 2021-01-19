var APP_DATA = {
  "scenes": [
    {
      "id": "0-newamphi-60",
      "name": "Entrée principale",
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
          "target": "3-passerelle-23"
        },
        {
          "yaw": 23.7,
          "pitch": -0.05,
          "rotation": 0.3,
          "target": "1-devant-hangar"
        },
        {
          "yaw": 24.1,
          "pitch": -0.001,
          "rotation": 0,
          "target": "12-namphi16"
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
      "id": "1-devant-hangar",
      "name": "Entrée secondaire",
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
          "yaw": -4.4,
          "pitch": 0.05,
          "rotation": -0.2,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 0.15,
          "pitch": 0.2,
          "rotation": 0,
          "target": "8-muscu-v3"
        },
        {
          "yaw": 5.1,
          "pitch": 0.05,
          "rotation": 0.2,
          "target": "10-dojo"
        },
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "2-nouvelamphi-20",
      "name": "Nouvel Amphithéâtre",
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
          "yaw": 4.8,
          "pitch": 0.18,
          "rotation": 4.7,
          "target": "12-namphi16"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8,
          "pitch": 0.1,
          "title": "Présentation de la formation",
          "text": "L’École centrale de Marseille forme des ingénieurs généralistes à haut niveau scientifique. Centrale Marseille a conçu un cursus unique qui permet aux élèves de devenir les auteurs de leur propre parcours. De nombreuses opportunités sont offertes aux étudiants. En effet les trois premiers semestres sont construits autour d’un rythme unique, à savoir l’alternance de trois semaines académiques et une semaine d’alternance : &nbsp;<br> - Train’ing (ce sont des semaines de professionnalisation) &nbsp;<br> - Alternance entreprise &nbsp;<br> - Alternance recherche &nbsp;<br> - Alternance auto-entreprenariat &nbsp;<br> Les semestres suivants permettent de personnaliser la formation. Centrale Marseille propose une multitude de combinaisons et d’opportunités : semestres thématiques, césure libre ou académique, projets, mobilité internationale, option d’approfondissement, filière métier, stages... C’est l’occasion d’affirmer sa personnalité et de se projeter dans un avenir professionnel. &nbsp;<br> &nbsp;<br> Plus d’informations sur la formation et les nombreuses opportunités ici : https://formation.centrale-marseille.fr/fr"
        }
      ]
    },
    {
      "id": "3-passerelle-23",
      "name": "Passerelle",
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
          "yaw": 14.5,
          "pitch": -0.2,
          "rotation": 11,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 15.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "12-namphi16"
        },
        {
          "yaw": 24.5,
          "pitch": 0.05,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "4-salle-de-cours-0",
      "name": "Salle de cours",
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
          "yaw": 3.497,
          "pitch": -0.0001,
          "rotation": 0.0001,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "5-rue_haute_antenne",
      "name": "Rue haute 2",
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
          "yaw": 3.497,
          "pitch": -0.1,
          "rotation": 0.0001,
          "target": "4-salle-de-cours-0"
        },
        {
          "yaw": 5.2,
          "pitch": -0.0001,
          "rotation": 0.5,
          "target": "3-passerelle-23"
        },
        {
          "yaw": 4.75,
          "pitch": 0,
          "rotation": 0,
          "target": "7-cdi-v3"
        },
        {
          "yaw": 8,
          "pitch": 0.1,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 8.5,
          "pitch": -0.2,
          "title": "L'anTenne",
          "text": "L’anTenne est un lieu  d'écoute et de soutien à disposition des étudiants : permanences d'une assistante sociale, information et sensibilisation aux détresses et au mal-être étudiant. C'est un espace neutre, chaleureux, pour échanger en toute confidentialité. &nbsp;<br> &nbsp;<br> Voici les services proposés par l'anTenne : &nbsp;<br> - 0 800 602 033 numéro vert gratuit : un service d’écoute et d’accompagnement psychologique accessible à distance 24 h/24 et 7 jours sur 7, permettant entre autre, des entretiens en présentiel avec des psychologues, pris en charge par Centrale Marseille. &nbsp;<br> - Des temps d'information et de prévention, animés par des professionnels (juridiques, sociaux, etc.) à l’attention des élèves et du personnel. &nbsp;<br> - L’accès à de la documentation &nbsp;<br> &nbsp;<br> Un groupe de prévention a été aussi mis en place. &nbsp;<br> Il est constitué d’une part du personnel enseignant et administratif en lien dans leur quotidien avec les élèves et, d’autre part, d’élèves représentants élus des instances et associations de l’École. Ce groupe est régulièrement formé à la détection, l’écoute et l’orientation des élèves." 
        }
      ]
    },
    {
      "id": "6-foys10-recupere-2",
      "name": "Foy's",
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
          "yaw": 9.63,
          "pitch": 0.1,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.62,
          "pitch": -0.15,
          "title": "Le Foy's",
          "text": "Le Foy’s est un endroit chaleureux où les étudiants peuvent se retrouver pour faire un baby foot, un billard, des jeux de sociétés... Les étudiants s’y retrouvent aussi pour de nombreux événements organisés par les diverses associations de l'école." 
        }
      ]
    },
    {
      "id": "7-cdi-v3",
      "name": "CDI",
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
          "yaw": 1.6,
          "pitch": 0.2,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "8-muscu-v3",
      "name": "Salle de musculation",
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
          "yaw": 1.6,
          "pitch": 0.1,
          "rotation": 0.2,
          "target": "1-devant-hangar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5,
          "pitch": -0.1,
          "title": "La salle de musculation",
          "text": "La salle de musculation comporte de nombreux équipements qui sont à la disposition des étudiants de l’École centrale de Marseille. Des cours de sports sont aussi donnés dans cette salle : &nbsp;<br> - Tabata &nbsp;<br> - Musculation &nbsp;<br> - Step"
        }
      ]
    },
    {
      "id": "9-rue-haute-pc-securite",
      "name": "Rue haute 1",
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
          "yaw": 4.8,
          "pitch": 0.2,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        },
        {
          "yaw": 20,
          "pitch": 0.1,
          "rotation": 0.2,
          "target": "6-foys10-recupere-2"
        },
        {
          "yaw": -2.8,
          "pitch": 0.2,
          "rotation": 0,
          "target": "11-fablab"
        },
      ],
      "infoHotspots": [
        {
          "yaw": -0.2,
          "pitch": -0.1,
          "title": "Espace de travail",
          "text": "Cette rue, nommée la rue 'haute' est comme la colonne vertébrale de l'établissement. De nombreux espaces de travail en extérieur ont été aménagés en 2020 à Centrale Marseille pour permettre aux étudiants d’avoir les meilleures conditions de travail possible."
        }
      ]
    },
    {
      "id": "10-dojo",
      "name": "Dojo",
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
          "yaw": 6.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "1-devant-hangar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 7,
          "pitch": -0.1,
          "title": "Le dojo",
          "text": "Le dojo de Centrale Marseille a été inauguré en 2014. De nombreux sports sont pratiqués : - la boxe française &nbsp;<br> - le yoga &nbsp;<br> - les entraînements des pompoms &nbsp;<br> - le crossfit &nbsp;<br> - la zumba &nbsp;<br> &nbsp;<br> D’autres sports se font en plein air comme le football, le rugby, la randonnée, la voile et pleins d’autres encore, ou en gymnase comme le basketball, le handball…"
        }
      ]
    },
    {
      "id": "11-fablab",
      "name": "FabLab",
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
          "yaw": -0.2,
          "pitch": 0.2,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2,
          "pitch": -0.1,
          "title": "Le Fablab",
          "text": "Le FabLab est un espace dédié à la créativité et au bricolage. Ouvert en 2012, il est géré par une des associations étudiantes de Centrale Marseille, mais est ouvert à tous. De nombreuses machines de haute technologie sont disponibles, comme des imprimantes 3D et des découpeuses laser permettant aux étudiants de réaliser de nombreux projets. &nbsp;<br> Chaque année des Repair Cafés et des formations sont réalisées pour apprendre à utiliser les machines et pour donner de nombreux conseils."
        }
      ]
    },
    {
      "id": "12-namphi16",
      "name": "Hall Nouvel Amphithéâtre",
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
          "yaw": 1.3,
          "pitch": 0.2,
          "rotation": 0,
          "target": "3-passerelle-23"
        },
        {
          "yaw": 4.45,
          "pitch": 0.3,
          "rotation": 0,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 2.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "2-nouvelamphi-20"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2,
          "pitch": -0.1,
          "title": "Nouvel Amphitéâtre",
          "text": "Le nouvel amphithéâtre de Centrale Marseille a été inauguré le 16 octobre 2019. &nbsp;<br> Il a été créé pour pouvoir accueillir une promotion entière (soit 300 élèves). &nbsp;<br> Le bâtiment est hautement connecté. Il permet donc la captation vidéo en direct du public et de la salle, l’enregistrement des enseignements et la pratique des cours à distance. Sa forme ovoïde favorise un confort optimum de vision."
        }
      ]
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
