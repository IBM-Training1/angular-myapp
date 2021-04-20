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

  userArray: any;
  user:User = new User();


  constructor( private userService:UserService) { }
  deleteUser(id:number, index:number){
    const observable = this.userService.delete(id);
    observable.subscribe(response=> this.userArray.splice(index,1))
  }
  save(){
    const promise = this.userService.save(this.user);
    promise.subscribe(response=> {
      console.log(response);
      this.user.id=response;
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
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {
      console.log(response);
      this.userArray = response;
     });
  }
}
