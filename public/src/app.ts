import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import './jq-dropdown/jq-dropdown';

import '../styles/jquery.dropdown.css';
import '../styles/reset.css';
import '../styles/style.scss';

export declare const angular;
export declare const swal;
export declare const $;


angular.module('upkeep', [
    'ui.router',
    'ngMaterial',

    // Local
    'upkeep.home',
    'upkeep.components',
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/home');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: './views/login.html',
    }).state('user', {
        url: '/',
        templateUrl: './views/user.html',
    }).state('user.settings', {
        url: 'settings',
        templateUrl: './views/settings.html',
    }).state('user.home', {
        url: '',
        template: '<up-home></up-home>',
        // component: 'upkeep.home',
    }).state('user.home.new', {
        url: 'home',
        templateUrl: './views/side/newList.html',
    }).state('user.home.edit', {
        url: 'home/edit/:listIndex',
        templateUrl: './views/side/editList.html',
        reload: true,
    }).state('user.list', {
        url: '',
        templateUrl: './views/list.html',
    }).state('user.list.new', {
        url: 'list/:listIndex',
        templateUrl: './views/side/newItem.html',
    }).state('user.list.edit', {
        url: 'list/:listIndex/:itemIndex',
        templateUrl: './views/side/editItem.html',
    });

    $urlRouterProvider.otherwise('/login');
});

// Sections
require('./home/home.module');
require('./components/components.module');

// Controllers
require('./controllers/listCtrl');
require('./controllers/mainCtrl');
require('./controllers/userCtrl');

// Directives
require('./directives/directives');

// Services
require('./services/mainSvc');

// Misc
require('./jq-dropdown/jq-dropdown');


angular.bootstrap(document, ['upkeep']);
