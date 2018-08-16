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
    announcements: ['bsys3000annc1', 'bsys3000annc2']
  },
  BSYS3105: {
    id: 'BSYS3105',
    name: 'Information Technology I',
    shortname: 'BSYS 3105',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: ['bsys3105assgn1', 'bsys3105assgn2'],
    announcements: ['bsys3105annc1', 'bsys3105annc2']
  },
  BSYS3205: {
    id: 'BSYS3205',
    name: 'Business Intelligence I',
    shortname: 'BSYS 3205',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: []
  },
  BSYS3355: {
    id: 'BSYS3355',
    name: 'Management Information Systems',
    shortname: 'BSYS 3355',
    department: 'Business Systems',
    school: 'School of Business',
    icon: BSYSicon,
    assignments: []
  },
  BUSA4850: {
    id: 'BUSA4850',
    name: 'Consulting Skills and Problem Solving',
    shortname: 'BUSA 4850',
    department: 'Business Administration',
    school: 'School of Business',
    icon: BUSAicon,
    assignments: []
  },
  FMGT2331: {
    id: 'FMGT3221',
    name: 'Management Accounting Administration',
    shortname: 'FMGT 3221',
    department: 'Financial Management',
    school: 'School of Business',
    icon: FMGTicon,
    assignments: []
  },
  OMPT2172: {
    id: 'OPMT2172',
    name: 'Applied Management Engineering',
    shortname: 'OPMT 2172',
    department: 'Operations Management',
    school: 'School of Business',
    icon: OPMTicon,
    assignments: []
  },
  OMPT3302: {
    id: 'OPMT3302',
    name: 'Quantitative Business Analytics',
    shortname: 'OPMT 3302',
    department: 'Operations Management',
    school: 'School of Business',
    icon: OPMTicon,
    assignments: []
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
