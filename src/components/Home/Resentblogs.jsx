import axios from "axios";
import { useEffect, useState } from "react";
import Blogss from "./Blogss";


const Resentblogs = () => {
    const [blogs,setblogs]=useState([])
    console.log(blogs)
    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
          .then(response => {
            const sortedPosts = response.data.sort((a, b) => new Date(b.time) - new Date(a.time));
            const posts=sortedPosts.slice(0,6)
            setblogs(posts);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <div>
             <h1 className="text-5xl font-bold text-center my-5 pt-5">Resent Blogs</h1>
           <div className="grid grid-cols-2 gap-10 my-10 justify-center">
           
          
          {
            blogs.map(blog=><Blogss key={blog._id} blog={blog}></Blogss>)
           }

          </div>
        </div>
    );
};

export default Resentblogs;