import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AuthStatus } from "../AuthStatus";
import { useNote } from "../../provider/noteProvider";
import SearchBox from "../SearchBox/SearchBox";

interface SidebarProps {
  drawerWidth: number;
}

export const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const notesContext = useNote();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const currentNote = useNote();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <AuthStatus />
      <SearchBox />
      <List>
        {notesContext?.notesList.map((note) => (
          <ListItem key={note.id} disablePadding>
            <ListItemButton
              onClick={() =>
                currentNote && currentNote.setCurrentNoteId(note.id)
              }
            >
              <ListItemText
                primary={note.title}
                secondary={<React.Fragment>{note.body}</React.Fragment>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};
