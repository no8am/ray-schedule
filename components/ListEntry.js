import React, { useState } from 'react'

import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

import { styled } from '@mui/material/styles';

import ListEntrySub from './ListEntrySub';

const ListEntry = (props) => {

  const courseAliasesIcons = {
    "A": {
      type: "Lecture",
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    "L": {
      type: "Lab",
      icon: <ScienceOutlinedIcon />,
    },
    "P": {
      type: "Problem Session",
      icon: <StickyNote2OutlinedIcon />,
    },
    "C": {
      type: "Common Hour",
      icon: <GroupsOutlinedIcon />,
    },
    "R": {
      type: "Recitation",
      icon: <QuestionAnswerOutlinedIcon />,
    },
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const { course, sectionType } = props;
  const theseSections = Object.values(course.sections[sectionType]);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return(
    <div className="flex flex-col">
      <ListItemButton onClick={handleExpandClick}>
        <ListItemIcon>
          {courseAliasesIcons[sectionType] ? courseAliasesIcons[sectionType].icon : null}
        </ListItemIcon>
        <ListItemText 
          id={`switch-list-label-${sectionType}`} 
          primary={courseAliasesIcons[sectionType] ? courseAliasesIcons[sectionType].type : null} 
          secondary={`${theseSections.length} Section${(theseSections.length != 1) ? "s" : ""}`}
        />
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </ListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            {theseSections.map((section) => <ListEntrySub key={section?.Section} section={section} />)}
          </List>
        </CardContent>
      </Collapse>
    </div>
  )
}

export default ListEntry;