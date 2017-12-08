import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAUgjbBWcZTOlf7S8jOmfVk380WR0j2Ur0",
  authDomain: "netguru-duel-extended-edition.firebaseapp.com",
  databaseURL: "https://netguru-duel-extended-edition.firebaseio.com",
  projectId: "netguru-duel-extended-edition",
  storageBucket: "netguru-duel-extended-edition.appspot.com",
  messagingSenderId: "838776370740"
};

const fire = firebase.initializeApp(config);
export default fire;
