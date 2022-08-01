import React, { createContext , useState} from "react";

const themeCss = {
    background : "red"
}
const styles: React.CSSProperties  ={
    color: 'green'
}
 type userType =  {
    name : string
    password: string 
}
type setUserType = React.Dispatch<React.SetStateAction<userType | null>> | null;
export const ThemeContext = createContext<{themeCss:React.CSSProperties, user:userType | null, setUser: setUserType}>({themeCss, user: null , setUser :null})

 export const ThemeProvider = ({children}: {children : React.ReactNode})=> {
    const [user, setUser] = useState<userType| null>(null)

    return <ThemeContext.Provider value={{themeCss, user, setUser}}>
                 <div style={styles}>
                  {children}
                  </div>
            </ThemeContext.Provider>


}