db = db.getSiblingDB("Boote");
db.boote.drop();
db.boote.insertMany(

[{
    "name": "Speedy",
    "seats": 4,
    "rating": 4.5,
    "horsepower": 300,
    "imageURL": "https://example.com/speedy.jpg"
  },
  {
    "name": "AquaDream",
    "seats": 2,
    "rating": 3.8,
    "horsepower": 250,
    "imageURL": "https://example.com/aquadream.jpg"
  },
  {
    "name": "WaveMaster",
    "seats": 6,
    "rating": 4.2,
    "horsepower": 350,
    "imageURL": "https://example.com/wavemaster.jpg"
  },
  {
    "name": "OceanExplorer",
    "seats": 8,
    "rating": 4.7,
    "horsepower": 400,
    "imageURL": "https://example.com/oceanexplorer.jpg"
  },
  {
    "name": "SunCruise",
    "seats": 3,
    "rating": 4.0,
    "horsepower": 280,
    "imageURL": "https://example.com/suncruise.jpg"
  },
  {
    "name": "MarineGlider",
    "seats": 5,
    "rating": 4.3,
    "horsepower": 320,
    "imageURL": "https://example.com/marineglider.jpg"
  },
  {
    "name": "NauticalStar",
    "seats": 4,
    "rating": 3.5,
    "horsepower": 270,
    "imageURL": "https://example.com/nauticalstar.jpg"
  },
  {
    "name": "SailSpeed",
    "seats": 2,
    "rating": 4.8,
    "horsepower": 350,
    "imageURL": "https://example.com/sailspeed.jpg"
  },
  {
    "name": "SeaBreeze",
    "seats": 6,
    "rating": 4.1,
    "horsepower": 310,
    "imageURL": "https://example.com/seabreeze.jpg"
  },
  {
    "name": "VoyageMaster",
    "seats": 10,
    "rating": 4.6,
    "horsepower": 450,
    "imageURL": "https://example.com/voyagemaster.jpg"
  },
  {
    "name": "CoralCruiser",
    "seats": 4,
    "rating": 3.9,
    "horsepower": 290,
    "imageURL": "https://example.com/coralcruiser.jpg"
  },
  {
    "name": "IslandHopper",
    "seats": 7,
    "rating": 4.4,
    "horsepower": 380,
    "imageURL": "https://example.com/islandhopper.jpg"
  },
  {
    "name": "RiverRider",
    "seats": 6,
    "rating": 4.0,
    "horsepower": 320,
    "imageURL": "https://example.com/riverrider.jpg"
  },
  {
    "name": "TidalTracker",
    "seats": 3,
    "rating": 4.2,
    "horsepower": 280,
    "imageURL": "https://example.com/tidaltracker.jpg"
  },
  {
    "name": "WindyWaves",
    "seats": 4,
    "rating": 3.7,
    "horsepower": 300,
    "imageURL": "https://example.com/windywaves.jpg"
  },
  {
    "name": "DolphinDasher",
    "seats": 2,
    "rating": 4.6,
    "horsepower": 330,
    "imageURL": "https://example.com/dolphindasher.jpg"
  },
  {
    "name": "LighthouseLiner",
    "seats": 8,
    "rating": 4.3,
    "horsepower": 370,
    "imageURL": "https://example.com/lighthouseliner.jpg"
  },
  {
    "name": "PirateProwler",
    "seats": 5,
    "rating": 3.8,
    "horsepower": 290,
    "imageURL": "https://example.com/pirateprowler.jpg"
  },
  {
    "name": "MermaidMist",
    "seats": 4,
    "rating": 4.5,
    "horsepower": 320,
    "imageURL": "https://example.com/mermaidmist.jpg"
  },
  {
    "name": "SeagullSailor",
    "seats": 3,
    "rating": 4.1,
    "horsepower": 280,
    "imageURL": "https://example.com/seagullsailor.jpg"
  },
  {
    "name": "Robbenklopper",
    "seats": 3,
    "rating": 4.1,
    "horsepower": 280,
    "imageURL": "https://example.com/seagullsailor.jpg"
  }, {
    "name": "ArielNichtMeerJungfrau",
    "seats": 3,
    "rating": 4.1,
    "horsepower": 280,
    "imageURL": "https://example.com/seagullsailor.jpg"
  }])