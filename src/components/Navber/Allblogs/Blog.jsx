import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";


const Blog = ({blog}) => {
    const {title,category,shortdescription,longdescription,image,_id}=blog
    const time=new Date()
    const adds={title,category,shortdescription,longdescription,image,time}
    const handlewishlist=()=>{
        axios.post(`https://blog-webside-serber-side.vercel.app/wishlist`,adds)
        .then(res=>{
          toast.error('wishlist added successfully', {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log(res.data)
        })
        
    }

   

    return (
        <div className="flex flex-row justify-center px-5">
           <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-96" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1> {category}</h1>
    <h2 className="card-title">
       
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{shortdescription}</p>
    <div className="card-actions justify-end">
      <NavLink to={`/details/${_id}`}><button className="btn btn-outline bg-green-200">Details</button></NavLink>
      <button onClick={handlewishlist} className="btn btn-outline bg-yellow-200">Wishlist</button>
    </div>
 
  </div>
</div>
        </div>
    );
};

export default Blog;