/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { Fade, Divider } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setId, setCourses, setSchedules } from "../../src/features/userCourses/userCoursesSlice";
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { ref, onValue } from "firebase/database";

import NewSchedule from '@components/NewSchedule';
import CourseCard from '@components/CourseCard';
import AutoCompleteComponent from '@components/AutocompleteComponent';
import { database } from '../../auth/thisFirebase';

export default function app() {

  const dark = useSelector((state) => state.darkMode.value);
  const courses = useSelector((state) => state.userCourses.courses);
  const toImport = `https://cdn.syncfusion.com/ej2/material${dark ? "-dark" : ""}.css`

  const router = useRouter();
  const dispatch = useDispatch();
  const { sid } = router.query;

  useEffect(() => {  if (sid) {
    dispatch(setId(sid[0]));
    const databaseRef = ref(database, `id/${sid[0]}`);
    onValue(databaseRef, (snapshot) => {
      if (snapshot.val()) {
        dispatch(setCourses(snapshot.val().data.courses));
        // dispatch(setSchedules(snapshot.val().data?.schedules));
      }
    });
    // get courses from firebase
  }}, [sid]);

  return (
    <div className="container">
      <link href={toImport} rel="stylesheet"/>
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex sm:flex-row flex-col items-center justify-center max-w-7xl sm:px-12 mx-auto gap-4"}>
              <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-5/6 md:max-w-sm md:w-full sm:self-start"}>
                <AutoCompleteComponent />
                {(courses.length > 0) && (<Divider light></Divider>)}
                {courses.map((course) => (
                  <CourseCard key={course.objectID} course={course} />
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