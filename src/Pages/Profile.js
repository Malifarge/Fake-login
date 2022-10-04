/* eslint-disable react-hooks/exhaustive-deps */

import { useNavigate,Link } from "react-router-dom"
import { useContext,useEffect } from "react"

import { UserContext } from "../Context/User"
import { FriendsContext } from "../Context/Friends"
import { getFriends } from "../API/Friends"

import H1 from "../Components/H1"
import H2 from "../Components/H2"
import Card from "../Components/Card"

const Profile = () =>{

    const navigate = useNavigate()

    const {user} = useContext(UserContext)
    const {friends, setFriends} = useContext(FriendsContext)

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[])

    const handleClickAdd = async () =>{
        const dataFriends = await getFriends()
        setFriends(dataFriends.results);
    }

    return(
        <>
            <H1>Profile</H1>
            {user && <Card user={user}/>}
            <H2>Friends</H2>
            <section className='sectionFriends'>
                {friends.length>0 ? <section className='sectionFriends'><article className="friendslist">{friends.map(friend=>{ return <p key={friend.name.first}>{friend.name.first} {friend.name.last}</p>})} </article> <button className="centerBtn"><Link to={'/Friends'}>see Friends</Link></button></section> : <button className="centerBtn" onClick={handleClickAdd}>add Friend</button> }
            </section>
        </>
    )
}

export default Profile