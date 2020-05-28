import app from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDUiXjZlwcySDlFcImuGRY1ny-o4gi7-iA",
    authDomain: "churchwebsite-9fcad.firebaseapp.com",
    databaseURL: "https://churchwebsite-9fcad.firebaseio.com",
    projectId: "churchwebsite-9fcad",
    storageBucket: "churchwebsite-9fcad.appspot.com",
    messagingSenderId: "438123093575",
    appId: "1:438123093575:web:533370db6946aeb4c81b62",
    measurementId: "G-P01WJ1Y3CV"
  };
 
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }
  database = () => {
    return app.database()
  }
}
 
export default Firebase;