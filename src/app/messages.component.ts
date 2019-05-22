import { Component } from "@angular/core";
import { WebService } from './web.service';
import { ActivatedRoute } from "@angular/router";
import { Message } from './Message';

@Component({
    selector:'messages',
    template: ` 
    <div *ngFor="let message of webService.messages">
        
        <mat-card class='card'>
            <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer">{{message.owner}}</mat-card-title>

           <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
        
    </div>`
})
export class MessagesComponent{

    messages: Array<Message> = []; 

    constructor(private webService:WebService, private route:ActivatedRoute){}

    ngOnInit(){
        console.log(this.route.snapshot.params.name);
    }
}