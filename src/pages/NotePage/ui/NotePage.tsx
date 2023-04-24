import { Box } from "@mui/material";
import { Sidebar } from "../../../components/Sidebar";
import { Workspace } from "../../../components/Workspace";

const drawerWidth = 300;

export const NotePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Workspace />
      </Box>
    </Box>
  );
};
