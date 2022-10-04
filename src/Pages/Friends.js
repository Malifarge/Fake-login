
import { Link } from "react-router-dom"
import { useContext } from "react"

import { FriendsContext } from "../Context/Friends"

import Card from "../Components/Card"
import H1 from "../Components/H1"

const Friends = () =>{

    const {friends } = useContext(FriendsContext)

    return(
        <>
            {friends.length>0? <section className="Friendsect"> <div className="friendhead"><H1>Friends</H1> <button><Link to={'/Profile'}>Return to profil</Link></button></div> {friends.map(friend=>{return <Card user={friend}/>})} <button className="centerBtn"><Link to={'/Profile'}>Return to profil</Link></button></section> : <p>No friend in your list</p>}
            
        </>
    )
}

export default Friends