import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { PROGRAMSComponent } from './programs/programs.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { INSTRUMENTSComponent } from './instruments/instruments.component';
import { PIANOComponent } from './piano/piano.component';
import { GUITARComponent } from './guitar/guitar.component';
import { VIOLINComponent } from './violin/violin.component';
import { DRUMSComponent } from './drums/drums.component';
import { TABLAComponent } from './tabla/tabla.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoComponent } from './logo/logo.component';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    PROGRAMSComponent,
    CONTACTUSComponent,
    ABOUTUSComponent,
    INSTRUMENTSComponent,
    PIANOComponent,
    GUITARComponent,
    VIOLINComponent,
    DRUMSComponent,
    TABLAComponent,
    PagenotfoundComponent,
    LogoComponent,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
