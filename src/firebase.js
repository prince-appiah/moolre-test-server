// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAo6gMEPG7AgCSiMiXRbIaI7_yAkvMJCOw",
//   authDomain: "moolre-test.firebaseapp.com",
//   projectId: "moolre-test",
//   storageBucket: "moolre-test.appspot.com",
//   messagingSenderId: "182049469650",
//   appId: "1:182049469650:web:96368318dd69dd06a6a90b",
//   measurementId: "G-919WVN639H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const admin = require("firebase-admin");

const serviceAcc = require("./moolre-firebase-sdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAcc),
  storageBucket: "moolre-test.appspot.com",
});

const bucket = admin.storage().bucket();

const uploadFile = async (file) => {
  try {
    const response = await bucket.upload();
  } catch (error) {
    console.log("🚀 ~ error", error);
  }
};

module.exports = { uploadFile };
