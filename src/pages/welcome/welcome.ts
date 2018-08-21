import { ForgotPasswordPage } from './../forgotpassword/forgotpassword';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from './../register/register';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

//   $scope.open = function() {
//     $window.open('https://www.google.com/', '_system');
// }

login(){
  this.navCtrl.push(TabsPage);//import the necessary components

}

forgotPassword(){
  this.navCtrl.push(ForgotPasswordPage);//import the necessary components
}

register(){
  this.navCtrl.push(RegisterPage);//import the necessary components
}

}
