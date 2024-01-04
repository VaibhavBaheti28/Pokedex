import { useAppDispatch } from "../app/hooks";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
import { getUserPokemons } from "../app/reducers/getUserPokemons";

function Login() {
  const dispatch = useAppDispatch();
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
          await addDoc(collection(firebaseDB, "pokemonList"), {
            email: user.email,
            pokemon: [],
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

  return (
    <div className="login">
      <button onClick={handleLogin} className="login-btn">
        <FcGoogle /> Login with Google
      </button>
    </div>
  );
}

export default Login;
