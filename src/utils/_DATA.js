import { BUSAicon, BSYSicon, OPMTicon, FMGTicon } from './icons.js'

let courses = {
  BSYS3000: {
    id: 'BSYS3000',
    name: 'Cloud Business Development I',
    shortname: 'BSYS 3000',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: ['bsys3000assgn1', 'bsys3000assgn2'],
    announcements: ['bsys3000annc1', 'bsys3000annc2'],
    quizzes: ['bsys3000quiz1', 'bsys3000quiz2', 'bsys3000quiz3'],
    grades: ['bsys3000grade1', 'bsys3000grade2'],
  },
  BSYS3105: {
    id: 'BSYS3105',
    name: 'Information Technology I',
    shortname: 'BSYS 3105',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: ['bsys3105assgn1', 'bsys3105assgn2'],
    announcements: ['bsys3105annc1', 'bsys3105annc2'],
    quizzes: ['bsys3105quiz1', 'bsys3105quiz2', 'bsys3105quiz3'],
    grades: ['bsys3105grade1', 'bsys3105grade2']
  },
  BSYS3205: {
    id: 'BSYS3205',
    name: 'Business Intelligence I',
    shortname: 'BSYS 3205',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
  BSYS3355: {
    id: 'BSYS3355',
    name: 'Management Information Systems',
    shortname: 'BSYS 3355',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
  BUSA4850: {
    id: 'BUSA4850',
    name: 'Consulting Skills and Problem Solving',
    shortname: 'BUSA 4850',
    department: 'Business Administration',
    school: 'School of Business',
    icon: BUSAicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
  FMGT2331: {
    id: 'FMGT3221',
    name: 'Management Accounting Administration',
    shortname: 'FMGT 3221',
    department: 'Financial Management',
    school: 'School of Business',
    icon: FMGTicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
  OMPT2172: {
    id: 'OPMT2172',
    name: 'Applied Management Engineering',
    shortname: 'OPMT 2172',
    department: 'Operations Management',
    school: 'School of Business',
    icon: OPMTicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
  OMPT3302: {
    id: 'OPMT3302',
    name: 'Quantitative Business Analytics',
    shortname: 'OPMT 3302',
    department: 'Operations Management',
    school: 'School of Business',
    icon: OPMTicon,
    assignments: [],
    announcements: [],
    quizzes: [],
    grades: [],
  },
}

let assignments = {
  "bsys3000assgn1": {
    id: "bsys3000assgn1",
    name: "Worksheet 1",
    details: "What is the cloud?"
  },
  "bsys3000assgn2": {
    id: "bsys3000assgn2",
    name: "Worksheet 2",
    details: "Plan your first cloud server"
  },
  "bsys3105assgn1": {
    id: "bsys3105assgn1",
    name: "Make a website",
    details: "Design and build your own website"
  },
  "bsys3105assgn2": {
    id: "bsys3105assgn2",
    name: "Setup a server",
    details: "Setup an Apache2 server on Amazon Lightsail"
  }
}

let announcements = {
  "bsys3000annc1": {
    id: "bsys3000annc1",
    text: "This Tuesday's lecture has been cancelled."
  },
  "bsys3000annc2": {
    id: "bsys3000annc2",
    text: "Term Project resources have been uploaded."
  },
  "bsys3105annc1": {
    id: "bsys3105annc1",
    text: "Due to a OpScan failure everyone has been graded 100% in Quiz 3."
  },
  "bsys3105annc2": {
    id: "bsys3105annc2",
    text: "Just a reminder to bring your laptops to our next lab"
  }
}

let quizzes = {
  "bsys3000quiz1": {
    id: "bsys3000quiz1",
    text: "Lecture Quiz 1"
  },
  "bsys3000quiz2": {
    id: "bsys3000quiz2",
    text: "Lecture Quiz 2"
  },
  "bsys3000quiz3": {
    id: "bsys3000quiz3",
    text: "Lecture Quiz 3"
  },
  "bsys3105quiz1": {
    id: "bsys3105quiz1",
    text: "Quiz 1"
  },
  "bsys3105quiz2": {
    id: "bsys3105quiz2",
    text: "Quiz 2"
  },
  "bsys3105quiz3": {
    id: "bsys3105quiz3",
    text: "Quiz 3"
  },
}

let grades = {
  "bsys3000grade1": {
    id: "bsys3000grade1",
    quizId: "bsys3000quiz1",
    text: '',
    details: 90
  },
  "bsys3000grade2": {
    id: "bsys3000grade2",
    quizId: "bsys3000quiz2",
    text: '',
    details: 76
  },
  "bsys3105grade1": {
    id: "bsys3105grade1",
    quizId: "bsys3105quiz1",
    text: '',
    details: 78
  },
  "bsys3105grade2": {
    id: "bsys3105grade2",
    quizId: "bsys3105quiz2",
    text: '',
    details: 72.5
  },
}

export function _getCourses() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...courses}), 1000)
  })
}

export function _getAssignments() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...assignments}), 1000)
  })
}

export function _getAnnouncements() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...announcements}), 1000)
  })
}

export function _getQuizzes() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...quizzes}, 1000))
  })
}

export function _getGrades() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...grades}, 1000))
  })
}
