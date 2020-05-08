import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ClientOverviewComponent } from './client-overview/client-overview.component'; // CLI imports router
import { ClientContactComponent } from './client-contact/client-contact.component';
import { SearchComponent } from './search/search.component';
import { FilterClientPipe } from './filter-client.pipe';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'client', component: ClientContainerComponent,
  children: [
    { path: ':id', component: ClientDetailsComponent},
    { path: 'overview', component: ClientOverviewComponent },
    { path: 'contact', component: ClientContactComponent },
  ]},
  { path: '', redirectTo: '/client', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientContainerComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    ClientOverviewComponent,
    SearchComponent,
    FilterClientPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
