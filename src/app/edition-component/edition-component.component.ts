import {Component, OnInit} from '@angular/core';
import {Music} from "../../model/Music";
import {ActivatedRoute, Router} from "@angular/router";
import {APIService} from "../service/api.service";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-edition-component',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './edition-component.component.html',
  styleUrl: './edition-component.component.scss'
})
export class EditionComponent implements OnInit {

  music: Music;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly api: APIService
  ) {
    this.music = {date: "", styles: []};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( music: any) => (this.music = music.music));
  }

  submit(employe: any) {
    this.api.update(employe).subscribe(() => {
      this.router.navigate(['/home']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/home']).then(r => null);
  }

}
