import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavbar } from "./Navbar.hooks";

export const Navbar: FC = () => {
  const { closeDrawer, openDrawer, isDrawerOpen } = useNavbar();

  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <IconButton size="large" onClick={openDrawer}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6">wind stream</Typography>
      </Toolbar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 400 }} role="presentation">
          <List>
            {["Home", "About", "Profile"].map((text, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
