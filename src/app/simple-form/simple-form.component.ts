import { Component, OnInit,Inject,Input,Output, EventEmitter } from '@angular/core';
import {MailService} from "../mail.service";
@Component({
  selector: 'app-simple-form',
  template: `
    <div>      
       <input #rootInput type="text" [(ngModel)]="message">
      <input #myInput type="text" [ngClass]="{mousedown:isMousedown}"
      (mousedown)="isMousedown=true" (mouseup)="isMousedown=false"
      (mouseleave)="isMousedown=false"
      >
      <button (click)="update.emit({text:message})">点击</button>
      <p [ngStyle]="{color:'red',border:'1px green solid'}">
        {{message}}
      </p>
      <p>
        API_URL: {{apiUrl}}
      </p>
      <div>
        <ul>
          <li *ngFor="let mess of mailService.message2;index as i;">
            {{i}} - {{mess}}
          </li>
          
        </ul>
      </div>

      <div>
        <ul>
          <li *ngFor="let mess of mailService.message3;">
            {{mess.id}} - {{mess.text}}
          </li>
          
        </ul>
      </div>
    </div>
  `,
  styles: [`
    :host{margin:10px;}
    .mousedown { border: 2px solid red; }
    input:focus{font-weight:bold;}
    `
  ]
})
export class SimpleFormComponent implements OnInit {
  constructor(@Inject(MailService) private mailService,@Inject('apiUrl') private apiUrl) {}
  //constructor(private mailService: MailService) { }
  onMYClick(event,value){
     console.log(event);
     console.log(value);
     alert(value);
  }

  ngOnInit() {}

  @Input() message : string;
  @Output() update = new EventEmitter<{text: string}>();
  isMousedown:boolean;
}
