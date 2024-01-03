import { useAppDispatch } from "../app/hooks";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
import { getUserPokemons } from "../app/reducers/getUserPokemons";

function Login() {
  const dispatch = useAppDispatch();
  const userPokemons = getUserPokemons();
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const { user } = result;

      if (user && user.email && user.uid) {
        const firestoreQuery = query(usersRef, where("uid", "==", user.uid));
        const fetchedUser = await getDocs(firestoreQuery);

        if (fetchedUser.docs.length === 0) {
          await addDoc(collection(firebaseDB, "users"), {
            uid: user.uid,
            email: user.email,
          });
        }
        dispatch(setUserStatus({ email: user.email }));
        dispatch(getUserPokemons());
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle the error (e.g., show an error message)
    }
  };

  const handleSignOut = async () => {
    try {
      // Update userPokemons in Firestore before signing out
      if (userPokemons.length > 0) {
        const user = firebaseAuth.currentUser;
        if (user) {
          const userDocRef = doc(usersRef, user.uid); // Reference to the document for the current user
          await updateDoc(userDocRef, { userPokemons });
        }
      }
      await firebaseAuth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="login">
      <button onClick={handleLogin} className="login-btn">
        <FcGoogle /> Login with Google
      </button>
      <button onClick={handleSignOut} className="signout-btn">
        Sign Out
      </button>
    </div>
  );
}

export default Login;
