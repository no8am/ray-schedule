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
import DeleteIcon from '@mui/icons-material/Delete';
import Collapse from '@mui/material/Collapse';
import InfoIcon from '@mui/icons-material/Info';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';

import ListEntry from './ListEntry';
import { courseAliasesIcons } from '/updateCourses/utils'
import { useDispatch } from 'react-redux';
import { removeCourse } from '../src/features/userCourses/userCoursesSlice';

const CourseCard = ({ course }) => {

  const dispatch = useDispatch();

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

  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

  const unselectedSectionTypes = Object.keys(course.activeSections).filter(sectionType => course.activeSections[sectionType] == "")

  return (
    <Card className="w-full">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: course.color }} aria-label="recipe">
            &nbsp;
          </Avatar>
        }
        title={<b>{course.title.split(" - ")[0]}</b>}
        subheader={(course.lectureSectionsHaveDifferentTitle && (course.activeSections["A"] != "")) ? course.sections.A[course.activeSections.A].Title : course.title.split(" - ")[1]}
        action={(<div className="flex flex-row gap-1">
          <IconButton 
            aria-label="info"
            onClick={(e) => {
              e.preventDefault();
              window.open(`https://banner.ban.bucknell.edu/prodssb/bwckctlg.p_disp_course_detail?cat_term_in=${course.objectID.substring(0, 6)}&subj_code_in=${course.objectID.substring(6, 10)}&crse_numb_in=${course.objectID.substring(10)}`, "_blank");
            }}
          >
            <InfoIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => dispatch(removeCourse(course.objectID))}>
            <DeleteIcon>{course.objectID}</DeleteIcon>
          </IconButton>
        </div>)}
      />
      <List dense={true} className="w-full">
        {(unselectedSectionTypes.length > 0) && (
          <Alert severity="warning">Select sections for the {unselectedSectionTypes.map(i => courseAliasesIcons[i].type).join(", ").replace(/, ([^,]*)$/, ' and $1')} of this course.</Alert>
        )}

      {/* something else */}

        {(Object.keys(course.sections).length > 1) ? (
          [
            <ListItemButton
              onClick={handleExpandClick}
              key={0}
            >
              <ListItemText 
                className="px-2"
                primary={(Object.keys(course.sections).length > 1) ? `Sections` : null}
              />
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </ListItemButton>
          ,
            <Collapse in={expanded} timeout="auto" unmountOnExit key={1}>
              <CardContent sx={{p: 0}} className="p-0">
                <List>
                  {Object.keys(course.sections).map(sectionKey => (
                    <ListEntry course={course} sectionType={sectionKey} key={sectionKey} />
                  ))}
                </List>
              </CardContent>
            </Collapse>
          ]
        ) : (
          <ListItem>
            {Object.keys(course.sections).map(sectionKey => (
              <ListEntry course={course} sectionType={sectionKey} key={sectionKey} />
            ))}
          </ListItem>
        )}
      </List>
    </Card>
  )
}

export default CourseCard;