import './App.css';
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function App() {
  const [comments,setComments]=useState([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log(comments)
  }, [comments])
  const fetchComments=async()=>{
    const response=await Axios('https://jsonplaceholder.typicode.com/comments');
    setComments(response.data)    
  }
  return (
    <div className="App">
      {
        comments && comments.map(comment=>{
          return(
            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}></div>
          )
        })
      }
    </div>
  );
}

export default App;