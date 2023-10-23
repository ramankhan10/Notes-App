import { Component, inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NOTES } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;

      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }

      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };

      NOTES.unshift(newNote);
      this.addNoteForm.reset();

      this.router.navigateByUrl('/');
    }
  }
}
