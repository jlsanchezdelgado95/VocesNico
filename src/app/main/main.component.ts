
import { Component, OnInit } from '@angular/core';
import { VocesService } from '../services/voces.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(public voces: VocesService) {
    console.log(this.voces.leerVoces());
  }

  ngOnInit(): void {

  }
  importSonido() {


  }
}