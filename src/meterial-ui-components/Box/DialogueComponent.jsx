import React from 'react'
// import Dialog from '@mui/material/Dialog'
// import DialogTitle from '@mui/material/DialogTitle';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { ListItemAvatar } from '@mui/material';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


export default function DialogueComponent({title, emails}) {
    // const [isDialogOpen,setIsDialogOpen] = useState(true)
    const isDialogOpen = true;
    const handleListItemClick = () =>{}
  return (
    <Dialog open={isDialogOpen}>
        <DialogTitle> {title} </DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                <ListItem disableGutters>
                    <ListItemButton onClick={() => {}} key={email}>
                        <ListItemText primary={email} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Dialog>
  )
}
