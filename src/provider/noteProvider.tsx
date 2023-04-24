import { createContext, useContext, ReactNode, useState } from "react";
import { NoteInterface } from "../data/dataTypes";
import { notes } from "../data/notes";

interface NoteContextProps {
  currentNoteId: number;
  notesList: NoteInterface[];
  setCurrentNoteId: (value: number) => void;
  deleteNote: (id: number) => void;
  setSearchNotes: (value: string) => void;
}

interface NoteProviderProps {
  children: ReactNode;
}

const NoteContext = createContext<NoteContextProps | null>(null);

export function useNote() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }: NoteProviderProps) {
  const [currentNoteId, setCurrentNoteId] = useState<number>(0);
  const [notesList, setNotesList] = useState<NoteInterface[]>(notes);

  // const changeNote = (body, title) => {
  //  const changedNote = notesList.filter((item) => item.id === currentNoteId);

  // };
  const deleteNote = (id: number) => {
    const filteredNotes = notesList.filter((item) => item.id !== id);
    setNotesList(filteredNotes);
    if (currentNoteId === id) {
      setCurrentNoteId(0);
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
    currentNoteId,
    setCurrentNoteId,
    deleteNote,
    notesList,
    setSearchNotes,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
