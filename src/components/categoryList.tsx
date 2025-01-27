import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function CategoreList() {
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <Link to="/phones">
            <ListItemText primary="Phones" />
          </Link>
        </ListItemButton>

        <ListItemButton>
          <Link to="/audio">
            <ListItemText primary="Audio" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/TV">
            <ListItemText primary="TV" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/Gaming">
            <ListItemText primary="Gaming" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/appliances">
            <ListItemText primary="Appliances" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/laptops">
            <ListItemText primary="Laptops" />
          </Link>
        </ListItemButton>

      </List>
    </>
  );
}
