import firebase from "./Firebase";


var events = firebase.firestore().collection("Events");

//get all events
const getEvents = () =>
  events.get().then(function(querySnapshot) {
    const data = querySnapshot.docs.map(function(doc) {
      return doc.data();
    });
    return data;
  });

//add an event to the Events collection
// addEvent = function(data) {
//     add.collection('Events');
//     return collection.add(data);
//   };

// //update user details
// users.doc(mariam).update({
//     username: "marie"
// })
// .then(function(docRef) {
//     console.log("User details successfully edited!", docRef);
// })
// .catch(function(error) {
//     console.error("Error editing user details: ", error);
// });

// //delete a user
// Users.doc(mariam).delete()
// .then(function() {
//     console.log("User successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing user: ", error);
// });

export { getEvents };
