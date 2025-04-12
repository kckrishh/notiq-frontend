export interface NoteResponse {
  content: string;
  createdAt: string;
  email: string;
  id: number;
  isArchived: boolean;
  isFavorite: boolean;
  isTrashed: boolean;
  title: string;
  updatedAt: string | null;
}
