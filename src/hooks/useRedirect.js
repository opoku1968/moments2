import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useRedirect = (userAuthStatus) => {
    const history = useNavigate()
    useEffect(() => {
        const handleMount = async() => {
            try {
                await axios.post('/dj-rest-auth/token/refresh/',{withCredentials: false,},{headers:{
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                  }})
                if (userAuthStatus === 'loggedIn'){
                    history('/')
                }

            }catch(err){
                    if (userAuthStatus === 'loggedOut'){
                        history('/')
                    }
            }
        }
        handleMount();

    },[history,userAuthStatus])

}