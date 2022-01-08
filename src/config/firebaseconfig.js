import {initializeApp, initializeAuth} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {LogBox} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDIrd0c4cI8rryWEM1iPOlBSXUxx92Ky84',
  authDomain: 'savemylink-43a03.firebaseapp.com',
  projectId: 'savemylink-43a03',
  storageBucket: 'savemylink-43a03.appspot.com',
  messagingSenderId: '176006177074',
  appId: '1:176006177074:web:73dddd41e280ec1df9772b',
};

const theSettings = {
  experimentalForceLongPolling: true,
};

//remover quando o firebase conster o import do async-storage.
LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
]);

const firebaseApp = initializeApp(firebaseConfig);
const firestore = initializeFirestore(firebaseApp, theSettings);

// const auth = initializeAuth(firestore, {
//   persistence: AsyncStorage,
// });

// console.log(auth);
export default firestore;
