import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve params from the route
    const serverIdString = this.route.snapshot.params['id'];
    // tslint:disable-next-line:radix
    const serverId = parseInt(serverIdString);

    // pass params to the service
    this.server = this.serversService.getServer(serverId);
    console.log('server', this.server);

    // react to changes
     this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

}
