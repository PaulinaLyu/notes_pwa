import { useNote } from "../../../provider/noteProvider";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const ListItems = () => {
  const notesContext = useNote();
  return (
    <List>
      {notesContext?.notesList.map((note) => (
        <ListItem key={note.id} disablePadding>
          <ListItemButton
            onClick={() =>
              notesContext && notesContext.setCurrentNoteId(note.id)
            }
          >
            <ListItemText primary={note.title} secondary={<>{note.body}</>} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
