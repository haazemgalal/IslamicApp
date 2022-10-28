import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to our Islamic school';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit()  {
    this.GetUsers();
    }
    
    private GetUsers(){
    this.http.get('https://localhost:5000/api/users').subscribe(Response=>{this.users=Response;}, error=>{console.log(error);})
    }
}
