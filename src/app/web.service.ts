import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from "./Message";

@Injectable()
export class WebService{

   data: Object;
   BASE_URL= 'http://localhost:9634/api';

   messages: Array<Message> = [];

   constructor(private http:HttpClient){
      this.getMessages();
   }

  async getMessages(){
      
    await this.http.get(this.BASE_URL +'/messages')
    .subscribe((data:Message) => this.messages = <any>data);
   }

  async postMessages(message){
   
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();

      this.messages.push(<Message>response)
   }
}