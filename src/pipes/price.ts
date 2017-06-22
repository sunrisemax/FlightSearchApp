import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'price',
})
export class Price implements PipeTransform {

  transform(items: any[], price: any): any[] {
    if (items==null) {
    return null;
  }

  items.sort((a: any, b: any) => {
       if (a[price] < b[price] ){
       //a is the Object and args is the orderBy condition (data.likes.count in this case)
           return -1;
       }else if( a[price] > b[price] ){
           return 1;
       }else{
           return 0;
       }
   });
   return items;
 }


}
