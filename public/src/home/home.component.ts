import { BaseComponent } from '../models/base-component';

(function () {
    'use strict';
    const template = require('./home.html').toString();

    class HomeComponent extends BaseComponent {
        user;

        constructor(private mainSvc) {
            super();
            this.vm = this;
            this.$inject = ['mainSvc'];
        }

        $onInit() {
            this.getUser()
        }

        getUser() {
            this.mainSvc.getUser().then((res) => {
                this.user = res;
            })
        }
    }

    angular.module('upkeep.home')
        .component('upHome', {
            template: template,
            controller: HomeComponent,
            controllerAs: 'vm',
            bindToController: true,
        });
})();
