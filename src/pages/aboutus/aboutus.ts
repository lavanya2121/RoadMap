import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutUsPage {

 about={
   developed: "MOBILEAN",
   address: "50,ChandraLayout,Vijaynagar,Bangalore-560040",
   phone: "7022-229366",
   email1: "sales@mobilean.in",
   email2: "info@mobilean.in"
 }

  constructor(public navCtrl: NavController) {
    console.log(this.about.developed+''+ this.about.address+''+this.about.phone+''+this.about.email1+''+this.about.email2);
  }

}
