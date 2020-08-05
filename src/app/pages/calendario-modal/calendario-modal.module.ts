import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioModalPageRoutingModule } from './calendario-modal-routing.module';

import { CalendarioModalPage } from './calendario-modal.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioModalPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarioModalPage]
})
export class CalendarioModalPageModule {}
