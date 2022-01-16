import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: [{
      "department": "ANBE",
      "color": "#EA7317",
      "sections": [
        {
          "Id": "202205-53685",
          "Term": "202205",
          "Crn": "53685",
          "Subj": "ANBE",
          "Number": "342",
          "Section": "01",
          "Footnote": "Crosslisted with BIOL 342.",
          "Title": "Neuroethology",
          "Credit": 1,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "Y",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "BIOL 102",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "0830",
              "End": "0950",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Capaldi, Elizabeth A."
            }
          ],
          "Reqs": [
            {
              "Code": "NSMC",
              "Desc": "Natural Science and Mathematics",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RCLA"
          ],
          "DeptCodes": [
            "ANBE"
          ],
          "color": "#EA7317"
        }
      ],
      "objectID": "202205ANBE342",
      "title": "ANBE 342 - Neuroethology"
    },{
      "department": "PHYS",
      "color": "#D81E5B",
      "sections": [
        {
          "Id": "202205-50067",
          "Term": "202205",
          "Crn": "50067",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "01",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "0900",
              "End": "0950",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        },
        {
          "Id": "202205-50068",
          "Term": "202205",
          "Crn": "50068",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "02",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1100",
              "End": "1150",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        }
      ],
      "objectID": "202205PHYS212",
      "sectionsP": [
        {
          "Id": "202205-50067",
          "Term": "202205",
          "Crn": "50067",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "01",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "0900",
              "End": "0950",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        },
        {
          "Id": "202205-50068",
          "Term": "202205",
          "Crn": "50068",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "02",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1100",
              "End": "1150",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        },
        {
          "Id": "202205-50983",
          "Term": "202205",
          "Crn": "50983",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "14",
          "Footnote": "If necessary, balancing may occur following registration",
          "Title": "Problem Sess Clas/Modrn Phys",
          "Credit": 1,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "N",
          "Meetings": [
            {
              "Location": "OBSV 105",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1000",
              "End": "1050",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Das, Bidyut B."
            }
          ],
          "Reqs": [
            {
              "Code": "CCQR",
              "Desc": "Quantitative Reasoning",
              "Fy": "Y",
              "Uc": "Y"
            },
            {
              "Code": "LBSC",
              "Desc": "Lab Science",
              "Fy": "Y",
              "Uc": "Y"
            },
            {
              "Code": "NMLG",
              "Desc": "Natural Science and Mathematics Learning Goals",
              "Fy": "Y",
              "Uc": "Y"
            },
            {
              "Code": "NSMC",
              "Desc": "Natural Science and Mathematics",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RCLA"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        }
      ],
      "title": "PHYS 212 - Classical and Modern PhysicsII",
      "sectionsL": [
        {
          "Id": "202205-50067",
          "Term": "202205",
          "Crn": "50067",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "01",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "0900",
              "End": "0950",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        },
        {
          "Id": "202205-50068",
          "Term": "202205",
          "Crn": "50068",
          "Subj": "PHYS",
          "Number": "212",
          "Section": "02",
          "Footnote": "Students must choose a laboratory (212L) and problem (212P) session.  Prerequisite of PHYS 211 and MATH 201. The three exam dates on Thursday nights are February 10, March 10 and April 14. Students also enrolling in MATH 217 or MATH 227 may request a time conflict override.",
          "Title": "Classical and Modern PhysicsII",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "VAUG 100",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1100",
              "End": "1150",
              "Credit": 0
            },
            {
              "Location": null,
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            }
          ],
          "Reqs": [],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        },
        {
          "Id": "202205-51239",
          "Term": "202205",
          "Crn": "51239",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "69",
          "Footnote": "If necessary, balancing may occur following registration.",
          "Title": "Lab-Classical/Modern Physics",
          "Credit": 0,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "N",
          "Meetings": [
            {
              "Location": "OLIN 260",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "0800",
              "End": "1050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Das, Bidyut B."
            }
          ],
          "Reqs": [
            {
              "Code": "NSMC",
              "Desc": "Natural Science and Mathematics",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ],
          "color": "#D81E5B"
        }
      ]
    }],
    schedules: null,
}

const userCoursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        unsetCourses: (state) => {
            state.courses = null
        },
        addCourse: (state, action) => {
            // something!
        },
        removeCourse: (state, action) => {
            // something!
        },
        setSchedules: (state, action) => {
            state.schedules = action.payload
        },
        unsetSchedules: (state) => {
            state.schedules = null
        },
        addSchedule: (state, action) => {
            // something!
        },
        unsetAll: (state) => {
            state.courses = null
            state.schedules = null
        }
    }
});

export const {
    setCourses,
    unsetCourses,
    addCourse,
    removeCourse,
    setSchedules,
    unsetSchedules,
    addSchedule,
    unsetAll,
} = userCoursesSlice.actions

export const selectCourses = state => state.userCourses.courses
export const selectSchedules = state => state.userCourses.schedules

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail
// export const selectUid = state => state.user.uid

export default userCoursesSlice.reducer