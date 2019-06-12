import { firebase } from "./Firebase";

var db = firebase.firestore();
var events = db.collection("Events");
var users = db.collection("Users");

//add an event to the Events collection
// addEvent = function(data) {
//     add.collection('Events');
//     return collection.add(data);
//   };

//get all events
const getEvents = () =>
  events.get().then(function(querySnapshot) {
    const data = querySnapshot.docs.map(function(doc) {
      return doc.data();
    });
    return data;
  });

// //get a particular event by id
// getEvent = function(id) {
// return events.doc(id).get();
// };

//add a user to the Users collection
const addUser = data => {
  return users
  .doc(uid)
    .set(data)
    .then(function(docRef) {
      console.log("User successfully created!", docRef);
      return docRef;
    })
    .catch(function(error) {
      console.error("Error creating user: ", error);
      return error;
    });
};

// logging in a user to the application

// //get a particular user by id
// getUser = function(id) {
//     return users.doc(id).get();
//     };

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

export { getEvents, addUser };
