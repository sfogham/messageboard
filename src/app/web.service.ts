import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Message } from "./Message";


@Injectable()
export class WebService{

   data: Object;
   BASE_URL= 'http://localhost:9634/api';

   private messageStore: Array<Message> = [];
   
   private messageSubject = new Subject();

   messages = this.messageSubject.asObservable();

   constructor(private http:HttpClient){
      this.getMessages('');
   }

   getMessages(user){
         user = (user) ? '/' + user : '';
         this.http.get(this.BASE_URL +'/messages'+ user).subscribe(
          (data:Message) => {
              this.messageStore = <any>data;
              this.messageSubject.next(this.messageStore);
            }, error=>{
               console.log("Unable to get messages");
            });
   }

  async postMessages(message){
   
   try {

      console.log("Post");
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();

      this.messageStore.push(<Message>response);

      this.messageSubject.next(this.messageStore);

   } catch (error) {
      console.log(error.message);
   }
   }
}