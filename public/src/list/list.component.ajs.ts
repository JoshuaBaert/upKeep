import { BaseComponent } from '../models/base-component';

(function () {
    'use strict';
    const template = require('./list.html').toString();

    class ListComponent extends BaseComponent {
        user;
        list;
        editItem;
        listIndex;

        newItem = {
            name: undefined,
            date: undefined,
            description: undefined,
        };

        constructor(
            private $stateParams,
            private $state,
            private mainSvc
        ) {
            super();
            this.$inject = [
                '$stateParams',
                '$state',
                'mainSvc'
            ];
            this.listIndex = this.$stateParams.listIndex;

            this.getUser();
        }

        getUser() {
            this.mainSvc.getUser().then((res) => {
                this.user = res;
                this.list = this.user.lists[this.$stateParams.listIndex];

                if (this.$stateParams.itemIndex) {
                    this.editItem = this.user.lists[this.$stateParams.listIndex].items[this.$stateParams.itemIndex];
                    this.editItem.date = new Date(this.editItem.date);
                }
            });
        }

        goHome() {
            setTimeout(() => {
                this.$state.go('user.home.new', { reload: true });
                this.getUser();
            }, 650);
        }

        postItem() {
            if (this.newItem.name && this.newItem.date) {
                this.mainSvc.postItem(this.list.id, this.newItem.name, this.newItem.date, this.newItem.description);
                this.$state.reload();
                swal({
                    title: 'Added new Item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            } else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        }

        putList() {
            if (this.list.name && this.list.icon) {
                this.mainSvc.putList(this.list.id, this.list.name, this.list.icon);
                this.goHome();
                swal({
                    title: 'Updated list',
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
        }

        putItem() {
            if (this.editItem.name && this.editItem.date) {
                this.mainSvc.putItem(this.editItem.id, this.editItem.name, this.editItem.date, this.editItem.description);
                this.$state.reload();
                swal({
                    title: 'Updated item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                this.$state.go('user.home.new');
            } else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        }

        deleteList() {
            const vm = this;
            swal({
                title: 'Are you sure you wanna delete this List',
                text: 'You cannot come back form this!!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it.',
                closeOnConfirm: false,
            }, function () {
                vm.mainSvc.deleteList(vm.list.id);
                swal({
                    title: 'Deleted List',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                setTimeout(function () {
                    vm.getUser();
                    vm.$state.go('user.home.new');
                }, 750);
            });

        }

        deleteItem() {
            const vm = this;
            swal({
                title: 'Are you sure you wanna delete this Item',
                text: 'You cannot come back form this!!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it.',
                closeOnConfirm: false,
            }, function () {
                vm.mainSvc.deleteItem(vm.editItem.id);
                swal({
                    title: 'Deleted item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                setTimeout(function () {
                    vm.getUser();
                    vm.$state.go('user.list.new', { listIndex: vm.$stateParams.listIndex }, { reload: true });
                }, 750);
            });
        }
    }

    angular.module('upkeep.list')
        .component('ukList', {
            template: template,
            controller: ListComponent,
            controllerAs: 'vm',
            bindToController: true,
        });
})();
