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
		}

		$scope.deleteArtists = function(id) {
			Artist.remove(id);
		};
	}
);

