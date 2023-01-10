import React from 'react'
import Followers from './Followers';
import { useState } from 'react';
import './App.css';
import Repo from './Repo';
import Following from './Following';
const Profile = (props) => {
  const [success, setSuccess] = useState(1);
  //console.log(props.followers_list);
  const clicked = _=>{
    setSuccess(1);
    console.log("sai");
   // console.log(props.following_list);
  }
  const clicked2 = _ =>{
    setSuccess(2);
  }
  const clicked3 = _ =>{
    setSuccess(3);
  }
  let created_date=(props.year);
   let my_array = created_date.split("-");

  let created_year =Number(my_array[0]);

  

  const d = new Date();
  let current_year = d.getFullYear();

   var since = current_year-created_year;


  return (
    <div className='profile-component'>
       <div className='profile-part'>
        <img className="profile-pic" src={props.image} alt="pic"/>
        <div className='profile-details'>
        <h2 >
        {props.name} 
        </h2> 
        <p className='login'>@{props.login}</p>
        <p className='year'>Member since {since} years ago</p>
        
        </div>
        
        
        </div> 
        <div className='details-part'>
          <button className='followers' onClick={()=>clicked()}>{props.followers}   <p>Followers</p></button>
          <button className='repos' onClick={()=>clicked2()}> {props.repos}   <p>Repos</p></button>
          <button className='following' onClick={()=>clicked3()}>{props.following}  <p>Following</p> </button>

        </div>
        {success === 1 ?<Followers s1={props.followers_list} />:" " }
        {success === 2 ?<Repo s2={props.repo}/>:" " }
        {success === 3 ?<Following s3={props.following_list}/>:" " }
        
        
    </div>
  )
}

export default Profile