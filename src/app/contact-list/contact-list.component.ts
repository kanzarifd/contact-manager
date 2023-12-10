import {Contact} from '../models/Contact';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
value: any;
  constructor() {  
    this.setMarkContactStyle(); 
    this.createContact(); 
  } 
  isMarked = true; 
  isFriendContact = true; 
  isFamilyContact = false; 
  isWorkContact = true; 
 
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24 px' : '12px'  
} 
  
  } 
  ngOnInit(): void {
  }
  deleteContact(id:number):void{
  
 

    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
      break;
      }
      
      }
      if(index!=-1){
      this.listContacts.splice(index,1);
      }
  }
 
  editContact():void{
    
    if(confirm("voulez-vous ajouter le contact")){
      alert("work")
    }
  }
  listContacts: Array<Contact> = new Array<Contact>(); 
  createContact() { 
    this.listContacts.push({id:0,type:"Work",firstName:"fadi ",lastName:"kn",email:"fadi2003@gmail.com",description:"Travail",phone:"24425455"});
    this.listContacts.push({id:1,type:"Work",firstName:"chaima ",lastName:"jb",email:"chaima@gmail.com",description:"Travail",phone:"98552252"});
    this.listContacts.push({id:2,type:"Family",firstName:"aymen ",lastName:"mn",email:"aymen@gmail.com",description:"Famille",phone:"445253620"});
    this.listContacts.push({id:3,type:"Family",firstName:"adel ",lastName:"kn",email:"adel@gmail.com",description:"Famille",phone:"55220450"});
    this.listContacts.push({id:4,type:"Friend",firstName:"Mayssa ",lastName:"Sl",email:"may.com",description:"Amis",phone:"24420508"});
    this.listContacts.push({id:5,type:"Friend",firstName:"Hadil ",lastName:"Ba",email:"hadil.com",description:"Amis",phone:"22875693"});
  } 
}