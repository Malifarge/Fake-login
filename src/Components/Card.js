import { useState } from "react"
import moment from 'moment';

const Card = ({user}) =>{

    const [details,setDetails] = useState({title: "Hi, My name is", value:`${user.name.first} ${user.name.last}`, class: 'name'})

    const handleMouseEnter = e =>{
        setDetails(e.target.dataset);
    }

    return(
        <article className="Card">

            <div className="details">
                <div className="user_photo horizontal_center">
                    <img src={user.picture.large}/>
                    <p>{details.title}</p>
                    <p>{details.value}</p>
                </div>
                
            </div>
            <ul className="values_list horizontal_center">
                <li data-title="Hi, My name is" data-value={`${user.name.first} ${user.name.last}`} data-class='name' className={`${details.class==='name' && 'active'} name`} onMouseEnter={handleMouseEnter}></li>
                <li data-title="My email address is" data-value={user.email} data-class='email' className={`${details.class==='email' && 'active'} email`} onMouseEnter={handleMouseEnter}></li>
                <li data-title="My birthday is" data-value={moment(user.dob.date).format('DD/MM/YYYY')} data-class='birthday' className={`${details.class==='birthday' && 'active'} birthday`} onMouseEnter={handleMouseEnter}></li>
                <li data-title="My address is" data-value={`${user.location.street.number} ${user.location.street.name}`} data-class='location' className={`${details.class==='location' && 'active'} location`} onMouseEnter={handleMouseEnter}></li>
                <li data-title="My phone number is" data-value={user.phone} data-class='phone' className={`${details.class==='phone' && 'active'} phone`} onMouseEnter={handleMouseEnter}></li>
                <li data-title="My password is" data-value={user.login.password} data-class='password' className={`${details.class==='password' && 'active'} password`} onMouseEnter={handleMouseEnter}></li>
            </ul>
        </article>
    )
}

export default Card