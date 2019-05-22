import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl:'register.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
        .error{
            background-color: #fff0f0
        }
  `]
})
export class RegisterComponent {
    form;

    constructor(private fb:FormBuilder){
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName:['', Validators.required],
            email:['', [Validators.required, emailValid()]],
            password:['', Validators.required],
            confirmPassword:['', Validators.required]
        }, {validators: matchingFields('password','confirmPassword')});
    }

    onSubmit(){
        console.log(this.form.errors);
    }

    isValid(control){
       return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

function matchingFields(field1, field2){
    return form => {
        if(form.controls[field1].value !== form.controls[field2].value){
            return { matchingFields:true }
        }
    }
}

function emailValid(){
    // http://emailregex.com
    return control => {

        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(control.value) ? null : { invalidEmail: true}
    }
}
