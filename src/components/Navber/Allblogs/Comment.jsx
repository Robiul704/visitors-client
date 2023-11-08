
import axios from "axios";
import { useState } from "react";


const Comment = ({id}) => {
  const [comments,setcomments]=useState([])
  console.log(comments)
  console.log(id)
 

  axios.get(`https://blog-webside-serber-side.vercel.app/comments/${id}`)
  .then(res=>{
      console.log(res.data)
      setcomments(res.data)
  })






  

    
    return (
        <div>
           <div className="bg-white my-5 py-10">
            <h1 className="text-3xl font-bold">Comments</h1>
           {
            comments.map(blog=><div key={blog._id}>
                <div className="border-black my-5">
                   <div className="flex justify-start items-center gap-3">
                   <img className="h-10 w-10 inline rounded-full" src={blog.image} alt="" />
                   <h1>{blog.displayName}</h1>
                   <h1 className="text-xl inline ml-3">{blog.comment}</h1>
                   </div>
                    
                </div>
            </div>)
           }
           </div>
        </div>
    );
};

export default Comment;