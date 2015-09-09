angular.module('ArtistCtrl', []).controller('ArtistController',
	function($scope, $http, Artist) {
		$scope.tagline = 'Art is dead';
		$scope.formData = {};

		$scope.createArtist = function() {
			console.log("calling create");
			artistData = $scope.formData;
			console.log(artistData);
			Artist.create(artistData);
			$scope.formData = {};
		};

		$scope.getArtists = function() {
			Artist.get().then(function(response) {
				$scope.artists = response.data;
			});
		};

		$scope.deleteArtist = function(id) {
			console.log(id);
			Artist.delete(id);
			$scope.artists = $scope.artists.filter(function (artist) {
				return artist._id !== id;
			});

			console.log($scope.artists);
		};
	}
);

