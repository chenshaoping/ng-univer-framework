import { NgModule } from '@angular/core';
import { MainShardService } from './main.service';
import { MainCtrl } from './main.ctrl';
import { HomeComponent } from '../component/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      
    ],
    exports:[
        HomeComponent
    ],
    providers: [
        MainShardService,
        MainCtrl
    ]
  })
  export class ShardRegistCompModule { }