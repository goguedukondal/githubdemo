import React from 'react'

const Following = (props) => {
  // console.log(props.s3);
  return (
    <div className='same'>
      <h1 className='follow'>Following</h1>
      <ol>
      {(props.s3).map((e,i)=>
      <li  className='list'>
       {e.login} 
        </li> 
      )}
      </ol>
      
    </div>
  )
}

export default Following
