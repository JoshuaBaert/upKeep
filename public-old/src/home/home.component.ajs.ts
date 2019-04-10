import { BaseComponent } from '../models/base-component';

(function () {
    'use strict';
    const template = require('./home.html').toString();

    class HomeComponent extends BaseComponent {
        user;
        newList = {
            name: undefined,
            icon: undefined,
        };

        constructor(private mainSvc, private $state) {
            super();
            this.$inject = ['mainSvc', '$state'];
        }

        $onInit() {
            this.getUser()
        }

        getUser() {
            this.mainSvc.getUser().then((res) => {
                this.user = res;
            })
        }

        postList() {
            if (this.newList.name && this.newList.icon) {
                this.mainSvc.postList(this.newList.name, this.newList.icon);
                this.$state.reload();
                swal({
                    title: 'List Added',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            } else {
                swal({
                    title: 'You need both Name and Icon',
                    type: 'error',
                });
            }
        };
    }

    angular.module('upkeep.home')
        .component('ukHome', {
            template: template,
            controller: HomeComponent,
            controllerAs: 'vm',
            bindToController: true,
        });
})();
