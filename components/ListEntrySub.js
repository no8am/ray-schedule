import React, { useState } from 'react'

import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ListEntrySub = (props) => {

  const { section } = props;
  const handleClick = () => {};

  return(
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
          <Typography variant="body1">
            {section.Section}
          </Typography>
      </ListItemIcon>
      <ListItemText 
          id={`switch-list-label-${section.Section}`}
          primary={"Time"}
          secondary={section.Instructors.map(instructor => instructor.Display.split(',').reverse().join(" ")).join(', ')}
      />
    </ListItemButton>
  )
}

export default ListEntrySub;