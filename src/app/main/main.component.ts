
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  audio = new Audio();
  constructor() {
  }

  ngOnInit(): void {
  }
  dross1() {
    this.audio.src = "../../../assets/VocesNico/Dross1.ogg";
    this.audio.load();
    this.audio.play();
  }
  dross2() {
    this.audio.src = "../../../assets/VocesNico/Dross2.ogg";
    this.audio.load();
    this.audio.play();
  }
  dross3() {
    this.audio.src = "../../../assets/VocesNico/Dross3.ogg";
    this.audio.load();
    this.audio.play();
  }
  kengan1() {
    this.audio.src = "../../../assets/VocesNico/Kengan1.ogg";
    this.audio.load();
    this.audio.play();
  }
  kengan2() {
    this.audio.src = "../../../assets/VocesNico/Kengan2.ogg";
    this.audio.load();
    this.audio.play();
  }
  kengan3() {
    this.audio.src = "../../../assets/VocesNico/Kengan3.ogg";
    this.audio.load();
    this.audio.play();
  }
  kengan4() {
    this.audio.src = "../../../assets/VocesNico/Kengan4.ogg";
    this.audio.load();
    this.audio.play();
  }
  kiwi() {
    this.audio.src = "../../../assets/VocesNico/Kiwi.ogg";
    this.audio.load();
    this.audio.play();
  }
  luigi() {
    this.audio.src = "../../../assets/VocesNico/Luigi.ogg";
    this.audio.load();
    this.audio.play();
  }
  malamadre() {
    this.audio.src = "../../../assets/VocesNico/Malamadre.ogg";
    this.audio.load();
    this.audio.play();
  }
  mario1() {
    this.audio.src = "../../../assets/VocesNico/Mario1.ogg";
    this.audio.load();
    this.audio.play();
  }
  mario2() {
    this.audio.src = "../../../assets/VocesNico/Mario2.ogg";
    this.audio.load();
    this.audio.play();
  }
  osi() {
    this.audio.src = "../../../assets/VocesNico/OooooSi.ogg";
    this.audio.load();
    this.audio.play();
  }
  voldemort1() {
    this.audio.src = "../../../assets/VocesNico/Voldemort1.ogg";
    this.audio.load();
    this.audio.play();
  }
  voldemort3() {
    this.audio.src = "../../../assets/VocesNico/Voldemort3.ogg";
    this.audio.load();
    this.audio.play();
  }
  voldemort4() {
    this.audio.src = "../../../assets/VocesNico/Voldemort4.ogg";
    this.audio.load();
    this.audio.play();
  }
  zombie1() {
    this.audio.src = "../../../assets/VocesNico/Zombie1.ogg";
    this.audio.load();
    this.audio.play();
  }
  zombie2() {
    this.audio.src = "../../../assets/VocesNico/Zombie2.ogg";
    this.audio.load();
    this.audio.play();
  }
  zombie3() {
    this.audio.src = "../../../assets/VocesNico/Zombie3.ogg";
    this.audio.load();
    this.audio.play();
  }
  
}