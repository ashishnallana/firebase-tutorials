import React,{useState,useEffect, createContext} from 'react'
import firebase from '../Firebase'

export const AuthContext = createContext()

function Auth({children}) {

    const [currentUser, setcurrentUser] = useState(null)
    const [loading, setloading] = useState(true)

    
    console.log(currentUser);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setcurrentUser(user)
            setloading(false)
        })
    }, [])

    if (loading) {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            <h1>Loading User...</h1>
          </div>
        );
      }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
            </AuthContext.Provider>
    )
}

export default Auth
