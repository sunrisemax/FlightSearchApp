import { Component,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {FlightSearch} from '../../providers/flight-search';
import {HomePage} from '../home/home';
import {Origin} from '../../pipes/origin';
import {Destination} from '../../pipes/destination';



@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Results {
  items:any;
  FromCity:string;
  ToCity:string;
  modifiedData:any;
  price: any;
  duration:any;
  sortBy:any;
  sortVal:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private flightSearch:FlightSearch) {


      this.getDefaults();

      this.flightSearch.getRoutes()
        .subscribe(
          data => this.items = data,
          error => console.log(error)
        );


  }


getDefaults(){

    this.FromCity=localStorage.getItem('FromCity');
    this.ToCity=localStorage.getItem('ToCity');
    this.sortVal = localStorage.getItem('sortVal');
  }



  ionViewWillEnter() {
this.sortVal = localStorage.getItem('sortVal');

  }

}
