import { Component } from '@angular/core';
import {MailService} from "./mail.service";
@Component({
  selector: 'app-root',
  template:`
    <h3>{{title}}</h3> 
    <div>
      <app-simple-form></app-simple-form>      
    </div>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first app hahaha111';
  myMessage = "ttttttt";
  onUpdate(id,text){
    alert(text);
    this.mailService.update(id,text);
  }
  constructor(private mailService: MailService) {}
}
