/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app-js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.ajs.ts","vendors~app-js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ajs.ts":
/*!************************!*\
  !*** ./src/app.ajs.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-ui-router */ "./node_modules/angular-ui-router/lib-esm/index.js");
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-animate */ "./node_modules/angular-animate/index.js");
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_animate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-aria */ "./node_modules/angular-aria/index.js");
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_aria__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-messages */ "./node_modules/angular-messages/index.js");
/* harmony import */ var angular_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-material */ "./node_modules/angular-material/index.js");
/* harmony import */ var angular_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jq_dropdown_jq_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jq-dropdown/jq-dropdown */ "./src/jq-dropdown/jq-dropdown.js");
/* harmony import */ var _jq_dropdown_jq_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jq_dropdown_jq_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_jquery_dropdown_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/jquery.dropdown.css */ "./styles/jquery.dropdown.css");
/* harmony import */ var _styles_jquery_dropdown_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_jquery_dropdown_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__);










angular.module('upkeep', [
    'ui.router',
    'ngMaterial',
    // Local
    'upkeep.components',
    'upkeep.home',
    'upkeep.list',
    'upkeep.login',
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/home');
    $stateProvider.state('login', {
        url: '/login',
        component: 'ukLogin',
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
// Sections
__webpack_require__(/*! ./components/components.module.ajs */ "./src/components/components.module.ajs.ts");
__webpack_require__(/*! ./home/home.module.ajs */ "./src/home/home.module.ajs.ts");
__webpack_require__(/*! ./list/list.module.ajs */ "./src/list/list.module.ajs.ts");
__webpack_require__(/*! ./login/login.module.ajs */ "./src/login/login.module.ajs.ts");
// Controllers
__webpack_require__(/*! ./controllers/listCtrl.ajs */ "./src/controllers/listCtrl.ajs.ts");
__webpack_require__(/*! ./controllers/mainCtrl.ajs */ "./src/controllers/mainCtrl.ajs.ts");
__webpack_require__(/*! ./controllers/userCtrl.ajs */ "./src/controllers/userCtrl.ajs.ts");
// Directives
__webpack_require__(/*! ./directives/directives.ajs */ "./src/directives/directives.ajs.ts");
// Services
__webpack_require__(/*! ./services/mainSvc.ajs */ "./src/services/mainSvc.ajs.ts");
angular.bootstrap(document, ['upkeep']);


/***/ }),

/***/ "./src/components/components.module.ajs.ts":
/*!*************************************************!*\
  !*** ./src/components/components.module.ajs.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('upkeep.components', []);
})();


/***/ }),

/***/ "./src/controllers/listCtrl.ajs.ts":
/*!*****************************************!*\
  !*** ./src/controllers/listCtrl.ajs.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('upkeep').controller('listsCtrl', listsCtrl);
    function listsCtrl($scope, $stateParams, $state, mainSvc) {
        $scope.sizes = [
            'Home',
            'Car',
            'Female',
            'Truck',
        ];
        $scope.newItem = {
            name: undefined,
            date: undefined,
            description: undefined,
        };
        $scope.goHome = function () {
            setTimeout(function () {
                $state.go('user.home.new', { reload: true });
                $scope.getUser();
            }, 650);
        };
        $scope.goList = function () {
            setTimeout(function () {
                $state.go('user.list', { listIndex: $stateParams.listIndex }, { reload: true });
                $scope.getUser();
            }, 650);
        };
        $scope.getUser = function () {
            mainSvc.getUser().then(function (res) {
                $scope.user = res;
                $scope.list = $scope.user.lists[$stateParams.listIndex];
                if ($stateParams.itemIndex) {
                    $scope.editItem = $scope.user.lists[$stateParams.listIndex].items[$stateParams.itemIndex];
                    $scope.editItem.date = new Date($scope.editItem.date);
                }
            });
        };
        $scope.postItem = function () {
            if ($scope.newItem.name && $scope.newItem.date) {
                mainSvc.postItem($scope.list.id, $scope.newItem.name, $scope.newItem.date, $scope.newItem.description);
                $state.reload();
                swal({
                    title: 'Added new Item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        };
        $scope.putList = function () {
            if ($scope.list.name && $scope.list.icon) {
                mainSvc.putList($scope.list.id, $scope.list.name, $scope.list.icon);
                $scope.goHome();
                swal({
                    title: 'Updated list',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Icon',
                    type: 'error',
                });
            }
        };
        $scope.putItem = function () {
            if ($scope.editItem.name && $scope.editItem.date) {
                mainSvc.putItem($scope.editItem.id, $scope.editItem.name, $scope.editItem.date, $scope.editItem.description);
                $state.reload();
                swal({
                    title: 'Updated item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                $state.go('user.home.new');
            }
            else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        };
        $scope.deleteList = function () {
            swal({
                title: 'Are you sure you wanna delete this List',
                text: 'You cannot come back form this!!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it.',
                closeOnConfirm: false,
            }, function () {
                mainSvc.deleteList($scope.list.id);
                swal({
                    title: 'Deleted List',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                setTimeout(function () {
                    $scope.getUser();
                    $state.go('user.home.new');
                }, 750);
            });
        };
        $scope.deleteItem = function () {
            swal({
                title: 'Are you sure you wanna delete this Item',
                text: 'You cannot come back form this!!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it.',
                closeOnConfirm: false,
            }, function () {
                mainSvc.deleteItem($scope.editItem.id);
                swal({
                    title: 'Deleted item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                setTimeout(function () {
                    $scope.getUser();
                    $state.go('user.list.new', { listIndex: $stateParams.listIndex }, { reload: true });
                }, 750);
            });
        };
        $scope.getUser();
        $scope.listIndex = $stateParams.listIndex;
    }
})();


/***/ }),

/***/ "./src/controllers/mainCtrl.ajs.ts":
/*!*****************************************!*\
  !*** ./src/controllers/mainCtrl.ajs.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by Joshua Baert on 12/1/2016.
 */
(function () {
    'use strict';
    angular.module('upkeep').controller('mainCtrl', function ($scope, mainSvc, $http, $state) {
    });
})();


/***/ }),

/***/ "./src/controllers/userCtrl.ajs.ts":
/*!*****************************************!*\
  !*** ./src/controllers/userCtrl.ajs.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by Joshua Baert on 12/2/2016.
 */
(function () {
    'use strict';
    angular.module('upkeep').controller('userCtrl', function ($scope, mainSvc, $stateParams, $state) {
        $scope.newList = {
            name: undefined,
            icon: undefined,
        };
        $scope.icon = [
            'Home',
            'Car',
            'Female',
            'Truck',
        ];
        $scope.goHome = function () {
            setTimeout(function () {
                $state.go('user.home.new', { reload: true });
                $scope.getUser();
            }, 650);
        };
        $scope.goHomeNow = function () {
            setTimeout(function () {
                $state.go('user.home.new', { reload: true });
                $scope.getUser();
            }, 100);
        };
        $scope.getUser = function () {
            mainSvc.getUser().then(function (res) {
                $scope.user = res;
            });
        };
        $scope.postList = function () {
            if ($scope.newList.name && $scope.newList.icon) {
                mainSvc.postList($scope.newList.name, $scope.newList.icon);
                $state.reload();
                swal({
                    title: 'List Added',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Icon',
                    type: 'error',
                });
            }
        };
        $scope.putUser = function () {
            if (!$scope.user.phoneNumber) {
                $scope.user.allowText = false;
            }
            if ($scope.user.firstName &&
                $scope.user.lastName &&
                $scope.user.email) {
                mainSvc.putUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.phoneNumber, $scope.user.allowEmail, $scope.user.allowText);
                swal({
                    title: 'We have saved your Settings',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
                $scope.goHome();
            }
            else {
                swal({
                    title: 'You need to have First Name, Last Name & Email',
                    type: 'error',
                });
            }
        };
        $scope.logout = function () {
            swal({
                title: 'Do you wanna logout?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Buh Bye',
                closeOnConfirm: false,
            }, function () {
                mainSvc.logout();
            });
        };
        $scope.index = $stateParams.listIndex;
        $scope.getUser();
    });
})();


/***/ }),

/***/ "./src/directives/directives.ajs.ts":
/*!******************************************!*\
  !*** ./src/directives/directives.ajs.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/home/home.component.ajs.ts":
/*!****************************************!*\
  !*** ./src/home/home.component.ajs.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/base-component */ "./src/models/base-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function () {
    'use strict';
    var template = __webpack_require__(/*! ./home.html */ "./src/home/home.html").toString();
    var HomeComponent = /** @class */ (function (_super) {
        __extends(HomeComponent, _super);
        function HomeComponent(mainSvc, $state) {
            var _this = _super.call(this) || this;
            _this.mainSvc = mainSvc;
            _this.$state = $state;
            _this.newList = {
                name: undefined,
                icon: undefined,
            };
            _this.$inject = ['mainSvc', '$state'];
            return _this;
        }
        HomeComponent.prototype.$onInit = function () {
            this.getUser();
        };
        HomeComponent.prototype.getUser = function () {
            var _this = this;
            this.mainSvc.getUser().then(function (res) {
                _this.user = res;
            });
        };
        HomeComponent.prototype.postList = function () {
            if (this.newList.name && this.newList.icon) {
                this.mainSvc.postList(this.newList.name, this.newList.icon);
                this.$state.reload();
                swal({
                    title: 'List Added',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Icon',
                    type: 'error',
                });
            }
        };
        ;
        return HomeComponent;
    }(_models_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));
    angular.module('upkeep.home')
        .component('ukHome', {
        template: template,
        controller: HomeComponent,
        controllerAs: 'vm',
        bindToController: true,
    });
})();


/***/ }),

/***/ "./src/home/home.html":
/*!****************************!*\
  !*** ./src/home/home.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main\">\r\n    <div class=\"title\"><h1>Lists</h1></div>\r\n    <div class=\"list-mini\" ng-repeat=\"list in vm.user.lists track by $index\">\r\n        <a class=\"list-mini-name\" ui-sref=\"user.list.new({listIndex: $index})\">\r\n            <div><h1>{{list.name}}</h1></div>\r\n        </a>\r\n        <div class=\"list-mini-btns\" ui-sref=\"user.home.edit({listIndex: $index})\" ui-sref-opts=\"{reload: true}\">\r\n            <div class=\"edit-btn\"><i class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n    </div>\r\n\r\n    <ui-view class=\"side-panel\"></ui-view>\r\n\r\n</div>\r\n";

/***/ }),

/***/ "./src/home/home.module.ajs.ts":
/*!*************************************!*\
  !*** ./src/home/home.module.ajs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('upkeep.home', []);
})();
__webpack_require__(/*! ./home.component.ajs */ "./src/home/home.component.ajs.ts");


/***/ }),

/***/ "./src/jq-dropdown/jq-dropdown.js":
/*!****************************************!*\
  !*** ./src/jq-dropdown/jq-dropdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by Joshua Baert on 12/9/2016.
 */
/*
 * jQuery Dropdown: A simple dropdown plugin
 *
 * Contribute: https://github.com/claviska/jquery-dropdown
 *
 * @license: MIT license: http://opensource.org/licenses/MIT
 *
 */
if (jQuery) (function ($) {

    $.extend($.fn, {
        jqDropdown: function (method, data) {
            switch (method) {
                case 'show':
                    show(null, $(this));
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    return $(this).attr('data-jq-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-jq-dropdown');
                case 'disable':
                    return $(this).addClass('jq-dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('jq-dropdown-disabled');
            }
        },
    });

    function show(event, object) {
        var trigger = event ? $(this) : object,
            jqDropdown = $(trigger.attr('data-jq-dropdown')),
            isOpen = trigger.hasClass('jq-dropdown-open');
        // In some cases we don't want to show it
        if (event) {
            if ($(event.target).hasClass('jq-dropdown-ignore')) return;
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (trigger !== object.target && $(object.target).hasClass('jq-dropdown-ignore')) return;
        }
        hide();

        if (isOpen || trigger.hasClass('jq-dropdown-disabled')) return;

        // Show it
        trigger.addClass('jq-dropdown-open');
        jqDropdown
            .data('jq-dropdown-trigger', trigger)
            .show();

        // Position it
        position();

        // Trigger the show callback
        jqDropdown
            .trigger('show', {
                jqDropdown: jqDropdown,
                trigger: trigger,
            });

    }

    function hide(event) {

        // In some cases we don't hide them
        var targetGroup = event ? $(event.target).parents().addBack() : null;

        // Are we clicking anywhere in a jq-dropdown?
        if (targetGroup && targetGroup.is('.jq-dropdown')) {
            // Is it a jq-dropdown menu?
            if (targetGroup.is('.jq-dropdown-menu')) {
                // Did we click on an option? If so close it.
                if (!targetGroup.is('A')) return;
            } else {
                // Nope, it's a panel. Leave it open.
                return;
            }
        }

        // Hide any jq-dropdown that may be showing
        $(document).find('.jq-dropdown:visible').each(function () {
            var jqDropdown = $(this);
            jqDropdown
                .hide()
                .removeData('jq-dropdown-trigger')
                .trigger('hide', { jqDropdown: jqDropdown });
        });

        // Remove all jq-dropdown-open classes
        $(document).find('.jq-dropdown-open').removeClass('jq-dropdown-open');

    }

    function position() {

        var jqDropdown = $('.jq-dropdown:visible').eq(0),
            trigger = jqDropdown.data('jq-dropdown-trigger'),
            hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
            vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;

        if (jqDropdown.length === 0 || !trigger) return;

        // Position the jq-dropdown relative-to-parent...
        if (jqDropdown.hasClass('jq-dropdown-relative')) {
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.position().left - (jqDropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset :
                    trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
                top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset,
            });
        } else {
            // ...or relative to document
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.offset().left - (jqDropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
                top: trigger.offset().top + trigger.outerHeight() + vOffset,
            });
        }
    }

    $(document).on('click.jq-dropdown', '[data-jq-dropdown]', show);
    $(document).on('click.jq-dropdown', hide);
    $(window).on('resize', position);

})(jQuery);


/***/ }),

/***/ "./src/list/list.component.ajs.ts":
/*!****************************************!*\
  !*** ./src/list/list.component.ajs.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/base-component */ "./src/models/base-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function () {
    'use strict';
    var template = __webpack_require__(/*! ./list.html */ "./src/list/list.html").toString();
    var ListComponent = /** @class */ (function (_super) {
        __extends(ListComponent, _super);
        function ListComponent($stateParams, $state, mainSvc) {
            var _this = _super.call(this) || this;
            _this.$stateParams = $stateParams;
            _this.$state = $state;
            _this.mainSvc = mainSvc;
            _this.newItem = {
                name: undefined,
                date: undefined,
                description: undefined,
            };
            _this.$inject = [
                '$stateParams',
                '$state',
                'mainSvc'
            ];
            _this.listIndex = _this.$stateParams.listIndex;
            _this.getUser();
            return _this;
        }
        ListComponent.prototype.getUser = function () {
            var _this = this;
            this.mainSvc.getUser().then(function (res) {
                _this.user = res;
                _this.list = _this.user.lists[_this.$stateParams.listIndex];
                if (_this.$stateParams.itemIndex) {
                    _this.editItem = _this.user.lists[_this.$stateParams.listIndex].items[_this.$stateParams.itemIndex];
                    _this.editItem.date = new Date(_this.editItem.date);
                }
            });
        };
        ListComponent.prototype.goHome = function () {
            var _this = this;
            setTimeout(function () {
                _this.$state.go('user.home.new', { reload: true });
                _this.getUser();
            }, 650);
        };
        ListComponent.prototype.postItem = function () {
            if (this.newItem.name && this.newItem.date) {
                this.mainSvc.postItem(this.list.id, this.newItem.name, this.newItem.date, this.newItem.description);
                this.$state.reload();
                swal({
                    title: 'Added new Item',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        };
        ListComponent.prototype.putList = function () {
            if (this.list.name && this.list.icon) {
                this.mainSvc.putList(this.list.id, this.list.name, this.list.icon);
                this.goHome();
                swal({
                    title: 'Updated list',
                    type: 'success',
                    timer: 750,
                    showConfirmButton: false,
                });
            }
            else {
                swal({
                    title: 'You need both Name and Icon',
                    type: 'error',
                });
            }
        };
        ListComponent.prototype.putItem = function () {
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
            }
            else {
                swal({
                    title: 'You need both Name and Date',
                    type: 'error',
                });
            }
        };
        ListComponent.prototype.deleteList = function () {
            var vm = this;
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
        };
        ListComponent.prototype.deleteItem = function () {
            var vm = this;
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
        };
        return ListComponent;
    }(_models_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));
    angular.module('upkeep.list')
        .component('ukList', {
        template: template,
        controller: ListComponent,
        controllerAs: 'vm',
        bindToController: true,
    });
})();


/***/ }),

/***/ "./src/list/list.html":
/*!****************************!*\
  !*** ./src/list/list.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-main\">\r\n\r\n    <div class=\"create\" ui-sref=\"user.list.new({listIndex: listIndex})\" open-create>\r\n        <i class=\"fa fa-plus icon\" aria-hidden=\"true\"></i>\r\n    </div>\r\n\r\n    <div class=\"create-margin\" close-create>\r\n        <div class=\"title\">\r\n            <h1>\r\n                - List -\r\n                <br>\r\n                {{vm.list.name}}\r\n            </h1>\r\n        </div>\r\n\r\n        <div class=\"item-wrapper\" ng-repeat=\"item in vm.list.items track by $index\">\r\n            <div class=\"item-row\">\r\n                <h4>{{item.name}}</h4>\r\n                <h4>{{item.date | date : \"MM/dd/y\"}}</h4>\r\n            </div>\r\n\r\n            <div class=\"item-row\">\r\n                <div class=\"description\"><h5>{{item.description}}</h5></div>\r\n                <a class=\"edit-btn\"\r\n                    ui-sref=\"user.list.edit({listIndex: listIndex,itemIndex: $index})\"\r\n                    ui-sref-opts=\"{reload: true}\"\r\n                    open-create>\r\n                    <i class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ui-view class=\"side-panel\"></ui-view>\r\n\r\n</div>\r\n";

/***/ }),

/***/ "./src/list/list.module.ajs.ts":
/*!*************************************!*\
  !*** ./src/list/list.module.ajs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('upkeep.list', []);
})();
__webpack_require__(/*! ./list.component.ajs */ "./src/list/list.component.ajs.ts");


/***/ }),

/***/ "./src/login/login.component.ajs.ts":
/*!******************************************!*\
  !*** ./src/login/login.component.ajs.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/base-component */ "./src/models/base-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

(function () {
    'use strict';
    var template = __webpack_require__(/*! ./login.html */ "./src/login/login.html").toString();
    var LoginComponent = /** @class */ (function (_super) {
        __extends(LoginComponent, _super);
        function LoginComponent($http, $state) {
            var _this = _super.call(this) || this;
            _this.$http = $http;
            _this.$state = $state;
            _this.$inject = ['$http', '$state'];
            return _this;
        }
        LoginComponent.prototype.dummy = function () {
            var _this = this;
            this.$http.post('/dummy').then(function (res) {
                _this.$state.go('user.home');
            });
        };
        return LoginComponent;
    }(_models_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]));
    angular.module('upkeep.login')
        .component('ukLogin', {
        template: template,
        controller: LoginComponent,
        controllerAs: 'vm',
        bindToController: true,
    });
})();


/***/ }),

/***/ "./src/login/login.html":
/*!******************************!*\
  !*** ./src/login/login.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"login-main\">\r\n\r\n    <div class=\"login-logo\"><img class=\"img\" src=\"./img/upkeep-main.png\"></div>\r\n\r\n    <div class=\"login-auth\">\r\n        <a href=\"/auth/google\">\r\n            <div class=\"google-btn\"><i class=\"fa fa-google fa-3x\" aria-hidden=\"true\"></i></div>\r\n        </a>\r\n        <a href=\"/auth/facebook\">\r\n            <div class=\"facebook-btn\"><i class=\"fa fa-facebook fa-3x\" aria-hidden=\"true\"></i></div>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"login-text\"><h1>Login / Sign Up</h1></div>\r\n\r\n    <div><a href=\"\">\r\n        <p ng-click=\"vm.dummy()\">-Dummy User-</p>\r\n    </a></div>\r\n\r\n</div>\r\n";

/***/ }),

/***/ "./src/login/login.module.ajs.ts":
/*!***************************************!*\
  !*** ./src/login/login.module.ajs.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('upkeep.login', []);
})();
__webpack_require__(/*! ./login.component.ajs */ "./src/login/login.component.ajs.ts");


/***/ }),

/***/ "./src/models/base-component.ts":
/*!**************************************!*\
  !*** ./src/models/base-component.ts ***!
  \**************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    return BaseComponent;
}());



/***/ }),

/***/ "./src/services/mainSvc.ajs.ts":
/*!*************************************!*\
  !*** ./src/services/mainSvc.ajs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by Joshua Baert on 12/1/2016.
 */
(function () {
    'use strict';
    var user = {
        changed: true,
        logout: false,
    };
    angular.module('upkeep').service('mainSvc', function ($http, $q, $state) {
        function getUser() {
            var gotUser = false;
            var gotLists = false;
            var gotItems = false;
            var ur;
            var ls;
            var it;
            var defer = $q.defer();
            function giveUser(ur, ls, it) {
                if (gotItems && gotLists && gotUser) {
                    user.id = ur.id;
                    user.firstName = ur.first_name;
                    user.lastName = ur.last_name;
                    user.allowEmail = ur.allow_emails;
                    user.allowText = ur.allow_texts;
                    user.phoneNumber = ur.phone;
                    user.email = ur.email;
                    user.lists = [];
                    ls.forEach(function (e, i) {
                        var items = [];
                        it.forEach(function (ele, ind) {
                            if (ele.list_id === e.id) {
                                items.push({
                                    id: ele.id,
                                    name: ele.item_name,
                                    date: parseInt(ele.date),
                                    description: ele.description,
                                });
                            }
                        });
                        user.lists.push({
                            id: e.id,
                            name: e.list_name,
                            icon: e.icon,
                            items: items,
                        });
                    });
                    defer.resolve(user);
                }
            }
            $http.get('/api/user').then(function (res) {
                if (typeof res.data === 'string' || user.logout) {
                    $state.go('login');
                }
                else {
                    ur = res.data;
                    gotUser = true;
                    giveUser(ur, ls, it);
                }
            });
            $http.get('/api/lists').then(function (res) {
                ls = res.data;
                gotLists = true;
                giveUser(ur, ls, it);
            });
            $http.get('/api/items').then(function (res) {
                it = res.data;
                gotItems = true;
                giveUser(ur, ls, it);
            });
            return defer.promise;
        }
        this.getUser = function () {
            var defer = $q.defer();
            if (user.changed) {
                user.changed = false;
                getUser().then(function (res) {
                    defer.resolve(res);
                });
            }
            else {
                defer.resolve(user);
            }
            return defer.promise;
        };
        this.postList = function (name, icon) {
            user.changed = true;
            var list = {
                userId: user.id,
                name: name,
                icon: icon,
            };
            $http.post('/api/lists', list);
        };
        this.postItem = function (listId, name, date, description) {
            user.changed = true;
            user.lists.forEach(function (e, i) {
                if (e.id == listId) {
                    e.items.push({
                        userId: user.id,
                        listId: listId,
                        name: name,
                        date: date,
                        description: description,
                    });
                }
            });
            $http.post('/api/item', {
                userId: user.id,
                listId: listId,
                name: name,
                date: date,
                description: description,
            });
        };
        this.putUser = function (first, last, email, phone, aEmail, aText) {
            user.changed = true;
            $http.put('/api/user', {
                userId: user.id,
                firstName: first,
                lastName: last,
                email: email,
                phoneNumber: phone,
                allowEmail: aEmail,
                allowText: aText,
            });
        };
        this.putList = function (listId, name, icon) {
            user.changed = true;
            $http.put('/api/list', {
                listId: listId,
                name: name,
                icon: icon,
            });
        };
        this.putItem = function (itemId, name, date, description) {
            user.changed = true;
            $http.put('/api/item', {
                itemId: itemId,
                name: name,
                date: date,
                description: description,
            });
        };
        this.deleteList = function (listId) {
            user.changed = true;
            user.lists.forEach(function (e, i) {
                if (e.id == listId) {
                    user.lists.splice(i, 1);
                }
            });
            $http.delete('/api/list/' + listId);
        };
        this.deleteItem = function (itemId) {
            user.changed = true;
            $http.delete('/api/item/' + itemId);
        };
        this.logout = function () {
            $http.get('/logout').then(function (res) {
                user.logout = true;
                if (typeof res.data === 'string') {
                    swal({
                        title: 'You are now logged out',
                        type: 'success',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    $state.go('login');
                }
            });
        };
    });
})();


/***/ }),

/***/ "./styles/jquery.dropdown.css":
/*!************************************!*\
  !*** ./styles/jquery.dropdown.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5hanMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUuYWpzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9saXN0Q3RybC5hanMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL21haW5DdHJsLmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlckN0cmwuYWpzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuYWpzLnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2hvbWUuY29tcG9uZW50LmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvaG9tZS5tb2R1bGUuYWpzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcS1kcm9wZG93bi9qcS1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0LmNvbXBvbmVudC5hanMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3QvbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9saXN0L2xpc3QubW9kdWxlLmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4vbG9naW4uY29tcG9uZW50LmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4vbG9naW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4vbG9naW4ubW9kdWxlLmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tYWluU3ZjLmFqcy50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvanF1ZXJ5LmRyb3Bkb3duLmNzcz9lYzgxIiwid2VicGFjazovLy8uL3N0eWxlcy9yZXNldC5jc3M/OWM1NCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUtELHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwLWpzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYXBwLmFqcy50c1wiLFwidmVuZG9yc35hcHAtanNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgJ2FuZ3VsYXInO1xyXG5pbXBvcnQgJ2FuZ3VsYXItdWktcm91dGVyJztcclxuaW1wb3J0ICdhbmd1bGFyLWFuaW1hdGUnO1xyXG5pbXBvcnQgJ2FuZ3VsYXItYXJpYSc7XHJcbmltcG9ydCAnYW5ndWxhci1tZXNzYWdlcyc7XHJcbmltcG9ydCAnYW5ndWxhci1tYXRlcmlhbCc7XHJcbmltcG9ydCAnLi9qcS1kcm9wZG93bi9qcS1kcm9wZG93bic7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2pxdWVyeS5kcm9wZG93bi5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9yZXNldC5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcCcsIFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ25nTWF0ZXJpYWwnLFxyXG4gICAgLy8gTG9jYWxcclxuICAgICd1cGtlZXAuY29tcG9uZW50cycsXHJcbiAgICAndXBrZWVwLmhvbWUnLFxyXG4gICAgJ3Vwa2VlcC5saXN0JyxcclxuICAgICd1cGtlZXAubG9naW4nLFxyXG5dKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcvJywgJy9ob21lJyk7XHJcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd1a0xvZ2luJyxcclxuICAgIH0pLnN0YXRlKCd1c2VyJywge1xyXG4gICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy91c2VyLmh0bWwnLFxyXG4gICAgfSkuc3RhdGUoJ3VzZXIuc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgdXJsOiAnc2V0dGluZ3MnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zZXR0aW5ncy5odG1sJyxcclxuICAgIH0pLnN0YXRlKCd1c2VyLmhvbWUnLCB7XHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd1a0hvbWUnLFxyXG4gICAgfSkuc3RhdGUoJ3VzZXIuaG9tZS5uZXcnLCB7XHJcbiAgICAgICAgdXJsOiAnaG9tZScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3NpZGUvbmV3TGlzdC5odG1sJyxcclxuICAgIH0pLnN0YXRlKCd1c2VyLmhvbWUuZWRpdCcsIHtcclxuICAgICAgICB1cmw6ICdob21lL2VkaXQvOmxpc3RJbmRleCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3NpZGUvZWRpdExpc3QuaHRtbCcsXHJcbiAgICAgICAgcmVsb2FkOiB0cnVlLFxyXG4gICAgfSkuc3RhdGUoJ3VzZXIubGlzdCcsIHtcclxuICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3VrTGlzdCdcclxuICAgIH0pLnN0YXRlKCd1c2VyLmxpc3QubmV3Jywge1xyXG4gICAgICAgIHVybDogJ2xpc3QvOmxpc3RJbmRleCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3NpZGUvbmV3SXRlbS5odG1sJyxcclxuICAgIH0pLnN0YXRlKCd1c2VyLmxpc3QuZWRpdCcsIHtcclxuICAgICAgICB1cmw6ICdsaXN0LzpsaXN0SW5kZXgvOml0ZW1JbmRleCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3NpZGUvZWRpdEl0ZW0uaHRtbCcsXHJcbiAgICB9KTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9sb2dpbicpO1xyXG59KTtcclxuLy8gU2VjdGlvbnNcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLmFqcycpO1xyXG5yZXF1aXJlKCcuL2hvbWUvaG9tZS5tb2R1bGUuYWpzJyk7XHJcbnJlcXVpcmUoJy4vbGlzdC9saXN0Lm1vZHVsZS5hanMnKTtcclxucmVxdWlyZSgnLi9sb2dpbi9sb2dpbi5tb2R1bGUuYWpzJyk7XHJcbi8vIENvbnRyb2xsZXJzXHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGlzdEN0cmwuYWpzJyk7XHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFpbkN0cmwuYWpzJyk7XHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdXNlckN0cmwuYWpzJyk7XHJcbi8vIERpcmVjdGl2ZXNcclxucmVxdWlyZSgnLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuYWpzJyk7XHJcbi8vIFNlcnZpY2VzXHJcbnJlcXVpcmUoJy4vc2VydmljZXMvbWFpblN2Yy5hanMnKTtcclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsndXBrZWVwJ10pO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcC5jb21wb25lbnRzJywgW10pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcCcpLmNvbnRyb2xsZXIoJ2xpc3RzQ3RybCcsIGxpc3RzQ3RybCk7XHJcbiAgICBmdW5jdGlvbiBsaXN0c0N0cmwoJHNjb3BlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwgbWFpblN2Yykge1xyXG4gICAgICAgICRzY29wZS5zaXplcyA9IFtcclxuICAgICAgICAgICAgJ0hvbWUnLFxyXG4gICAgICAgICAgICAnQ2FyJyxcclxuICAgICAgICAgICAgJ0ZlbWFsZScsXHJcbiAgICAgICAgICAgICdUcnVjaycsXHJcbiAgICAgICAgXTtcclxuICAgICAgICAkc2NvcGUubmV3SXRlbSA9IHtcclxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBkYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ29Ib21lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygndXNlci5ob21lLm5ldycsIHsgcmVsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmdldFVzZXIoKTtcclxuICAgICAgICAgICAgfSwgNjUwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5nb0xpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCd1c2VyLmxpc3QnLCB7IGxpc3RJbmRleDogJHN0YXRlUGFyYW1zLmxpc3RJbmRleCB9LCB7IHJlbG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpblN2Yy5nZXRVc2VyKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudXNlciA9IHJlcztcclxuICAgICAgICAgICAgICAgICRzY29wZS5saXN0ID0gJHNjb3BlLnVzZXIubGlzdHNbJHN0YXRlUGFyYW1zLmxpc3RJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLml0ZW1JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0SXRlbSA9ICRzY29wZS51c2VyLmxpc3RzWyRzdGF0ZVBhcmFtcy5saXN0SW5kZXhdLml0ZW1zWyRzdGF0ZVBhcmFtcy5pdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0SXRlbS5kYXRlID0gbmV3IERhdGUoJHNjb3BlLmVkaXRJdGVtLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5wb3N0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLm5hbWUgJiYgJHNjb3BlLm5ld0l0ZW0uZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgbWFpblN2Yy5wb3N0SXRlbSgkc2NvcGUubGlzdC5pZCwgJHNjb3BlLm5ld0l0ZW0ubmFtZSwgJHNjb3BlLm5ld0l0ZW0uZGF0ZSwgJHNjb3BlLm5ld0l0ZW0uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgJHN0YXRlLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBZGRlZCBuZXcgSXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyOiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1lvdSBuZWVkIGJvdGggTmFtZSBhbmQgRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUucHV0TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0Lm5hbWUgJiYgJHNjb3BlLmxpc3QuaWNvbikge1xyXG4gICAgICAgICAgICAgICAgbWFpblN2Yy5wdXRMaXN0KCRzY29wZS5saXN0LmlkLCAkc2NvcGUubGlzdC5uYW1lLCAkc2NvcGUubGlzdC5pY29uKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5nb0hvbWUoKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVXBkYXRlZCBsaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnWW91IG5lZWQgYm90aCBOYW1lIGFuZCBJY29uJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5wdXRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRJdGVtLm5hbWUgJiYgJHNjb3BlLmVkaXRJdGVtLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG1haW5TdmMucHV0SXRlbSgkc2NvcGUuZWRpdEl0ZW0uaWQsICRzY29wZS5lZGl0SXRlbS5uYW1lLCAkc2NvcGUuZWRpdEl0ZW0uZGF0ZSwgJHNjb3BlLmVkaXRJdGVtLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVXBkYXRlZCBpdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygndXNlci5ob21lLm5ldycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdZb3UgbmVlZCBib3RoIE5hbWUgYW5kIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbm5hIGRlbGV0ZSB0aGlzIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1lvdSBjYW5ub3QgY29tZSBiYWNrIGZvcm0gdGhpcyEhJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0LicsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1haW5TdmMuZGVsZXRlTGlzdCgkc2NvcGUubGlzdC5pZCk7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZWQgTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyOiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygndXNlci5ob21lLm5ldycpO1xyXG4gICAgICAgICAgICAgICAgfSwgNzUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlSXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZGVsZXRlIHRoaXMgSXRlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnWW91IGNhbm5vdCBjb21lIGJhY2sgZm9ybSB0aGlzISEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQuJyxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblN2Yy5kZWxldGVJdGVtKCRzY29wZS5lZGl0SXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZWQgaXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyOiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygndXNlci5saXN0Lm5ldycsIHsgbGlzdEluZGV4OiAkc3RhdGVQYXJhbXMubGlzdEluZGV4IH0sIHsgcmVsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgNzUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ2V0VXNlcigpO1xyXG4gICAgICAgICRzY29wZS5saXN0SW5kZXggPSAkc3RhdGVQYXJhbXMubGlzdEluZGV4O1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBKb3NodWEgQmFlcnQgb24gMTIvMS8yMDE2LlxyXG4gKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAnKS5jb250cm9sbGVyKCdtYWluQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIG1haW5TdmMsICRodHRwLCAkc3RhdGUpIHtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBKb3NodWEgQmFlcnQgb24gMTIvMi8yMDE2LlxyXG4gKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAnKS5jb250cm9sbGVyKCd1c2VyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIG1haW5TdmMsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XHJcbiAgICAgICAgJHNjb3BlLm5ld0xpc3QgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaWNvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHNjb3BlLmljb24gPSBbXHJcbiAgICAgICAgICAgICdIb21lJyxcclxuICAgICAgICAgICAgJ0NhcicsXHJcbiAgICAgICAgICAgICdGZW1hbGUnLFxyXG4gICAgICAgICAgICAnVHJ1Y2snLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgJHNjb3BlLmdvSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ3VzZXIuaG9tZS5uZXcnLCB7IHJlbG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZ29Ib21lTm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5nbygndXNlci5ob21lLm5ldycsIHsgcmVsb2FkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmdldFVzZXIoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtYWluU3ZjLmdldFVzZXIoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5wb3N0TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5uZXdMaXN0Lm5hbWUgJiYgJHNjb3BlLm5ld0xpc3QuaWNvbikge1xyXG4gICAgICAgICAgICAgICAgbWFpblN2Yy5wb3N0TGlzdCgkc2NvcGUubmV3TGlzdC5uYW1lLCAkc2NvcGUubmV3TGlzdC5pY29uKTtcclxuICAgICAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGlzdCBBZGRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyOiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1lvdSBuZWVkIGJvdGggTmFtZSBhbmQgSWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUucHV0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkc2NvcGUudXNlci5waG9uZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIuYWxsb3dUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS51c2VyLmZpcnN0TmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIubGFzdE5hbWUgJiZcclxuICAgICAgICAgICAgICAgICRzY29wZS51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluU3ZjLnB1dFVzZXIoJHNjb3BlLnVzZXIuZmlyc3ROYW1lLCAkc2NvcGUudXNlci5sYXN0TmFtZSwgJHNjb3BlLnVzZXIuZW1haWwsICRzY29wZS51c2VyLnBob25lTnVtYmVyLCAkc2NvcGUudXNlci5hbGxvd0VtYWlsLCAkc2NvcGUudXNlci5hbGxvd1RleHQpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdXZSBoYXZlIHNhdmVkIHlvdXIgU2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcjogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmdvSG9tZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdZb3UgbmVlZCB0byBoYXZlIEZpcnN0IE5hbWUsIExhc3QgTmFtZSAmIEVtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEbyB5b3Ugd2FubmEgbG9nb3V0PycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdCdWggQnllJyxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblN2Yy5sb2dvdXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuaW5kZXggPSAkc3RhdGVQYXJhbXMubGlzdEluZGV4O1xyXG4gICAgICAgICRzY29wZS5nZXRVc2VyKCk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBvcGVuU3BlZWQgPSA1MDA7XHJcbiAgICB2YXIgb3BlbldpZHRoID0gJzEwMHZ3JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAnKS5kaXJlY3RpdmUoJ2dldFVzZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldC11c2VyIHN0YXJ0ZWQnLCBzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pLmRpcmVjdGl2ZSgnY2xvc2VDcmVhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGUtcGFuZWwnKS5jc3MoJ3dpZHRoJywgJzAnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KS5kaXJlY3RpdmUoJ29wZW5DcmVhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5zaWRlLXBhbmVsJykuY3NzKCd3aWR0aCcsIG9wZW5XaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3BlblNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KS5kaXJlY3RpdmUoJ2F1dG9PcGVuQ3JlYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGUtcGFuZWwnKS5jc3MoJ3dpZHRoJywgb3BlbldpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBvcGVuU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pLmRpcmVjdGl2ZSgnZ2V0VXNlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZ2V0VXNlcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KS5kaXJlY3RpdmUoJ2RhdGVQaWNrZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmRhdGUtcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGNoYW5nZU1vbnRoOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UtY29tcG9uZW50JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vaG9tZS5odG1sJykudG9TdHJpbmcoKTtcclxuICAgIHZhciBIb21lQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhIb21lQ29tcG9uZW50LCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQobWFpblN2YywgJHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLm1haW5TdmMgPSBtYWluU3ZjO1xyXG4gICAgICAgICAgICBfdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICAgICAgICAgIF90aGlzLm5ld0xpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBpY29uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF90aGlzLiRpbmplY3QgPSBbJ21haW5TdmMnLCAnJHN0YXRlJ107XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgSG9tZUNvbXBvbmVudC5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBIb21lQ29tcG9uZW50LnByb3RvdHlwZS5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5TdmMuZ2V0VXNlcigpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXNlciA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBIb21lQ29tcG9uZW50LnByb3RvdHlwZS5wb3N0TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV3TGlzdC5uYW1lICYmIHRoaXMubmV3TGlzdC5pY29uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5TdmMucG9zdExpc3QodGhpcy5uZXdMaXN0Lm5hbWUsIHRoaXMubmV3TGlzdC5pY29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMaXN0IEFkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnWW91IG5lZWQgYm90aCBOYW1lIGFuZCBJY29uJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxuICAgIH0oQmFzZUNvbXBvbmVudCkpO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcC5ob21lJylcclxuICAgICAgICAuY29tcG9uZW50KCd1a0hvbWUnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImhvbWUtbWFpblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj48aDE+TGlzdHM8L2gxPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LW1pbmlcXFwiIG5nLXJlcGVhdD1cXFwibGlzdCBpbiB2bS51c2VyLmxpc3RzIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibGlzdC1taW5pLW5hbWVcXFwiIHVpLXNyZWY9XFxcInVzZXIubGlzdC5uZXcoe2xpc3RJbmRleDogJGluZGV4fSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXY+PGgxPnt7bGlzdC5uYW1lfX08L2gxPjwvZGl2PlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1taW5pLWJ0bnNcXFwiIHVpLXNyZWY9XFxcInVzZXIuaG9tZS5lZGl0KHtsaXN0SW5kZXg6ICRpbmRleH0pXFxcIiB1aS1zcmVmLW9wdHM9XFxcIntyZWxvYWQ6IHRydWV9XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlZGl0LWJ0blxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbCBmYS0yeFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHVpLXZpZXcgY2xhc3M9XFxcInNpZGUtcGFuZWxcXFwiPjwvdWktdmlldz5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcC5ob21lJywgW10pO1xyXG59KSgpO1xyXG5yZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50LmFqcycpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBKb3NodWEgQmFlcnQgb24gMTIvOS8yMDE2LlxyXG4gKi9cclxuLypcclxuICogalF1ZXJ5IERyb3Bkb3duOiBBIHNpbXBsZSBkcm9wZG93biBwbHVnaW5cclxuICpcclxuICogQ29udHJpYnV0ZTogaHR0cHM6Ly9naXRodWIuY29tL2NsYXZpc2thL2pxdWVyeS1kcm9wZG93blxyXG4gKlxyXG4gKiBAbGljZW5zZTogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuICpcclxuICovXHJcbmlmIChqUXVlcnkpIChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgICQuZXh0ZW5kKCQuZm4sIHtcclxuICAgICAgICBqcURyb3Bkb3duOiBmdW5jdGlvbiAobWV0aG9kLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG51bGwsICQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaGlkZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0YWNoJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKCdkYXRhLWpxLWRyb3Bkb3duJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkZXRhY2gnOlxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLWpxLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkaXNhYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hZGRDbGFzcygnanEtZHJvcGRvd24tZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnJlbW92ZUNsYXNzKCdqcS1kcm9wZG93bi1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3coZXZlbnQsIG9iamVjdCkge1xyXG4gICAgICAgIHZhciB0cmlnZ2VyID0gZXZlbnQgPyAkKHRoaXMpIDogb2JqZWN0LFxyXG4gICAgICAgICAgICBqcURyb3Bkb3duID0gJCh0cmlnZ2VyLmF0dHIoJ2RhdGEtanEtZHJvcGRvd24nKSksXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRyaWdnZXIuaGFzQ2xhc3MoJ2pxLWRyb3Bkb3duLW9wZW4nKTtcclxuICAgICAgICAvLyBJbiBzb21lIGNhc2VzIHdlIGRvbid0IHdhbnQgdG8gc2hvdyBpdFxyXG4gICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmhhc0NsYXNzKCdqcS1kcm9wZG93bi1pZ25vcmUnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHJpZ2dlciAhPT0gb2JqZWN0LnRhcmdldCAmJiAkKG9iamVjdC50YXJnZXQpLmhhc0NsYXNzKCdqcS1kcm9wZG93bi1pZ25vcmUnKSkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWRlKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4gfHwgdHJpZ2dlci5oYXNDbGFzcygnanEtZHJvcGRvd24tZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTaG93IGl0XHJcbiAgICAgICAgdHJpZ2dlci5hZGRDbGFzcygnanEtZHJvcGRvd24tb3BlbicpO1xyXG4gICAgICAgIGpxRHJvcGRvd25cclxuICAgICAgICAgICAgLmRhdGEoJ2pxLWRyb3Bkb3duLXRyaWdnZXInLCB0cmlnZ2VyKVxyXG4gICAgICAgICAgICAuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiBpdFxyXG4gICAgICAgIHBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHNob3cgY2FsbGJhY2tcclxuICAgICAgICBqcURyb3Bkb3duXHJcbiAgICAgICAgICAgIC50cmlnZ2VyKCdzaG93Jywge1xyXG4gICAgICAgICAgICAgICAganFEcm9wZG93bjoganFEcm9wZG93bixcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIC8vIEluIHNvbWUgY2FzZXMgd2UgZG9uJ3QgaGlkZSB0aGVtXHJcbiAgICAgICAgdmFyIHRhcmdldEdyb3VwID0gZXZlbnQgPyAkKGV2ZW50LnRhcmdldCkucGFyZW50cygpLmFkZEJhY2soKSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIEFyZSB3ZSBjbGlja2luZyBhbnl3aGVyZSBpbiBhIGpxLWRyb3Bkb3duP1xyXG4gICAgICAgIGlmICh0YXJnZXRHcm91cCAmJiB0YXJnZXRHcm91cC5pcygnLmpxLWRyb3Bkb3duJykpIHtcclxuICAgICAgICAgICAgLy8gSXMgaXQgYSBqcS1kcm9wZG93biBtZW51P1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0R3JvdXAuaXMoJy5qcS1kcm9wZG93bi1tZW51JykpIHtcclxuICAgICAgICAgICAgICAgIC8vIERpZCB3ZSBjbGljayBvbiBhbiBvcHRpb24/IElmIHNvIGNsb3NlIGl0LlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRHcm91cC5pcygnQScpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3BlLCBpdCdzIGEgcGFuZWwuIExlYXZlIGl0IG9wZW4uXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhpZGUgYW55IGpxLWRyb3Bkb3duIHRoYXQgbWF5IGJlIHNob3dpbmdcclxuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanEtZHJvcGRvd246dmlzaWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIganFEcm9wZG93biA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGpxRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVEYXRhKCdqcS1kcm9wZG93bi10cmlnZ2VyJylcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdoaWRlJywgeyBqcURyb3Bkb3duOiBqcURyb3Bkb3duIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGpxLWRyb3Bkb3duLW9wZW4gY2xhc3Nlc1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcS1kcm9wZG93bi1vcGVuJykucmVtb3ZlQ2xhc3MoJ2pxLWRyb3Bkb3duLW9wZW4nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBqcURyb3Bkb3duID0gJCgnLmpxLWRyb3Bkb3duOnZpc2libGUnKS5lcSgwKSxcclxuICAgICAgICAgICAgdHJpZ2dlciA9IGpxRHJvcGRvd24uZGF0YSgnanEtZHJvcGRvd24tdHJpZ2dlcicpLFxyXG4gICAgICAgICAgICBoT2Zmc2V0ID0gdHJpZ2dlciA/IHBhcnNlSW50KHRyaWdnZXIuYXR0cignZGF0YS1ob3Jpem9udGFsLW9mZnNldCcpIHx8IDAsIDEwKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHZPZmZzZXQgPSB0cmlnZ2VyID8gcGFyc2VJbnQodHJpZ2dlci5hdHRyKCdkYXRhLXZlcnRpY2FsLW9mZnNldCcpIHx8IDAsIDEwKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChqcURyb3Bkb3duLmxlbmd0aCA9PT0gMCB8fCAhdHJpZ2dlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUganEtZHJvcGRvd24gcmVsYXRpdmUtdG8tcGFyZW50Li4uXHJcbiAgICAgICAgaWYgKGpxRHJvcGRvd24uaGFzQ2xhc3MoJ2pxLWRyb3Bkb3duLXJlbGF0aXZlJykpIHtcclxuICAgICAgICAgICAganFEcm9wZG93bi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbGVmdDoganFEcm9wZG93bi5oYXNDbGFzcygnanEtZHJvcGRvd24tYW5jaG9yLXJpZ2h0JykgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIucG9zaXRpb24oKS5sZWZ0IC0gKGpxRHJvcGRvd24ub3V0ZXJXaWR0aCh0cnVlKSAtIHRyaWdnZXIub3V0ZXJXaWR0aCh0cnVlKSkgLSBwYXJzZUludCh0cmlnZ2VyLmNzcygnbWFyZ2luLXJpZ2h0JyksIDEwKSArIGhPZmZzZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIucG9zaXRpb24oKS5sZWZ0ICsgcGFyc2VJbnQodHJpZ2dlci5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKSArIGhPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRyaWdnZXIucG9zaXRpb24oKS50b3AgKyB0cmlnZ2VyLm91dGVySGVpZ2h0KHRydWUpIC0gcGFyc2VJbnQodHJpZ2dlci5jc3MoJ21hcmdpbi10b3AnKSwgMTApICsgdk9mZnNldCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gLi4ub3IgcmVsYXRpdmUgdG8gZG9jdW1lbnRcclxuICAgICAgICAgICAganFEcm9wZG93bi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbGVmdDoganFEcm9wZG93bi5oYXNDbGFzcygnanEtZHJvcGRvd24tYW5jaG9yLXJpZ2h0JykgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIub2Zmc2V0KCkubGVmdCAtIChqcURyb3Bkb3duLm91dGVyV2lkdGgoKSAtIHRyaWdnZXIub3V0ZXJXaWR0aCgpKSArIGhPZmZzZXQgOiB0cmlnZ2VyLm9mZnNldCgpLmxlZnQgKyBoT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0cmlnZ2VyLm9mZnNldCgpLnRvcCArIHRyaWdnZXIub3V0ZXJIZWlnaHQoKSArIHZPZmZzZXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suanEtZHJvcGRvd24nLCAnW2RhdGEtanEtZHJvcGRvd25dJywgc2hvdyk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suanEtZHJvcGRvd24nLCBoaWRlKTtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgcG9zaXRpb24pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS1jb21wb25lbnQnO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi9saXN0Lmh0bWwnKS50b1N0cmluZygpO1xyXG4gICAgdmFyIExpc3RDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKExpc3RDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gTGlzdENvbXBvbmVudCgkc3RhdGVQYXJhbXMsICRzdGF0ZSwgbWFpblN2Yykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBfdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XHJcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICAgICAgX3RoaXMubWFpblN2YyA9IG1haW5TdmM7XHJcbiAgICAgICAgICAgIF90aGlzLm5ld0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfdGhpcy4kaW5qZWN0ID0gW1xyXG4gICAgICAgICAgICAgICAgJyRzdGF0ZVBhcmFtcycsXHJcbiAgICAgICAgICAgICAgICAnJHN0YXRlJyxcclxuICAgICAgICAgICAgICAgICdtYWluU3ZjJ1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBfdGhpcy5saXN0SW5kZXggPSBfdGhpcy4kc3RhdGVQYXJhbXMubGlzdEluZGV4O1xyXG4gICAgICAgICAgICBfdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5tYWluU3ZjLmdldFVzZXIoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXIgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0ID0gX3RoaXMudXNlci5saXN0c1tfdGhpcy4kc3RhdGVQYXJhbXMubGlzdEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy4kc3RhdGVQYXJhbXMuaXRlbUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWRpdEl0ZW0gPSBfdGhpcy51c2VyLmxpc3RzW190aGlzLiRzdGF0ZVBhcmFtcy5saXN0SW5kZXhdLml0ZW1zW190aGlzLiRzdGF0ZVBhcmFtcy5pdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVkaXRJdGVtLmRhdGUgPSBuZXcgRGF0ZShfdGhpcy5lZGl0SXRlbS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5nb0hvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCd1c2VyLmhvbWUubmV3JywgeyByZWxvYWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5wb3N0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV3SXRlbS5uYW1lICYmIHRoaXMubmV3SXRlbS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5TdmMucG9zdEl0ZW0odGhpcy5saXN0LmlkLCB0aGlzLm5ld0l0ZW0ubmFtZSwgdGhpcy5uZXdJdGVtLmRhdGUsIHRoaXMubmV3SXRlbS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWRkZWQgbmV3IEl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcjogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdZb3UgbmVlZCBib3RoIE5hbWUgYW5kIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTGlzdENvbXBvbmVudC5wcm90b3R5cGUucHV0TGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5uYW1lICYmIHRoaXMubGlzdC5pY29uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5TdmMucHV0TGlzdCh0aGlzLmxpc3QuaWQsIHRoaXMubGlzdC5uYW1lLCB0aGlzLmxpc3QuaWNvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdVcGRhdGVkIGxpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcjogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdZb3UgbmVlZCBib3RoIE5hbWUgYW5kIEljb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTGlzdENvbXBvbmVudC5wcm90b3R5cGUucHV0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdEl0ZW0ubmFtZSAmJiB0aGlzLmVkaXRJdGVtLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpblN2Yy5wdXRJdGVtKHRoaXMuZWRpdEl0ZW0uaWQsIHRoaXMuZWRpdEl0ZW0ubmFtZSwgdGhpcy5lZGl0SXRlbS5kYXRlLCB0aGlzLmVkaXRJdGVtLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdVcGRhdGVkIGl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcjogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ3VzZXIuaG9tZS5uZXcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnWW91IG5lZWQgYm90aCBOYW1lIGFuZCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIExpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbm5hIGRlbGV0ZSB0aGlzIExpc3QnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1lvdSBjYW5ub3QgY29tZSBiYWNrIGZvcm0gdGhpcyEhJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0LicsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ29uZmlybTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZtLm1haW5TdmMuZGVsZXRlTGlzdCh2bS5saXN0LmlkKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlZCBMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmdldFVzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB2bS4kc3RhdGUuZ28oJ3VzZXIuaG9tZS5uZXcnKTtcclxuICAgICAgICAgICAgICAgIH0sIDc1MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlSXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZGVsZXRlIHRoaXMgSXRlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnWW91IGNhbm5vdCBjb21lIGJhY2sgZm9ybSB0aGlzISEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQuJyxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdm0ubWFpblN2Yy5kZWxldGVJdGVtKHZtLmVkaXRJdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlZCBpdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmdldFVzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB2bS4kc3RhdGUuZ28oJ3VzZXIubGlzdC5uZXcnLCB7IGxpc3RJbmRleDogdm0uJHN0YXRlUGFyYW1zLmxpc3RJbmRleCB9LCB7IHJlbG9hZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDc1MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIExpc3RDb21wb25lbnQ7XHJcbiAgICB9KEJhc2VDb21wb25lbnQpKTtcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAubGlzdCcpXHJcbiAgICAgICAgLmNvbXBvbmVudCgndWtMaXN0Jywge1xyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb250cm9sbGVyOiBMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJsaXN0LW1haW5cXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjcmVhdGVcXFwiIHVpLXNyZWY9XFxcInVzZXIubGlzdC5uZXcoe2xpc3RJbmRleDogbGlzdEluZGV4fSlcXFwiIG9wZW4tY3JlYXRlPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXMgaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNyZWF0ZS1tYXJnaW5cXFwiIGNsb3NlLWNyZWF0ZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDE+XFxyXFxuICAgICAgICAgICAgICAgIC0gTGlzdCAtXFxyXFxuICAgICAgICAgICAgICAgIDxicj5cXHJcXG4gICAgICAgICAgICAgICAge3t2bS5saXN0Lm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0td3JhcHBlclxcXCIgbmctcmVwZWF0PVxcXCJpdGVtIGluIHZtLmxpc3QuaXRlbXMgdHJhY2sgYnkgJGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoND57e2l0ZW0ubmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGg0Pnt7aXRlbS5kYXRlIHwgZGF0ZSA6IFxcXCJNTS9kZC95XFxcIn19PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj48aDU+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2g1PjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZWRpdC1idG5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB1aS1zcmVmPVxcXCJ1c2VyLmxpc3QuZWRpdCh7bGlzdEluZGV4OiBsaXN0SW5kZXgsaXRlbUluZGV4OiAkaW5kZXh9KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHVpLXNyZWYtb3B0cz1cXFwie3JlbG9hZDogdHJ1ZX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGVuLWNyZWF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwgZmEtMnhcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHVpLXZpZXcgY2xhc3M9XFxcInNpZGUtcGFuZWxcXFwiPjwvdWktdmlldz5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcC5saXN0JywgW10pO1xyXG59KSgpO1xyXG5yZXF1aXJlKCcuL2xpc3QuY29tcG9uZW50LmFqcycpO1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL21vZGVscy9iYXNlLWNvbXBvbmVudCc7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgdGVtcGxhdGUgPSByZXF1aXJlKCcuL2xvZ2luLmh0bWwnKS50b1N0cmluZygpO1xyXG4gICAgdmFyIExvZ2luQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhMb2dpbkNvbXBvbmVudCwgX3N1cGVyKTtcclxuICAgICAgICBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudCgkaHR0cCwgJHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICAgICAgX3RoaXMuJGluamVjdCA9IFsnJGh0dHAnLCAnJHN0YXRlJ107XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgTG9naW5Db21wb25lbnQucHJvdG90eXBlLmR1bW15ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJy9kdW1teScpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJHN0YXRlLmdvKCd1c2VyLmhvbWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gTG9naW5Db21wb25lbnQ7XHJcbiAgICB9KEJhc2VDb21wb25lbnQpKTtcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAubG9naW4nKVxyXG4gICAgICAgIC5jb21wb25lbnQoJ3VrTG9naW4nLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJsb2dpbi1tYWluXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibG9naW4tbG9nb1xcXCI+PGltZyBjbGFzcz1cXFwiaW1nXFxcIiBzcmM9XFxcIi4vaW1nL3Vwa2VlcC1tYWluLnBuZ1xcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luLWF1dGhcXFwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiL2F1dGgvZ29vZ2xlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnb29nbGUtYnRuXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZ29vZ2xlIGZhLTN4XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiL2F1dGgvZmFjZWJvb2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZhY2Vib29rLWJ0blxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rIGZhLTN4XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibG9naW4tdGV4dFxcXCI+PGgxPkxvZ2luIC8gU2lnbiBVcDwvaDE+PC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXY+PGEgaHJlZj1cXFwiXFxcIj5cXHJcXG4gICAgICAgIDxwIG5nLWNsaWNrPVxcXCJ2bS5kdW1teSgpXFxcIj4tRHVtbXkgVXNlci08L3A+XFxyXFxuICAgIDwvYT48L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Vwa2VlcC5sb2dpbicsIFtdKTtcclxufSkoKTtcclxucmVxdWlyZSgnLi9sb2dpbi5jb21wb25lbnQuYWpzJyk7XHJcbiIsInZhciBCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBCYXNlQ29tcG9uZW50IH07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEpvc2h1YSBCYWVydCBvbiAxMi8xLzIwMTYuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIHVzZXIgPSB7XHJcbiAgICAgICAgY2hhbmdlZDogdHJ1ZSxcclxuICAgICAgICBsb2dvdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGFuZ3VsYXIubW9kdWxlKCd1cGtlZXAnKS5zZXJ2aWNlKCdtYWluU3ZjJywgZnVuY3Rpb24gKCRodHRwLCAkcSwgJHN0YXRlKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgdmFyIGdvdFVzZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGdvdExpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBnb3RJdGVtcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdXI7XHJcbiAgICAgICAgICAgIHZhciBscztcclxuICAgICAgICAgICAgdmFyIGl0O1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnaXZlVXNlcih1ciwgbHMsIGl0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ290SXRlbXMgJiYgZ290TGlzdHMgJiYgZ290VXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuaWQgPSB1ci5pZDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmZpcnN0TmFtZSA9IHVyLmZpcnN0X25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5sYXN0TmFtZSA9IHVyLmxhc3RfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmFsbG93RW1haWwgPSB1ci5hbGxvd19lbWFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5hbGxvd1RleHQgPSB1ci5hbGxvd190ZXh0cztcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnBob25lTnVtYmVyID0gdXIucGhvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5lbWFpbCA9IHVyLmVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIubGlzdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBscy5mb3JFYWNoKGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGUsIGluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZS5saXN0X2lkID09PSBlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsZS5pdGVtX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHBhcnNlSW50KGVsZS5kYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubGlzdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUubGlzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZS5pY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyJykudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJyB8fCB1c2VyLmxvZ291dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVyID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZ290VXNlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2l2ZVVzZXIodXIsIGxzLCBpdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvbGlzdHMnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGxzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBnb3RMaXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnaXZlVXNlcih1ciwgbHMsIGl0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9pdGVtcycpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaXQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGdvdEl0ZW1zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdpdmVVc2VyKHVyLCBscywgaXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgaWYgKHVzZXIuY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdXNlci5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBnZXRVc2VyKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3N0TGlzdCA9IGZ1bmN0aW9uIChuYW1lLCBpY29uKSB7XHJcbiAgICAgICAgICAgIHVzZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvbGlzdHMnLCBsaXN0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9zdEl0ZW0gPSBmdW5jdGlvbiAobGlzdElkLCBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB1c2VyLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB1c2VyLmxpc3RzLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmlkID09IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdElkOiBsaXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvaXRlbScsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgIGxpc3RJZDogbGlzdElkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wdXRVc2VyID0gZnVuY3Rpb24gKGZpcnN0LCBsYXN0LCBlbWFpbCwgcGhvbmUsIGFFbWFpbCwgYVRleHQpIHtcclxuICAgICAgICAgICAgdXNlci5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgJGh0dHAucHV0KCcvYXBpL3VzZXInLCB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0LFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3QsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBhbGxvd0VtYWlsOiBhRW1haWwsXHJcbiAgICAgICAgICAgICAgICBhbGxvd1RleHQ6IGFUZXh0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHV0TGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQsIG5hbWUsIGljb24pIHtcclxuICAgICAgICAgICAgdXNlci5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgJGh0dHAucHV0KCcvYXBpL2xpc3QnLCB7XHJcbiAgICAgICAgICAgICAgICBsaXN0SWQ6IGxpc3RJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHV0SXRlbSA9IGZ1bmN0aW9uIChpdGVtSWQsIG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHVzZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICRodHRwLnB1dCgnL2FwaS9pdGVtJywge1xyXG4gICAgICAgICAgICAgICAgaXRlbUlkOiBpdGVtSWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICAgICAgICAgIHVzZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHVzZXIubGlzdHMuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuaWQgPT0gbGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5saXN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaHR0cC5kZWxldGUoJy9hcGkvbGlzdC8nICsgbGlzdElkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbSA9IGZ1bmN0aW9uIChpdGVtSWQpIHtcclxuICAgICAgICAgICAgdXNlci5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCcvYXBpL2l0ZW0vJyArIGl0ZW1JZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvbG9nb3V0JykudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLmxvZ291dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1lvdSBhcmUgbm93IGxvZ2dlZCBvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdsb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=