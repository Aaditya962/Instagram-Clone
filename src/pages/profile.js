import { useParams, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import { getUserByUserName } from "../services/firebase";
import * as ROUTES from '../constants/routes'
import Header from "../components/header";
import UserProfile from '../components/profile/index'
export default function Profile() {
    const { username } = useParams();
    const [userN,setUser] = useState(null)
    const [userExists,setUserExists] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUserName(username)
            if(user.length>0){
                setUser(user[0])
                setUserExists(true)
            }
            else{
                navigate(ROUTES.NOT_FOUND)
            }
        }

        checkUserExists();
    },[username,navigate])
    return userExists ? (
        <div className="bg-gray-background">
            <Header />
           
            <div className="mx-auto max-w-screen-lg">
                 <UserProfile user={userN} />
            </div>
        </div>
    ) : null
}