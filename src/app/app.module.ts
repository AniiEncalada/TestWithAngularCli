import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ComercioModule } from './comercio/comercio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ComercioModule,
    HttpClientModule,
    SharedModule,
    UtilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
