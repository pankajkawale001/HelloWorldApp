import { Component, inject, OnInit } from '@angular/core';
import { HelloworldService } from '../services/helloworldservice.service';
import { CommonModule } from '@angular/common';
import { User } from '../interface/helloWorld';

@Component({
  selector: 'app-helloworld',
  imports: [CommonModule],
  templateUrl: './helloworld.component.html',
  styleUrl: './helloworld.component.css'
})
export class HelloworldComponent implements OnInit{

  helloworldService = inject(HelloworldService);
  users: any;
  clientList: User[] = [];

  ngOnInit(): void {
   this.fetchDataFromServer();
 }

  fetchDataFromServer() {
     this.helloworldService.getUsersDetails().subscribe((data) => this.users=data) 
     this.clientList=this.users;
     }
}
