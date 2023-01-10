import React from 'react'

const Repo = (props) => {
  console.log(props.s2);
  return (
    <div className='same'>
      <h1 className='repo_List'>   Repo List</h1>
      <h2 className='Name'>  # Name</h2>
      <div>
      <ol>
    {(props.s2).map((e,i)=>
       <li className='list'> 
        {e.name}
       </li>
      )}
    </ol>
      </div>
   
      
    </div>
    
  )
}

export default Repo