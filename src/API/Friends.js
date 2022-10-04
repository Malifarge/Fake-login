const getFriends = async () =>{
    const request = await fetch('https://randomuser.me/api/?results=10')
    const response = await request.json()
    return (response);
}

export {getFriends}