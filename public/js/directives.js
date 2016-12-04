/**
 * Created by Joshua Baert on 12/2/2016.
 */

var openSpeed = 100;
var openWidth = '101vw';

angular.module('upKeep')
	.directive('getUser', function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				scope.getUser();
			}
		}
	})
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
						$('.side-panel').css('width', openWidth);
					}, openSpeed);
				});
			}
		}
	})
	.directive('autoOpenCreate', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$(document).ready(function () {
					setTimeout(function () {
						$('.side-panel').css('width', openWidth);
					}, openSpeed);
				})
				
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
