'use strict';
angular.module('LfApp')
.controller('apiCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
	$scope.getTokenAPI = function(){
		 var resource = adalService.getClientID();
		 console.log('ClientID = '+resource);
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};

}]);