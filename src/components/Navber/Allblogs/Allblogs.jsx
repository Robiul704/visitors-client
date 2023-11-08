import { Form, useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/Authprovider";


const Allblogs = () => {
    const datas=useLoaderData()
    const [blogs,setblogs]=useState(datas)
    const {loading}=useContext(AuthContext)


   const habndlesearch=(e)=>{
    e.preventDefault()
    const title=e.target.title.value;
    const filter=blogs.filter(blog=>blog.title===title)
    

      if(filter){
    setblogs(filter)
    }
    else{
        setblogs(datas)
    }
    e.target.reset()
   }
   const handlefilter=(e)=>{
    e.preventDefault()
    const category=e.target.select.value;
    const filter=blogs.filter(blog=>blog.category===category)
    if(filter){
        setblogs(filter)
        }
   }
   if(loading){
    return <p>loading</p>
   }
    return (
        <div >
            <div className="my-10 text-center bg-lime-100 py-5">

                <Form onSubmit={handlefilter} className="my-5">
                <select name="select" className="select select-primary w-full max-w-xs">
  <option disabled selected>All</option>
  <option>Sports</option>
  <option>Nature</option>
  <option>Place</option>
</select>
                <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Filter</button>
                </Form>
            
         <Form onSubmit={habndlesearch}>
         
         <input name="title" className=" bg-amber-300 py-3 px-44 rounded-l-xl" type="text" placeholder="search by title " />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Search</button>
         </Form>
        </div>
           
          <div className="grid grid-cols-2 gap-10 my-10 justify-center">
          
          {
            blogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
           }

          </div>
        </div>
    );
};

export default Allblogs;