import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCard} from "@angular/material/card";
import {MatOption, MatSelect} from "@angular/material/select";
import { MatButton} from "@angular/material/button";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButton, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSliderModule, MatCard, MatSelect, MatOption],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  selection = "yes";
  formatLabel(value: number): string {
    return value.toString();
  }
}
