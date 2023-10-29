import axios from "axios";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await axios.post("/api/auth/google", {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      console.log(res)
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with google
    </button>
  );
}

export default OAuth;
