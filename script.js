  mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hrNzEwMiIsImEiOiJja3QyaXN0bmIwa25pMnZwaGwwZzQ5NWE4In0.px_9Q2RautHCHomquuUzZg';

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true})
  
  function successLocation(position){
      console.log(position)
      setupMap([position.coords.longitude, position.coords.latitude])

  }
  
  function errorLocation() {
      setupMap([31.1325, 29.9773])  
      //Pyramids of Giza: 29.9773° N, 31.1325° E    
  }

  function setupMap(center){

    const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: 12
        });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left')

    const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/cycling'
});


map.addControl(directions, 'top-right');

    
  }

  