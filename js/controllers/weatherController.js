function mainController($scope, $http) {
    const URL = "http://api.openweathermap.org/data/2.5/find?q="
    const APPID = "7c93d8ef34a0d72f988bc1aca705fab8";
    const IMGURL = "http://openweathermap.org/img/w/";

    $scope.city = [];

        $http.get(URL + citysubmitted + "&units=metric&APPID=" + APPID)
                .success(function(data) {
                        $scope.weather = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                }); 

};
