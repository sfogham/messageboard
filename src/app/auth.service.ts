import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{
    
    BASE_URL= 'http://localhost:9634/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private httpClient:HttpClient){ }
    
    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }
    
     get isAuthenticated(){
         return !!localStorage.getItem(this.TOKEN_KEY);
     }

    register(user) {
            delete user.confirmPassword;
          
            this.httpClient.post(this.BASE_URL+'/register', user).subscribe(res=>{
         
            var stringValue = JSON.stringify(res);
            var jsonObject = JSON.parse(stringValue);

            localStorage.setItem(this.TOKEN_KEY, jsonObject['token']);
            localStorage.setItem(this.NAME_KEY, jsonObject['firstName']);

        });
    }
}