import React, { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { selectCourses, updateSection } from '../src/features/userCourses/userCoursesSlice';

import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ListEntrySub = (props) => {

  const dispatch = useDispatch();
  const { section, sectionType, courseId, showTitle } = props;

  const courses = useSelector(selectCourses)
  const course = courses[courses.findIndex(course => course.objectID === courseId)]
  const selectedCourse = course.activeSections[sectionType];

  const handleClick = () => {
    dispatch(updateSection({ courseId, sectionType, section: section.Section }));
  };

  const handleHour = (hour) => {
    if (hour == 0) {
      return {"hour": 12, "suffix": "a.m."};
    } else if (hour > 12) {
      return {"hour": hour - 12, "suffix": "p.m."};
    } else if (hour == 12) {
      return {"hour": hour, "suffix": "p.m."};
    } else {
      return {"hour": hour - 0, "suffix": "a.m."};
    }
  }

  const formatMeetingTime = meetings => {
    let meeting;
    let result = [];
    for (meeting of meetings) {
        const startText = meeting.Start;
        const endText = meeting.End;
        if (!startText || !endText) continue;
        const start = {
          ...handleHour(startText.slice(0,2)),
          minute: startText.slice(2,)
        }
        const end = {
          ...handleHour(endText.slice(0,2)),
          minute: endText.slice(2,)
        }
        let weekDays = "";
        if (meeting.M === "Y") weekDays += "M";
        if (meeting.T === "Y") weekDays += "T";
        if (meeting.W === "Y") weekDays += "W";
        if (meeting.R === "Y") weekDays += "R";
        if (meeting.F === "Y") weekDays += "F";
        const string = `${weekDays} ${start.hour}:${start.minute} ${start.suffix} - ${end.hour}:${end.minute} ${end.suffix}`;
        result.push(string);
      }
    if (result.length === 0) return "N/A";
    return result.join(", ");
  }

  return(
    <ListItemButton 
      onClick={handleClick}
      selected={(selectedCourse == section.Section) && (Object.values(course.sections[sectionType]).length > 1)}
      dense={true}
    >
      <ListItemIcon>
          <Typography variant="body1">
            {section?.Section}
          </Typography>
      </ListItemIcon>
      <ListItemText 
          id={`switch-list-label-${section.Section}`}
          primary={((showTitle && (sectionType == "A")) ? section.Title : formatMeetingTime(section.Meetings))}
          secondary={((showTitle && (sectionType == "A")) ? (formatMeetingTime(section.Meetings) + " — ") : ("")) + (section?.Instructors?.map(instructor => instructor.Display.split(',').reverse().join(" ")).join(', '))}
      />
    </ListItemButton>
  )
}

export default ListEntrySub;