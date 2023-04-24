import { Stack, TextField } from "@mui/material";
import { NoteInterface } from "../../../data/dataTypes";
import { useDebounce } from "../../../hooks/useDebounce";
import { useEffect, useState } from "react";
import { useNotesList } from "../../../provider/notesListProvider";

interface WorkspaceProps {
  data: NoteInterface;
}

export const WorkspaceForm = ({ data }: WorkspaceProps) => {
  const notesListContext = useNotesList();
  const [titleVal, setTitleVal] = useState("");
  const [bodyVal, setBodyVal] = useState("");

  useDebounce(
    () => {
      notesListContext?.changeNote("title", titleVal, data.id);
    },
    200,
    [titleVal]
  );

  useDebounce(
    () => {
      notesListContext?.changeNote("body", bodyVal, data.id);
    },
    200,
    [bodyVal]
  );

  useEffect(() => {
    setTitleVal(data.title);
    setBodyVal(data.body);
  }, []);

  return (
    <Stack sx={{ width: "100%", mt: 3 }} spacing={2}>
      <TextField
        margin="dense"
        value={titleVal}
        onChange={(e) => setTitleVal(e.target.value)}
        name="title"
        id="outlined-basic"
        placeholder="Заголовок"
        label="Заголовок"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        value={bodyVal}
        onChange={(e) => setBodyVal(e.target.value)}
        label="Заметка"
        name="body"
        multiline
        rows={25}
      />
    </Stack>
  );
};
