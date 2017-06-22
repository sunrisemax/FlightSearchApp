import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class FlightSearch {
  baseUrl:any;
  http:any;


  constructor(http:Http) {
    this.http = http;
    this.baseUrl = 'https://api.myjson.com/bins/aovqz';

  }

  getRoutes(){
    return this.http.get(this.baseUrl)
      .map(res => res.json());


    }


}
