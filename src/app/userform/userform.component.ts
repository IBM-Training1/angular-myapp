import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string = "Userform";
  userArray:User[]=[];
  user:User = new User();


  constructor() { }
  save(){
    this.userArray.push(Object.assign({} ,this.user));
    console.log(this.user.firstname);
    console.log("working...");
    //this.user.firstname="john";
  }

  ngOnInit(): void {

  }

}
