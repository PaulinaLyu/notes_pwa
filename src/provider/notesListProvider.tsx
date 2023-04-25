import { createContext, useContext, ReactNode, useState } from "react";
import { NoteInterface } from "../data/dataTypes";
import { notes } from "../data/notes";
import { useNote } from "./noteProvider";

interface NotesListContextProps {
  notesList: NoteInterface[];
  deleteNote: (id: number) => void;
  setSearchNotes: (value: string) => void;
  changeNote: (
    inputName: keyof NoteInterface,
    value: string,
    noteId: number
  ) => void;
}

interface NoteProviderProps {
  children: ReactNode;
}

const NotesListContext = createContext<NotesListContextProps | null>(null);

export function useNotesList() {
  return useContext(NotesListContext);
}

export function NotesListProvider({ children }: NoteProviderProps) {
  const currentNote = useNote();
  const [notesList, setNotesList] = useState<NoteInterface[]>(notes);

  const changeNote = (
    inputName: keyof NoteInterface,
    value: string,
    noteId: number
  ) => {
    let findNote: any = notesList.find((item) => item.id === noteId);
    if (findNote) {
      findNote[inputName] = value;
    }
    const filteredNote = notesList.filter((item) => item.id !== noteId);
    setNotesList([...filteredNote, findNote]);
  };

  const deleteNote = (id: number) => {
    const filteredNotes = notesList.filter((item) => item.id !== id);
    setNotesList(filteredNotes);

    if (currentNote?.currentNoteId === id) {
      currentNote.setCurrentNoteId(0);
    }
  };

  const setSearchNotes = (value: string) => {
    const filteredNotes = notesList.filter((item) =>
      item.title.includes(value)
    );
    setNotesList(filteredNotes);
    if (value.length === 0) {
      setNotesList(notes);
    }
  };

  const value = {
    deleteNote,
    notesList,
    setSearchNotes,
    changeNote,
  };

  return (
    <NotesListContext.Provider value={value}>
      {children}
    </NotesListContext.Provider>
  );
}
