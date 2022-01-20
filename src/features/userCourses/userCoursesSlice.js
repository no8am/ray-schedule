import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    courses: [{
    "title": "PHYS 212 - Classical and Modern PhysicsII",
    "color": "#D81E5B",
    "sections": {
      "L": {
        "60": {
          "Id": "202205-50075",
          "Term": "202205",
          "Crn": "50075",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "60",
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
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1000",
              "End": "1250",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "61": {
          "Id": "202205-50076",
          "Term": "202205",
          "Crn": "50076",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "61",
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
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1300",
              "End": "1550",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Gurmessa, Bekele J."
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "62": {
          "Id": "202205-50078",
          "Term": "202205",
          "Crn": "50078",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "62",
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
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2150",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Katharina"
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "63": {
          "Id": "202205-50079",
          "Term": "202205",
          "Crn": "50079",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "63",
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
              "T": "Y",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "0800",
              "End": "1050",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Amthor, Matt M."
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "64": {
          "Id": "202205-50080",
          "Term": "202205",
          "Crn": "50080",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "64",
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
              "T": "Y",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1300",
              "End": "1550",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Gurmessa, Bekele J."
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "65": {
          "Id": "202205-50081",
          "Term": "202205",
          "Crn": "50081",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "65",
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
              "T": "Y",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2150",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Sulai, Ibrahim A."
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "66": {
          "Id": "202205-50082",
          "Term": "202205",
          "Crn": "50082",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "66",
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
              "W": "Y",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1000",
              "End": "1250",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Katharina"
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "67": {
          "Id": "202205-50083",
          "Term": "202205",
          "Crn": "50083",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "67",
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
              "W": "Y",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1300",
              "End": "1550",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Das, Bidyut B."
            },
            {
              "Display": "Calapa, Marie D."
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
            "PHYS"
          ]
        },
        "69": {
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
            },
            {
              "Display": "Calapa, Marie D."
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
          ]
        },
        "70": {
          "Id": "202205-52959",
          "Term": "202205",
          "Crn": "52959",
          "Subj": "PHYS",
          "Number": "212L",
          "Section": "70",
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
              "Start": "1300",
              "End": "1550",
              "Credit": 0
            }
          ],
          "Instructors": [
            {
              "Display": "Porter, James A."
            },
            {
              "Display": "Calapa, Marie D."
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
          ]
        }
      },
      "P": {
        "10": {
          "Id": "202205-50070",
          "Term": "202205",
          "Crn": "50070",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "10",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "0800",
              "End": "0850",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Koutsoliotas, Sally"
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "11": {
          "Id": "202205-50071",
          "Term": "202205",
          "Crn": "50071",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "11",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "0900",
              "End": "0950",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Vollmayr-Lee, Ben P."
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "12": {
          "Id": "202205-50072",
          "Term": "202205",
          "Crn": "50072",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "12",
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
              "Start": "0900",
              "End": "0950",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Das, Bidyut B."
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "13": {
          "Id": "202205-50130",
          "Term": "202205",
          "Crn": "50130",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "13",
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
              "Location": "ACWS 215",
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
              "Display": "Koutsoliotas, Sally"
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "14": {
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
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "15": {
          "Id": "202205-50069",
          "Term": "202205",
          "Crn": "50069",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "15",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1100",
              "End": "1150",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "16": {
          "Id": "202205-50073",
          "Term": "202205",
          "Crn": "50073",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "16",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1300",
              "End": "1350",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Porter, James A."
            },
            {
              "Display": "Amthor, Matt M."
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
          ]
        },
        "17": {
          "Id": "202205-50074",
          "Term": "202205",
          "Crn": "50074",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "17",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1400",
              "End": "1450",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Porter, James A."
            },
            {
              "Display": "Amthor, Matt M."
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
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ]
        },
        "18": {
          "Id": "202205-50357",
          "Term": "202205",
          "Crn": "50357",
          "Subj": "PHYS",
          "Number": "212P",
          "Section": "18",
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
              "Location": "ACWS 215",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1500",
              "End": "1550",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Amthor, Matt M."
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
            "RRMT"
          ],
          "DeptCodes": [
            "PHYS"
          ]
        }
      },
      "A": {
        "01": {
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
          ]
        },
        "02": {
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
          ]
        }
      }
    },
    "activeSections": {
      "L": "",
      "P": "",
      "A": ""
    },
    "objectID": "202205PHYS212",
    "lectureSectionsHaveDifferentTitle": false
  },{
    "title": "UNIV 200",
    "color": "#65B8B0",
    "sections": {
      "A": {
        "10": {
          "Id": "202205-54574",
          "Term": "202205",
          "Crn": "54574",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "10",
          "Footnote": "",
          "Title": "Russia: Fact & Fiction",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 251",
              "U": "N",
              "M": "Y",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1300",
              "End": "1350",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Goodale, James A."
            },
            {
              "Display": "Shleyfer Lavine, Ludmila S."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "HIST",
            "RUSS",
            "UNIV"
          ]
        },
        "11": {
          "Id": "202205-54757",
          "Term": "202205",
          "Crn": "54757",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "11",
          "Footnote": "Full title - \"Life Online: Negotiating Our Social Media Existences\"",
          "Title": "Life Online",
          "Credit": 1,
          "CreditMax": null,
          "Res": "",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "ACET 115",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1500",
              "End": "1620",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Dennis, Dannah K."
            },
            {
              "Display": "Jakacki, Diane K."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "HUMN",
            "SOCI",
            "UNIV"
          ]
        },
        "07": {
          "Id": "202205-53532",
          "Term": "202205",
          "Crn": "53532",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "07",
          "Footnote": "",
          "Title": "Digital Transcendence",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 150",
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
              "Display": "Hunter, John C."
            },
            {
              "Display": "Perrone, Luiz Felipe F."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RRMT"
          ],
          "DeptCodes": [
            "CSCI",
            "HUMN",
            "UNIV"
          ]
        },
        "02": {
          "Id": "202205-53828",
          "Term": "202205",
          "Crn": "53828",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "02",
          "Footnote": "",
          "Title": "Memories of Neoliberalism",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "ACWS 212",
              "U": "N",
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2150",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Blanco, Fernando A."
            },
            {
              "Display": "Vernengo, Matias"
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RCAR"
          ],
          "DeptCodes": [
            "ECON",
            "SPAN",
            "UNIV"
          ]
        },
        "04": {
          "Id": "202205-54199",
          "Term": "202205",
          "Crn": "54199",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "04",
          "Footnote": "Equivalent to HUMN 250. Counts toward the major and minor in Comparative and Digital Humanities.",
          "Title": "Modernism and Crisis",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 251",
              "U": "N",
              "M": "Y",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1100",
              "End": "1150",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Gregory, Chase P."
            },
            {
              "Display": "Leraul, D. Bret B."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "ENGL",
            "HUMN",
            "UNIV"
          ]
        },
        "01": {
          "Id": "202205-54669",
          "Term": "202205",
          "Crn": "54669",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "01",
          "Footnote": "This is an IP course available to students in the College of Engineering. See COURSE GUIDE for reserved seat rules.",
          "Title": "Technology & Social In/Justice",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "HOLM 116",
              "U": "N",
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1200",
              "End": "1320",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Kabalan, Amal A."
            },
            {
              "Display": "Koutsoliotas, Sally"
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "ELEC",
            "PHYS",
            "UNIV"
          ]
        },
        "05": {
          "Id": "202205-53390",
          "Term": "202205",
          "Crn": "53390",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "05",
          "Footnote": "Full title - \"Creating (in) Creative Groups: Forming-Storming-Norming-Performing\"",
          "Title": "Creating (in) Creative Groups",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 119",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1300",
              "End": "1550",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Hutchinson, Mark W."
            },
            {
              "Display": "Lintott, Sheila M."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [
            "RCLA"
          ],
          "DeptCodes": [
            "PHIL",
            "THEA",
            "UNIV"
          ]
        },
        "09": {
          "Id": "202205-54212",
          "Term": "202205",
          "Crn": "54212",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "09",
          "Footnote": "",
          "Title": "Co-op in Community Econ Dvlpmt",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "ACWS 114",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1300",
              "End": "1550",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Kristjanson-Gural, David"
            },
            {
              "Display": "Larrabure, Manuel E."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "ECON",
            "UNIV"
          ]
        },
        "08": {
          "Id": "202205-54232",
          "Term": "202205",
          "Crn": "54232",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "08",
          "Footnote": "",
          "Title": "Meditation:Religion & Science",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 150",
              "U": "N",
              "M": "N",
              "T": "Y",
              "W": "N",
              "R": "Y",
              "F": "N",
              "S": "N",
              "Start": "1000",
              "End": "1120",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Takahashi, Mizuki"
            },
            {
              "Display": "Young, Stuart H."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "RELI",
            "UNIV"
          ]
        },
        "06": {
          "Id": "202205-54366",
          "Term": "202205",
          "Crn": "54366",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "06",
          "Footnote": "",
          "Title": "In the Shadow of Hiroshima",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "COLE 150",
              "U": "N",
              "M": "Y",
              "T": "N",
              "W": "N",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1300",
              "End": "1350",
              "Credit": 0
            },
            {
              "Location": "COLE 150",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "N",
              "S": "N",
              "Start": "1900",
              "End": "2150",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Lofgren, Erik R."
            },
            {
              "Display": "Ladd, Ned F."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "EAST",
            "PHYS",
            "UNIV"
          ]
        },
        "03": {
          "Id": "202205-54562",
          "Term": "202205",
          "Crn": "54562",
          "Subj": "UNIV",
          "Number": "200",
          "Section": "03",
          "Footnote": "Full title: Memories and Material Traces of Slavery in the Black Atlantic\r\nEquivalent to FREN 236. Counts toward the major in French & Francophone Studies.    ",
          "Title": "Memory and Material of Slavery",
          "Credit": 1,
          "CreditMax": null,
          "Res": "Closed",
          "Fy": "N",
          "HasPerm": "N",
          "HasGuide": "Y",
          "Meetings": [
            {
              "Location": "BIOL 101",
              "U": "N",
              "M": "N",
              "T": "N",
              "W": "Y",
              "R": "N",
              "F": "Y",
              "S": "N",
              "Start": "1330",
              "End": "1450",
              "Credit": 1
            }
          ],
          "Instructors": [
            {
              "Display": "Scholnick, Jonathan B."
            },
            {
              "Display": "Gosson, Renee K."
            }
          ],
          "Reqs": [
            {
              "Code": "CCIP",
              "Desc": "Integrated Perspectives",
              "Fy": "Y",
              "Uc": "Y"
            }
          ],
          "DeliveryMethods": [],
          "DeptCodes": [
            "FREN",
            "GEOG",
            "UNIV"
          ]
        }
      }
    },
    "activeSections": {
      "A": ""
    },
    "objectID": "202205UNIV200",
    "lectureSectionsHaveDifferentTitle": true
  }],
    schedules: null,
}

const userCoursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
          state.courses = action.payload
          // console.log(state.courses)
        },
        unsetCourses: (state) => {
            state.courses = null
        },
        addCourse: (state, action) => {
            // something!
        },
        updateSection: (state, action) => {
          const { courseId, sectionType, section } = action.payload;
          const courseIndex = state.courses.findIndex(course => course.objectID === courseId);
          const courseCopy = [...state.courses];
          courseCopy[courseIndex] = {
            ...state.courses[courseIndex],
            activeSections: {
              ...state.courses[courseIndex].activeSections,
              [sectionType]: section
            }
          };
          state.courses = courseCopy;
          // state.courses[courseId].activeSections[sectionType] = section;
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
    updateSection,
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