import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Configure Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBBAg-vfw0ickQ64z4EiPaBppn3cFu1h2M",
  authDomain: "authentication-for-myntraclone.firebaseapp.com",
  projectId: "authentication-for-myntraclone",
});

// Sign in with email and password

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    // console.log(user);
    return user;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

// Register with email and password
export const registerWithEmailAndPassword = async (displayName, email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await user.updateProfile({
        displayName: displayName,
    });
        // console.log(user);
        return user;

  } catch (error) {
    // console.log(error);
    return null;
  }
};

// Sign out
export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    // updateLoginStatus(false);
    // // console.log(isLoggedin);
    const status="signedout";
    return status;
  } catch (error) {
    // console.log(error);
  }
};
