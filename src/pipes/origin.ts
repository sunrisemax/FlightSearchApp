import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Origin pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'origin',
})
export class Origin implements PipeTransform {



  transform(items: any[], FromCity: string): any[] {
      /*if(!FromCity) return items; */
      if (items==null) {
      return null;
    }
  
      return items.filter(function(item){
        return item.from.toLowerCase().includes(FromCity.toLowerCase());
      })



    }

}
