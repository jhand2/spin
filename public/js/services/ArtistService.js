angular.module('ArtistService', []).factory('Artist', ['$http', function($http) {
	return {

		//get all arists
		get : function() {
			return $http.get('/api/artists');
		},

		create : function(artstData) {
			console.log(artstData);
			return $http.post('/api/artists', artstData);
		},

		delete : function(id) {
			return $http.delete('/api/artists/' + id);
		}
	}
}]);