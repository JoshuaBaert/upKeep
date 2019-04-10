/**
 * Created by Joshua Baert on 12/1/2016.
 */
import { ng } from '../app.module.ajs';

(function () {
    'use strict';

    ng.module('upkeep').controller('mainCtrl', function ($scope, mainSvc, $http, $state) {
        $scope.dummy= function() {
            this.$http.post('/dummy').then(res => {
                this.$state.go('user.home');
            });
        }
    });
})();
