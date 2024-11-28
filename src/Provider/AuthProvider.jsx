import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../FireBase.Config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [items, setItems] =useState([])
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");


    useEffect(() => {
        fetch('../../public/SpanishVocabulary.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])






// signUp for a new user


const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)


}


// login

const login = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)

}

// signOut

 const logOut = () => {
    setLoading(true);
    return signOut(auth);
 }



    // observer 


    useEffect(() => {

        const unSubscribe =  onAuthStateChanged(auth, curentUser => {
              setUser(curentUser);
              setLoading(false)
             
          })
  
          return () => {
  
              unSubscribe()
          }
  
      },[auth])


     









    // shared data

    const sharedData = {
        items,
        signUp,
        user,
        setUser,
        setError,
        error,
        login,
        auth,
        setSuccess,
        success,
        logOut,
        loading
      
       
        
    }




    return <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
}
    

export default AuthProvider;