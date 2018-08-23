import firebase from '../backend/firebase'
import db from '../backend/db'

// Copy course data from programs root collection and adds it to students
// enrolment subcollection
// Currently specific to me (my student ID, program)
export function addCoursesToEnrolment(db) {
  db.collection('programs').doc('ITMG').get()
    .then((docRef) => {
      const data = docRef.data()
      const courses = data.courses
      const semester3 = courses.semester3

      semester3.forEach((course) => {
        db.collection('courses').doc(course).get()
          .then((docRef) => {
            const data = docRef.data()

            db.collection('students').doc('A01036028').collection('enrolment').doc(course).set({
              ...data
            })

            // Delete fields in document (during dev)
            // db.collection('students').doc('A01036028').collection('enrolment').doc(course).set({
            //
            // })
          })
      })
    })
}


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
