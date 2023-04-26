import { createContext, useContext, useState, ReactElement } from "react";

interface NoteContextProps {
  currentNoteId: number;
  setCurrentNoteId: (value: number) => void;
}

interface NoteProviderProps {
  children: ReactElement;
}

const NoteContext = createContext<NoteContextProps | null>(null);

export function useNote() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }: NoteProviderProps) {
  const [currentNoteId, setCurrentNoteId] = useState<number>(0);

  const value = {
    currentNoteId,
    setCurrentNoteId,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
