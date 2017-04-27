import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../app-routes';
import { NavItem } from '../navbar-item/models/nav-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public items: NavItem[];
  
  constructor() { }

  public ngOnInit() {
    this.items = [];
    this.buildRoutes();
    
  }
  
  private buildRoutes(): void {
    for (let i: number = 0; i < ROUTES.length; i++) {
      if (ROUTES[i].component) {
        this.items.push(new NavItem(ROUTES[i].path, ROUTES[i].data['title']));
      }
    }
  }

}
