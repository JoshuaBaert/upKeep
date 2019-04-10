import { BaseComponent } from '../models/base-component';
import { ng } from '../app.module.ajs';

const template = require('./login.html').toString();

class LoginComponent extends BaseComponent {

    constructor(private $http, private $state) {
        super();
        console.log('working?');
        this.$inject = ['$http', '$state'];
    }

    dummy() {
        this.$http.post('/dummy').then(res => {
            this.$state.go('user.home');
        });
    }
}

ng.module('upkeep.login')
    .component('ukLogin', {
        template: template,
        controller: LoginComponent,
        controllerAs: 'vm',
        bindToController: true,
    });
