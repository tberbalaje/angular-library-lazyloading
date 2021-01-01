import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModuleData } from './../models/module.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Compiler, Inject, ReflectiveInjector, Injector, COMPILER_OPTIONS } from '@angular/core';

import 'rxjs/add/operator/map';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';

declare const SystemJS: any;

@Injectable()
export class ModuleService {
    source = `http://${window.location.host}/`;

    constructor(private compiler: Compiler, private http: HttpClient) {
        console.log(compiler);
    }

    loadModules(): Observable<any> {
        return this.http.get("./assets/modules.json");//.map(res => res.json());
    }

    loadModule(moduleInfo: ModuleData): Observable<any> {
        let url = this.source + moduleInfo.location;
        return this.http.get(url)
            .pipe(map((response: any) => response.test()))
            .pipe(map(source => {
                const exports = {}; // this will hold module exports
                const modules = {   // this is the list of modules accessible by plugins
                    '@angular/core': AngularCore,
                    '@angular/common': AngularCommon,
                    '@angular/router': AngularRouter,
                    '@angular/platform-browser/animations': BrowserAnimations
                };

                // shim 'require' and eval
                const require: any = (module) => modules[module];
                eval(source);

                // Need to check if there is another solution for eval as this is described as 'Evil'

                this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`])
                //console.log(exports); // disabled as this object is cleared anyway
                return exports;
            }));
    }

    loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
        let url = this.source + moduleInfo.location;
         
        SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
        SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
        SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));

        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log(module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log(compiled);
                return module;
            });
        });
    }
}