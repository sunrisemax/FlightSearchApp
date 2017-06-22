import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Duration pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'duration',
})
export class Duration implements PipeTransform {

  transform(items: any[], duration: any): any[] {
    if (items==null) {
    return null;
  }

  items.sort((a: any, b: any) => {
       if (a[duration] < b[duration] ){
       //a is the Object and args is the orderBy condition (data.likes.count in this case)
           return -1;
       }else if( a[duration] > b[duration] ){
           return 1;
       }else{
           return 0;
       }
   });
   return items;
 }

}
