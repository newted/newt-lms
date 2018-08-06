let courses = {
  BSYS3000: {
    id: 'BSYS3000',
    name: 'Cloud Business Development I',
    shortname: 'BSYS 3000',
    department: 'Business Systems',
    school: 'School of Business'
  },
  BSYS3105: {
    id: 'BSYS3105',
    name: 'Information Technology I',
    shortname: 'BSYS 3105',
    department: 'Business Systems',
    school: 'School of Business'
  },
  BSYS3205: {
    id: 'BSYS3205',
    name: 'Business Intelligence I',
    shortname: 'BSYS 3205',
    department: 'Business Systems',
    school: 'School of Business'
  },
  BSYS3355: {
    id: 'BSYS3355',
    name: 'Management Information Systems',
    shortname: 'BSYS 3355',
    department: 'Business Systems',
    school: 'School of Business'
  },
  BUSA4850: {
    id: 'BUSA4850',
    name: 'Consulting Skills and Problem Solving',
    shortname: 'BUSA 4850',
    department: 'Business Administration',
    school: 'School of Business'
  },
  FMGT2331: {
    id: 'FMGT3221',
    name: 'Management Accounting Administration',
    shortname: 'FMGT 3221',
    department: 'Financial Management',
    school: 'School of Business'
  },
  OMPT2172: {
    id: 'OPMT2172',
    name: 'Applied Management Engineering',
    shortname: 'OPMT 2172',
    department: 'Operations Management',
    school: 'School of Business'
  },
  OMPT3302: {
    id: 'OPMT3302',
    name: 'Quantitative Business Analytics',
    shortname: 'OPMT 3302',
    department: 'Operations Management',
    school: 'School of Business'
  },
}

export function _getCourses() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...courses}), 1000)
  })
}
