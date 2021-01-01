(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('test', ['exports', '@angular/core', 'core', '@angular/router'], factory) :
    (global = global || self, factory(global.test = {}, global.ng.core, global.i1, global.ng.router));
}(this, (function (exports, i0, i1, i1$1) { 'use strict';

    var TestService = /** @class */ (function () {
        function TestService() {
        }
        return TestService;
    }());
    TestService.ɵfac = function TestService_Factory(t) { return new (t || TestService)(); };
    TestService.ɵprov = i0.ɵɵdefineInjectable({ token: TestService, factory: TestService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var TestComponent = /** @class */ (function () {
        function TestComponent() {
        }
        TestComponent.prototype.ngOnInit = function () {
        };
        return TestComponent;
    }());
    TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
    TestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestComponent, selectors: [["lib-test"]], decls: 4, vars: 0, template: function TestComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " test module works! Below are loading from core/shared module.. ");
                i0.ɵɵelement(2, "lib-form-input");
                i0.ɵɵelement(3, "lib-form-select");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.FormInputComponent, i1.FormSelectComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-test',
                        template: "\n    <p>\n      test module works! Below are loading from core/shared module..\n\n      <lib-form-input></lib-form-input>\n\n      <lib-form-select></lib-form-select>\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var TestModule = /** @class */ (function () {
        function TestModule() {
        }
        return TestModule;
    }());
    TestModule.ɵmod = i0.ɵɵdefineNgModule({ type: TestModule });
    TestModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TestModule_Factory(t) { return new (t || TestModule)(); }, imports: [[
                i1$1.RouterModule.forChild([
                    {
                        path: '', pathMatch: 'full', component: TestComponent
                    }
                ]), i1.SharedModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TestModule, { declarations: [TestComponent], imports: [i1$1.RouterModule, i1.SharedModule], exports: [TestComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: TestComponent
                                }
                            ]), i1.SharedModule
                        ],
                        declarations: [TestComponent],
                        exports: [TestComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of test
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TestComponent = TestComponent;
    exports.TestModule = TestModule;
    exports.TestService = TestService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test.umd.js.map
