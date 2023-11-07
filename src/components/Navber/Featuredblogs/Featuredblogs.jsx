import axios from "axios";
import { useEffect, useState } from "react";

const Featuredblogs = () => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs)

    useEffect(() => {
        
        axios.get('http://localhost:5000/blogs')
        .then((response) => {
          const sortedBlogs = response.data.sort((a, b) => b.longdescription.split(' ').length - a.longdescription.split(' ').length);
          const top10Blogs = sortedBlogs.slice(0, 10);
          setBlogs(top10Blogs);
        });
      }, []);
    return (
        <div>
            featured blogs
        </div>
    );
};

export default Featuredblogs;