import Head from 'next/head'
import { Fade } from '@mui/material';
import { useSelector } from "react-redux";

import NewSchedule from '@components/NewSchedule';
import CourseCard from '@components/CourseCard';
import AutoCompleteComponent from '@components/AutocompleteComponent';

export default function app() {

  const dark = useSelector((state) => state.darkMode.value);
  const courses = useSelector((state) => state.userCourses.courses);
  const toImport = `https://cdn.syncfusion.com/ej2/material${dark ? "-dark" : ""}.css`

  return (
    <div className="container">
      <link href={toImport} rel="stylesheet"/>
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex sm:flex-row flex-col items-center justify-center max-w-7xl sm:px-12 mx-auto gap-4"}>
              <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-5/6 md:w-full sm:self-start"}>
                <AutoCompleteComponent />
                {courses.map((course) => (
                  <CourseCard key={course.Id} course={course} />
                ))}
              </div>
              <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full sm:self-start"}>
                <NewSchedule />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}