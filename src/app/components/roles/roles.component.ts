import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roleList : IRole[] = [] ;
  http = inject(HttpClient); //this is the new way

  // constructor(private http: HttpClient){
  // this is the old way of making the api call now we use inject keyword
  // }
  
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res : any) => {
      this.roleList = res.data ;
    })
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // firstName : string = "Elvin" ;
  // age : number = 19 ;
  // isActive : boolean = true ;
  // currentDate : Date = new Date() ;
  // inputType : string = "button" ;
  // selectedState : string = '' ;

  // welcomeMessage(){
  //   alert("Welcome to angular tut");
  // }

  // showMessage(message : string){
  //   alert(message) ;
  // }
}
