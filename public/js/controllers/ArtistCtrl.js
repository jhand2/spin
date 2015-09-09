angular.module('ArtistCtrl', []).controller('ArtistController',
	function($scope, $http, Artist) {
		$scope.formData = {};
		$scope.artists = {};

		$scope.createArtist = function() {
			console.log("calling create");
			artistData = $scope.formData;
			Artist.create(artistData).then(function(response) {
				$scope.artists.push(response.data);
			});
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

		$scope.getArtists();
	}
);

