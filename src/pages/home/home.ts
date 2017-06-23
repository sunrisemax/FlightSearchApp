import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Results} from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  FromCity:string;
  ToCity:string;


  constructor(public navCtrl: NavController) {

  }
loadResult(){
    localStorage.setItem('FromCity',this.FromCity);
    localStorage.setItem('ToCity',this.ToCity);

    if(this.FromCity == undefined){
      alert("Please Select Origin City");
    }
    else if(this.ToCity == undefined){
      alert("Please Select destinaton City");
    } else if(this.FromCity == this.ToCity){
      alert("Origin and Destination cannot be same")
    } else{

    this.navCtrl.push(Results);}


  }
}
