import { Component } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public data?:Record<string, any>;
  public labels:Record<string, string> = {};
  public keys:Array<string> = [];
  public loading: boolean = false;
  public searchPlaceholder:string = "Search";
  constructor(private apiService: ApiService) {
    
  }
  async loadClient(search:string) {
    const encoded = encodeURIComponent(search);
    console.log(encoded);
    //const clientData = await this.apiService.getClient(1).subscribe(this.clientLoaded);
    //const clientData = await this.graphQlService.getGraphql().subscribe(this.clientLoaded);
    this.loading = true;
    const clientData = await this.apiService.proxy(`https://api.acuris.com/entities?entityName=${encoded}`).subscribe(this.clientLoaded);
  }
  clientLoaded = (data: Record<string, any>) => {
    if (data as ApiResponse) {
    this.loading = false;

    this.data = data as ApiResponse;
    this.keys = Object.keys(data);
    this.labels = { };

    }

  }
  searchChange = (evt:Event) => {
    this.loadClient((evt.currentTarget as HTMLInputElement).value)
  }
}
