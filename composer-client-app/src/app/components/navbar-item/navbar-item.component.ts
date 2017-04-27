import { Component, Input, NgZone, OnInit } from '@angular/core';
import { NavItem } from './models/nav-item';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss', './styles/sweep-right.scss'],
})
export class NavbarItemComponent implements OnInit {
  
  @Input() public item: NavItem;
  public hover: boolean;
  
  constructor(private zone: NgZone) {
  }
  
  public ngOnInit(): void {
    this.hover = false;
  }
  
  public onMouseOver(): void {
    // this.hover = true;
  }
  
  public onMouseLeave(): void {
    // this.hover = false;
  }
  
}
