importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAZAaJRAM96oBqqRU_Dwt7rUCpw7BSTsQ0",
    authDomain: "departmentdashboard-dec42.firebaseapp.com",
    projectId: "departmentdashboard-dec42",
    storageBucket: "departmentdashboard-dec42.appspot.com",
    messagingSenderId: "158914228853",
    appId: "1:158914228853:web:ebd884de4929da4bce7e3c",
    measurementId: "G-03QKLF80GD"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});