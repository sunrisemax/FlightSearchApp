import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'destination',
})
export class Destination implements PipeTransform {

  transform(items: any[], ToCity: string): any[] {

      if (items==null) {
      return null;
    }


      return items.filter(function(item){
        return item.to.toLowerCase().includes(ToCity.toLowerCase());
      })



    }
}
