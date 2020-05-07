import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  public clientId;
  public clientName;
  public clientProfissao;
  public cProfissao;
  public cName;
  public cSkill;

  client: ClientService[] = [];

  constructor(private route: ActivatedRoute, private routers: Router, private clientService: ClientService) { }

  ngOnInit(){


    this.route.params
    .subscribe(
      (params: Params) => {
      let id = +params['id'];
      this.clientId = id;
      this.clientName = this.clientService.getIndex(this.clientId);
        this.cName = this.clientName.name;
        this.cProfissao = this.clientName.profissao;
        this.cSkill = this.clientName.skill;
       }
     );
  }
}
