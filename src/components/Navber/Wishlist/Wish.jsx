import axios from "axios";
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
        <div>
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
    <div className="card-actions justify-end">
      <button className="btn hover:bg-blue-300 bg-yellow-500 btn-outline">Details</button>
      <button onClick={()=>handleremove(_id)} className="btn hover:bg-blue-300 text-white bg-red-900 btn-outline">Remove</button>
    </div>
    </div>
 
  </div>
</div>
        </div>
        </div>
    );
};

export default Wish;