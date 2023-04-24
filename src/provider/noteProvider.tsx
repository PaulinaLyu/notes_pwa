import { createContext, useContext, ReactNode, useState } from "react";

interface NoteContextProps {
  note: number;
  setNote: (value: number) => void;
}

interface NoteProviderProps {
  children: ReactNode;
}

const NoteContext = createContext<NoteContextProps | null>(null);

export function useNote() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }: NoteProviderProps) {
  const [note, setNote] = useState<number>(0);

  const value = {
    note,
    setNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
