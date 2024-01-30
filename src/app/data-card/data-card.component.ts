import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { DATA, Data } from '../../model/Data';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, MatChipsModule, MatIcon ],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss'
})
export class DataCardComponent implements OnInit {

  data : Data;

  constructor(private route : ActivatedRoute) {
    this.data = DATA[this.random(0, DATA.length)]
  }

  ngOnInit() {
    this.route.params.subscribe(event => {
      if (event['id'] != '0')
      this.data = DATA[event['id']-1];
    })
  }

  random(min : number, max : number) : number {
    const localMin = Math.ceil(min);
    const localMax = Math.ceil(max);
    return Math.floor(Math.random() * (localMax - localMin)) + min;
  }

}
