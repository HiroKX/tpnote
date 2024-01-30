import {Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Music } from '../../model/Music';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {APIService} from "../service/api.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MusicCardComponent} from "../music-card/music-card.component";
import {AjoutMusicComponent} from "../ajout-music/ajout-music.component";
import {mergeMap} from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, MatChipsModule, MatIcon, NgOptimizedImage, MusicCardComponent],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit {
  data : Music[] = [];


  private addDialog: MatDialogRef<AjoutMusicComponent> | any;
  music: Music[] = [];
  dialogStatus = 'inactive';

  constructor(private route : ActivatedRoute, private api : APIService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe((event) => {
      if (event['id'] == '0' || event['id'] == null) {
        this.api.fetch().subscribe(musics => {
          this.data = musics || [];
        });
      } else {
        this.api.findById(event['id']).subscribe((music) => {
          this.data.push(music);
        })
      }
    })
  }


  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutMusicComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  add(musicCreated: Music) {
    this.api
      .create(musicCreated)
      .pipe(mergeMap(() => this.api.fetch()))
      .subscribe(music => {
        this.music = music;
        this.hideDialog();
      });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }

}
