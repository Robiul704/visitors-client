import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";


const Wish = ({blog}) => {
    const {title,category,shortdescription,longdescription,image,_id}=blog
    console.log(blog)

    const handleremove=(id)=>{
      axios.delete(`http://localhost:5000/wishlist/${id}`)
      .then(res=>{
        console.log(res.data)
        toast.error('Remove successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
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
<NavLink to={`/details/${_id}`}><button className="btn btn-outline bg-green-300">Details</button></NavLink>
<button onClick={()=>handleremove(_id)} className="btn hover:bg-blue-300 text-white bg-red-900 btn-outline">Remove</button>
</div>
</div>
</div>
   </div>
    );
};

export default Wish;





