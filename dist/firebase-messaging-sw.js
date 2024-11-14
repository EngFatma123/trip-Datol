// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({ 
   apiKey: "AIzaSyAHv-dji2G4lZZmDJT1RLk7St3ca-YMbrs",
  authDomain: "uni-bus-fd782.firebaseapp.com",
  projectId: "uni-bus-fd782",
  storageBucket: "uni-bus-fd782.appspot.com",
  messagingSenderId: "537386231648",
  appId: "1:537386231648:web:40ef1c7d889b4d2ca42005",
  measurementId: "G-GZL92T8Z45"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });