import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string = "Userform";
  firstname="ram";

  constructor() { }
  save(){
    console.log(this.firstname);
    console.log("working...");
    this.firstname="john";
  }

  ngOnInit(): void {

  }

}
