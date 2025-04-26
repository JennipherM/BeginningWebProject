//function to set up and display the Map
function initMap() {

   //finds elements by their id
   let displayMap = document.getElementById("displayMap");
   let routeBox = document.getElementById("routeBox");

   //assigns coords to bnb address 
   let bnbAddress = { lat: 45.295600, lng: -117.217300}
   //let userLocation = { lat: 35.19885112201596, lng: -101.9198548828968 }
// let amarilloCollege = { lat: 45.295600, lng:-117.217300 };

   //creates an object for map
   let myMap = new google.maps.Map(displayMap, {
      //sets how zoomed in the map is
      zoom: 11,
      //centers the map on the bnb coords
      center: bnbAddress,

      //doesnt allow for fullscreeen 
      fullscreenControl: false
   });

   //create a marker on the map
   new google.maps.Marker({
      //places the marker on the bnb coordinates
      position: bnbAddress,
      //puts the marker on the map
      map: myMap,
      //names marker E.T cabins
      title: "E.T Cabins"
   });

//gets the users location
   navigator.geolocation.getCurrentPosition(getPos, handleError);

   //creates a function 
   function getPos(pos) {
      //assigns the users coordinates to myPosition
      let myPosition = {
         lat: pos.coords.latitude,
         lng: pos.coords.longitude
      }
      //writes the users coordinates in the console window
      console.log(myPosition);

      //makes an object for the directions; finds the directions
      let routeFind = new google.maps.DirectionsService(); // find the routing

      //write the line to highlight the route
      let routeDraw = new google.maps.DirectionsRenderer(); // draw the routing

      //assigns the route for the user
      let myRoute = {
         //sets the starting position to origin
         origin: myPosition,
         //sets the ending position to the bnb
         destination: bnbAddress,
         //sets the traveling mode to driving (instead of biking/walking)
         travelMode: "DRIVING"
      }

      //function to write out the directions
      routeFind.route(myRoute, function (result, status) {

         if (status == "OK") {
            routeDraw.setDirections(result);

            // sets the route drawing on the map
            routeDraw.setMap(myMap);
            //adds the directions to the page
            routeDraw.setPanel(routeBox);
         } 
         //runs if the directions aren't working
         else {
            routeBox.textContent = "Directions Unavailable: " + status;
         }
      });

   }

   //runs if there is an error
   function handleError(err) {
      //writes the error in the console 
      console.log("Geolocation error: " + err.message);
      }
}