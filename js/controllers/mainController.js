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
		}
};
