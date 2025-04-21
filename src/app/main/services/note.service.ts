import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  // baseUrl = 'http://localhost:8080/notes';
  baseUrl = 'https://notiq-backend.onrender.com/notes';

  createNote(note: any) {
    return this.http.post(this.baseUrl, note, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  editNote(id: any, editedNote: any) {
    return this.http.put(`${this.baseUrl}/${id}`, editedNote, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  getAllNotes() {
    return this.http.get(this.baseUrl, {
      withCredentials: true,
    });
  }

  getDashboardNotes() {
    return this.http.get(`${this.baseUrl}/dashboard`, {
      withCredentials: true,
    });
  }

  getFavoriteNotes() {
    return this.http.get(`${this.baseUrl}/favorite`, {
      withCredentials: true,
    });
  }

  getArchivedNotes() {
    return this.http.get(`${this.baseUrl}/archived`, {
      withCredentials: true,
    });
  }

  getTrashNotes() {
    return this.http.get(`${this.baseUrl}/trashed`, {
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

  handleTrash(noteId: number) {
    return this.http.put(`${this.baseUrl}/${noteId}/trash`, null, {
      responseType: 'text',
      withCredentials: true,
    });
  }
}
