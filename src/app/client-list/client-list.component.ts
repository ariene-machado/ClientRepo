import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FilterClientPipe } from '../filter-client.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public listClient: ClientService;
  public filterText = '';
  public resultArray;

  @Input() index: number;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.listClient = this.clientService;

  }

  onSelect(client){
    this.router.navigate(['/client', client.id]);
  }

}
