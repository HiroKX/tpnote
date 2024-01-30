import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Music} from "../../model/Music";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-ajout-music',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './ajout-music.component.html',
  styleUrl: './ajout-music.component.scss'
})
export class AjoutMusicComponent {
  constructor(public dialogRef: MatDialogRef<AjoutMusicComponent>) {}

  closeDialog(result: Music & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(music: Music) {
    this.closeDialog({...music, mode: 'create'});
  }

  onUpdate(music: Music) {
    this.closeDialog({...music, mode: 'update'});
  }

}
