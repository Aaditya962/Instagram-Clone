import {useState,useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import SuggestedProfile from './suggestedprofie';
import { getSuggestedProf } from '../../services/firebase';
import UserContext from '../../context/user';
export default function Suggestions({userId,following,loggedInUserDocId}){
     const [profiles, setProfiles ] = useState(null);
     useEffect(() => {

        async function suggestedProfiles() {
            const res = await getSuggestedProf(userId,following)
            setProfiles(res);
        }
        if(userId){
        suggestedProfiles();
        }
     }, [userId])
    return !profiles ? (
        <Skeleton count={1} height={150} className='mt-5' />
    ) : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm fkex items-center align-items justify-between mb-2">
            <p className="font-bold text-gray-base">Suggestions for you</p>
            </div>
            <div className="mt-4 grid gap-5">
                {profiles.map((profile) => (
                    <SuggestedProfile
                     key={profile.docId}
                     profileDocId={profile.docId}
                     username={profile.username}
                     profileId={profile.userId}
                     userId={userId}
                     loggedInUserDocId={loggedInUserDocId}
                     />
                ))}
            </div>
        </div>
    ) : null
}

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array,
    loggedInUserDocId: PropTypes.string
}