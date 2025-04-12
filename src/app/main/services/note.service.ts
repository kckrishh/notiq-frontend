import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteRequest } from './NoteRequest';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/notes';

  createNote(note: NoteRequest) {
    return this.http.post(this.baseUrl, note, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  getDashboardNotes() {
    return this.http.get(`${this.baseUrl}/dashboard`, {
      withCredentials: true,
    });
  }

  handleFavorite(noteId: number) {
    return this.http.put(`${this.baseUrl}/${noteId}/favorite`, null, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  handleArchive(noteId: number) {
    return this.http.put(`${this.baseUrl}/${noteId}/archive`, null, {
      responseType: 'text',
      withCredentials: true,
    });
  }
}
