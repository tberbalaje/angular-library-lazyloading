(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.core = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        return CoreService;
    }());
    CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
    CoreService.ɵprov = i0.ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var CoreComponent = /** @class */ (function () {
        function CoreComponent() {
        }
        CoreComponent.prototype.ngOnInit = function () {
        };
        return CoreComponent;
    }());
    CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); };
    CoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CoreComponent, selectors: [["lib-core"]], decls: 2, vars: 0, template: function CoreComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " core works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-core',
                        template: "\n    <p>\n      core works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        return CoreModule;
    }());
    CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
    CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [CoreComponent], exports: [CoreComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CoreComponent],
                        imports: [],
                        exports: [CoreComponent]
                    }]
            }], null, null);
    })();

    var FormInputComponent = /** @class */ (function () {
        function FormInputComponent() {
        }
        FormInputComponent.prototype.ngOnInit = function () {
        };
        return FormInputComponent;
    }());
    FormInputComponent.ɵfac = function FormInputComponent_Factory(t) { return new (t || FormInputComponent)(); };
    FormInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormInputComponent, selectors: [["lib-form-input"]], decls: 2, vars: 0, template: function FormInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "form-input works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-form-input',
                        templateUrl: './form-input.component.html',
                        styleUrls: ['./form-input.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var FormSelectComponent = /** @class */ (function () {
        function FormSelectComponent() {
        }
        FormSelectComponent.prototype.ngOnInit = function () {
        };
        return FormSelectComponent;
    }());
    FormSelectComponent.ɵfac = function FormSelectComponent_Factory(t) { return new (t || FormSelectComponent)(); };
    FormSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormSelectComponent, selectors: [["lib-form-select"]], decls: 2, vars: 0, template: function FormSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "form-select works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-form-select',
                        templateUrl: './form-select.component.html',
                        styleUrls: ['./form-select.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                common.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [FormInputComponent, FormSelectComponent], imports: [common.CommonModule], exports: [FormInputComponent, FormSelectComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [FormInputComponent, FormSelectComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [FormInputComponent, FormSelectComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;
    exports.CoreService = CoreService;
    exports.FormInputComponent = FormInputComponent;
    exports.FormSelectComponent = FormSelectComponent;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map
