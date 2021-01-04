import { AboutService } from './../services/about.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
  ])
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
