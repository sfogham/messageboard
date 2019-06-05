import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector:'login',
    template: `
    <mat-card>
        <mat-card-content>
            <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
        </mat-card-content>
        <mat-card-content>
            <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
        </mat-card-content>
        <button mat-raised-button color="primary" (click)="login()">Login</button>

    </mat-card>
    `
})
export class LoginComponent{

    constructor(private auth: AuthService){}

    loginData = {
        email:'',
        password:''
    }

    login(){
        console.log(this.loginData);
    }
}