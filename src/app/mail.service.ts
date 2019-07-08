import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message: string  ='该消息来自MailService';
  message2:string [] = ['天之骄子，加入修仙之路群',
    'Shadows，加入修仙之路群',
    'Keriy，加入修仙之路群'];
  message3:Array<{id:number,text:string}>=[
    {id:0,text:'天之骄子，加入修仙之路群2'},
    {id:1,text:'Shadows，加入修仙之路群2'}
  ]
  constructor() { }
  update(id,text){
    this.message3 = this.message3.map(msg =>{
      return msg.id ===id ?{id,text} :msg;
    });
  }
}
