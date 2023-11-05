import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Comment = () => {
  const [comment,setcomment]=useState()

    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(res=>res.json())
        .then(data=>{
            setcomment(data)
            console.log(data)
        })
    },[])
   console.log(comment)
    return (
        <div>
           <div>
           {/* {
            comment.map(blog=><h1>kjxhgj</h1>)
           } */}
           </div>
        </div>
    );
};

export default Comment;