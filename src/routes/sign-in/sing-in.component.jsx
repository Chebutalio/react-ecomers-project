import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };


    return (
        <div>
            <h2>Sign-in page</h2>
            <button onClick={ logGoogleUser }>
                Sign In with Google Popup
            </button>

            <div className='pagination'>
                <ul className='list-page'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>

        </div>
    )
}

export default SignIn;
