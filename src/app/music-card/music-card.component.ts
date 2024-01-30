import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgIf} from "@angular/common";
import {Music} from "../../model/Music";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {DateHandlingService} from "../service/date-handling.service";

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
    NgForOf
  ],
  providers: [DateHandlingService],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.scss'
})
export class MusicCardComponent {
  @Input()
  music? : Music;

  displayDate(date : string | undefined) : string  | undefined {
    if (date === undefined) {
      return "N/A";
    }
    return DateHandlingService.to_ddMMyyyy(date);
  }



}
