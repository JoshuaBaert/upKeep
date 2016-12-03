/**
 * Created by Joshua Baert on 12/2/2016.
 */
angular.module('upKeep')
	.directive('closeCreate', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$(element).on('click', function () {
					$('.side-panel').css('width', '0');
				});
			}
		}
	})
	.directive('openCreate', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$(element).on('click', function () {
					setTimeout(function () {
						$('.side-panel').css('width', '65vw');
					}, 1);
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
