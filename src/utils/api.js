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

            // Add all fields
            db.collection('students').doc('A01036028').collection('enrolment').doc(course).set({
              ...data
            })

            // Delete fields in document (during dev)
            // db.collection('students').doc('A01036028').collection('enrolment').doc(course).set({
            //
            // })
          })

        // Add announcements subcollection
        db.collection('courses').doc(course).collection('announcements').get()
          .then((snap) => {
            snap.forEach((docRef) => {
              db.collection('students')
                  .doc('A01036028')
                .collection('enrolment')
                  .doc(course)
                .collection('announcements')
                  .doc(docRef.id).set({
                    ...docRef.data()
                  })
            })
          })

        // Add assignments subcollection
        db.collection('courses').doc(course).collection('assignments').get()
          .then((snap) => {
            snap.forEach((docRef) => {
              db.collection('students')
                  .doc('A01036028')
                .collection('enrolment')
                  .doc(course)
                .collection('assignments')
                  .doc(docRef.id).set({
                    ...docRef.data()
                  })
            })
          })

        // Add quizzes subcollection
        db.collection('courses').doc(course).collection('quizzes').get()
          .then((snap) => {
            snap.forEach((docRef) => {
              db.collection('students')
                  .doc('A01036028')
                .collection('enrolment')
                  .doc(course)
                .collection('quizzes')
                  .doc(docRef.id).set({
                    ...docRef.data()
                  })
            })
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

// Delete field from collection
// db.collection('courses').get()
//   .then((snap) => {
//     snap.forEach((docRef) => {
//       db.collection('courses').doc(docRef.id).update({
//         announcements: firebase.firestore.FieldValue.delete()
//       })
//     })
//   })
