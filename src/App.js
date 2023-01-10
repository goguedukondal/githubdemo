
import './App.css';
import Profile from './Profile';
import { useEffect,useState } from 'react';
import { useRef } from 'react';
function App() {
  const [user,setUser] =useState('geeksterin');
  const [query,setQuery]=useState([]);
  const input = useRef();
  const [repo,setRepo]=useState([]);
  const [followers_list, setFollowers_List] = useState([]);
  const [following_list, setFollowing_List] = useState([]);
  
 

  useEffect(()=>{
    fetch( `https://api.github.com/users/${user}`).then(res=>res.json()).then(data=>setQuery(data));
    
  },[user]);
  console.log(query);
 

  useEffect(()=>{
    fetch(`https://api.github.com/users/${user}/repos`).then(res=>res.json()).then(data=>setRepo(data));
  },[user]);

   console.log(repo);

   useEffect(()=>{
    fetch(`https://api.github.com/users/${user}/followers`).then(res=>res.json()).then(data=>setFollowers_List(data));
  },[user]);
   
  useEffect(()=>{
    fetch(`https://api.github.com/users/${user}/following`).then(res=>res.json()).then(data=>setFollowing_List(data));
  },[user])

  console.log(followers_list);



  
 const submitHandler=()=>{
 setUser(input.current.value);
 }
  return (
    <div className="App">
      
       <div className='input-field'>
        
        <h1 className='search'>Search for Username</h1>
        <div>
        <input className='input-box' type="text" ref={input} />
        <button className='input-btn' type="submit" onClick={submitHandler} >Search</button>
        </div>
        
        
       </div>
       <div className='profile'>
       <Profile  image={query.avatar_url}
       followers_list ={followers_list}
       repo={repo}
       following_list={following_list}
       name={query.name} 
       login={query.login} 
       followers={query.followers} 
       repos={query.public_repos} 
       following={query.following}
       year={query.created_at}
      />
       </div>
       
    </div>
  );
}

export default App;
