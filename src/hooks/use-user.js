import {useEffect,useContext,useState} from 'react'
import UserContext from '../context/user'
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext)
    useEffect(() => {
        async function getUserObjByUserId() {

            const [Response] = await getUserByUserId(user.uid);
            setActiveUser(Response || {});
            
        }
        
        if(user?.uid){
            getUserObjByUserId();
        }
    },[user]);
    return { user: activeUser };
}