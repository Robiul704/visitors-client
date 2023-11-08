
import axios from "axios";
import {AiOutlineComment } from 'react-icons/ai';

import { Form, NavLink, useLoaderData } from "react-router-dom";
import Comment from "./Comment";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Authprovider";


const Details = () => {

    const {user}=useContext(AuthContext)
    const blog=useLoaderData()
    console.log(blog)
    // const [comments,setcomments]=useState()
    // console.log(comments)

const id=blog._id
    const handlecomments=(e)=>{
        e.preventDefault()
        const comment=e.target.comment.value;
        const email=user.email
        const image=user.photoURL
        const title=blog.title
        const id=blog._id
        console.log(title)
        e.target.reset()
        const comments={comment,email,image,title,id}
        

        axios.post(`http://localhost:5000/comments`,comments)
        .then(res=>console.log(res.data))

       
    }
    const {title,category,shortdescription,longdescription,image,_id}=blog
    return (
        <div className="flex flex-row justify-center">
        <div className="  bg-orange-500 shadow-xl">
<figure><img className="min-h-screen w-full" src={image} alt="Shoes" /></figure>
<div className="card-body">
 <h1 className="text-xl font-bold "> {category}</h1>
 <h2 className="card-title">
    
   {title}
   <div className="badge badge-secondary">NEW</div>
 </h2>
 <p>{shortdescription}</p>
 <br />
 <p>{longdescription}</p>
 <div className="card-actions justify-end">
  
 </div>
 {
    user.email===blog.email? <p></p>: <NavLink to={`/update/${_id}`}><button className="py-3 px-5 bg-red-300">Update</button></NavLink>
 }

</div>


<Comment id={_id}></Comment>

{
    user.email===blog.email? <div>
        <h1 className="text-3xl font-bold text-white pb-5">Can not comment on own blog!!</h1>
    </div>:<Form  onSubmit={handlecomments}>
<div className=" w-2/3 grid lg:grid-cols-2 items-center py-5 my-5">
<textarea name="comment" className="textarea py-5  flex items-center textarea-info" placeholder="Comments"></textarea>
<button  className=" bg-red-300  text-5xl mr-76 w-1/4 inline btn btn-outline hover:bg-yellow-300 hover:text-black"><AiOutlineComment/></button>
</div>
</Form>
}

</div>
     </div>
    );
};

export default Details;