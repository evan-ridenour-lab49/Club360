import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }


  getClient(id: number) {
    return this.httpClient.get(`/assets/api/v1/client/${id}.json`, {responseType: 'json'});
  }
  proxy(url: string) {
    return this.httpClient.request('POST', "http://localhost:3000/proxy", { body: JSON.stringify({url}), headers: { "Content-Type": "application/json"}});

  }
}
