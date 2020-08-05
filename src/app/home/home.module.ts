import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarioModalPageModule } from '../pages/calendario-modal/calendario-modal.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule,
    CalendarioModalPageModule
  ],
  declarations: [HomePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class HomePageModule {}
