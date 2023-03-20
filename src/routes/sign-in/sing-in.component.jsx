import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }

    return (
        <div>
            <h2>Sign-in page</h2>
            <button onClick={ logGoogleUser }>
                Sign In with Google Popup
            </button>
        </div>
    )
}

export default SignIn;
