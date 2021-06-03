
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VocesService {

  private urlapi = 'gs://vocesnico.appspot.com/voces';
  public audios: any = [];

  constructor() {
    
  }

}