'use strict';
angular.module('LfApp')
.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
	 $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
	$scope.getTokenHome = function(){
		 var resource = adalService.getClientID();
		 console.log('ClientID = '+resource);
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};
}]);