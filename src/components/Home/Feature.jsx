import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";



const Feature = () => {
    const [blogs,setBlogs]=useState([])
    const [blog,setblog]=useState()
    console.log(blog,blogs)

    const {user}=useContext(AuthContext)



    
    useEffect(() => {
        
        axios.get('https://blog-webside-serber-side.vercel.app/blogs')
        .then((response) => {
          const sortedBlogs = response.data.sort((a, b) => b.longdescription.split(' ').length - a.longdescription.split(' ').length);
          const top10Blogs = sortedBlogs.slice(0, 10);
          setBlogs(top10Blogs);
          const blogss=top10Blogs.map(blog=>{
           setblog(blog)
          })
        
        
        });
      }, []);

   

    return (
         <div>
           <div className="container mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text- text-black">Serial number</th>
        <th className="text-  text-black">Blog Title</th>
        <th className="text-  text-black"> Blog Owner</th>
        <th className="text-  text-black"> Profile Picture</th>
      </tr>
    </thead>
    
      {
        
        blogs.map(blog=><><tbody>
         <tr>
        <th></th>
        <td className="text- text-black">{blog._id}</td>
        <td className="text- text-black">{blog.title}</td>
        <td className="text- text-black">{blog.email}</td>
        <td className="text- text-black"><img className="h-10 w-10 rounded-full" src={blog.photoURL} alt="" /></td>
      </tr></tbody></>)
      
      }
    
  </table>
</div>
        </div>
    );
};

export default Feature;

