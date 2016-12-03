/**
 * Created by Joshua Baert on 12/2/2016.
 */
angular.module('upKeep')
	.directive('openCreate', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$(element).on('click', function () {
					$('.side-panel').css('width', '70vw')
				});
			}
		}
	})
	.directive('closeCreate', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$(element).on('click', function () {
					$('.side-panel').css('width', '0')
				});
			}
		}
	})
	.directive('getUser', function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				scope.getUser();
			}
		}
	});
