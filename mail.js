const firebaseConfig = {

  //   copy your firebase config informations
  apiKey: "AIzaSyDo0ZRSYjxsVyVSm5N_2-ilB4JavvxzD5g",
     authDomain: "contact-form-4450b.firebaseapp.com",
     databaseURL: "https://contact-form-4450b-default-rtdb.firebaseio.com",
     projectId: "contact-form-4450b",
     storageBucket: "contact-form-4450b.appspot.com",
     messagingSenderId: "108241093670",
     appId: "1:108241093670:web:65300fb7861c6411a492e7",
     measurementId: "G-3D9XE71B5B"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contact-form");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  // console.log(name,emailid,msgContent);
  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
