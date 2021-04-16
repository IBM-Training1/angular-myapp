import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string = "Userform";

  userArray:User[]=[];
  user:User = new User();


  constructor( private userService:UserService) { }
  save(){
    const promise = this.userService.save(this.user);
    promise.subscribe(response=> {
      console.log(response);
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
    },
    error=> {
      console.log(error);
      alert(error.statusText)
    })
    //console.log(this.user.firstname);
    //console.log("working...");
    //this.user.firstname="john";
  }

  ngOnInit(): void {

  }

}
