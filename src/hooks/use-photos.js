import { useContext,useState,useEffect } from "react";

import UserContext from '../context/user'
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
    const [photos, setPhotos] = useState(null);

    const {
        user: {uid: userId = ''}
    } = useContext(UserContext)

    useEffect(() =>{
        async function getTimelinePhotos(){
            const [{following}] = await getUserByUserId(userId);
            let followedUserPhotos = []

            if (following.length > 0){
                followedUserPhotos = await getPhotos(userId, following)
            }
            followedUserPhotos.sort((a,b) => b.dateCreated - a.dateCreated)
            setPhotos(followedUserPhotos)
        }   
       getTimelinePhotos(); 
    },[userId])

    return {photos};
}
