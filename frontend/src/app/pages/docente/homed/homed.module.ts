import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedPageRoutingModule } from './homed-routing.module';

import { HomedPage } from './homed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomedPage]
})
export class HomedPageModule {}
