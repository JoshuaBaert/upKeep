(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        // EventTarget is already patched in browser.ts
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (!canPatchViaPropertyDescriptor(api)) {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ1c7QUFDWixDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0JBQWtCO0FBQ3pELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBaUUsK0NBQStDLEVBQUU7QUFDbEg7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULDREQUE0RCwwQ0FBMEM7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDBCQUEwQixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2REFBNkQsRUFBRTtBQUN2Ryx1Q0FBdUMsV0FBVyxFQUFFO0FBQ3BEO0FBQ0Esa0NBQWtDLGFBQWEsRUFBRTtBQUNqRCxvQ0FBb0MsV0FBVyxFQUFFO0FBQ2pELGdDQUFnQyxhQUFhLEVBQUU7QUFDL0MscUNBQXFDLGFBQWEsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwQ0FBMEMsYUFBYSxFQUFFO0FBQ3pELGlDQUFpQyxjQUFjLEVBQUU7QUFDakQsdUNBQXVDLGtCQUFrQixFQUFFO0FBQzNELDJDQUEyQyxhQUFhLEVBQUU7QUFDMUQscURBQXFELGtCQUFrQixFQUFFO0FBQ3pFLG1DQUFtQyxrQkFBa0IsRUFBRTtBQUN2RCxpQ0FBaUMsV0FBVyxFQUFFO0FBQzlDLGlDQUFpQyxhQUFhLEVBQUU7QUFDaEQsMENBQTBDLGFBQWEsRUFBRTtBQUN6RCx1Q0FBdUMsV0FBVyxFQUFFO0FBQ3BELDRDQUE0QyxhQUFhLEVBQUU7QUFDM0Qsd0NBQXdDLGFBQWEsRUFBRTtBQUN2RCxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEhBQTRILHdCQUF3QixvQ0FBb0M7QUFDeEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLHNFQUFzRTtBQUN0SjtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0RBQW9EO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUVBQXFFLGdCQUFnQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGtCQUFrQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsa0JBQWtCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVEsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQ0FBb0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4QkFBOEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDBCQUEwQixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDZCQUE2QixFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtEQUFrRCxFQUFFO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0RBQXNEO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwrQkFBK0IsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGdCQUFnQjtBQUNyRjtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2QkFBNkI7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRTtBQUNaO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQkFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUU7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUU7QUFDWixxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSwwQ0FBMEM7QUFDNUc7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6InZlbmRvcnN+YXBwLnZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBab25lJDEgPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbFsncGVyZm9ybWFuY2UnXTtcbiAgICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21hcmsnXSAmJiBwZXJmb3JtYW5jZVsnbWFyayddKG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwZXJmb3JtYW5jZU1lYXN1cmUobmFtZSwgbGFiZWwpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgICB9XG4gICAgbWFyaygnWm9uZScpO1xuICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IGdsb2JhbFsoJ19fem9uZV9zeW1ib2xfX2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICAgIGlmIChnbG9iYWxbJ1pvbmUnXSkge1xuICAgICAgICAvLyBpZiBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cyAobWF5YmUgem9uZS5qcyB3YXMgYWxyZWFkeSBsb2FkZWQgb3JcbiAgICAgICAgLy8gc29tZSBvdGhlciBsaWIgYWxzbyByZWdpc3RlcmVkIGEgZ2xvYmFsIG9iamVjdCBuYW1lZCBab25lKSwgd2UgbWF5IG5lZWRcbiAgICAgICAgLy8gdG8gdGhyb3cgYW4gZXJyb3IsIGJ1dCBzb21ldGltZXMgdXNlciBtYXkgbm90IHdhbnQgdGhpcyBlcnJvci5cbiAgICAgICAgLy8gRm9yIGV4YW1wbGUsXG4gICAgICAgIC8vIHdlIGhhdmUgdHdvIHdlYiBwYWdlcywgcGFnZTEgaW5jbHVkZXMgem9uZS5qcywgcGFnZTIgZG9lc24ndC5cbiAgICAgICAgLy8gYW5kIHRoZSAxc3QgdGltZSB1c2VyIGxvYWQgcGFnZTEgYW5kIHBhZ2UyLCBldmVyeXRoaW5nIHdvcmsgZmluZSxcbiAgICAgICAgLy8gYnV0IHdoZW4gdXNlciBsb2FkIHBhZ2UyIGFnYWluLCBlcnJvciBvY2N1cnMgYmVjYXVzZSBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cy5cbiAgICAgICAgLy8gc28gd2UgYWRkIGEgZmxhZyB0byBsZXQgdXNlciBjaG9vc2Ugd2hldGhlciB0byB0aHJvdyB0aGlzIGVycm9yIG9yIG5vdC5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgaWYgZXhpc3RpbmcgWm9uZSBpcyBmcm9tIHpvbmUuanMsIHdlIHdpbGwgbm90IHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlIHx8IHR5cGVvZiBnbG9iYWxbJ1pvbmUnXS5fX3N5bWJvbF9fICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgYWxyZWFkeSBsb2FkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsWydab25lJ107XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIFpvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmUocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICBuZXcgWm9uZURlbGVnYXRlKHRoaXMsIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX3pvbmVEZWxlZ2F0ZSwgem9uZVNwZWMpO1xuICAgICAgICB9XG4gICAgICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJjdXJyZW50VGFza1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmUuX19sb2FkX3BhdGNoID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgICAgICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyZk5hbWUgPSAnWm9uZTonICsgbmFtZTtcbiAgICAgICAgICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgICAgICAgICBwYXRjaGVzW25hbWVdID0gZm4oZ2xvYmFsLCBab25lLCBfYXBpKTtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgICAgICAgaWYgKHpvbmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUuX3Byb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0Wm9uZVdpdGggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Ll9wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Ll9wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh6b25lU3BlYykge1xuICAgICAgICAgICAgaWYgKCF6b25lU3BlYylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmVTcGVjIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5mb3JrKHRoaXMsIHpvbmVTcGVjKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9jYWxsYmFjayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnRlcmNlcHQodGhpcywgY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB6b25lLnJ1bkd1YXJkZWQoX2NhbGxiYWNrLCB0aGlzLCBhcmd1bWVudHMsIHNvdXJjZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW5HdWFyZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgICAgICAgLy8gd2lsbCBydW4gaW4gbm90U2NoZWR1bGVkKGNhbmNlbGVkKSBzdGF0ZSwgd2Ugc2hvdWxkIG5vdCB0cnkgdG9cbiAgICAgICAgICAgIC8vIHJ1biBzdWNoIGtpbmQgb2YgdGFzayBidXQganVzdCByZXR1cm5cbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQgJiYgKHRhc2sudHlwZSA9PT0gZXZlbnRUYXNrIHx8IHRhc2sudHlwZSA9PT0gbWFjcm9UYXNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgdGFzay5fdHJhbnNpdGlvblRvKHJ1bm5pbmcsIHNjaGVkdWxlZCk7XG4gICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gdGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gbWFjcm9UYXNrICYmIHRhc2suZGF0YSAmJiAhdGFzay5kYXRhLmlzUGVyaW9kaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYW5jZWxGbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YXNrJ3Mgc3RhdGUgaXMgbm90U2NoZWR1bGVkIG9yIHVua25vd24sIHRoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gbm90U2NoZWR1bGVkICYmIHRhc2suc3RhdGUgIT09IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBldmVudFRhc2sgfHwgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAmJiB0YXNrLnpvbmUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFzayB3YXMgcmVzY2hlZHVsZWQsIHRoZSBuZXdab25lXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSB0aGUgY2hpbGRyZW4gb2YgdGhlIG9yaWdpbmFsIHpvbmVcbiAgICAgICAgICAgICAgICB2YXIgbmV3Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1pvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1pvbmUgPT09IHRhc2suem9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW4gbm90IHJlc2NoZWR1bGUgdGFzayB0byBcIiArIHRoaXMubmFtZSArIFwiIHdoaWNoIGlzIGRlc2NlbmRhbnRzIG9mIHRoZSBvcmlnaW5hbCB6b25lIFwiICsgdGFzay56b25lLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld1pvbmUgPSBuZXdab25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gW107XG4gICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIHRhc2suX3pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgc2V0IHRhc2sncyBzdGF0ZSB0byB1bmtub3duIHdoZW4gc2NoZWR1bGVUYXNrIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXJyIG1heSBmcm9tIHJlc2NoZWR1bGUsIHNvIHRoZSBmcm9tU3RhdGUgbWF5YmUgbm90U2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc2hvdWxkIHdlIGNoZWNrIHRoZSByZXN1bHQgZnJvbSBoYW5kbGVFcnJvcj9cbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5fem9uZURlbGVnYXRlcyA9PT0gem9uZURlbGVnYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY2hlY2sgYmVjYXVzZSBpbnRlcm5hbGx5IHRoZSBkZWxlZ2F0ZSBjYW4gcmVzY2hlZHVsZSB0aGUgdGFzay5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PSBzY2hlZHVsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb1Rhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWljcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgdW5kZWZpbmVkKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWFjcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWFjcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlRXZlbnRUYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodGFzaywgY291bnQpIHtcbiAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6b25lRGVsZWdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLl9fc3ltYm9sX18gPSBfX3N5bWJvbF9fO1xuICAgICAgICByZXR1cm4gWm9uZTtcbiAgICB9KCkpO1xuICAgIHZhciBERUxFR0FURV9aUyA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIG9uSGFzVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIGhhc1Rhc2tTdGF0ZSkgeyByZXR1cm4gZGVsZWdhdGUuaGFzVGFzayh0YXJnZXQsIGhhc1Rhc2tTdGF0ZSk7IH0sXG4gICAgICAgIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgICAgICB9LFxuICAgICAgICBvbkludm9rZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spIHsgcmV0dXJuIGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKTsgfVxuICAgIH07XG4gICAgdmFyIFpvbmVEZWxlZ2F0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZURlbGVnYXRlKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdEN1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLnpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvclpTKTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckRsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiZcbiAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLnpvbmUpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0RsZ3QpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3RPd25lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrQ3VyclpvbmUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgICAgICAgIHZhciBwYXJlbnRIYXNUYXNrID0gcGFyZW50RGVsZWdhdGUgJiYgcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUztcbiAgICAgICAgICAgIGlmICh6b25lU3BlY0hhc1Rhc2sgfHwgcGFyZW50SGFzVGFzaykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAvLyBhIGNhc2UgYWxsIHRhc2sgcmVsYXRlZCBpbnRlcmNlcHRvcnMgbXVzdCBnbyB0aHJvdWdoIHRoaXMgWkQuIFdlIGNhbid0IHNob3J0IGNpcmN1aXQgaXQuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWNIYXNUYXNrID8gem9uZVNwZWMgOiBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JrWlMgPyB0aGlzLl9mb3JrWlMub25Gb3JrKHRoaXMuX2ZvcmtEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHpvbmVTcGVjKSA6XG4gICAgICAgICAgICAgICAgbmV3IFpvbmUodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJjZXB0WlMgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTLm9uSW50ZXJjZXB0KHRoaXMuX2ludGVyY2VwdERsZ3QsIHRoaXMuX2ludGVyY2VwdEN1cnJab25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgPyB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLl9pbnZva2VDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lLCB0YXJnZXRab25lLCBlcnJvcikgOlxuICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgIHZhciByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghcmV0dXJuVGFzaylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay50eXBlID09IG1pY3JvVGFzaykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/IHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDpcbiAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWxUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgaXMgbm90IGNhbmNlbGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0YXNrLmNhbmNlbEZuKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmhhc1Rhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgaXNFbXB0eSkge1xuICAgICAgICAgICAgLy8gaGFzVGFzayBzaG91bGQgbm90IHRocm93IGVycm9yIHNvIG90aGVyIFpvbmVEZWxlZ2F0ZVxuICAgICAgICAgICAgLy8gY2FuIHN0aWxsIHRyaWdnZXIgaGFzVGFzayBjYWxsYmFja1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuICAgICAgICAgICAgICAgICAgICBtaWNyb1Rhc2s6IGNvdW50c1snbWljcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50c1snbWFjcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50c1snZXZlbnRUYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLnpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgIH0oKSk7XG4gICAgdmFyIFpvbmVUYXNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lVGFzayh0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgdGhpcy5fem9uZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJ1bkNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnbm90U2NoZWR1bGVkJztcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFpvbmVUYXNrLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMrKztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkcmFpbk1pY3JvVGFza1F1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJ6b25lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lVGFzay5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS5jYW5jZWxTY2hlZHVsZVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiAodG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50eXBlICsgXCIgJ1wiICsgdGhpcy5zb3VyY2UgKyBcIic6IGNhbiBub3QgdHJhbnNpdGlvbiB0byAnXCIgKyB0b1N0YXRlICsgXCInLCBleHBlY3Rpbmcgc3RhdGUgJ1wiICsgZnJvbVN0YXRlMSArIFwiJ1wiICsgKGZyb21TdGF0ZTIgPyAnIG9yIFxcJycgKyBmcm9tU3RhdGUyICsgJ1xcJycgOiAnJykgKyBcIiwgd2FzICdcIiArIHRoaXMuX3N0YXRlICsgXCInLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0eXBlb2YgdGhpcy5kYXRhLmhhbmRsZUlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFuZGxlSWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAgICAgLy8gY2FsbCBKU09OLnN0cmluZ2lmeSh6b25lVGFzaylcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgem9uZTogdGhpcy56b25lLm5hbWUsXG4gICAgICAgICAgICAgICAgcnVuQ291bnQ6IHRoaXMucnVuQ291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICB9KCkpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgTUlDUk9UQVNLIFFVRVVFXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgIHZhciBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgdmFyIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3QgcnVubmluZyBpbiBhbnkgdGFzaywgYW5kIHRoZXJlIGhhcyBub3QgYmVlbiBhbnl0aGluZyBzY2hlZHVsZWRcbiAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmUgbm90IHJ1bm5pbmcgaW4gVGFzaywgc28gd2UgbmVlZCB0byBraWNrc3RhcnQgdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgICAgICAgIGlmICghbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0ucmVzb2x2ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2Vbc3ltYm9sVGhlbl07XG4gICAgICAgICAgICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBwYXRjaGFibGUsIHdlIG5lZWQgdG8gdXNlIGB0aGVuYCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSAxMDc4XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSwgZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZHJhaW5NaWNyb1Rhc2tRdWV1ZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICAgICAgICAgIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FwaS5vblVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcGkubWljcm90YXNrRHJhaW5Eb25lKCk7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vICBCT09UU1RSQVBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB2YXIgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgdmFyIG5vdFNjaGVkdWxlZCA9ICdub3RTY2hlZHVsZWQnLCBzY2hlZHVsaW5nID0gJ3NjaGVkdWxpbmcnLCBzY2hlZHVsZWQgPSAnc2NoZWR1bGVkJywgcnVubmluZyA9ICdydW5uaW5nJywgY2FuY2VsaW5nID0gJ2NhbmNlbGluZycsIHVua25vd24gPSAndW5rbm93bic7XG4gICAgdmFyIG1pY3JvVGFzayA9ICdtaWNyb1Rhc2snLCBtYWNyb1Rhc2sgPSAnbWFjcm9UYXNrJywgZXZlbnRUYXNrID0gJ2V2ZW50VGFzayc7XG4gICAgdmFyIHBhdGNoZXMgPSB7fTtcbiAgICB2YXIgX2FwaSA9IHtcbiAgICAgICAgc3ltYm9sOiBfX3N5bWJvbF9fLFxuICAgICAgICBjdXJyZW50Wm9uZUZyYW1lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY3VycmVudFpvbmVGcmFtZTsgfSxcbiAgICAgICAgb25VbmhhbmRsZWRFcnJvcjogbm9vcCxcbiAgICAgICAgbWljcm90YXNrRHJhaW5Eb25lOiBub29wLFxuICAgICAgICBzY2hlZHVsZU1pY3JvVGFzazogc2NoZWR1bGVNaWNyb1Rhc2ssXG4gICAgICAgIHNob3dVbmNhdWdodEVycm9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhWm9uZVtfX3N5bWJvbF9fKCdpZ25vcmVDb25zb2xlRXJyb3JVbmNhdWdodEVycm9yJyldOyB9LFxuICAgICAgICBwYXRjaEV2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgcGF0Y2hPblByb3BlcnRpZXM6IG5vb3AsXG4gICAgICAgIHBhdGNoTWV0aG9kOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBiaW5kQXJndW1lbnRzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgcGF0Y2hUaGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBwYXRjaE1hY3JvVGFzazogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgc2V0TmF0aXZlUHJvbWlzZTogZnVuY3Rpb24gKE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBOYXRpdmVQcm9taXNlLnJlc29sdmUgc3RhdGljIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBpcyBub3QgcmVhZHkgeWV0LCAoc3VjaCBhcyBjb3JlLWpzL2VzNi5wcm9taXNlKVxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBoZXJlLlxuICAgICAgICAgICAgaWYgKE5hdGl2ZVByb21pc2UgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UucmVzb2x2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IE5hdGl2ZVByb21pc2UucmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGF0Y2hFdmVudFByb3RvdHlwZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgaXNJRU9yRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGdldEdsb2JhbE9iamVjdHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICBPYmplY3RDcmVhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgQXJyYXlTbGljZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgIHBhdGNoQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIHdyYXBXaXRoQ3VycmVudFpvbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIGZpbHRlclByb3BlcnRpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIF9yZWRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBwYXRjaENhbGxiYWNrczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfVxuICAgIH07XG4gICAgdmFyIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IG51bGwsIHpvbmU6IG5ldyBab25lKG51bGwsIG51bGwpIH07XG4gICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdmFyIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPSAwO1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdfX3pvbmVfc3ltYm9sX18nICsgbmFtZTtcbiAgICB9XG4gICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG5cbnZhciBfX3ZhbHVlcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fdmFsdWVzKSB8fCBmdW5jdGlvbiAobykge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICB2YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgZnVuY3Rpb24gcmVhZGFibGVPYmplY3RUb1N0cmluZyhvYmopIHtcbiAgICAgICAgaWYgKG9iaiAmJiBvYmoudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmogPyBvYmoudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgIH1cbiAgICB2YXIgX19zeW1ib2xfXyA9IGFwaS5zeW1ib2w7XG4gICAgdmFyIF91bmNhdWdodFByb21pc2VFcnJvcnMgPSBbXTtcbiAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICB2YXIgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG4gICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aGlsZSAoX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wgPSBfX3N5bWJvbF9fKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1VOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTF07XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG4gICAgdmFyIHN5bWJvbFN0YXRlID0gX19zeW1ib2xfXygnc3RhdGUnKTtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgIHZhciBzeW1ib2xGaW5hbGx5ID0gX19zeW1ib2xfXygnZmluYWxseScpO1xuICAgIHZhciBzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlVmFsdWUnKTtcbiAgICB2YXIgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgdmFyIHNvdXJjZSA9ICdQcm9taXNlLnRoZW4nO1xuICAgIHZhciBVTlJFU09MVkVEID0gbnVsbDtcbiAgICB2YXIgUkVTT0xWRUQgPSB0cnVlO1xuICAgIHZhciBSRUpFQ1RFRCA9IGZhbHNlO1xuICAgIHZhciBSRUpFQ1RFRF9OT19DQVRDSCA9IDA7XG4gICAgZnVuY3Rpb24gbWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2FzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgVFlQRV9FUlJPUiA9ICdQcm9taXNlIHJlc29sdmVkIHdpdGggaXRzZWxmJztcbiAgICB2YXIgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCA9IF9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKTtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb25cbiAgICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoVFlQRV9FUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgb25seSBnZXQgdmFsdWUudGhlbiBvbmNlIGJhc2VkIG9uIHByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgIHZhciB0aGVuID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFN0YXRlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xWYWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgdmFsdWVbc3ltYm9sU3RhdGVdLCB2YWx1ZVtzeW1ib2xWYWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgYnkgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXNlIHBhcmVudCBwcm9taXNlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0YXNrIGluZm9ybWF0aW9uIGluIHZhbHVlIHdoZW4gZXJyb3Igb2NjdXJzLCBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAvLyBkbyBzb21lIGFkZGl0aW9uYWwgd29yayBzdWNoIGFzIHJlbmRlciBsb25nU3RhY2tUcmFjZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBab25lLmN1cnJlbnRUYXNrICYmIFpvbmUuY3VycmVudFRhc2suZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgWm9uZS5jdXJyZW50VGFzay5kYXRhW2NyZWF0aW9uVHJhY2VdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkga2VlcCB0aGUgbG9uZyBzdGFjayB0cmFjZSBpbnRvIGVycm9yIHdoZW4gaW4gbG9uZ1N0YWNrVHJhY2Vab25lXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCwgeyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHRyYWNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PSAwICYmIHN0YXRlID09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgcmVhZGFibGVPYmplY3RUb1N0cmluZyh2YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcl8xID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSID0gX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKTtcbiAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIG5vIGNhdGNoIHN0YXR1c1xuICAgICAgICAgICAgLy8gYW5kIHF1ZXVlLmxlbmd0aCA+IDAsIG1lYW5zIHRoZXJlIGlzIGEgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgLy8gaGVyZSB0byBoYW5kbGUgdGhlIHJlamVjdGVkIHByb21pc2UsIHdlIHNob3VsZCB0cmlnZ2VyXG4gICAgICAgICAgICAvLyB3aW5kb3dzLnJlamVjdGlvbmhhbmRsZWQgZXZlbnRIYW5kbGVyIG9yIG5vZGVqcyByZWplY3Rpb25IYW5kbGVkXG4gICAgICAgICAgICAvLyBldmVudEhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1JFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVJdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7IHJlamVjdGlvbjogcHJvbWlzZVtzeW1ib2xWYWx1ZV0sIHByb21pc2U6IHByb21pc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlID09PSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzW2ldLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgIHZhciBwcm9taXNlU3RhdGUgPSBwcm9taXNlW3N5bWJvbFN0YXRlXTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID9cbiAgICAgICAgICAgICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6XG4gICAgICAgICAgICAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpID8gb25SZWplY3RlZCA6IGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRQcm9taXNlVmFsdWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbGx5UHJvbWlzZSA9IGNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV07XG4gICAgICAgICAgICAgICAgaWYgKGlzRmluYWxseVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdID0gcGFyZW50UHJvbWlzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXSA9IHByb21pc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB6b25lLnJ1bihkZWxlZ2F0ZSwgdW5kZWZpbmVkLCBpc0ZpbmFsbHlQcm9taXNlICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVqZWN0aW9uICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVzb2x1dGlvbiA/XG4gICAgICAgICAgICAgICAgICAgIFtdIDpcbiAgICAgICAgICAgICAgICAgICAgW3BhcmVudFByb21pc2VWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzLCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGlzIGVycm9yXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjaGFpblByb21pc2UpO1xuICAgIH1cbiAgICB2YXIgWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyA9ICdmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBbXTsgLy8gcXVldWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCksIG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBab25lQXdhcmVQcm9taXNlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkc7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2YWx1ZXNfMSA9IF9fdmFsdWVzKHZhbHVlcyksIHZhbHVlc18xXzEgPSB2YWx1ZXNfMS5uZXh0KCk7ICF2YWx1ZXNfMV8xLmRvbmU7IHZhbHVlc18xXzEgPSB2YWx1ZXNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNfMV8xICYmICF2YWx1ZXNfMV8xLmRvbmUgJiYgKF9hID0gdmFsdWVzXzEucmV0dXJuKSkgX2EuY2FsbCh2YWx1ZXNfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RhcnQgYXQgMiB0byBwcmV2ZW50IHByZW1hdHVyZWx5IHJlc29sdmluZyBpZiAudGhlbiBpcyBjYWxsZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB2YXIgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpc18xLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3VyVmFsdWVJbmRleCA9IHZhbHVlSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbHVlc18yID0gX192YWx1ZXModmFsdWVzKSwgdmFsdWVzXzJfMSA9IHZhbHVlc18yLm5leHQoKTsgIXZhbHVlc18yXzEuZG9uZTsgdmFsdWVzXzJfMSA9IHZhbHVlc18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlc18yXzEgJiYgIXZhbHVlc18yXzEuZG9uZSAmJiAoX2EgPSB2YWx1ZXNfMi5yZXR1cm4pKSBfYS5jYWxsKHZhbHVlc18yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgICAgICB1bnJlc29sdmVkQ291bnQgLT0gMjtcbiAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IobnVsbCk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihudWxsKTtcbiAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9IHN5bWJvbEZpbmFsbHk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgfSgpKTtcbiAgICAvLyBQcm90ZWN0IGFnYWluc3QgYWdncmVzc2l2ZSBvcHRpbWl6ZXJzIGRyb3BwaW5nIHNlZW1pbmdseSB1bnVzZWQgcHJvcGVydGllcy5cbiAgICAvLyBFLmcuIENsb3N1cmUgQ29tcGlsZXIgaW4gYWR2YW5jZWQgbW9kZS5cbiAgICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVqZWN0J10gPSBab25lQXdhcmVQcm9taXNlLnJlamVjdDtcbiAgICBab25lQXdhcmVQcm9taXNlWydyYWNlJ10gPSBab25lQXdhcmVQcm9taXNlLnJhY2U7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcbiAgICB2YXIgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IGdsb2JhbFsnUHJvbWlzZSddO1xuICAgIHZhciBaT05FX0FXQVJFX1BST01JU0UgPSBab25lLl9fc3ltYm9sX18oJ1pvbmVBd2FyZVByb21pc2UnKTtcbiAgICB2YXIgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdQcm9taXNlJyk7XG4gICAgaWYgKCFkZXNjIHx8IGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGRlc2MgJiYgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgICAgIGRlc2MgJiYgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICAgIGlmICghZGVzYykge1xuICAgICAgICAgICAgZGVzYyA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IHNldCBab25lQXdhcmVQcm9taXNlLCB1c2UgcGF0Y2hlZCBvbmVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSByZXR1cm4gbmF0aXZlIG9uZS5cbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxbWk9ORV9BV0FSRV9QUk9NSVNFXSA/IGdsb2JhbFtaT05FX0FXQVJFX1BST01JU0VdIDogZ2xvYmFsW3N5bWJvbFByb21pc2VdO1xuICAgICAgICB9O1xuICAgICAgICBkZXNjLnNldCA9IGZ1bmN0aW9uIChOZXdOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoTmV3TmF0aXZlUHJvbWlzZSA9PT0gWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBOZXdOYXRpdmVQcm9taXNlIGlzIFpvbmVBd2FyZVByb21pc2VcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRvIGdsb2JhbFxuICAgICAgICAgICAgICAgIGdsb2JhbFtaT05FX0FXQVJFX1BST01JU0VdID0gTmV3TmF0aXZlUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBOZXdOYXRpdmVQcm9taXNlIGlzIG5vdCBab25lQXdhcmVQcm9taXNlXG4gICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGU6IGFmdGVyIGxvYWQgem9uZS5qcywgc29tZSBsaWJyYXJ5IGp1c3RcbiAgICAgICAgICAgICAgICAvLyBzZXQgZXM2LXByb21pc2UgdG8gZ2xvYmFsLCBpZiB3ZSBzZXQgaXQgdG8gZ2xvYmFsXG4gICAgICAgICAgICAgICAgLy8gZGlyZWN0bHksIGFzc2VydFpvbmVQYXRjaGVkIHdpbGwgZmFpbCBhbmQgYW5ndWxhclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IGxvYWRlZCwgc28gd2UganVzdCBzZXQgdGhlIE5ld05hdGl2ZVByb21pc2VcbiAgICAgICAgICAgICAgICAvLyB0byBnbG9iYWxbc3ltYm9sUHJvbWlzZV0sIHNvIHRoZSByZXN1bHQgaXMganVzdCBsaWtlXG4gICAgICAgICAgICAgICAgLy8gd2UgbG9hZCBFUzYgUHJvbWlzZSBiZWZvcmUgem9uZS5qc1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IE5ld05hdGl2ZVByb21pc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFOZXdOYXRpdmVQcm9taXNlLnByb3RvdHlwZVtzeW1ib2xUaGVuXSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFRoZW4oTmV3TmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwaS5zZXROYXRpdmVQcm9taXNlKE5ld05hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShnbG9iYWwsICdQcm9taXNlJywgZGVzYyk7XG4gICAgfVxuICAgIGdsb2JhbFsnUHJvbWlzZSddID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICB2YXIgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihDdG9yKSB7XG4gICAgICAgIHZhciBwcm90byA9IEN0b3IucHJvdG90eXBlO1xuICAgICAgICB2YXIgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgICAgaWYgKHByb3AgJiYgKHByb3Aud3JpdGFibGUgPT09IGZhbHNlIHx8ICFwcm9wLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIEN0b3IucHJvdG90eXBlLnRoZW4gcHJvcGVydHlEZXNjcmlwdG9yIGlzIHdyaXRhYmxlIG9yIG5vdFxuICAgICAgICAgICAgLy8gaW4gbWV0ZW9yIGVudiwgd3JpdGFibGUgaXMgZmFsc2UsIHdlIHNob3VsZCBpZ25vcmUgc3VjaCBjYXNlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKF90aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlZC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgfVxuICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgZnVuY3Rpb24gem9uZWlmeShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdFByb21pc2UgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdFByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3RvciA9IHJlc3VsdFByb21pc2UuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAoIWN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hUaGVuKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgdmFyIGZldGNoXzEgPSBnbG9iYWxbJ2ZldGNoJ107XG4gICAgICAgIGlmICh0eXBlb2YgZmV0Y2hfMSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBnbG9iYWxbYXBpLnN5bWJvbCgnZmV0Y2gnKV0gPSBmZXRjaF8xO1xuICAgICAgICAgICAgZ2xvYmFsWydmZXRjaCddID0gem9uZWlmeShmZXRjaF8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdab25lJyB2YXJpYWJsZVxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXMsbWlzc2luZ1JlcXVpcmV9XG4gKi9cbi8vIGlzc3VlICM5ODksIHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgdXNlIHNob3J0IG5hbWVcbi8qKiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICovXG52YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbi8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbnZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8qKiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgKi9cbnZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbi8qKiBPYmplY3QuY3JlYXRlICovXG52YXIgT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbi8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbnZhciBBcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuLyoqIGFkZEV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG52YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbi8qKiByZW1vdmVFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4vKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG52YXIgWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKEFERF9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHpvbmVTeW1ib2wgcmVtb3ZlRXZlbnRMaXN0ZW5lciAqL1xudmFyIFpPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKTtcbi8qKiB0cnVlIHN0cmluZyBjb25zdCAqL1xudmFyIFRSVUVfU1RSID0gJ3RydWUnO1xuLyoqIGZhbHNlIHN0cmluZyBjb25zdCAqL1xudmFyIEZBTFNFX1NUUiA9ICdmYWxzZSc7XG4vKiogX196b25lX3N5bWJvbF9fIHN0cmluZyBjb25zdCAqL1xudmFyIFpPTkVfU1lNQk9MX1BSRUZJWCA9ICdfX3pvbmVfc3ltYm9sX18nO1xuZnVuY3Rpb24gd3JhcFdpdGhDdXJyZW50Wm9uZShjYWxsYmFjaywgc291cmNlKSB7XG4gICAgcmV0dXJuIFpvbmUuY3VycmVudC53cmFwKGNhbGxiYWNrLCBzb3VyY2UpO1xufVxuZnVuY3Rpb24gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCk7XG59XG52YXIgem9uZVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXztcbnZhciBpc1dpbmRvd0V4aXN0cyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGludGVybmFsV2luZG93ID0gaXNXaW5kb3dFeGlzdHMgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgX2dsb2JhbCA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbnZhciBSRU1PVkVfQVRUUklCVVRFID0gJ3JlbW92ZUF0dHJpYnV0ZSc7XG52YXIgTlVMTF9PTl9QUk9QX1ZBTFVFID0gW251bGxdO1xuZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbaV0gPSB3cmFwV2l0aEN1cnJlbnRab25lKGFyZ3NbaV0sIHNvdXJjZSArICdfJyArIGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gICAgdmFyIHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXzFdO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZV8xKTtcbiAgICAgICAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWVfMSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIGRlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hlZDtcbiAgICAgICAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3BlcnR5RGVzYykge1xuICAgIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG52YXIgaXNXZWJXb3JrZXIgPSAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG52YXIgaXNOb2RlID0gKCEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbnZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4vLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG52YXIgaXNNaXggPSB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJlxuICAgICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbnZhciB6b25lU3ltYm9sRXZlbnROYW1lcyA9IHt9O1xudmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkxMSwgaW4gSUUsIHNvbWV0aW1lc1xuICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXTtcbiAgICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGFyZ2V0ID09PSBpbnRlcm5hbFdpbmRvdyAmJiBldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25pdHVyZVxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yI3dpbmRvdy5vbmVycm9yXG4gICAgICAgIC8vIGFuZCBvbmVycm9yIGNhbGxiYWNrIHdpbGwgcHJldmVudCBkZWZhdWx0IHdoZW4gY2FsbGJhY2sgcmV0dXJuIHRydWVcbiAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXJyb3JFdmVudC5tZXNzYWdlLCBlcnJvckV2ZW50LmZpbGVuYW1lLCBlcnJvckV2ZW50LmxpbmVubywgZXJyb3JFdmVudC5jb2xubywgZXJyb3JFdmVudC5lcnJvcik7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICB2YXIgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3ApO1xuICAgICAgICBpZiAocHJvdG90eXBlRGVzYykge1xuICAgICAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlIGRlc2NyaXB0b3Igbm90IGV4aXN0cyBvciBpcyBub3QgY29uZmlndXJhYmxlXG4gICAgLy8ganVzdCByZXR1cm5cbiAgICBpZiAoIWRlc2MgfHwgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9uUHJvcFBhdGNoZWRTeW1ib2wgPSB6b25lU3ltYm9sKCdvbicgKyBwcm9wICsgJ3BhdGNoZWQnKTtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgdmFyIG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICAgIHZhciBvcmlnaW5hbERlc2NTZXQgPSBkZXNjLnNldDtcbiAgICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICB2YXIgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG4gICAgdmFyIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gICAgfVxuICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXNzdWUgIzk3OCwgd2hlbiBvbmxvYWQgaGFuZGxlciB3YXMgYWRkZWQgYmVmb3JlIGxvYWRpbmcgem9uZS5qc1xuICAgICAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NTZXQpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRGVzY1NldC5hcHBseSh0YXJnZXQsIE5VTExfT05fUFJPUF9WQUxVRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgICAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAgICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQgJiYgb3JpZ2luYWxEZXNjR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtSRU1PVkVfQVRUUklCVVRFXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSA9IHRydWU7XG59XG5mdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMsIHByb3RvdHlwZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldLCBwcm90b3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5zdWJzdHIoMCwgMikgPT0gJ29uJykge1xuICAgICAgICAgICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgb25Qcm9wZXJ0aWVzW2pdLCBwcm90b3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcbiAgICBpZiAoIU9yaWdpbmFsQ2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBrZWVwIG9yaWdpbmFsIGNsYXNzIGluIGdsb2JhbFxuICAgIF9nbG9iYWxbem9uZVN5bWJvbChjbGFzc05hbWUpXSA9IE9yaWdpbmFsQ2xhc3M7XG4gICAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBjbGFzc05hbWUpO1xuICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBhdHRhY2ggb3JpZ2luYWwgZGVsZWdhdGUgdG8gcGF0Y2hlZCBmdW5jdGlvblxuICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChfZ2xvYmFsW2NsYXNzTmFtZV0sIE9yaWdpbmFsQ2xhc3MpO1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgdmFyIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gd3JhcFdpdGhDdXJyZW50Wm9uZShmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBjYWxsYmFjayBpbiB3cmFwcGVkIGZ1bmN0aW9uIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0sIGZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KHByb3ApKTtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnICYmIE9yaWdpbmFsQ2xhc3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb3B5U3ltYm9sUHJvcGVydGllcyhzcmMsIGRlc3QpIHtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc3JjKTtcbiAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBzeW1ib2wpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgc3ltYm9sLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjW3N5bWJvbF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzYyAmJiAoIWRlc2Mud3JpdGFibGUgfHwgdHlwZW9mIGRlc2Muc2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzcmNbc3ltYm9sXSBpcyBub3Qgd3JpdGFibGUgb3Igbm90IGhhdmUgYSBzZXR0ZXIsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3JjW3N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjID8gZGVzYy5lbnVtZXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZGVzYyA/IGRlc2MuY29uZmlndXJhYmxlIDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbnZhciBzaG91bGRDb3B5U3ltYm9sUHJvcGVydGllcyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICB2YXIgcHJvdG8gPSB0YXJnZXQ7XG4gICAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICB9XG4gICAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICBwcm90byA9IHRhcmdldDtcbiAgICB9XG4gICAgdmFyIGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gICAgdmFyIGRlbGVnYXRlID0gbnVsbDtcbiAgICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG4gICAgICAgIGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSA9IHByb3RvW25hbWVdO1xuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgICAgIC8vIHNvbWUgcHJvcGVydHkgaXMgcmVhZG9ubHkgaW4gc2FmYXJpLCBzdWNoIGFzIEh0bWxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2JcbiAgICAgICAgdmFyIGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgICBpZiAoaXNQcm9wZXJ0eVdyaXRhYmxlKGRlc2MpKSB7XG4gICAgICAgICAgICB2YXIgcGF0Y2hEZWxlZ2F0ZV8xID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcbiAgICAgICAgICAgIHByb3RvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlXzEodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRDb3B5U3ltYm9sUHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGNvcHlTeW1ib2xQcm9wZXJ0aWVzKGRlbGVnYXRlLCBwcm90b1tuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbGVnYXRlO1xufVxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBhdGNoTWFjcm9UYXNrKG9iaiwgZnVuY05hbWUsIG1ldGFDcmVhdG9yKSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGRhdGEuYXJnc1tkYXRhLmNiSWR4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHNldE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKG9iaiwgZnVuY05hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIG1ldGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICAgICAgaWYgKG1ldGEuY2JJZHggPj0gMCAmJiB0eXBlb2YgYXJnc1ttZXRhLmNiSWR4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKG1ldGEubmFtZSwgYXJnc1ttZXRhLmNiSWR4XSwgbWV0YSwgc2NoZWR1bGVUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9OyB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gICAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG52YXIgaXNEZXRlY3RlZElFT3JFZGdlID0gZmFsc2U7XG52YXIgaWVPckVkZ2UgPSBmYWxzZTtcbmZ1bmN0aW9uIGlzSUUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcbiAgICBpZiAoaXNEZXRlY3RlZElFT3JFZGdlKSB7XG4gICAgICAgIHJldHVybiBpZU9yRWRnZTtcbiAgICB9XG4gICAgaXNEZXRlY3RlZElFT3JFZGdlID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignRWRnZS8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGllT3JFZGdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gICAgcmV0dXJuIGllT3JFZGdlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vLyBvdmVycmlkZSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gbWFrZSB6b25lLmpzIHBhdGNoZWQgZnVuY3Rpb25cbi8vIGxvb2sgbGlrZSBuYXRpdmUgZnVuY3Rpb25cblpvbmUuX19sb2FkX3BhdGNoKCd0b1N0cmluZycsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAvLyBwYXRjaCBGdW5jLnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MID0gem9uZVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpO1xuICAgIHZhciBQUk9NSVNFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ1Byb21pc2UnKTtcbiAgICB2YXIgRVJST1JfU1lNQk9MID0gem9uZVN5bWJvbCgnRXJyb3InKTtcbiAgICB2YXIgbmV3RnVuY3Rpb25Ub1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbERlbGVnYXRlID0gdGhpc1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsRGVsZWdhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcyA9PT0gUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHZhciBuYXRpdmVQcm9taXNlID0gZ2xvYmFsW1BST01JU0VfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZUVycm9yID0gZ2xvYmFsW0VSUk9SX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgaWYgKG5hdGl2ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIG5ld0Z1bmN0aW9uVG9TdHJpbmdbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXSA9IG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZztcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBuZXdGdW5jdGlvblRvU3RyaW5nO1xuICAgIC8vIHBhdGNoIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgIHZhciBvcmlnaW5hbE9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RUb1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG52YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG4vLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxudmFyIE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA9IHtcbiAgICB1c2VHOiB0cnVlXG59O1xudmFyIHpvbmVTeW1ib2xFdmVudE5hbWVzJDEgPSB7fTtcbnZhciBnbG9iYWxTb3VyY2VzID0ge307XG52YXIgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IC9eX196b25lX3N5bWJvbF9fKFxcdyspKHRydWV8ZmFsc2UpJC87XG52YXIgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9ICgnX196b25lX3N5bWJvbF9fcHJvcGFnYXRpb25TdG9wcGVkJyk7XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaXMsIHBhdGNoT3B0aW9ucykge1xuICAgIHZhciBBRERfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5hZGQpIHx8IEFERF9FVkVOVF9MSVNURU5FUl9TVFI7XG4gICAgdmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIHZhciBMSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5saXN0ZW5lcnMpIHx8ICdldmVudExpc3RlbmVycyc7XG4gICAgdmFyIFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm1BbGwpIHx8ICdyZW1vdmVBbGxMaXN0ZW5lcnMnO1xuICAgIHZhciB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIEFERF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgICB2YXIgUFJFUEVORF9FVkVOVF9MSVNURU5FUiA9ICdwcmVwZW5kTGlzdGVuZXInO1xuICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgdmFyIGludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBldmVudCkge1xuICAgICAgICAvLyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLCBjaGVjayBpc1JlbW92ZWQgd2hpY2ggaXMgc2V0XG4gICAgICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgaWYgKHRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgYmluZCB2ZXJzaW9uIG9mIGhhbmRsZUV2ZW50IHdoZW4gaW52b2tlXG4gICAgICAgICAgICB0YXNrLmNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBkZWxlZ2F0ZS5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbnZva2Ugc3RhdGljIHRhc2suaW52b2tlXG4gICAgICAgIHRhc2suaW52b2tlKHRhc2ssIHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5vbmNlKSB7XG4gICAgICAgICAgICAvLyBpZiBvcHRpb25zLm9uY2UgaXMgdHJ1ZSwgYWZ0ZXIgaW52b2tlIG9uY2UgcmVtb3ZlIGxpc3RlbmVyIGhlcmVcbiAgICAgICAgICAgIC8vIG9ubHkgYnJvd3NlciBuZWVkIHRvIGRvIHRoaXMsIG5vZGVqcyBldmVudEVtaXR0ZXIgd2lsbCBjYWwgcmVtb3ZlTGlzdGVuZXJcbiAgICAgICAgICAgIC8vIGluc2lkZSBFdmVudEVtaXR0ZXIub25jZVxuICAgICAgICAgICAgdmFyIGRlbGVnYXRlXzEgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgdGFyZ2V0W1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0YXJnZXQsIGV2ZW50LnR5cGUsIGRlbGVnYXRlXzEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgICB2YXIgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXVtGQUxTRV9TVFJdXTtcbiAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgICAgICAgICAvLyBjb3B5IHRoZSB0YXNrcyBhcnJheSBiZWZvcmUgaW52b2tlLCB0byBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICB2YXIgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcHlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGdsb2JhbCBzaGFyZWQgem9uZUF3YXJlQ2FsbGJhY2sgdG8gaGFuZGxlIGFsbCBldmVudCBjYWxsYmFjayB3aXRoIGNhcHR1cmUgPSB0cnVlXG4gICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBldmVudC50YXJnZXQgaXMgbmVlZGVkIGZvciBTYW1zdW5nIFRWIGFuZCBTb3VyY2VCdWZmZXJcbiAgICAgICAgLy8gfHwgZ2xvYmFsIGlzIG5lZWRlZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFt6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdW1RSVUVfU1RSXV07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIGNvbmNlcm4sIGlmIHRhc2subGVuZ3RoID09PSAxLCBqdXN0IGludm9rZVxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgICAgICAgICAgLy8gY29weSB0aGUgdGFza3MgYXJyYXkgYmVmb3JlIGludm9rZSwgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2FsbGJhY2sgd2lsbCByZW1vdmUgaXRzZWxmIG9yIG90aGVyIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgdmFyIGNvcHlUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50W0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmosIHBhdGNoT3B0aW9ucykge1xuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1c2VHbG9iYWxDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdXNlR2xvYmFsQ2FsbGJhY2sgPSBwYXRjaE9wdGlvbnMudXNlRztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgdmFyIGNoZWNrRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvdG8gPSBvYmo7XG4gICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90byAmJiBvYmpbQUREX0VWRU5UX0xJU1RFTkVSXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnROYW1lVG9TdHJpbmcgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmV2ZW50TmFtZVRvU3RyaW5nO1xuICAgICAgICAvLyBhIHNoYXJlZCBnbG9iYWwgdGFza0RhdGEgdG8gcGFzcyBkYXRhIGZvciBzY2hlZHVsZUV2ZW50VGFza1xuICAgICAgICAvLyBzbyB3ZSBkbyBub3QgbmVlZCB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGp1c3QgZm9yIHBhc3Mgc29tZSBkYXRhXG4gICAgICAgIHZhciB0YXNrRGF0YSA9IHt9O1xuICAgICAgICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIHZhciBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgbmF0aXZlTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChMSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgdmFyIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSXNQYXNzaXZlKHRhc2spIHtcbiAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2YgdGFza0RhdGEub3B0aW9ucyAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRhc2tEYXRhLm9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIHRhc2tEYXRhLm9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zIGlzIGEgbm9uLW51bGwgbm9uLXVuZGVmaW5lZCBvYmplY3RcbiAgICAgICAgICAgICAgICAvLyBwYXNzaXZlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBwYXNzIG9wdGlvbnMgYXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgLy8ganVzdCBwYXNzIGNhcHR1cmUgYXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgdGFzay5vcHRpb25zID0gISF0YXNrRGF0YS5vcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IHRhc2sub3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlLFxuICAgICAgICAgICAgLy8ganVzdCByZXR1cm4sIGJlY2F1c2Ugd2UgdXNlIHRoZSBzaGFyZWQgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgaGVyZS5cbiAgICAgICAgICAgIGlmICh0YXNrRGF0YS5pc0V4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tJc1Bhc3NpdmUodGFzayk7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgICAgICAgLy8gZnJvbSBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSB0YXNrXG4gICAgICAgICAgICAvLyBmcm9tIHRhc2tzTGlzdCBvZiB0YXJnZXQgZmlyc3RcbiAgICAgICAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbdGFzay5ldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIHJlYWxseSByZW1vdmUgdGhlIGdsb2JhbCBldmVudCBjYWxsYmFjayxcbiAgICAgICAgICAgIC8vIGlmIG5vdCwgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXRhc2suYWxsUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFzay5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIGNoZWNrSXNQYXNzaXZlKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXN0b21DYW5jZWxOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGUgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbVNjaGVkdWxlR2xvYmFsIDogY3VzdG9tU2NoZWR1bGVOb25HbG9iYWw7XG4gICAgICAgIHZhciBjdXN0b21DYW5jZWwgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbUNhbmNlbEdsb2JhbCA6IGN1c3RvbUNhbmNlbE5vbkdsb2JhbDtcbiAgICAgICAgdmFyIGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlID0gZnVuY3Rpb24gKHRhc2ssIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICB2YXIgdHlwZU9mRGVsZWdhdGUgPSB0eXBlb2YgZGVsZWdhdGU7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVPZkRlbGVnYXRlID09PSAnZnVuY3Rpb24nICYmIHRhc2suY2FsbGJhY2sgPT09IGRlbGVnYXRlKSB8fFxuICAgICAgICAgICAgICAgICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjb21wYXJlID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZikgPyBwYXRjaE9wdGlvbnMuZGlmZiA6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlO1xuICAgICAgICB2YXIgYmxhY2tMaXN0ZWRFdmVudHMgPSBab25lW1pvbmUuX19zeW1ib2xfXygnQkxBQ0tfTElTVEVEX0VWRU5UUycpXTtcbiAgICAgICAgdmFyIG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0ID09PSB2b2lkIDApIHsgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChwcmVwZW5kID09PSB2b2lkIDApIHsgcHJlcGVuZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTm9kZSAmJiBldmVudE5hbWUgPT09ICd1bmNhdWdodEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb24ndCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgZnVuY3Rpb24gZm9yIGhhbmRsZUV2ZW50XG4gICAgICAgICAgICAgICAgLy8gY2FzZSBoZXJlIHRvIGltcHJvdmUgYWRkRXZlbnRMaXN0ZW5lciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIHdoZW4gaW52b2tlXG4gICAgICAgICAgICAgICAgdmFyIGlzSGFuZGxlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlTGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxhY2tMaXN0ZWRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgYmxhY2sgbGlzdFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsYWNrTGlzdGVkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBibGFja0xpc3RlZEV2ZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICAgICAgICAgIHZhciBvbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBvcHRpb25zID8gISFvcHRpb25zLmNhcHR1cmUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb25jZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMub25jZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIGlmICghc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY29kZSBpcyBkdXBsaWNhdGUsIGJ1dCBJIGp1c3Qgd2FudCB0byBnZXQgc29tZSBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBUUlVFX1NUUjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IGNhcHR1cmUgPyBzeW1ib2xDYXB0dXJlIDogc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBpc0V4aXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRhc2sgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICBpc0V4aXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2tzW2ldLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FtZSBjYWxsYmFjaywgc2FtZSBjYXB0dXJlLCBzYW1lIGV2ZW50IG5hbWUsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc291cmNlO1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGNvbnN0cnVjdG9yTmFtZSArIGFkZFNvdXJjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSBhIG5ldyBvYmplY3QgYXMgdGFzay5kYXRhIHRvIHBhc3MgdGhvc2UgdGhpbmdzXG4gICAgICAgICAgICAgICAgLy8ganVzdCB1c2UgdGhlIGdsb2JhbCBzaGFyZWQgb25lXG4gICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIG9uY2Ugb3B0aW9ucywgd2UgZG9uJ3QgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciwgaW5zdGVhZCB3ZSBrZWVwIHRoZSBvbmNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGhhbmRsZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlzRXhpc3RpbmcgPSBpc0V4aXN0aW5nO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbik7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGNsZWFyIHRhc2tEYXRhLnRhcmdldCB0byBhdm9pZCBtZW1vcnkgbGVha1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDQ0MlxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBjbGVhciB1cCB0YXNrRGF0YSBiZWNhdXNlIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IGNhbGwgdGFzay56b25lLmNhbmNlbFRhc2soKSBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgcGFzc2l2ZSwgYW5kIHdlIHBhc3MgYW4gb3B0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhZGRFdmVudExpc3RlbmVyLCB3ZSBzaG91bGQgc2F2ZSB0aGUgb3B0aW9ucyB0byB0YXNrXG4gICAgICAgICAgICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFzay5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBkZWxlZ2F0ZSBmb3IgY29tcGFyZSB0byBjaGVjayBkdXBsaWNhdGVcbiAgICAgICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJlcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIsIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCk7XG4gICAgICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuY2FwdHVyZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2ssIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmFsbFJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay56b25lLmNhbmNlbFRhc2soZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXNzdWUgOTMwLCBkaWRuJ3QgZmluZCB0aGUgZXZlbnQgbmFtZSBvciBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnJvbSB6b25lIGtlcHQgZXhpc3RpbmdUYXNrcywgdGhlIGNhbGxiYWNrIG1heWJlXG4gICAgICAgICAgICAvLyBhZGRlZCBvdXRzaWRlIG9mIHpvbmUsIHdlIG5lZWQgdG8gY2FsbCBuYXRpdmUgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgLy8gdG8gdHJ5IHRvIHJlbW92ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgICAgfTtcbiAgICAgICAgcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3AgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIG5vZGVqcyBFdmVudEVtaXR0ZXIsIHJlbW92ZUxpc3RlbmVyIGV2ZW50IGlzXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZWQgZm9yIG1vbml0b3JpbmcgdGhlIHJlbW92ZUxpc3RlbmVyIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBldmVudExpc3RlbmVycyBhcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiBldnROYW1lICE9PSAncmVtb3ZlTGlzdGVuZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW0ZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tUUlVFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZVRhc2tzID0gdGFyZ2V0W3N5bWJvbENhcHR1cmVFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhc2tzID0gY2FwdHVyZVRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUxpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhhcGlzW2ldLCBwYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmZ1bmN0aW9uIGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGZvdW5kVGFza3MgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHRhcmdldCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgIGlmIChldnROYW1lICYmICghZXZlbnROYW1lIHx8IGV2dE5hbWUgPT09IGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRUYXNrcy5wdXNoKHRhc2tzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kVGFza3M7XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKSB7XG4gICAgdmFyIEV2ZW50ID0gZ2xvYmFsWydFdmVudCddO1xuICAgIGlmIChFdmVudCAmJiBFdmVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kKEV2ZW50LnByb3RvdHlwZSwgJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIHdpbGwgYmUgY29udHJvbGxlZCBieSB6b25lLCBzb21lIGFyZSBub3RcbiAgICAgICAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9OyB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICAgIHZhciBzeW1ib2wgPSBab25lLl9fc3ltYm9sX18obWV0aG9kKTtcbiAgICBpZiAodGFyZ2V0W3N5bWJvbF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmF0aXZlRGVsZWdhdGUgPSB0YXJnZXRbc3ltYm9sXSA9IHRhcmdldFttZXRob2RdO1xuICAgIHRhcmdldFttZXRob2RdID0gZnVuY3Rpb24gKG5hbWUsIG9wdHMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSB0YXJnZXROYW1lICsgXCIuXCIgKyBtZXRob2QgKyBcIjo6XCIgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gb3B0cy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eShvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2ssIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGVnYXRlLmNhbGwodGFyZ2V0LCBuYW1lLCBvcHRzLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGFyZ2V0W21ldGhvZF0sIG5hdGl2ZURlbGVnYXRlKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLypcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBDaHJvbWUgYW5kIENocm9tZSBtb2JpbGUsIHRvIGVuYWJsZVxuICogdGhpbmdzIGxpa2UgcmVkZWZpbmluZyBgY3JlYXRlZENhbGxiYWNrYCBvbiBhbiBlbGVtZW50LlxuICovXG52YXIgem9uZVN5bWJvbCQxID0gWm9uZS5fX3N5bWJvbF9fO1xudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sJDEoJ2RlZmluZVByb3BlcnR5JyldID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3Rbem9uZVN5bWJvbCQxKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InKV0gPVxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgdW5jb25maWd1cmFibGVzS2V5ID0gem9uZVN5bWJvbCQxKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbmZ1bmN0aW9uIHByb3BlcnR5UGF0Y2goKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3RvKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBwcm90b1twcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgcHJvdG9bcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gICAgfTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgaWYgKGRlc2MgJiYgaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjO1xuICAgIH07XG59XG5mdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG59XG5mdW5jdGlvbiBpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF07XG59XG5mdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpIHtcbiAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBkZXNjIGlzIGZyb3plbiwgZG9uJ3QgdHJ5IHRvIGNoYW5nZSB0aGUgZGVzY1xuICAgIGlmICghT2JqZWN0LmlzRnJvemVuKGRlc2MpKSB7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBvYmogaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gc2V0IHRoZSBkZXNjIHRvIG9ialxuICAgICAgICBpZiAoIW9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmICFPYmplY3QuaXNGcm96ZW4ob2JqKSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KG9iaiwgdW5jb25maWd1cmFibGVzS2V5LCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldKSB7XG4gICAgICAgICAgICBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc2M7XG59XG5mdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb2YgZXJyb3JzLCB3aGVuIHRoZSBjb25maWd1cmFibGUgZmxhZyB3YXMgbGlrZWx5IHNldCBieSByZXdyaXRlRGVzY3JpcHRvcigpLCBsZXQnc1xuICAgICAgICAgICAgLy8gcmV0cnkgd2l0aCB0aGUgb3JpZ2luYWwgZmxhZyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NKc29uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBjb25maWd1cmUgJ1wiICsgcHJvcCArIFwiJyB3aXRoIGRlc2NyaXB0b3IgJ1wiICsgZGVzY0pzb24gKyBcIicgb24gb2JqZWN0ICdcIiArIG9iaiArIFwiJyBhbmQgZ290IGVycm9yLCBnaXZpbmcgdXA6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHtnbG9iYWxUaGlzfVxuICovXG52YXIgZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMgPSBbXG4gICAgJ2Fib3J0JyxcbiAgICAnYW5pbWF0aW9uY2FuY2VsJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAnYXV4Y2xpY2snLFxuICAgICdiZWZvcmVpbnB1dCcsXG4gICAgJ2JsdXInLFxuICAgICdjYW5jZWwnLFxuICAgICdjYW5wbGF5JyxcbiAgICAnY2FucGxheXRocm91Z2gnLFxuICAgICdjaGFuZ2UnLFxuICAgICdjb21wb3NpdGlvbnN0YXJ0JyxcbiAgICAnY29tcG9zaXRpb251cGRhdGUnLFxuICAgICdjb21wb3NpdGlvbmVuZCcsXG4gICAgJ2N1ZWNoYW5nZScsXG4gICAgJ2NsaWNrJyxcbiAgICAnY2xvc2UnLFxuICAgICdjb250ZXh0bWVudScsXG4gICAgJ2N1cmVjaGFuZ2UnLFxuICAgICdkYmxjbGljaycsXG4gICAgJ2RyYWcnLFxuICAgICdkcmFnZW5kJyxcbiAgICAnZHJhZ2VudGVyJyxcbiAgICAnZHJhZ2V4aXQnLFxuICAgICdkcmFnbGVhdmUnLFxuICAgICdkcmFnb3ZlcicsXG4gICAgJ2Ryb3AnLFxuICAgICdkdXJhdGlvbmNoYW5nZScsXG4gICAgJ2VtcHRpZWQnLFxuICAgICdlbmRlZCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZm9jdXMnLFxuICAgICdmb2N1c2luJyxcbiAgICAnZm9jdXNvdXQnLFxuICAgICdnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ2lucHV0JyxcbiAgICAnaW52YWxpZCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdrZXlwcmVzcycsXG4gICAgJ2tleXVwJyxcbiAgICAnbG9hZCcsXG4gICAgJ2xvYWRzdGFydCcsXG4gICAgJ2xvYWRlZGRhdGEnLFxuICAgICdsb2FkZWRtZXRhZGF0YScsXG4gICAgJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlZW50ZXInLFxuICAgICdtb3VzZWxlYXZlJyxcbiAgICAnbW91c2Vtb3ZlJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdtb3VzZW92ZXInLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2V3aGVlbCcsXG4gICAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICAncGF1c2UnLFxuICAgICdwbGF5JyxcbiAgICAncGxheWluZycsXG4gICAgJ3BvaW50ZXJjYW5jZWwnLFxuICAgICdwb2ludGVyZG93bicsXG4gICAgJ3BvaW50ZXJlbnRlcicsXG4gICAgJ3BvaW50ZXJsZWF2ZScsXG4gICAgJ3BvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAnbW96cG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2VyY2hhbmdlJyxcbiAgICAncG9pbnRlcmxvY2tlcnJvcicsXG4gICAgJ21venBvaW50ZXJsb2NrZXJyb3InLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2Vycm9yJyxcbiAgICAncG9pbnRlcm1vdmUnLFxuICAgICdwb2ludG91dCcsXG4gICAgJ3BvaW50ZXJvdmVyJyxcbiAgICAncG9pbnRlcnVwJyxcbiAgICAncHJvZ3Jlc3MnLFxuICAgICdyYXRlY2hhbmdlJyxcbiAgICAncmVzZXQnLFxuICAgICdyZXNpemUnLFxuICAgICdzY3JvbGwnLFxuICAgICdzZWVrZWQnLFxuICAgICdzZWVraW5nJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICAnc2VsZWN0c3RhcnQnLFxuICAgICdzaG93JyxcbiAgICAnc29ydCcsXG4gICAgJ3N0YWxsZWQnLFxuICAgICdzdWJtaXQnLFxuICAgICdzdXNwZW5kJyxcbiAgICAndGltZXVwZGF0ZScsXG4gICAgJ3ZvbHVtZWNoYW5nZScsXG4gICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAndG91Y2htb3ZlJyxcbiAgICAndG91Y2hzdGFydCcsXG4gICAgJ3RvdWNoZW5kJyxcbiAgICAndHJhbnNpdGlvbmNhbmNlbCcsXG4gICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICd3YWl0aW5nJyxcbiAgICAnd2hlZWwnXG5dO1xudmFyIGRvY3VtZW50RXZlbnROYW1lcyA9IFtcbiAgICAnYWZ0ZXJzY3JpcHRleGVjdXRlJywgJ2JlZm9yZXNjcmlwdGV4ZWN1dGUnLCAnRE9NQ29udGVudExvYWRlZCcsICdmcmVlemUnLCAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJyxcbiAgICAnbW96ZnVsbHNjcmVlbmVycm9yJywgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcicsICdtc2Z1bGxzY3JlZW5lcnJvcicsICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAndmlzaWJpbGl0eWNoYW5nZScsICdyZXN1bWUnXG5dO1xudmFyIHdpbmRvd0V2ZW50TmFtZXMgPSBbXG4gICAgJ2Fic29sdXRlZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICdhZnRlcmlucHV0JyxcbiAgICAnYWZ0ZXJwcmludCcsXG4gICAgJ2FwcGluc3RhbGxlZCcsXG4gICAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAgICdiZWZvcmVwcmludCcsXG4gICAgJ2JlZm9yZXVubG9hZCcsXG4gICAgJ2RldmljZWxpZ2h0JyxcbiAgICAnZGV2aWNlbW90aW9uJyxcbiAgICAnZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICdkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJyxcbiAgICAnZGV2aWNlcHJveGltaXR5JyxcbiAgICAnaGFzaGNoYW5nZScsXG4gICAgJ2xhbmd1YWdlY2hhbmdlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21vemJlZm9yZXBhaW50JyxcbiAgICAnb2ZmbGluZScsXG4gICAgJ29ubGluZScsXG4gICAgJ3BhaW50JyxcbiAgICAncGFnZXNob3cnLFxuICAgICdwYWdlaGlkZScsXG4gICAgJ3BvcHN0YXRlJyxcbiAgICAncmVqZWN0aW9uaGFuZGxlZCcsXG4gICAgJ3N0b3JhZ2UnLFxuICAgICd1bmhhbmRsZWRyZWplY3Rpb24nLFxuICAgICd1bmxvYWQnLFxuICAgICd1c2VycHJveGltaXR5JyxcbiAgICAndnJkaXNwbHljb25uZWN0ZWQnLFxuICAgICd2cmRpc3BsYXlkaXNjb25uZWN0ZWQnLFxuICAgICd2cmRpc3BsYXlwcmVzZW50Y2hhbmdlJ1xuXTtcbnZhciBodG1sRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICAgJ2JlZm9yZWNvcHknLCAnYmVmb3JlY3V0JywgJ2JlZm9yZXBhc3RlJywgJ2NvcHknLCAnY3V0JywgJ3Bhc3RlJywgJ2RyYWdzdGFydCcsICdsb2FkZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLCAnc2VhcmNoJywgJ3RyYW5zaXRpb25ydW4nLCAndHJhbnNpdGlvbnN0YXJ0JywgJ3dlYmtpdGFuaW1hdGlvbmVuZCcsXG4gICAgJ3dlYmtpdGFuaW1hdGlvbml0ZXJhdGlvbicsICd3ZWJraXRhbmltYXRpb25zdGFydCcsICd3ZWJraXR0cmFuc2l0aW9uZW5kJ1xuXTtcbnZhciBtZWRpYUVsZW1lbnRFdmVudE5hbWVzID0gWydlbmNyeXB0ZWQnLCAnd2FpdGluZ2ZvcmtleScsICdtc25lZWRrZXknLCAnbW96aW50ZXJydXB0YmVnaW4nLCAnbW96aW50ZXJydXB0ZW5kJ107XG52YXIgaWVFbGVtZW50RXZlbnROYW1lcyA9IFtcbiAgICAnYWN0aXZhdGUnLFxuICAgICdhZnRlcnVwZGF0ZScsXG4gICAgJ2FyaWFyZXF1ZXN0JyxcbiAgICAnYmVmb3JlYWN0aXZhdGUnLFxuICAgICdiZWZvcmVkZWFjdGl2YXRlJyxcbiAgICAnYmVmb3JlZWRpdGZvY3VzJyxcbiAgICAnYmVmb3JldXBkYXRlJyxcbiAgICAnY2VsbGNoYW5nZScsXG4gICAgJ2NvbnRyb2xzZWxlY3QnLFxuICAgICdkYXRhYXZhaWxhYmxlJyxcbiAgICAnZGF0YXNldGNoYW5nZWQnLFxuICAgICdkYXRhc2V0Y29tcGxldGUnLFxuICAgICdlcnJvcnVwZGF0ZScsXG4gICAgJ2ZpbHRlcmNoYW5nZScsXG4gICAgJ2xheW91dGNvbXBsZXRlJyxcbiAgICAnbG9zZWNhcHR1cmUnLFxuICAgICdtb3ZlJyxcbiAgICAnbW92ZWVuZCcsXG4gICAgJ21vdmVzdGFydCcsXG4gICAgJ3Byb3BlcnR5Y2hhbmdlJyxcbiAgICAncmVzaXplZW5kJyxcbiAgICAncmVzaXplc3RhcnQnLFxuICAgICdyb3dlbnRlcicsXG4gICAgJ3Jvd2V4aXQnLFxuICAgICdyb3dzZGVsZXRlJyxcbiAgICAncm93c2luc2VydGVkJyxcbiAgICAnY29tbWFuZCcsXG4gICAgJ2NvbXBhc3NuZWVkc2NhbGlicmF0aW9uJyxcbiAgICAnZGVhY3RpdmF0ZScsXG4gICAgJ2hlbHAnLFxuICAgICdtc2NvbnRlbnR6b29tJyxcbiAgICAnbXNtYW5pcHVsYXRpb25zdGF0ZWNoYW5nZWQnLFxuICAgICdtc2dlc3R1cmVjaGFuZ2UnLFxuICAgICdtc2dlc3R1cmVkb3VibGV0YXAnLFxuICAgICdtc2dlc3R1cmVlbmQnLFxuICAgICdtc2dlc3R1cmVob2xkJyxcbiAgICAnbXNnZXN0dXJlc3RhcnQnLFxuICAgICdtc2dlc3R1cmV0YXAnLFxuICAgICdtc2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAnbXNpbmVydGlhc3RhcnQnLFxuICAgICdtc2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ21zcG9pbnRlcmNhbmNlbCcsXG4gICAgJ21zcG9pbnRlcmRvd24nLFxuICAgICdtc3BvaW50ZXJlbnRlcicsXG4gICAgJ21zcG9pbnRlcmhvdmVyJyxcbiAgICAnbXNwb2ludGVybGVhdmUnLFxuICAgICdtc3BvaW50ZXJtb3ZlJyxcbiAgICAnbXNwb2ludGVyb3V0JyxcbiAgICAnbXNwb2ludGVyb3ZlcicsXG4gICAgJ21zcG9pbnRlcnVwJyxcbiAgICAncG9pbnRlcm91dCcsXG4gICAgJ21zc2l0ZW1vZGVqdW1wbGlzdGl0ZW1yZW1vdmVkJyxcbiAgICAnbXN0aHVtYm5haWxjbGljaycsXG4gICAgJ3N0b3AnLFxuICAgICdzdG9yYWdlY29tbWl0J1xuXTtcbnZhciB3ZWJnbEV2ZW50TmFtZXMgPSBbJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgJ3dlYmdsY29udGV4dGxvc3QnLCAnd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvciddO1xudmFyIGZvcm1FdmVudE5hbWVzID0gWydhdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlZXJyb3InXTtcbnZhciBkZXRhaWxFdmVudE5hbWVzID0gWyd0b2dnbGUnXTtcbnZhciBmcmFtZUV2ZW50TmFtZXMgPSBbJ2xvYWQnXTtcbnZhciBmcmFtZVNldEV2ZW50TmFtZXMgPSBbJ2JsdXInLCAnZXJyb3InLCAnZm9jdXMnLCAnbG9hZCcsICdyZXNpemUnLCAnc2Nyb2xsJywgJ21lc3NhZ2VlcnJvciddO1xudmFyIG1hcnF1ZWVFdmVudE5hbWVzID0gWydib3VuY2UnLCAnZmluaXNoJywgJ3N0YXJ0J107XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzID0gW1xuICAgICdsb2Fkc3RhcnQnLCAncHJvZ3Jlc3MnLCAnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCcsICdwcm9ncmVzcycsICd0aW1lb3V0JywgJ2xvYWRlbmQnLFxuICAgICdyZWFkeXN0YXRlY2hhbmdlJ1xuXTtcbnZhciBJREJJbmRleEV2ZW50TmFtZXMgPSBbJ3VwZ3JhZGVuZWVkZWQnLCAnY29tcGxldGUnLCAnYWJvcnQnLCAnc3VjY2VzcycsICdlcnJvcicsICdibG9ja2VkJywgJ3ZlcnNpb25jaGFuZ2UnLCAnY2xvc2UnXTtcbnZhciB3ZWJzb2NrZXRFdmVudE5hbWVzID0gWydjbG9zZScsICdlcnJvcicsICdvcGVuJywgJ21lc3NhZ2UnXTtcbnZhciB3b3JrZXJFdmVudE5hbWVzID0gWydlcnJvcicsICdtZXNzYWdlJ107XG52YXIgZXZlbnROYW1lcyA9IGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzLmNvbmNhdCh3ZWJnbEV2ZW50TmFtZXMsIGZvcm1FdmVudE5hbWVzLCBkZXRhaWxFdmVudE5hbWVzLCBkb2N1bWVudEV2ZW50TmFtZXMsIHdpbmRvd0V2ZW50TmFtZXMsIGh0bWxFbGVtZW50RXZlbnROYW1lcywgaWVFbGVtZW50RXZlbnROYW1lcyk7XG5mdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzIHx8IGlnbm9yZVByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIHZhciB0aXAgPSBpZ25vcmVQcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAoaXApIHsgcmV0dXJuIGlwLnRhcmdldCA9PT0gdGFyZ2V0OyB9KTtcbiAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIHZhciB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzID0gdGlwWzBdLmlnbm9yZVByb3BlcnRpZXM7XG4gICAgcmV0dXJuIG9uUHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKG9wKSB7IHJldHVybiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMTsgfSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYXZhaWxhYmxlLCBzb21ldGltZXMgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hPblByb3BlcnRpZXModGFyZ2V0LCBmaWx0ZXJlZFByb3BlcnRpZXMsIHByb3RvdHlwZSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgICAgIC8vIGV2ZW50cyBhcmUgYWxyZWFkeSBiZWVuIHBhdGNoZWQgYnkgbGVnYWN5IHBhdGNoLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBpZ25vcmVQcm9wZXJ0aWVzID0gX2dsb2JhbFsnX19ab25lX2lnbm9yZV9vbl9wcm9wZXJ0aWVzJ107XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgdmFyIGludGVybmFsV2luZG93ID0gd2luZG93O1xuICAgICAgICB2YXIgaWdub3JlRXJyb3JQcm9wZXJ0aWVzID0gaXNJRSA/IFt7IHRhcmdldDogaW50ZXJuYWxXaW5kb3csIGlnbm9yZVByb3BlcnRpZXM6IFsnZXJyb3InXSB9XSA6IFtdO1xuICAgICAgICAvLyBpbiBJRS9FZGdlLCBvblByb3Agbm90IGV4aXN0IGluIHdpbmRvdyBvYmplY3QsIGJ1dCBpbiBXaW5kb3dQcm90b3R5cGVcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBwYXNzIFdpbmRvd1Byb3RvdHlwZSB0byBjaGVjayBvblByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKGludGVybmFsV2luZG93LCBldmVudE5hbWVzLmNvbmNhdChbJ21lc3NhZ2VlcnJvciddKSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvdykpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBpZiAodHlwZW9mIGludGVybmFsV2luZG93WydTVkdFbGVtZW50J10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvd1snU1ZHRWxlbWVudCddLnByb3RvdHlwZSwgZXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgbWVkaWFFbGVtZW50RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxGcmFtZVNldEVsZW1lbnQucHJvdG90eXBlLCB3aW5kb3dFdmVudE5hbWVzLmNvbmNhdChmcmFtZVNldEV2ZW50TmFtZXMpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEJvZHlFbGVtZW50LnByb3RvdHlwZSwgd2luZG93RXZlbnROYW1lcy5jb25jYXQoZnJhbWVTZXRFdmVudE5hbWVzKSwgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxGcmFtZUVsZW1lbnQucHJvdG90eXBlLCBmcmFtZUV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MSUZyYW1lRWxlbWVudC5wcm90b3R5cGUsIGZyYW1lRXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHZhciBIVE1MTWFycXVlZUVsZW1lbnRfMSA9IGludGVybmFsV2luZG93WydIVE1MTWFycXVlZUVsZW1lbnQnXTtcbiAgICAgICAgaWYgKEhUTUxNYXJxdWVlRWxlbWVudF8xKSB7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MTWFycXVlZUVsZW1lbnRfMS5wcm90b3R5cGUsIG1hcnF1ZWVFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgV29ya2VyXzEgPSBpbnRlcm5hbFdpbmRvd1snV29ya2VyJ107XG4gICAgICAgIGlmIChXb3JrZXJfMSkge1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoV29ya2VyXzEucHJvdG90eXBlLCB3b3JrZXJFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsIFhNTEh0dHBSZXF1ZXN0RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCAmJiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSwgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBJREJJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJSZXF1ZXN0LnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCT3BlbkRCUmVxdWVzdC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJDdXJzb3IucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoV2ViU29ja2V0LnByb3RvdHlwZSwgd2Vic29ja2V0RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICAgIGFwaS5wYXRjaE1ldGhvZCA9IHBhdGNoTWV0aG9kO1xuICAgIGFwaS5iaW5kQXJndW1lbnRzID0gYmluZEFyZ3VtZW50cztcbiAgICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgICAvLyBJbiBlYXJsaWVyIHZlcnNpb24gb2Ygem9uZS5qcyAoPDAuOS4wKSwgd2UgdXNlIGVudiBuYW1lIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCB0b1xuICAgIC8vIGRlZmluZSB3aGljaCBldmVudHMgd2lsbCBub3QgYmUgcGF0Y2hlZCBieSBgWm9uZS5qc2AuXG4gICAgLy8gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlIGNoYW5nZSB0aGUgZW52IG5hbWUgdG8gYF9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFNgIHRvIGtlZXBcbiAgICAvLyB0aGUgbmFtZSBjb25zaXN0ZW50IHdpdGggYW5ndWxhciByZXBvLlxuICAgIC8vIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZSBzdXBwb3J0ZWQgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIFNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdCTEFDS19MSVNURURfRVZFTlRTJyk7XG4gICAgdmFyIFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gICAgaWYgKGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10pIHtcbiAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU107XG4gICAgfVxuICAgIGlmIChnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdKSB7XG4gICAgICAgIFpvbmVbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gWm9uZVtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10gPVxuICAgICAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXTtcbiAgICB9XG4gICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUgPSBwYXRjaEV2ZW50UHJvdG90eXBlO1xuICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0ID0gcGF0Y2hFdmVudFRhcmdldDtcbiAgICBhcGkuaXNJRU9yRWRnZSA9IGlzSUVPckVkZ2U7XG4gICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0RGVmaW5lUHJvcGVydHk7XG4gICAgYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBhcGkuT2JqZWN0Q3JlYXRlID0gT2JqZWN0Q3JlYXRlO1xuICAgIGFwaS5BcnJheVNsaWNlID0gQXJyYXlTbGljZTtcbiAgICBhcGkucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG4gICAgYXBpLndyYXBXaXRoQ3VycmVudFpvbmUgPSB3cmFwV2l0aEN1cnJlbnRab25lO1xuICAgIGFwaS5maWx0ZXJQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcztcbiAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkID0gYXR0YWNoT3JpZ2luVG9QYXRjaGVkO1xuICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgIGFwaS5nZXRHbG9iYWxPYmplY3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgZ2xvYmFsU291cmNlczogZ2xvYmFsU291cmNlcyxcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXM6IHpvbmVTeW1ib2xFdmVudE5hbWVzJDEsXG4gICAgICAgIGV2ZW50TmFtZXM6IGV2ZW50TmFtZXMsXG4gICAgICAgIGlzQnJvd3NlcjogaXNCcm93c2VyLFxuICAgICAgICBpc01peDogaXNNaXgsXG4gICAgICAgIGlzTm9kZTogaXNOb2RlLFxuICAgICAgICBUUlVFX1NUUjogVFJVRV9TVFIsXG4gICAgICAgIEZBTFNFX1NUUjogRkFMU0VfU1RSLFxuICAgICAgICBaT05FX1NZTUJPTF9QUkVGSVg6IFpPTkVfU1lNQk9MX1BSRUZJWCxcbiAgICAgICAgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjogQUREX0VWRU5UX0xJU1RFTkVSX1NUUixcbiAgICAgICAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjogUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUlxuICAgIH0pOyB9O1xufSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBldmVudE5hbWVzID0gX2EuZXZlbnROYW1lcywgZ2xvYmFsU291cmNlcyA9IF9hLmdsb2JhbFNvdXJjZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Euem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2EuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9hLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2EuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgIHZhciBXVEZfSVNTVUVfNTU1ID0gJ0FuY2hvcixBcmVhLEF1ZGlvLEJSLEJhc2UsQmFzZUZvbnQsQm9keSxCdXR0b24sQ2FudmFzLENvbnRlbnQsRExpc3QsRGlyZWN0b3J5LERpdixFbWJlZCxGaWVsZFNldCxGb250LEZvcm0sRnJhbWUsRnJhbWVTZXQsSFIsSGVhZCxIZWFkaW5nLEh0bWwsSUZyYW1lLEltYWdlLElucHV0LEtleWdlbixMSSxMYWJlbCxMZWdlbmQsTGluayxNYXAsTWFycXVlZSxNZWRpYSxNZW51LE1ldGEsTWV0ZXIsTW9kLE9MaXN0LE9iamVjdCxPcHRHcm91cCxPcHRpb24sT3V0cHV0LFBhcmFncmFwaCxQcmUsUHJvZ3Jlc3MsUXVvdGUsU2NyaXB0LFNlbGVjdCxTb3VyY2UsU3BhbixTdHlsZSxUYWJsZUNhcHRpb24sVGFibGVDZWxsLFRhYmxlQ29sLFRhYmxlLFRhYmxlUm93LFRhYmxlU2VjdGlvbixUZXh0QXJlYSxUaXRsZSxUcmFjayxVTGlzdCxVbmtub3duLFZpZGVvJztcbiAgICB2YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgsV2ViU29ja2V0J1xuICAgICAgICAuc3BsaXQoJywnKTtcbiAgICB2YXIgRVZFTlRfVEFSR0VUID0gJ0V2ZW50VGFyZ2V0JztcbiAgICB2YXIgYXBpcyA9IFtdO1xuICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgIHZhciBXVEZfSVNTVUVfNTU1X0FSUkFZID0gV1RGX0lTU1VFXzU1NS5zcGxpdCgnLCcpO1xuICAgIGlmIChpc1d0Zikge1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1X0FSUkFZLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gJ0hUTUwnICsgdiArICdFbGVtZW50JzsgfSkuY29uY2F0KE5PX0VWRU5UX1RBUkdFVCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKF9nbG9iYWxbRVZFTlRfVEFSR0VUXSkge1xuICAgICAgICAvLyBFdmVudFRhcmdldCBpcyBhbHJlYWR5IHBhdGNoZWQgaW4gYnJvd3Nlci50c1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgfVxuICAgIHZhciBpc0Rpc2FibGVJRUNoZWNrID0gX2dsb2JhbFsnX19ab25lX2Rpc2FibGVfSUVfY2hlY2snXSB8fCBmYWxzZTtcbiAgICB2YXIgaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayddIHx8IGZhbHNlO1xuICAgIHZhciBpZU9yRWRnZSA9IGFwaS5pc0lFT3JFZGdlKCk7XG4gICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLmFkZEV2ZW50TGlzdGVuZXI6JztcbiAgICB2YXIgRlVOQ1RJT05fV1JBUFBFUiA9ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICAgIHZhciBCUk9XU0VSX1RPT0xTID0gJ2Z1bmN0aW9uIF9fQlJPV1NFUlRPT0xTX0NPTlNPTEVfU0FGRUZVTkMoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgIHZhciBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgfVxuICAgIC8vICBwcmVkZWZpbmUgYWxsIHRhc2suc291cmNlIHN0cmluZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgV1RGX0lTU1VFXzU1NS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gV1RGX0lTU1VFXzU1NV9BUlJBWVtpXTtcbiAgICAgICAgdmFyIHRhcmdldHMgPSBnbG9iYWxTb3VyY2VzW3RhcmdldF0gPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBldmVudE5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tqXTtcbiAgICAgICAgICAgIHRhcmdldHNbZXZlbnROYW1lXSA9IHRhcmdldCArIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgKyBldmVudE5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNoZWNrSUVBbmRDcm9zc0NvbnRleHQgPSBmdW5jdGlvbiAobmF0aXZlRGVsZWdhdGUsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgaWYgKCFpc0Rpc2FibGVJRUNoZWNrICYmIGllT3JFZGdlKSB7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFN0cmluZyA9IGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBhcGlUeXBlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgIGFwaVR5cGVzLnB1c2godHlwZSAmJiB0eXBlLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIC8vIHZoIGlzIHZhbGlkYXRlSGFuZGxlciB0byBjaGVjayBldmVudCBoYW5kbGVyXG4gICAgLy8gaXMgdmFsaWQgb3Igbm90KGZvciBzZWN1cml0eSBjaGVjaylcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGlUeXBlcywgeyB2aDogY2hlY2tJRUFuZENyb3NzQ29udGV4dCB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmZ1bmN0aW9uIGFwcGx5KGFwaSwgX2dsb2JhbCkge1xuICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSBfYS5BRERfRVZFTlRfTElTVEVORVJfU1RSLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSID0gX2EuUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtXUy5wcm90b3R5cGVdKTtcbiAgICB9XG4gICAgX2dsb2JhbC5XZWJTb2NrZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoeCwgeSkgOiBuZXcgV1MoeCk7XG4gICAgICAgIHZhciBwcm94eVNvY2tldDtcbiAgICAgICAgdmFyIHByb3h5U29ja2V0UHJvdG87XG4gICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBhcGkuT2JqZWN0Q3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICAvLyBzb2NrZXQgaGF2ZSBvd24gcHJvcGVydHkgZGVzY3JpcHRvciAnb25vcGVuJywgJ29ubWVzc2FnZScsICdvbmNsb3NlJywgJ29uZXJyb3InXG4gICAgICAgICAgICAvLyBidXQgcHJveHlTb2NrZXQgbm90LCBzbyB3ZSB3aWxsIGtlZXAgc29ja2V0IGFzIHByb3RvdHlwZSBhbmQgcGFzcyBpdCB0b1xuICAgICAgICAgICAgLy8gcGF0Y2hPblByb3BlcnRpZXMgbWV0aG9kXG4gICAgICAgICAgICBwcm94eVNvY2tldFByb3RvID0gc29ja2V0O1xuICAgICAgICAgICAgW0FERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXBpLkFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgfHwgcHJvcE5hbWUgPT09IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXRbcHJvcGVydHlTeW1ib2xdID0gcHJveHlTb2NrZXRbcHJvcGVydHlTeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgY2FuIHBhdGNoIHRoZSByZWFsIHNvY2tldFxuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ2Nsb3NlJywgJ2Vycm9yJywgJ21lc3NhZ2UnLCAnb3BlbiddLCBwcm94eVNvY2tldFByb3RvKTtcbiAgICAgICAgcmV0dXJuIHByb3h5U29ja2V0O1xuICAgIH07XG4gICAgdmFyIGdsb2JhbFdlYlNvY2tldCA9IF9nbG9iYWxbJ1dlYlNvY2tldCddO1xuICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgZ2xvYmFsV2ViU29ja2V0W3Byb3BdID0gV1NbcHJvcF07XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7Z2xvYmFsVGhpc31cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNOb2RlID0gX2EuaXNOb2RlLCBpc01peCA9IF9hLmlzTWl4O1xuICAgIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKCFjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGkpKSB7XG4gICAgICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcbiAgICAgICAgcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoYXBpKTtcbiAgICAgICAgYXBpLnBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgICAgICAgYXBwbHkoYXBpLCBfZ2xvYmFsKTtcbiAgICAgICAgfVxuICAgICAgICBab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldID0gdHJ1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYS5pc0Jyb3dzZXIsIGlzTWl4ID0gX2EuaXNNaXg7XG4gICAgaWYgKChpc0Jyb3dzZXIgfHwgaXNNaXgpICYmXG4gICAgICAgICFhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKSAmJlxuICAgICAgICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gV2ViS2l0IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQzNjRcbiAgICAgICAgLy8gSURMIGludGVyZmFjZSBhdHRyaWJ1dGVzIGFyZSBub3QgY29uZmlndXJhYmxlXG4gICAgICAgIHZhciBkZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcbiAgICAgICAgaWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgT05fUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgIHZhciB4aHJEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFKTtcbiAgICAvLyBhZGQgZW51bWVyYWJsZSBhbmQgY29uZmlndXJhYmxlIGhlcmUgYmVjYXVzZSBpbiBvcGVyYVxuICAgIC8vIGJ5IGRlZmF1bHQgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWRcbiAgICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAvLyBub24tY29uZmlndXJhYmxlXG4gICAgLy8gYW5kIGlmIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vbnJlYWR5c3RhdGVjaGFuZ2UgaXMgdW5kZWZpbmVkLFxuICAgIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gICAgaWYgKHhockRlc2MpIHtcbiAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkZXNjXG4gICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB4aHJEZXNjIHx8IHt9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMSA9IGFwaS5zeW1ib2woJ2Zha2UnKTtcbiAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZGV0ZWN0RnVuYyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGRldGVjdEZ1bmM7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXFbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdID09PSBkZXRlY3RGdW5jO1xuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4vLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpIHtcbiAgICB2YXIgZXZlbnROYW1lcyA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCkuZXZlbnROYW1lcztcbiAgICB2YXIgdW5ib3VuZEtleSA9IGFwaS5zeW1ib2woJ3VuYm91bmQnKTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGVsdCA9IGV2ZW50LnRhcmdldCwgYm91bmQsIHNvdXJjZTtcbiAgICAgICAgICAgIGlmIChlbHQpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBlbHQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIG9ucHJvcGVydHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSAndW5rbm93bi4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChlbHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWx0W29ucHJvcGVydHldICYmICFlbHRbb25wcm9wZXJ0eV1bdW5ib3VuZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYm91bmQgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShlbHRbb25wcm9wZXJ0eV0sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kW3VuYm91bmRLZXldID0gZWx0W29ucHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICBlbHRbb25wcm9wZXJ0eV0gPSBib3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWx0ID0gZWx0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiByZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYS5pc0Jyb3dzZXIsIGlzTWl4ID0gX2EuaXNNaXg7XG4gICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgISgncmVnaXN0ZXJFbGVtZW50JyBpbiBfZ2xvYmFsLmRvY3VtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYWxsYmFja3MgPSBbJ2NyZWF0ZWRDYWxsYmFjaycsICdhdHRhY2hlZENhbGxiYWNrJywgJ2RldGFjaGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgZG9jdW1lbnQsICdEb2N1bWVudCcsICdyZWdpc3RlckVsZW1lbnQnLCBjYWxsYmFja3MpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cbihmdW5jdGlvbiAoX2dsb2JhbCkge1xuICAgIF9nbG9iYWxbJ19fem9uZV9zeW1ib2xfX2xlZ2FjeVBhdGNoJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBab25lID0gX2dsb2JhbFsnWm9uZSddO1xuICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgncmVnaXN0ZXJFbGVtZW50JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICByZWdpc3RlckVsZW1lbnRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXRMZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xudmFyIHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sKCd6b25lVGFzaycpO1xuZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICB2YXIgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgdmFyIHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlLTkzNCwgdGFzayB3aWxsIGJlIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaXQgaXMgYSBwZXJpb2RpYyB0YXNrIHN1Y2ggYXNcbiAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgIGlmICghKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gbm9uLW5vZGVqcyBlbnYsIHdlIHJlbW92ZSB0aW1lcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2RhdGEuaGFuZGxlSWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEuaGFuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGFzayByZWZlcmVuY2UgZnJvbSB0aW1lciBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEuYXJnc1swXSA9IHRpbWVyO1xuICAgICAgICBkYXRhLmhhbmRsZUlkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgZGF0YS5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgIHJldHVybiBjbGVhck5hdGl2ZSh0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgIH1cbiAgICBzZXROYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBpc1BlcmlvZGljOiBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogKG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnKSA/IGFyZ3NbMV0gfHwgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc2V0TmFtZSwgYXJnc1swXSwgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm9kZS5qcyBtdXN0IGFkZGl0aW9uYWxseSBzdXBwb3J0IHRoZSByZWYgYW5kIHVucmVmIGZ1bmN0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9uIG5vZGVqcyBlbnYsIHdlIHNhdmUgaGFuZGxlSWQ6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInIHx8IGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdmFyIHRhc2s7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIC8vIG5vbiBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9kZWpzIGVudi5cbiAgICAgICAgICAgICAgICB0YXNrID0gaWQgJiYgaWRbdGFza1N5bWJvbF07XG4gICAgICAgICAgICAgICAgLy8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGNhbmNlbCBhbHJlYWR5IGNhbmNlbGVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiBwYXRjaEN1c3RvbUVsZW1lbnRzKF9nbG9iYWwsIGFwaSkge1xuICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9hLmlzQnJvd3NlciwgaXNNaXggPSBfYS5pc01peDtcbiAgICBpZiAoKCFpc0Jyb3dzZXIgJiYgIWlzTWl4KSB8fCAhKCdjdXN0b21FbGVtZW50cycgaW4gX2dsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2tzID0gWydjb25uZWN0ZWRDYWxsYmFjaycsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycsICdhZG9wdGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgZXZlbnROYW1lcyA9IF9hLmV2ZW50TmFtZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Euem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2EuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9hLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2EuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gZXZlbnROYW1lICsgVFJVRV9TVFI7XG4gICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgIH1cbiAgICB2YXIgRVZFTlRfVEFSR0VUID0gX2dsb2JhbFsnRXZlbnRUYXJnZXQnXTtcbiAgICBpZiAoIUVWRU5UX1RBUkdFVCB8fCAhRVZFTlRfVEFSR0VULnByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcGF0Y2hFdmVudCQxKGdsb2JhbCwgYXBpKSB7XG4gICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdsZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gICAgaWYgKGxlZ2FjeVBhdGNoKSB7XG4gICAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBzZXQgPSAnc2V0JztcbiAgICB2YXIgY2xlYXIgPSAnY2xlYXInO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAncmVxdWVzdCcsICdjYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnYmxvY2tpbmcnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgdmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZV8xID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsIG5hbWVfMSwgZnVuY3Rpb24gKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocywgYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBnbG9iYWwsIGFyZ3MsIG5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICBwYXRjaEV2ZW50JDEoZ2xvYmFsLCBhcGkpO1xuICAgIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGdsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgfVxuICAgIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgcGF0Y2hDbGFzcygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdvbl9wcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGFwaSwgZ2xvYmFsKTtcbiAgICBwcm9wZXJ0eVBhdGNoKCk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdjdXN0b21FbGVtZW50cycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHBhdGNoQ3VzdG9tRWxlbWVudHMoZ2xvYmFsLCBhcGkpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnWEhSJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgdmFyIFhIUl9UQVNLID0gem9uZVN5bWJvbCgneGhyVGFzaycpO1xuICAgIHZhciBYSFJfU1lOQyA9IHpvbmVTeW1ib2woJ3hoclN5bmMnKTtcbiAgICB2YXIgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgICB2YXIgWEhSX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2woJ3hoclNjaGVkdWxlZCcpO1xuICAgIHZhciBYSFJfVVJMID0gem9uZVN5bWJvbCgneGhyVVJMJyk7XG4gICAgdmFyIFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xID0gd2luZG93WydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xKSB7XG4gICAgICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICAgIHZhciBTQ0hFRFVMRUQgPSAnc2NoZWR1bGVkJztcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuICAgICAgICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQucmVhZHlTdGF0ZSA9PT0gdGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhhdCBpcyB0aGUgY2FzZSwgdGhlIHRhc2sgc2hvdWxkIGludm9rZSBhZnRlciBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubG9hZCBsaXN0ZW5lcnMgZmluaXNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFsnX196b25lX3N5bWJvbF9fbG9hZGZhbHNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzICYmIGxvYWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaUludm9rZV8xID0gdGFzay5pbnZva2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbG9hZCB0aGUgdGFza3MgYWdhaW4sIGJlY2F1c2UgaW4gb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBsaXN0ZW5lciwgdGhleSBtYXkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFsnX196b25lX3N5bWJvbF9fbG9hZGZhbHNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaUludm9rZV8xLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIG9jY3VycyB3aGVuIHhoci5zZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHZhciBzdG9yZWRUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VuZE5hdGl2ZS5hcHBseSh0YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdvcGVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH07IH0pO1xuICAgICAgICB2YXIgWE1MSFRUUFJFUVVFU1RfU09VUkNFID0gJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnO1xuICAgICAgICB2YXIgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgICAgICB2YXIgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgICAgdmFyIHNlbmROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ3NlbmQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgaWYgKFpvbmUuY3VycmVudFtmZXRjaFRhc2tTY2hlZHVsaW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgZmV0Y2ggaXMgc2NoZWR1bGluZywgc28gd2UgYXJlIHVzaW5nIHhociB0byBwb2x5ZmlsbCBmZXRjaFxuICAgICAgICAgICAgICAgIC8vIGFuZCBiZWNhdXNlIHdlIGFscmVhZHkgc2NoZWR1bGUgbWFjcm9UYXNrIGZvciBmZXRjaCwgd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gbm90IHNjaGVkdWxlIGEgbWFjcm9UYXNrIGZvciB4aHIgYWdhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBYSFIgaXMgc3luYyB0aGVyZSBpcyBubyB0YXNrIHRvIHNjaGVkdWxlLCBqdXN0IGV4ZWN1dGUgdGhlIGNvZGUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgdGFyZ2V0OiBzZWxmLCB1cmw6IHNlbGZbWEhSX1VSTF0sIGlzUGVyaW9kaWM6IGZhbHNlLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoWE1MSFRUUFJFUVVFU1RfU09VUkNFLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8geGhyIHJlcXVlc3QgdGhyb3cgZXJyb3Igd2hlbiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpbnZva2UgdGFzayBpbnN0ZWFkIG9mIGxlYXZpbmcgYSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVuZGluZyBtYWNyb1Rhc2tcbiAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgICAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGFib3J0IGlzIGNhbGxlZCBmcm9tIGZldGNoIHBvbHlmaWxsLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIGFib3J0IG9mIFhIUi5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgfTsgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnZ2VvbG9jYXRpb24nLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgLy8vIEdFT19MT0NBVElPTlxuICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgcGF0Y2hQcm90b3R5cGUoZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbiAgICB9XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdQcm9taXNlUmVqZWN0aW9uRXZlbnQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgLy8gaGFuZGxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblxuICAgIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFza3MgPSBmaW5kRXZlbnRUYXNrcyhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIHZhciBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwgeyBwcm9taXNlOiBlLnByb21pc2UsIHJlYXNvbjogZS5yZWplY3Rpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J10pIHtcbiAgICAgICAgWm9uZVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicpO1xuICAgICAgICBab25lW3pvbmVTeW1ib2woJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID1cbiAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uaGFuZGxlZCcpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9