var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope, $http) {
  const apiKey = 'c4a4fa1aa6f7fdd31d974a30bd4475d9'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&appid=${apiKey}&units=metric`;


  $scope.getWeather = function() {
    if (!$scope.city) {
      $scope.error = "Please enter a city name.";
      $scope.weather = null;
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&appid=${apiKey}&units=metric`;

    $http.get(url)
      .then(function(response) {
        $scope.weather = response.data;
        $scope.error = null;
      }, function(error) {
        $scope.error = "Could not fetch weather. Check city name.";
        $scope.weather = null;
      });
  };
});