import { TextField } from "@mui/material";
import { useNote } from "../../provider/noteProvider";
import { useDebounce } from "../../hooks/useDebounce";
import { useState } from "react";

const SearchBox = () => {
  const [searchVal, setSearchVal] = useState("");
  const notesContext = useNote();

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

export default SearchBox;
