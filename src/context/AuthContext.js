import { createContext , useContext , useState} from "react";
import { requester } from "../requester";


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

        const logTeach = async (email, password) => {
            console.log( email , password );
            try{
                // console.log(dat);
                const response = await requester.post('/api/v1/users/login/' ,{
                    email,
                    password
                })
                
                localStorage.setItem('access', JSON.stringify(response.data));
            }catch(e){  
                console.log(e.message);
            }
        }

    return(
        <UserContext.Provider value={{ logTeach }}>
                {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}