// MAIN CONTROLLER
function mainController($scope, $http){
		$scope.getTemperature=function(cityName){			
			$http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&APPID=7c93d8ef34a0d72f988bc1aca705fab8")
				.then(function(response){
                    $scope.weather_temperature=Math.round(response.data.main.temp);
					$scope.weather_description=response.data.weather["0"].description;
					// $scope.weather_icon=response.data.weather["0"].icon
					$scope.weather_code=response.data.weather["0"].id;
					$scope.city_name=cityName;
				},function(response){
					$scope.temperatures="Some Error Occured";
				});
		};
};

function musicController($scope){

$scope.steps = [
  {weather_description: "clear sky", deezer_playlist_id:"281760401"},
  {weather_description: "few clouds", deezer_playlist_id:"726989395"},
  {weather_description: "scattered clouds", deezer_playlist_id:"15806750"},
  {weather_description: "broken clouds", deezer_playlist_id:"23896561"},
  {weather_description: "shower rain", deezer_playlist_id:"88696701"},
  {weather_description: "rain", deezer_playlist_id:"2585932364"},
  {weather_description: "thunderstorm", deezer_playlist_id:"1574790001"},
  {weather_description: "snow", deezer_playlist_id:"1574790001"},
  {weather_description: "mist", deezer_playlist_id:"2753215784"},
];


};



