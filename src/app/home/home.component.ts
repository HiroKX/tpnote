import {Component, OnInit} from '@angular/core';
import {Music} from "../../model/Music";
import {ActivatedRoute} from "@angular/router";
import {APIService} from "../service/api.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MusicListComponent} from ".././music-list/./music-list.component";
import {MusicCardComponent} from "../music-card/music-card.component";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MusicListComponent,
    MusicCardComponent,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data? : Music;

  constructor( private api : APIService) {
  }

  ngOnInit(){
    this.random()
  }

  random() {
    this.api.fetchRandom().subscribe(music => {
      this.data = music;
    });
  }
}
