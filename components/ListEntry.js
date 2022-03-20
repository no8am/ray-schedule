import React, { useState } from 'react'

import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { styled } from '@mui/material/styles';

import { courseAliasesIcons } from '/updateCourses/utils'
import ListEntrySub from './ListEntrySub';

const ListEntry = (props) => {

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

  const coolSections = theseSections.map((section) => <ListEntrySub 
    key={section?.Section} 
    section={section} 
    sectionType={sectionType} 
    courseId={course.objectID}
    showTitle={course.lectureSectionsHaveDifferentTitle}
  />)

  return(
    <div className="w-full">
      {theseSections.length > 1 ? (
        <div className="w-full">
          <ListItemButton 
            onClick={handleExpandClick} 
            dense={true}
          >
            <ListItemIcon>
              {courseAliasesIcons[sectionType] ? courseAliasesIcons[sectionType].icon : null}
            </ListItemIcon>
            <ListItemText 
              id={`switch-list-label-${sectionType}`} 
              primary={courseAliasesIcons[sectionType] ? courseAliasesIcons[sectionType].type : null} 
              secondary={`${theseSections.length} Section${(theseSections.length != 1) ? "s" : ""}`}
            />
            {(course.activeSections[sectionType] == "") && (
              <Tooltip title="You do not have a section selected for this section type.">
                <IconButton>
                  <WarningTwoToneIcon sx={{color: 'warning.light'}} />
                </IconButton>
              </Tooltip>
            )}
            <ExpandMore
              expand={expanded}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </ListItemButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="pt-0" sx={{pb: 0}}>
              <List>
                {coolSections}
              </List>
            </CardContent>
          </Collapse>
        </div>
      ) : (
        <div className="w-full">
          { coolSections }
        </div>
      )}
    </div>
  )
}

export default ListEntry;