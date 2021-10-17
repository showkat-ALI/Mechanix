import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useState,useEffect } from "react";
import initAuth from "../Pages/Signin/Firebase/firebase.init";
initAuth()
function useFirebase(){
    const[user,setUser]= useState({})
    const[isLoading,setIsLoading]=useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const googleSignin =()=>{
    setIsLoading(true)
    
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
        setUser(result.user)
    })
    .finally(()=>setIsLoading(false))
}
    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribed

    },[])
    
const logOut = ()=>{
    setIsLoading(true)

    signOut (auth)
    .then(()=>{
        setUser({})
    })
    .finally(()=>setIsLoading(false))
}





return {
    user,
    logOut,
    isLoading,
    googleSignin
}
}
export default useFirebase