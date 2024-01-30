import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { DATA } from '../../model/Data';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-other',
  standalone: true,
  imports: [MatTableModule, MatSortModule, RouterModule, MatIcon],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent implements AfterViewInit {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  displayedColumns : string[] = ['id', 'name', 'rating', 'details', 'action'];
  dataSource = new MatTableDataSource(DATA);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortChange(sortState : Sort) {
    if(sortState.direction)
      console.log("Sorting ascending");
    else
      console.log("Sorting descending");
  }

}
