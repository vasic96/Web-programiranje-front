import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng4-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisnikService } from './korisnik.service';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [KorisnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
