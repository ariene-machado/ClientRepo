import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public nameClient;
  public profissaoClient;
  public data = {};
  public skillClient;

  clients = [
    { "id": 10, "name": "Ariene", "profissao": "atleta", "skill":"HTML" },
    { "id": 20, "name": "Bella", "profissao": "artista", "skill": "JAVA"  },
    { "id": 30, "name": "Sophia", "profissao": "engenheira", "skill": "CSS"  }
  ];

  getIndex(id){
    let index = this.clients.findIndex(x => x.id === id);
    let nameClient = this.clients[index].name;
    let profissaoClient = this.clients[index].profissao;
    let skillClient = this.clients[index].skill;
    let data =
    {
      name: nameClient,
      profissao: profissaoClient,
      skill: skillClient
    };

    return data;
  }
}
