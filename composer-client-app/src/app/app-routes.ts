import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandTitleComponent } from './components/land-title/land-title.component';
import { SalesAgreementComponent } from './components/sales-agreement/sales-agreement.component';

export const ROUTES: Routes = [
  // { path: 'transaction', component: TransactionComponent },
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'land-title', component: LandTitleComponent, data: {title: 'Land Title'}},
  {path: 'sales-agreement', component: SalesAgreementComponent, data: {title: 'Sales Agreement'}}

];
