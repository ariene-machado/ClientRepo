import { Pipe, PipeTransform } from '@angular/core';
import { ClientService } from './client.service';


@Pipe({
  name: 'filterClient',
  pure: false
})
export class FilterClientPipe implements PipeTransform {

  transform(clients: ClientService, filterString: string): any{
    if (!clients || !filterString ){
      return clients;
    }




  }
}
