

import { AboutPage } from './../pages/about/about';
import { WelcomePage } from './../pages/welcome/welcome';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import {AboutUsPage} from './../pages/aboutus/aboutus';
import { HomePage} from './../pages/home/home';
import {MyContactPage} from './../pages/mycontact/mycontact';
import { SignoutPage} from './../pages/signout/signout';
//import { Nav } from '../../node_modules/ionic-angular/umd/navigation/nav-interfaces';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = WelcomePage;
  //rootPage:any = RegisterPage ;
  //rootPage:any=ForgotPasswordPage
 // rootPage:any=TabsPage;

  @ViewChild(Nav) nav:Nav;//for side menu

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  goToMyContact(){
    this.nav.setRoot(MyContactPage);

  }
  goToHome(Page){
    this.nav.setRoot(HomePage);
  }

  goToAboutUs(){
    this.nav.setRoot(AboutUsPage);
  }

  goToSignOut(){
    this.nav.setRoot(WelcomePage);
  }
}
