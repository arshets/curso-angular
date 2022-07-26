import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/Heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DragModule } from './drag/drag.module';




@NgModule({
  declarations: [	
    AppComponent,
    
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DragModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
