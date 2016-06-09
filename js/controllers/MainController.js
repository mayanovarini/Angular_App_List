app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
	  {
	    icon: 'img/move.jpg',
	    title: 'Work Out',
	    developer: 'Sports, Inc.',
	    price: 0.99
	  },
	  {
	    icon: 'img/shutterbugg.jpg',
	    title: 'Bike and Travel',
	    developer: 'Bikers Group',
	    price: 1.99
	  },
	  {
	    icon: 'img/gameboard.jpg',
	    title: 'Wanna Play?',
	    developer: 'Maya.',
	    price: 1.99
	  },
	  {
	    icon: 'img/forecast.jpg',
	    title: 'Growth Monitor',
	    developer: 'The Team',
	    price: 4.99
	  }
	];
}]);
