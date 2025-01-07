import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export default function Layout() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <div className="grid grid-cols-5 mt-[40px] border-4">
            <div className=' col-span-1'>
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      <ListItemButton>

        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>

        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>

        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore className=' -rotate-90' />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>

            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
            </div>


        </div>
    )
}