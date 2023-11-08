
import { useContext } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authprovider";
import axios from "axios";


const Update = () => {
    const blog=useLoaderData()

    const {user}=useContext(AuthContext)
    console.log(blog)
    const {title,category,shortdescription,longdescription,image,_id}=blog


    const handleupdate=(e)=>{
       e.preventDefault()
       const title=e.target.title.value
       const image=e.target.image.value
       const category=e.target.category.value
       const shortdescription=e.target.shortdescription.value
       const longdescription=e.target.longdescription.value
       const time=new Date()
       const email =user.email
       const photoURL=user.photoURL
       console.log(email)
       console.log({title,image,category,shortdescription,longdescription,time})
       const blogs={title,email,photoURL,image,category,shortdescription,longdescription,time}
       e.target.reset()
       
      axios.put(`http://localhost:5000/blogs/${_id}`,blogs)
      .then(res=>console.log(res.data))
        
    }
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/PtPwTGR/istockphoto-1153432551-170667a.jpg)'}} className="hero min-h-screen my-10 py-10">

      
          <Form onSubmit={handleupdate}>
          <div className="grid lg:grid-cols-2 gap-5">
           <div>


            {/* 1 */}


           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Title</span>
  </label>
  <label className="input-group ">
    <input defaultValue={title} name="title" type="text" placeholder="Title" className=" w-full   py-3 input bg-yellow-100 outline " />
    
  </label>
</div>

{/* 2 */}

           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Image URL</span>
  </label>
  <label className="input-group ">
    <input defaultValue={image} name="image" type="text" placeholder="image url" className=" w-full  py-3 input bg-yellow-100 outline " />
  </label>
</div>

{/* 3 */}

          
           </div>
           <div>

            {/* 4 */}

           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Category</span>
  </label>
  <select defaultValue={category} name="category" className="select select-primary bg-yellow-100 w-full ">
  <option disabled selected>Blogs category</option>
  <option>Sports</option>
  <option>Nature</option>
  <option>Place</option>
</select>
</div>

{/* 5 */}


           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Short Description</span>
  </label>
  <label className="input-group ">
    <input defaultValue={shortdescription} name="shortdescription" type="text" placeholder="short description" className=" w-full  py-3 input bg-yellow-100 outline " />
  </label>
</div>


{/* 6 */}


        
           </div>
          
           </div>
           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Long Description</span>
  </label>
  <label className="input-group ">
    <input defaultValue={longdescription} name="longdescription" type="text" placeholder="Long Description" className=" w-full  py-3 input bg-yellow-100 outline " />
  </label>
</div>

<button className="btn btn-outline bg-green-800 w-full text-white font-bold text-xl my-10">Update</button>
          </Form>
        
        </div>
    );
};

export default Update;