import { BaseComponent } from '../models/base-component';

(function () {
    'use strict';
    const template = require('./login.html').toString();

    class LoginComponent extends BaseComponent {

        constructor(private $http, private $state) {
            super();
            this.$inject = ['$http', '$state'];
        }

        dummy() {
            this.$http.post('/dummy').then(res => {
                this.$state.go('user.home');
            });
        }
    }

    angular.module('upkeep.login')
        .component('ukLogin', {
            template: template,
            controller: LoginComponent,
            controllerAs: 'vm',
            bindToController: true,
        })
})();
