import axios from "axios";
import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authprovider";


const Addblogs = () => {
const {user}=useContext(AuthContext)


    const handleaddblog=(e)=>{
     e.preventDefault()
     const title=e.target.title.value
     const image=e.target.image.value
     const category=e.target.category.value
     const shortdescription=e.target.shortdescription.value
     const longdescription=e.target.longdescription.value
     const email=user.email
     const time=new Date()
     console.log({title,image,category,shortdescription,longdescription,time})
     const blogs={title,image,email,category,shortdescription,longdescription,time}
     e.target.reset()
     axios.post('http://localhost:5000/blogs',blogs)
     .then(res=>{
        console.log(res.data)
     })
    }


    const handlesubmit=()=>{

    }

    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/PtPwTGR/istockphoto-1153432551-170667a.jpg)'}} className="hero min-h-screen my-10 py-10">

            {/* //Add Blog Page:
1. Create a form which will take blog information like title,image url,category,short
description, long description and a submit button.
2. category must be a dropdown element (use <select></select> tag) */}

          <Form onSubmit={handleaddblog}>
          <div className="grid lg:grid-cols-2 gap-5">
           <div>


            {/* 1 */}


           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Title</span>
  </label>
  <label className="input-group ">
    <input name="title" type="text" placeholder="Title" className=" w-full   py-3 input bg-yellow-100 outline " />
    
  </label>
</div>

{/* 2 */}

           <div className="form-control ">
  <label className="label">
    <span className="label-text text-3xl font-bold">Image URL</span>
  </label>
  <label className="input-group ">
    <input name="image" type="text" placeholder="image url" className=" w-full  py-3 input bg-yellow-100 outline " />
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
  <select name="category" className="select select-primary bg-yellow-100 w-full ">
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
    <input name="shortdescription" type="text" placeholder="short description" className=" w-full  py-3 input bg-yellow-100 outline " />
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
    <input name="longdescription" type="text" placeholder="Long Description" className=" w-full  py-3 input bg-yellow-100 outline " />
  </label>
</div>

<button onClick={handlesubmit} className="btn btn-outline bg-green-800 w-full text-white font-bold text-xl my-10">Submit</button>
          </Form>
        
        </div>
    );
};

export default Addblogs;