var app=angular.module("temperatureApp",[]);

	app.controller("weatherController", function($scope,$http){
		$scope.getTemperature=function(cityName){			
			$http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+",&APPID=012581a1cd5d98c0b591970c753d2a12")
				.then(function(response){
					$scope.weather_description=response.data.weather["0"].description;
					$scope.weather_icon=response.data.weather.icon;
					$scope.city_name=cityName;
				},function(response){
					$scope.temperatures="Some Error Occured";
				});
		}
	})		