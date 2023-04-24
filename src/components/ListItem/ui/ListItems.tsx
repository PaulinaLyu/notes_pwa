import { useNote } from "../../../provider/noteProvider";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNotesList } from "../../../provider/notesListProvider";

export const ListItems = () => {
  const notesContext = useNotesList();
  const currentNote = useNote();

  return (
    <List>
      {notesContext?.notesList.map((note) => (
        <ListItem key={note.id} disablePadding>
          <ListItemButton
            onClick={() => currentNote && currentNote.setCurrentNoteId(note.id)}
          >
            <ListItemText primary={note.title} secondary={<>{note.body}</>} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
