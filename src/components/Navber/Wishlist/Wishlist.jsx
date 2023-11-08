import { useLoaderData } from "react-router-dom";
import Wish from "./Wish";


const Wishlist = () => {
    const wishlist=useLoaderData()
  
    return (
        <div className="grid grid-cols-2 gap-10 my-10 justify-center">
           {
            wishlist.map(blog=><Wish key={blog._id} blog={blog}></Wish>)
           }
           
        </div>
    );
};

export default Wishlist;