
import axios from "axios";
import { useState } from "react";


const Comment = ({id}) => {
  const [comments,setcomments]=useState([])
  console.log(comments)
  console.log(id)
 

  axios.get(`http://localhost:5000/comments/${id}`)
  .then(res=>{
      console.log(res.data)
      setcomments(res.data)
  })


// useEffect(()=>{
//     const filter=comments.find(com=>com.id===id)
//     console.log(filter)
//     if(filter){
//         setcomment(filter)
//     }
// },[])




  

    // useEffect(()=>{
    //     fetch('http://localhost:5000/comments')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setcomments(data)
    //         console.log(data)
    //     })
    // },[])
   
    return (
        <div>
           <div className="bg-white my-5 py-10">
            <h1 className="text-3xl font-bold">Comments</h1>
           {
            comments.map(blog=><div key={blog._id}>
                <div className="border-black my-5">
                    <img className="h-10 w-10 inline rounded-full" src={blog.image} alt="" />
                    <h1 className="text-xl inline ml-3">{blog.comment}</h1>
                </div>
            </div>)
           }
           </div>
        </div>
    );
};

export default Comment;