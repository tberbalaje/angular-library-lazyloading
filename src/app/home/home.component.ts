import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ModuleService } from '../services/module.service';
import { ModuleData } from '../models/module.model';
import { MatDialog } from '@angular/material/dialog';

// RxJS
import 'rxjs/add/operator/do';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  installedModules$: any;
  errorMessage: string;
  errorVisible = false;

  constructor(
    private routerService: RouterService,
    private moduleService: ModuleService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // please note: modules.json will alwasy return registered as false.
    this.installedModules$ = this.moduleService.loadModules().do((res) =>
      res.forEach((x) => {
        if (x.registered) this.registerRoute(x);
      })
    );
  }

  enableModule(moduleToEnable: ModuleData) {
    // enable or disable module
    if (this.isRegistered(moduleToEnable)) {
      this.routerService.unRegisterRoute(moduleToEnable.path);
    } else {
      this.registerRoute(moduleToEnable);
    }
  }

  isRegistered(moduleData: ModuleData): boolean {
    return this.routerService.routeIsRegistered(moduleData.path);
  }

  private registerRoute(moduleToEnable: ModuleData) {
    // load up the umd file and register the route whenever succeeded.
    this.moduleService.loadModuleSystemJS(moduleToEnable).then(
      (exports) => {
        this.routerService.createAndRegisterRoute(moduleToEnable, exports);
      },
      (err) => {
        this.openDialog();
      }
    );
  }

  private showError(message: string, err) {
    this.errorMessage = message;
    this.errorVisible = true;
    console.log(err); // Log error in console
  }

  closeError() {
    this.errorVisible = false;
  }

  openDialog() {
    this.dialog.open(ErrorComponent);
  }
}
