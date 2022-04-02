import React,{useContext} from 'react'
import { AuthContext } from './auth/Auth'
// import firebase from "./Firebase";

function AfterAuth() {

    const {currentUser }  = useContext(AuthContext)
    console.log(currentUser);

    const UserEmail = currentUser ? currentUser.email : ""

    return (
        <div>
            <h2>{`welcome ${UserEmail}`}</h2>
            {/* <button onClick={() => {
                firebase.auth().signOut();
                localStorage.setItem("userLogged", false);
            }}>Log Out</button> */}
        </div>
    )
}

export default AfterAuth
