
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VocesService {

  public audios: any = [];
  APIUrl = "assets/VocesNico/";

  constructor(private http: HttpClient) {
    this.leerVoces();
  }

  leerVoces() {
    this.http.get('assets/VocesNico/Dross1.ogg', { responseType: 'text' }).subscribe(data =>
      console.log(data));
  }

  /*readFileASync(fileName: string): Observable<File> {
    const req = new HttpRequest<any>('GET', this.APIUrl);

    return this.http.request(req).pipe().toPromise
    })

}*/}