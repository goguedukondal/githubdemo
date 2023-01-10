import React from 'react'

const Followers = (props) => {
  // console.log("welcome");
  //   console.log(props.s1);
  return (
    <div className='same'>
      <h2 className='follow'>Followers</h2>
      
    <ol>
    {(props.s1).map((e,i)=>
  
  <li className='list'>
    {e.login}
  </li>


       
    )}
    </ol>
    
    </div>
  )
}

export default Followers