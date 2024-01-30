import {Component, OnInit} from '@angular/core';
import {Music} from "../../model/Music";
import {ActivatedRoute} from "@angular/router";
import {APIService} from "../service/api.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MusicListComponent} from "../data-card/./music-list.component";
import {MusicCardComponent} from "../music-card/music-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MusicListComponent,
    MusicCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data? : Music;

  constructor( private api : APIService) {
  }

  ngOnInit(){
    this.api.fetchRandom().subscribe(music => {
      this.data = music;
    });
  }
}
