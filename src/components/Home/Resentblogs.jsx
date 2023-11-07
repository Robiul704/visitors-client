import axios from "axios";
import { useEffect, useState } from "react";


const Resentblogs = () => {
    const [blogs,setblogs]=useState([])
    console.log(blogs)
    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
          .then(response => {
            const sortedPosts = response.data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            setblogs(sortedPosts);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default Resentblogs;