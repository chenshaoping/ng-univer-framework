import { NgModule } from '@angular/core';
import { ShardRegistCompModule } from './shared/sharedRegistComp.module';
import { IndexPage } from './page/index/index.page';
import { MainRoutingModule } from './router/main-routing.module';
import { UniverFramework } from './framework';

@NgModule({
    declarations: [
        UniverFramework,
        IndexPage,
    ],
    imports: [
        ShardRegistCompModule,
        MainRoutingModule
    ],
    exports:[
        UniverFramework
    ],
    providers: [

    ]
  })
  export class FrameworkModule { }