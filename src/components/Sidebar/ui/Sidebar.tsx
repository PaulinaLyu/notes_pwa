import { Drawer } from "@mui/material";
import { AuthStatus } from "@/components/AuthStatus";
import { SearchBox } from "@/components/SearchBox";
import { ListItems } from "@/components/ListItem";

interface SidebarProps {
  drawerWidth: number;
  drawerWidthXs: number;
}

export const Sidebar = ({ drawerWidth, drawerWidthXs }: SidebarProps) => {
  const drawer = (
    <div>
      <AuthStatus />
      <SearchBox />
      <ListItems />
    </div>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: drawerWidthXs, sm: drawerWidth },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};
