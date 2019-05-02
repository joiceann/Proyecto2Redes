import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickTimePage } from './pick-time';

@NgModule({
  declarations: [
    PickTimePage,
  ],
  imports: [
    IonicPageModule.forChild(PickTimePage),
  ],
})
export class PickTimePageModule {}
