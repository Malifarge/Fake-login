/* eslint-disable react-hooks/exhaustive-deps */

import { useNavigate } from "react-router-dom"
import { useContext,useEffect } from "react"

import { UserContext } from "../Context/User"

import H1 from "../Components/H1"
import Card from "../Components/Card"

const Profile = () =>{

    const navigate = useNavigate()

    const {user} = useContext(UserContext)

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[])


    return(
        <>
            <H1>Profile</H1>
            {user && <Card user={user}/>}
        </>
    )
}

export default Profile