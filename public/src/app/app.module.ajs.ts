declare const angular;
export const ng = angular;

angular.module('upkeep', [
    'ui.router',
    'ngMaterial',

    // Local
    'upkeep.components',
    'upkeep.home',
    'upkeep.list',
    'upkeep.login',
])
    .directive('ukRoot', function() {
        return {
            restrict: 'A',
            template: `
                <div class="background">
                    <ui-view></ui-view>
                </div>
            `
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/home');

        console.log('routing?');

        $stateProvider.state('login', {
            url: '/login',
            component: 'ukLogin',
            // templateUrl: './views/login.html'
        }).state('user', {
            url: '/',
            templateUrl: './views/user.html',
        }).state('user.settings', {
            url: 'settings',
            templateUrl: './views/settings.html',
        }).state('user.home', {
            url: '',
            component: 'ukHome',
        }).state('user.home.new', {
            url: 'home',
            templateUrl: './views/side/newList.html',
        }).state('user.home.edit', {
            url: 'home/edit/:listIndex',
            templateUrl: './views/side/editList.html',
            reload: true,
        }).state('user.list', {
            url: '',
            component: 'ukList'
        }).state('user.list.new', {
            url: 'list/:listIndex',
            templateUrl: './views/side/newItem.html',
        }).state('user.list.edit', {
            url: 'list/:listIndex/:itemIndex',
            templateUrl: './views/side/editItem.html',
        });

        $urlRouterProvider.otherwise('/login');
    });
