import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public username;
  public password;
  public correctPassword = "1234";
  public correctUsername = "noOne";

  constructor() { }

  ngOnInit(): void {
  }

  loginMethod(username,password){
  
    if(password==this.correctPassword && username==this.correctUsername){
      alert("Welcome");
    }
    else{
      alert("Wrong username or password");
    }

  }

}
