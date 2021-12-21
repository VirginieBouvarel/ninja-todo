import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

let config = {
  apiKey: "AIzaSyDoMYIz67QrRv98Y43UIiEF2K21khko4Ic",
  authDomain: "ninja-todo-ef0a0.firebaseapp.com",
  databaseURL: "https://ninja-todo-ef0a0.firebaseio.com",
  projectId: "ninja-todo-ef0a0",
  storageBucket: "ninja-todo-ef0a0.appspot.com",
  messagingSenderId: "197886685103",
  appId: "1:197886685103:web:c50904ea39ad275c34895a"
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;

