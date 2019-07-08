import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector:'index-page',
    templateUrl:'./index.page.html',
    styleUrls:['./index.page.css']
})
export class IndexPage implements OnInit{
    
    constructor(private router:Router){

    }
    ngOnInit(){
        
    }
    jumpTo(){
        this.router.navigate(['formdetail']);
    }
}