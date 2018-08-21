// import {
//   _getCourses,
//   _getAssignments,
//   _getAnnouncements,
//   _getQuizzes,
//   _getGrades
// } from './_DATA.js'
// import firebase from '../backend/firebase'
//
//
//
// export function getInitialData() {
//   return Promise.all([
//     _getCourses(),
//     _getAssignments(),
//     _getAnnouncements(),
//     _getQuizzes(),
//     _getGrades()
//   ]).then(([courses, assignments, announcements, quizzes, grades]) => ({
//       courses,
//       assignments,
//       announcements,
//       quizzes,
//       grades
//     }))
// }

// Example of how to add doc reference to array

// db.collection('assignments').add({
//   name: "Setup a server",
//   details: "Setup an Apache2 server on Amazon Lightsail"
// })
// .then((docRef) => {
//   // db.collection('courses').doc('BSYS3105').update({
//   //   assignments: []
//   // })
//   //
//   db.collection('courses').doc('BSYS3105').update({
//     assignments: firebase.firestore.FieldValue.arrayUnion(docRef)
//   })
//   // console.log(docRef)
// })
