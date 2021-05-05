
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VocesService {

  private urlapi = 'gs://vocesnico.appspot.com/voces';
  public audios: any = [];

  constructor(private http: HttpClient) {
    console.log(this.recogerAudios);
  }

  public recogerAudios() {
    return this.http.get(this.urlapi);
    /*
        this.http.
        get(this.urlapi).
        subscribe(apiData => (this.audios = apiData));*/
  }
}