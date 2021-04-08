import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { DRUMSComponent } from './drums/drums.component';
import { GUITARComponent } from './guitar/guitar.component';
import { HOMEComponent } from './home/home.component';
import { INSTRUMENTSComponent } from './instruments/instruments.component';
import { LogoComponent } from './logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PIANOComponent } from './piano/piano.component';
import { PROGRAMSComponent } from './programs/programs.component';
import { TABLAComponent } from './tabla/tabla.component';
import { VIOLINComponent } from './violin/violin.component';

const routes: Routes = [
  {path:"logo",component:LogoComponent},
  {path:"home",component:HOMEComponent},
  {path:"programs",component:PROGRAMSComponent},
  {path:"contactus",component:CONTACTUSComponent},
  {path:"aboutus",component:ABOUTUSComponent},
  {path:"instruments",component:INSTRUMENTSComponent, children:[
    {path:"piano",component:PIANOComponent},
    {path:"guitar",component:GUITARComponent},
    {path:"violin",component:VIOLINComponent},
    {path:"drums",component:DRUMSComponent},
    {path:"tabla",component:TABLAComponent},
    
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

