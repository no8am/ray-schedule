import algoliasearch from 'algoliasearch';
import fetch from 'node-fetch';
import fs from 'fs';

import { hashStr, formatTitle } from './utils';
import { colors2 } from './constants';
require('dotenv').config({ path: `.env.local` })

const term = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
let courses = {};
let instructors = [];
let requirements = [];
const updateDetailedInfo = false;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const updateCoursePreReqs = (term, deptCode, courseNumber) => {
  return fetch(`https://banner.ban.bucknell.edu/prodssb/bwckctlg.p_disp_course_detail?cat_term_in=${term}&subj_code_in=${deptCode}&crse_numb_in=${courseNumber}`, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Microsoft Edge\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-site",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://pubapps.bucknell.edu/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then((response) => response.text())
    .then((data) => {
      delay(500).then(() => {
        let v = data.match(/Prerequisites: <\/SPAN>\n<br \/>\n(.*?)\n<br \/>/g)
        if (v) {
          let a = v.join('').replace("\n", "").replace(/<[^>]*>/g, '')
          // console.log(a)
          return a;
        } else { return ""; }
      })
    });
}

const updateSectionInfo = (term, crn, deptCode) => {
  return fetch(`https://banner.ban.bucknell.edu/prodssb/hwzkdpac.P_Bucknell_CGUpdate?formopt=VIEWSECT&term=${term}&updsubj=${deptCode}&crn=${crn}&viewterm=${term}`, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Microsoft Edge\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-site",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://pubapps.bucknell.edu/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then((res) => res.text())
    .then((data) => {
      let match1 = /<th CLASS="ddlabel" scope="row" >General Course Objectives:<\/th>\n<td CLASS="dddefault">(?<Objectives>([\s\S]*))<\/td>\n<\/tr>\n<tr>\n<th CLASS="ddlabel" scope="row" >Description of Subject Matter:<\/th>\n<td CLASS="dddefault">(?<Description>([\s\S]*))<\/td>\n<\/tr>\n<tr>\n<th CLASS="ddlabel" scope="row" >Method of Instruction and Study:/g;
      return match1.exec(data)
    })
}

const getCourseInformation = (term) => {
	return fetch(`https://pubapps.bucknell.edu/CourseInformation/data/course/term/${term}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Microsoft Edge\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://pubapps.bucknell.edu/CourseInformation/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
  .then(res => res.json())
};

// updateCoursePreReqs('202205', 'CSCI', '205').then(async res => {
//   console.log(res);
// });

// updateSectionInfo('202205', '54224', 'RELI').then(async res => {
//   console.log(res);
// });


getCourseInformation(term).then(data => {
  data.forEach(course => {

    // this is to account for the Arabic 101 course
    const lessonType = ((course.Number.length > 3) && (course.Number.slice(-1) !== "A")) ? course.Number.slice(-1) : "";
    const courseNumber = course.Number.length > 3 ? course.Number.slice(0,3) : course.Number;
    const title = `${course.Term}-${course.Subj}-${courseNumber}`;
    const objectID = `${course.Term}${course.Subj}${courseNumber}`;
    const color = colors2[hashStr(course.Subj) % colors2.length];
    const department = course.DeptCodes[0];
    
    if (!courses[title]) {
      courses[title] = {
        title: "",
        color,
        sections: {},
        activeSections: {},
        possibleMeetings: [],
        possibleRequirements: [],
        possibleInstructors: [],
        objectID,
        lectureSectionsHaveDifferentTitle: false,
        lectureOnly: true,
      }
    }

    const sectionLessonType = lessonType != "" ? `${lessonType}` : "A";
    if (!courses[title].sections[sectionLessonType]) {
      courses[title].sections[sectionLessonType] = {}
      courses[title].activeSections[sectionLessonType] = course.Section // fix
    } else {
      courses[title].activeSections[sectionLessonType] = "" // fix
    }
    courses[title].sections[sectionLessonType][course.Section] = course;
    courses[title].possibleRequirements.push(...course.Reqs.map(req => req["Desc"]));
    course.Reqs.map(req => req["Desc"]).forEach(req => {
      if (requirements.indexOf(req) === -1) { requirements.push(req);}
    });
    courses[title].possibleInstructors.push(...course.Instructors.map(i => i["Display"]));
    course.Instructors.map(i => i["Display"]).forEach(i => {
      const fixed = i.replace(/'/g, "\\'")
      if (instructors.indexOf(fixed) === -1) { instructors.push(fixed)}
    });


    // const ordered = Object.keys(courses[title].sections[sectionLessonType]).sort().reduce(
    //   (obj, key) => { 
    //     obj[key] = courses[title].sections[sectionLessonType][key]; 
    //     return obj;
    //   }, 
    //   {}
    // );
    // courses[title].sections[sectionLessonType] = ordered;
    // courses[title].sections[course.Section].sectionInfo = updateSectionInfo(course.Term, course.CRN, course.Subj)

    if (sectionLessonType == "A") {
      const fTitle = formatTitle(course);
      if (courses[title].title == "") {
        courses[title].title = fTitle;
      } else if (courses[title].title != fTitle) {
        courses[title].title = `${course.Subj} ${courseNumber}`
        courses[title].lectureSectionsHaveDifferentTitle = true;
      }
      if (courses[title].lectureOnly) {
        courses[title].possibleMeetings.push(...course.Meetings);
      }
    } else {
      courses[title].lectureOnly = false;
      courses[title].possibleMeetings = [];
    }
  })

  const courseList = Object.values(courses);
  console.log(courseList.length)
  fs.writeFileSync('updateCourses/backup.json', JSON.stringify(courses, null, 2));
  fs.writeFileSync('updateCourses/requirements.js', 'export const requirements = ' + JSON.stringify(requirements, null, 2));
  fs.writeFileSync('updateCourses/instructors.js', 'export const instructors = ' + JSON.stringify(instructors, null, 2));
  

  // updates algolia. Comment out to test. 

  const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API);
  const course_index = client.initIndex(term);

  const ADD_SIZE = 10;
  const coursesLength = courseList.length
  let curr = 0
  
  while (curr <= coursesLength) {
    let courseListShort = courseList.slice(curr, curr + ADD_SIZE);
    course_index
    .saveObjects(courseListShort)
    .then(({objectIDs}) => {
      console.log(objectIDs);
    })
    .catch(err => {
      console.log(err);
    })

    curr += ADD_SIZE
    console.log(curr)
    console.log(coursesLength)
  }
  console.log("done updating");



  // course_index
  //   // .partialUpdateObjects(courseListShort) // when updating existing terms
  //   .saveObjects(courseListShort) // when initializing new index
  //   .then(({ objectIDs }) => {
  //     console.log(objectIDs);
  //     console.log("done updating")
  //   })
  //   .catch (err => {
  //     console.error (err)

  //     for (var i = 0; i < err["transporterStackTrace"].length; i++) {
  //       console.error(err["transporterStackTrace"][i])
  //     }
  //   });
});