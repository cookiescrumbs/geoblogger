import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishingPhotoComponent } from './fishing-photo/fishing-photo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { LivePhotoComponent } from './live-photo/live-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    FishingPhotoComponent,
    ListPostsComponent,
    LivePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
