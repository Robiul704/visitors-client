import axios from "axios";
import { useEffect, useState } from "react";



const Feature = () => {
    const [blogs,setBlogs]=useState([])
    const [blog,setblog]=useState()
    console.log(blog,blogs)



    
    useEffect(() => {
        
        axios.get('http://localhost:5000/blogs')
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
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-xl text-black">Serial number</th>
        <th className="text-xl  text-black">Blog Title</th>
        <th className="text-xl  text-black"> Blog Owner</th>
        <th className="text-xl  text-black"> Profile Picture</th>
      </tr>
    </thead>
    
      {
        
        blogs.map(blog=><><tbody>
         <tr>
        <th></th>
        <td className="text-xl text-black">{blog._id}</td>
        <td className="text-xl text-black">{blog.title}</td>
        <td className="text-xl text-black">{blog.email}</td>
        <td className="text-xl text-black"><img className="h-10 w-10 rounded-full" src={blog.photoURL} alt="" /></td>
      </tr></tbody></>)
      
      }
    
  </table>
</div>
        </div>
    );
};

export default Feature;

