import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public listClient: ClientService;
  @Input() index: number;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.listClient = this.clientService;
  }

  onSelect(client){
    this.router.navigate(['/client', client.id]);
  }

}
