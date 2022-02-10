import React, { useState } from 'react'
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Alert from '@mui/material/Alert';

import ListEntry from './ListEntry';
import { courseAliasesIcons } from '/updateCourses/utils'

const CourseCard = ({ course }) => {

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  const unselectedSectionTypes = Object.keys(course.activeSections).filter(sectionType => course.activeSections[sectionType] == "")

  return (
    <Card className="w-full">
      {(unselectedSectionTypes.length > 0) && (
        <Alert severity="warning">Select sections for the {unselectedSectionTypes.map(i => courseAliasesIcons[i].type).join(", ").replace(/, ([^,]*)$/, ' and $1')} of this course.</Alert>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: course.color }} aria-label="recipe">
            &nbsp;
          </Avatar>
        }
        title={course.title}
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <ul>
            {Object.values(course.sections).map(section => (
              // <p key={section?.Section}>unused</p>
              <div key={section?.Section} />
            ))}
          </ul>
        </Typography>
      </CardContent>
      <List 
        subheader={(Object.keys(course.sections).length > 1) ? (<ListSubheader>Sections</ListSubheader>) : null}
      >
        {Object.keys(course.sections).map(sectionKey => (
          <ListEntry course={course} sectionType={sectionKey} key={sectionKey} />
        ))}
      </List>
    </Card>
  )
}

export default CourseCard;