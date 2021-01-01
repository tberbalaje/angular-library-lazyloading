import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';

declare var SystemJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  existingRoutes$: Observable<Route[]>;

  title = 'angular-library-lazyloading';
  constructor(private routerService: RouterService) {
    this.existingRoutes$ = this.routerService.existingRoutes;
  }
}
