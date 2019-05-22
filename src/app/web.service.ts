import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Message } from "./Message";


@Injectable()
export class WebService{

   data: Object;
   BASE_URL= 'http://localhost:9634/api';

   private messages: Array<Message> = [];
   messageSubject = new Subject();

   constructor(private http:HttpClient){
      this.getMessages('');
   }

   getMessages(user){
         user = (user) ? '/' + user : '';
         this.http.get(this.BASE_URL +'/messages'+ user).subscribe(
          (data:Message) => {
              this.messages = <any>data;
              this.messageSubject.next(this.messages);
            }, error=>{
               console.log("Unable to get messages");
            });
   }

  async postMessages(message){
   
   try {

      console.log("Post");
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();

      this.messages.push(<Message>response)

   } catch (error) {
      console.log(error.message);
   }
   }
}