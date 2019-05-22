import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from "./nav.component";
import { HomeComponent } from "./home.component";
import { RegisterComponent } from "./register.component";

var routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'messages',
  component: MessagesComponent
},
{
  path:'messages/:name',
  component: MessagesComponent
},
{
  path:'register',
  component: RegisterComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
