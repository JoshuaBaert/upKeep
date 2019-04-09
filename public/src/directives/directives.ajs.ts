/**
 * Created by Joshua Baert on 12/2/2016.
 */
declare const angular;
declare const $;

(function () {
    'use strict';

    var openSpeed = 500;
    var openWidth = '100vw';

    angular.module('upkeep').directive('getUser', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                console.log('get-user started', scope);
                scope.getUser();
            },
        };
    }).directive('closeCreate', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).on('click', function () {
                    $('.side-panel').css('width', '0');
                });
            },
        };
    }).directive('openCreate', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).on('click', function () {
                    setTimeout(function () {
                        $('.side-panel').css('width', openWidth);
                    }, openSpeed);
                });
            },
        };
    }).directive('autoOpenCreate', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(document).ready(function () {
                    setTimeout(function () {
                        $('.side-panel').css('width', openWidth);
                    }, openSpeed);
                });

            },
        };
    }).directive('getUser', function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                scope.getUser();
            },
        };
    }).directive('datePicker', function () {
        $('.date-picker').datepicker({
            changeMonth: true,
            changeYear: true,
        });
    });
})();
