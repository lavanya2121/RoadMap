import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mycontact',
  templateUrl: 'mycontact.html'
})
export class MyContactPage {

  //always define the json outside the constructor
  mycontact = {
    email:"lavanya@gmail.com",
    name:"Lavanya",
    phone:"9945334438"
  }
  
  constructor(public navCtrl: NavController) {
    console.log(this.mycontact.email+''+ this.mycontact.name+''+this.mycontact.phone);
  }
  
  //  mycontact={
  //   email:"lavanya11289@gmail.com",
  //    name:"Lavanya"
  //    }

}
