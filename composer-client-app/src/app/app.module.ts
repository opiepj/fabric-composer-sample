import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { Configuration }     from './configuration';
import { AppComponent } from './app.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app-routes';
import { LandTitleComponent } from './components/land-title/land-title.component';
import { SalesAgreementComponent } from './components/sales-agreement/sales-agreement.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DialogModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
    AppComponent,
    LandTitleComponent,
    SalesAgreementComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    NavbarItemComponent
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
