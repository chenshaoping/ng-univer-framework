import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { IndexPage } from '../page/index/index.page';

const routes : Routes = [
    {path:'',redirectTo:'/index',pathMatch:'full'},
    {path:'index',component:IndexPage},
    {path:'formdetail',loadChildren:'../page/form-detail/form-detail.page.module#FormDetailPageModule'},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class MainRoutingModule{}