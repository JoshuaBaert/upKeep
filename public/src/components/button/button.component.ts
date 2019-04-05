import { BaseComponent } from '../../models/base-component';

(function () {
    'use strict';

    class ButtonComponent extends BaseComponent {
        constructor() {
            super();
            this.vm = this;
        }
    }

    angular.module('upkeep.components')
        .component('upButton', {
            template: '<button>some random button</button>',
            controller: ButtonComponent,
            controllerAs: 'vm',
            bindToController: true,
        });
})();
