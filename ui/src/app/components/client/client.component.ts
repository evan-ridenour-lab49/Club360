import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { LabelTransform } from 'src/app/lib/label-transform';
import { ApiService } from 'src/app/services/api.service';
import { GraphQlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  public data?:Record<string, any>;
  public labels:Record<string, string> = {};
  public keys:Array<string> = [];
  constructor(private apiService: ApiService, private graphQlService: GraphQlService){
    this.loadClient();
  }
  async loadClient() {
    //const clientData = await this.apiService.getClient(1).subscribe(this.clientLoaded);
    //const clientData = await this.graphQlService.getGraphql().subscribe(this.clientLoaded);
    const clientData = await this.apiService.proxy('https://api.acuris.com/entities?entityName=Fidelity%20Investments').subscribe(this.clientLoaded);
  }
  clientLoaded = (data: Record<string, any>) => {
    this.data = data['results'];
    this.keys = Object.keys(data);
    this.labels = { };
    this.keys.forEach((a) => {
      this.labels[a] = LabelTransform.transformLabel(a);
    });
    for(let d in data) {
      LabelTransform.transformLabel(d);
    }
  }
}
