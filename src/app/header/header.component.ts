import { Component, Input, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule} from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimeService } from '../service/time.service';
import {AjoutMusicComponent} from "../ajout-music/ajout-music.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, NavbarComponent, AjoutMusicComponent],
  providers: [TimeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() drawer! : NavbarComponent;

  constructor( public time : TimeService) {
  }

  ngOnInit(): void {
  }

}
