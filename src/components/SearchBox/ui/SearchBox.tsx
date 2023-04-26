import { TextField } from "@mui/material";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";
import { useNotesList } from "@/provider/notesListProvider";

export const SearchBox = () => {
  const [searchVal, setSearchVal] = useState("");
  const notesContext = useNotesList();

  useDebounce(
    () => {
      notesContext && notesContext.setSearchNotes(searchVal);
    },
    400,
    [searchVal]
  );

  return (
    <TextField
      fullWidth
      value={searchVal}
      onChange={(e) => setSearchVal(e.target.value)}
      name="search"
      id="outlined-basic"
      placeholder="Поиск по заметкам"
      label="Поиск по заметкам"
      variant="outlined"
    />
  );
};
