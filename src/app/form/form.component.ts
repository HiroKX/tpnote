import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton, MatFabButton} from "@angular/material/button";
import {Music} from "../../model/Music";
import {MatIconModule} from '@angular/material/icon';
import {COMMA, ENTER, F} from "@angular/cdk/keycodes";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipListbox,
  MatChipRow
} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DateHandlingService} from "../service/date-handling.service";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButton, MatIconModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSliderModule, MatCard, MatSelect, MatOption, MatCardTitle, MatCardContent, MatIcon, MatChip, MatChipInput, MatFabButton, MatCardActions, MatChipListbox, MatChipGrid, MatChipRow, MatDatepickerToggle, MatDatepicker, MatDatepickerInput],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  form: FormGroup;
  @Input() musicModel: Music;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;
  //@ViewChild(MatDatepicker) picker: MatDatepicker<Date>;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private dateHandling : DateHandlingService) {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormComponent.buildForm();
    this.musicModel = {
      date: new Date().toDateString(),
      styles: []
    };
  }

  ngOnInit() {
    this.form.patchValue({
      id: this.musicModel.id,
      title: this.musicModel.title,
      description: this.musicModel.description,
      album: this.musicModel.album,
      artist: this.musicModel.artist,
      duration: this.musicModel.duration,
      date: this.musicModel.date || DateHandlingService.new(),
      styles: this.musicModel.styles || [],
      picture: this.musicModel.picture
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(music: Music) {
    music.picture = this.musicModel.picture;
    // music.date = DateHandlingService.to_ddMMyyyy(music.date, "MM/dd/yyyy");
    this.submitEvent$.emit(music);
  }


  addChipset(event: MatChipInputEvent): void {
    console.log(typeof(this.musicModel.date))

    const value = (event.value || '').trim();
    if (value) {
      this.musicModel.styles!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(style: any): void {
    const index = this.musicModel.styles!.indexOf(style);
    this.musicModel.styles!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.musicModel.picture = reader.result;
      }
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      description: new FormControl('',Validators.compose([Validators.required, Validators.minLength(2)])),
      album: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      artist: new FormControl('',Validators.compose([Validators.required, Validators.minLength(2)])),
      duration: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      date: new FormControl(''),
      styles: new FormControl(''),
    });
  }

}
