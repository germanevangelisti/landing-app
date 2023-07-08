import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

import "./MobileDrawer.css";

const MobileDrawer = ({
  open,
  onClose,
  anchor,
  classes,
  menuItems,
  selectedItem,
  theme,
}) => {
  const isWidthUpSm = useMediaQuery("(min-width:768px)");

  window.onresize = () => {
    if (isWidthUpSm && open) {
      onClose();
    }
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor={anchor}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Toolbar className="headSection" onClick={() => onClose()} />
      <List className="drawer-list">
        {menuItems.map((element) => {
          return (
            <li>
              <button onClick={element.onClick}>{element.name}</button>
            </li>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
