import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgIf} from "@angular/common";
import {Music} from "../../model/Music";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {DateHandlingService} from "../service/date-handling.service";
import { APIService } from '../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-music-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDivider,
    NgIf,
    MatCardHeader,
    MatCard,
    MatChipSet,
    MatChip,
    NgForOf,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DateHandlingService],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.scss'
})
export class MusicCardComponent {
  @Input()
  music? : Music;

  constructor(private api : APIService, snackbar : MatSnackBar, cdr : ChangeDetectorRef) {}

  displayDate(date : string | undefined) : string  | undefined {
    if (date === undefined) {
      return "N/A";
    }
    return DateHandlingService.to_ddMMyyyy(date);
  }

  deleteDate(id : string | undefined) {
    if (id != undefined) {
    this.api.delete(id).subscribe((musics) => {
      this.music = musics;
      this.api.updatedMusicList(id);
      }
    );
    }
  }


}
