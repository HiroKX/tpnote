import {Component, AfterViewInit, ViewChild, OnInit, ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import {APIService} from "../service/api.service";
import {keys, Music} from "../../model/Music";
import {MatMiniFabButton} from "@angular/material/button";
import {DateHandlingService} from "../service/date-handling.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-other',
  standalone: true,
  imports: [MatTableModule, MatSortModule, RouterModule, MatIcon, MatMiniFabButton],
  providers: [DateHandlingService],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent implements AfterViewInit, OnInit {
  dataSource : MatTableDataSource<Music> = new MatTableDataSource<Music>();
  constructor(private api : APIService, private snackbar : MatSnackBar, private cdr: ChangeDetectorRef) {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  displayedColumns : string[] = [];

  ngOnInit() {
  this.api.fetch().subscribe((musics) => {
    this.dataSource = new MatTableDataSource<Music>(musics);
    });
  this.displayedColumns = keys;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  displayDate(date : string) : string {
    return DateHandlingService.to_ddMMyyyy(date);
  }
  deleteDate(id : string) {
    this.snackbar.open("La musique va être supprimée");
    this.api.delete(id).subscribe((musics) => {
      this.dataSource = musics;
      this.api.updatedMusicList(id);
      this.cdr.markForCheck();
      }
    );
  }

}
