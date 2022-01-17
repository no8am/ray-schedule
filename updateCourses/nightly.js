import algoliasearch from 'algoliasearch';
import fetch from 'node-fetch';
import fs from 'fs';

import { hashStr, formatTitle } from './utils';
import { colors2 } from './constants';
require('dotenv').config({ path: `.env.local` })

const term = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
let courses = {};
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
        department,
        color,
        sections: {},
        objectID,
      }
    }

    courses[title].sections[course.Section] = course;
    if (lessonType === "") {
      courses[title].title = formatTitle(course);
    }

    // courses[title]["sections" + lessonType] = [...courses[title].sections, {...course, color}];
    // // courses[title]["sections" + lessonType] = [...courses[title].sections, {...course, color, sectionInfo: updateSectionInfo(course.Term, course.CRN, course.Subj)}];

    // if (lessonType === "") {
    //   courses[title].title = formatTitle(course);
    //   // courses[title].courseInfo = updateCoursePreReqs(course.Term, course.Subj, course.Number);
    // }
  })

  const courseList = Object.values(courses);
  fs.writeFileSync('updateCourses/backup.json', JSON.stringify(courses, null, 2));

    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API);
    const course_index = client.initIndex(term);
    course_index
      .partialUpdateObjects(courseList)
      .then(({ objectIDs }) => {
        console.log(objectIDs);
        console.log("done updating")
      })
      .catch (err => console.error (err));
});