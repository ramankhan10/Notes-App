import { Component, inject } from '@angular/core';
import { NOTES } from '../note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  deleteNote() {
    if (this.note) {
      let delNote = NOTES.indexOf(this.note, 0);
      NOTES.splice(delNote, 1);
    }
  }
}
