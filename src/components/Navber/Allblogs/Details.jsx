
import axios from "axios";

import { Form, NavLink, useLoaderData } from "react-router-dom";
import Comment from "./Comment";


const Details = () => {

    
    const blog=useLoaderData()
    console.log(blog)
    // const [comments,setcomments]=useState()
    // console.log(comments)


    const handlecomments=(e)=>{
        e.preventDefault()
        const comment=e.target.comment.value;
        const comments={comment}
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
 <NavLink to={`/update/${_id}`}><button className="py-3 px-5 bg-red-300">Update</button></NavLink>
</div>

{/* {
    comments.map(comment=><Comment comment={comment} key={comment._id}></Comment>)
} */}
<Comment></Comment>

<Form onSubmit={handlecomments}>
<div className="bg-sky-300 py-5 my-5">
<textarea name="comment" className="textarea textarea-info" placeholder="Comments"></textarea>
<button  className="py-3 px-5 bg-red-300">Comment</button>
</div>
</Form>

</div>
     </div>
    );
};

export default Details;