import axios from "axios";
import { NavLink } from "react-router-dom";


const Blog = ({blog}) => {
    const {title,category,shortdescription,longdescription,image,_id}=blog
    const time=new Date()
    const adds={title,category,shortdescription,longdescription,image,time}
    const handlewishlist=()=>{
        axios.post(`http://localhost:5000/wishlist`,adds)
        .then(res=>console.log(res.data))
        
    }

    return (
        <div className="flex flex-row justify-center">
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