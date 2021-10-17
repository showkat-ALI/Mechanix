import React,{createContext} from 'react'
import useFirebase from "../hook/useFirebase"
export const AuthContext = createContext()
function AuthProvider({children}){
    const allcontexts = useFirebase()
    return(
    
        <AuthContext.Provider value={allcontexts}>
            {
                children
            }

        </AuthContext.Provider>
        )
    

}
export default AuthProvider
