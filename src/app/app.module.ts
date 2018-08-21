import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MyContactPage } from '../pages/mycontact/mycontact';
import { AboutUsPage } from '../pages/aboutus/aboutus';
import { SignoutPage } from '../pages/signout/signout';
import { AboutPage } from '../pages/about/about';
import { ComponentsModule } from '../components/components.module';
import { Geolocation } from '@ionic-native/geolocation';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    RegisterPage,
    ForgotPasswordPage,
    MyContactPage,
    AboutUsPage,
    SignoutPage


  ],
  imports: [
    BrowserModule,
   ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    RegisterPage,
    ForgotPasswordPage,
    MyContactPage,
    AboutUsPage,
    SignoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
