import { Box } from "@mui/material";
import { Sidebar } from "@/components/Sidebar";
import { Workspace } from "@/components/Workspace";

const drawerWidth = 300;

const drawerWidthXs = 150;

export const NotePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { xs: drawerWidthXs, sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawerWidth={drawerWidth} drawerWidthXs={drawerWidthXs} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: `calc(100% - ${drawerWidthXs}px)`, sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Workspace />
      </Box>
    </Box>
  );
};
