import { Pipe, PipeTransform } from '@angular/core';
import { ClientService } from './client.service';

@Pipe({
  name: 'filterClient',
  pure: false
})
export class FilterClientPipe implements PipeTransform {

  transform(clients: ClientService[], filterString: string, name: any): any{

    if (!clients || !filterString ){
      return clients;
    }
    const resultArray = [];

    return clients.filter(client => client.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)

    // for (let client of clients){
    //   if (client.name.toLowerCase() === filterString.toLowerCase()){
    //     console.log("Found: =====" + JSON.stringify(client.name));
    //     resultArray.push(client.name);
    //     console.log("Array: =====" + resultArray);
    //     console.log("String: =====" + filterString);
    //   }
    // }
    // return resultArray;
  }
}
