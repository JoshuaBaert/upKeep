'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: '../views/home/html'
	});
});
'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').controller('mainCtrl', function ($scope, mainSvc) {
  $scope.notWorking = 'working';
});
'use strict';

/**
 * Created by Joshua Baert on 12/1/2016.
 */

angular.module('upKeep').service('mainSvc', function () {});
//# sourceMappingURL=maps/bundle.js.map
