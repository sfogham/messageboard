import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    
    BASE_URL= 'http://localhost:9634/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private httpClient: HttpClient, private router: Router){ }
    
    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }
    
     get isAuthenticated(){
         return !!localStorage.getItem(this.TOKEN_KEY);
     }

    register(user) {
            delete user.confirmPassword;
          
            this.httpClient.post(this.BASE_URL+'/register', user).subscribe(res=>{
         
            this.authenticate(res);
        });
    }

    logout(){

        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }  

    login(loginData){
      this.httpClient.post(this.BASE_URL+'/login', loginData).subscribe(res=>{
        this.authenticate(res);
      });
    }

    authenticate(res){
        
        var stringValue = JSON.stringify(res);
            var jsonObject = JSON.parse(stringValue);

            // We check if the user is authenticated, i.e has a token
            if(!jsonObject['token']){
                return;
            }

            localStorage.setItem(this.TOKEN_KEY, jsonObject['token']);
            localStorage.setItem(this.NAME_KEY, jsonObject['firstName']);

            this.router.navigate(['/']) // Redirect to default page
    }
}