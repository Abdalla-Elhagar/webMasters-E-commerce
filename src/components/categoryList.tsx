import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function CategoreList() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick1}>
          <ListItemText primary="Woman’s Fashion" />
          {!open1 ? <ExpandLess /> : <ExpandMore className=" -rotate-90" />}
        </ListItemButton>

        <Collapse in={!open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Woman’s Fashion" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="Men’s Fashion" />
          {!open2 ? <ExpandLess /> : <ExpandMore className=" -rotate-90" />}
        </ListItemButton>

        <Collapse in={!open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Men’s Fashion" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemText primary="Electronics" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Home & Lifestyle" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Medicine" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Sports & Outdoor" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Baby’s & Toys" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Groceries & Pets" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Health & Beauty" />
        </ListItemButton>
      </List>
    </>
  );
}
