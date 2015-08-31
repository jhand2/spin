angular.module('ArtistCtrl', []).controller('ArtistController',
	function($scope, $http, Artist) {
		$scope.tagline = 'Art is dead';
		$scope.formData = {};
		Artist.get(function(err, data) {
			console.log(data);
		});

		$scope.createArtist = function() {
			console.log("calling create");
			artistData = $scope.formData;
			console.log(artistData);
			Artist.create(artistData);
			$scope.formData = {};
		};
	}
);

