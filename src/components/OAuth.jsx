import { useLocation, useNavigate } from "react-router-dom"
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import {db} from "../firebase.config"
import googleIcon from "../assets/svg/googleIcon.svg"
import { toast } from "react-toastify"

function OAuth() {
    const onGoogleClick = async () =>{
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            // check for user
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)

            // if user doesnt exist, create user
            if (!docSnap.exists()){
                await setDoc(doc(db, "users", user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp()
                })
            }
            navigate("/")
        } catch (error) {
            toast.error("Could not authorize with Google")
        }
    }
    const navigate = useNavigate()
    const location = useLocation()
  return <div className="socialLogin">
    <p> Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
    <button className="socialIconDiv" onClick={onGoogleClick} >
        <img className="socialIconImg" src={googleIcon} alt="" />
    </button>
  </div>
}

export default OAuth