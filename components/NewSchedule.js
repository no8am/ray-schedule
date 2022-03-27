import React from "react";

import {
  ScheduleComponent,
  WorkWeek,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Button } from "@mui/material";
import { Room, Person, Schedule, Delete, Edit } from "@mui/icons-material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCourses,
  removeCourse,
  updateSection,
  shiftCourseUp,
} from "../src/features/userCourses/userCoursesSlice";
import { courseAliasesIcons } from '/updateCourses/utils'

const handleHour = (hour) => {
  if (hour == 0) {
    return { hour: 12, suffix: "a.m." };
  } else if (hour > 12) {
    return { hour: hour - 12, suffix: "p.m." };
  } else if (hour == 12) {
    return { hour: hour, suffix: "p.m." };
  } else {
    return { hour: hour - 0, suffix: "a.m." };
  }
};

const pickTextColor = (bgColor, lightColor, darkColor) => {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
};

const NewSchedule = (props) => {
  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);
  const intervals = courses
    .map((course) => {
      return Object.keys(course.sections)
        .map((sectionType) => {
          return Object.keys(course.sections[sectionType])
            .filter((sectionId) => {
              return (
                course.activeSections[sectionType] ==
                course.sections[sectionType][sectionId].Section
              );
            })
            .map((sectionId) => {
              const section = course.sections[sectionType][sectionId];
              return section.Meetings.map((meeting) => {
                return Object.keys(meeting)
                  .filter((day) => {
                    return meeting[day] == "Y";
                  })
                  .map((day) => {
                    const start = {
                      ...handleHour(meeting.Start.slice(0, 2)),
                      minute: meeting.Start.slice(2),
                      hour24: meeting.Start.slice(0, 2),
                    };
                    const end = {
                      ...handleHour(meeting.End.slice(0, 2)),
                      minute: meeting.End.slice(2),
                      hour24: meeting.End.slice(0, 2),
                    };
                    return {
                      weekDay: day,
                      id: course.objectID,
                      start,
                      end,
                      sectionType,
                      section: sectionId,
                      courseSubjNumb: `${section.Subj} ${section.Number}`,
                      courseTitle: section.Title,
                      color: course.color,
                      startText: `${start.hour}:${start.minute} ${start.suffix}`,
                      endText: `${end.hour}:${end.minute} ${end.suffix}`,
                      location: meeting.Location,
                      Crn: section?.Crn,
                      instructorString: section?.Instructors?.map(
                        (instructor) =>
                          instructor.Display.split(",").reverse().join(" ")
                      ).join(", "),
                    };
                  });
              }).flat();
            })
            .flat();
        })
        .flat();
    })
    .flat();

  const onEventRendered = React.useCallback((args) => {
    let categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
      return;
    }
    Object.assign(args.element.style, {
      backgroundColor: categoryColor,
    });
  }, []);

  const data = intervals.map((interval) => {
    let weekDayNum;
    switch (interval.weekDay) {
      case "M":
        weekDayNum = 1;
        break;
      case "T":
        weekDayNum = 2;
        break;
      case "W":
        weekDayNum = 3;
        break;
      case "R":
        weekDayNum = 4;
        break;
      case "F":
        weekDayNum = 5;
        break;
      default:
        weekDayNum = 6;
        break;
    }
    const description = "coming soon!";
    return {
      Subject: interval.courseSubjNumb,
      SectionType: interval.sectionType,
      Section: interval.section,
      objectID: interval.id,
      FullName: interval.courseTitle,
      StartTime: new Date(
        2018,
        0,
        weekDayNum,
        interval.start.hour24,
        interval.start.minute
      ),
      EndTime: new Date(
        2018,
        0,
        weekDayNum,
        interval.end.hour24,
        interval.end.minute
      ),
      IsAllDay: false,
      CategoryColor: interval.color.toString(),
      Description: description,
      Location: interval.location,
      Instructors: interval.instructorString,
    };
  });

  const eventRef = React.useRef();

  const bulletPoints = (props) => {
    const [building, room] = props.Location
      ? props.Location.split(" ")
      : ["", ""];
    const instructorList = props.Instructors.split(", ");
    const instructorLinks = instructorList.map((instructor, index) => {
      let wordArr = instructor.trim().split(" ");
      wordArr.splice(1, wordArr.length - 2);
      const end = index === instructorList.length - 1 ? " " : <br />;
      return (
        <span key={index}>
          <a
            href={`https://www.ratemyprofessors.com/search/teachers?query=${wordArr.join("%20")}&sid=U2Nob29sLTE0MA==`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instructor}
          </a>
          {end}
        </span>
      );
    });

    return (
      <List dense={true}>
        <ListItemButton>
          <ListItemIcon>
            <Schedule />
          </ListItemIcon>
          <ListItemText
            primary={`${props.StartTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })} - ${props.EndTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}`}
            // secondary={props.StartTime.toLocaleString()}
          />
        </ListItemButton>
        {building && (
          <ListItem>
            <ListItemIcon>
              <Room />
            </ListItemIcon>
            <ListItemText
              primary={
                <a
                  href={`https://my.bucknell.edu/apps/m/building/${building}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {building}&nbsp;{room}
                </a>
              }
              // secondary={room}
            />
          </ListItem>
        )}
        {props.Instructors != [] && (
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={instructorLinks} />
          </ListItem>
        )}
      </List>
    );
  };

  const contentTemplate = (props) => {
    return bulletPoints(props);
  };

  const headerTemplate = (props) => {
    const c = pickTextColor(props.CategoryColor, "#fff", "#000");
    const course = courses[courses.findIndex(course => course.objectID === props.objectID)];
    const sectionTypeName = courseAliasesIcons[props.SectionType].type;
    const multiNonLecture = Object.keys(course.sections[props.SectionType]).length == 1
    console.log(props)
    return (
      <div className="px-5 py-3 flex flex-row">
        <div className="w-full">
          <div className="flex w-full justify-between">
            <Typography variant="h6" sx={{ color: c, fontWeight: "bold" }}>
              {props.Subject}
            </Typography>
            <Tooltip title={multiNonLecture ? "Delete this course from your schedule" : `Delete this ${sectionTypeName} from your schedule`}>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  if (multiNonLecture) {
                    dispatch(removeCourse(props.objectID));
                  } else {
                    dispatch(updateSection({courseId: props.objectID, sectionType: props.SectionType, section: ""}));
                  }
                  eventRef.current.closeQuickInfoPopup();
                }}
              >
                <Delete fontSize="small" sx={{ color: c }}/>
              </IconButton>
            </Tooltip>
          </div>
          <Typography variant="subtitle1" sx={{ color: c }}>
            {props.FullName}&nbsp;—&nbsp;{sectionTypeName} {/* &nbsp;({props.Section}) */}
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ScheduleComponent
        className="schedule"
        readonly={true}
        timeScale={{ enable: true, interval: 60, slotCount: 2 }}
        minDate={new Date(2018, 0, 1)}
        maxDate={new Date(2018, 0, 5)}
        selectedDate={new Date(2018, 0, 1)}
        eventRendered={onEventRendered}
        eventSettings={{
          dataSource: data,
          fields: {
            subject: { name: "Subject" },
            section: { name: "Section" },
            sectionType: { name: "SectionType" },
            fullName: { name: "FullName" },
            isAllDay: { name: "IsAllDay" },
            startTime: { name: "StartTime" },
            endTime: { name: "EndTime" },
            categoryColor: { name: "CategoryColor" },
            description: { name: "Description" },
            location: { name: "Location" },
            instructors: { name: "Instructors" },
          },
        }}
        ref={eventRef}
        quickInfoTemplates={{
          header: headerTemplate,
          content: contentTemplate,
        }}
        onActionComplete={(args) => {
          if (args.requestType == "dateNavigate") {
            eventRef.current.scrollTo("08", new Date(2018, 0, 1));
          }
        }}
        eventClick={(args) => {
          dispatch(shiftCourseUp(args.event.objectID));
        }}
      >
        <ViewsDirective>
          <ViewDirective option="WorkWeek" startHour="08:00" endHour="22:00" />
        </ViewsDirective>
        <Inject services={[WorkWeek]} />
      </ScheduleComponent>
    </div>
  );
};

export default NewSchedule;
