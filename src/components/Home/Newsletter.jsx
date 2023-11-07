import { useContext } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Authentication/Authprovider";


const Newsletter = () => {
    const {user}=useContext(AuthContext)
    const handlesearch=(e)=>{
        e.preventDefault()
        e.target.reset()
        const email=e.target.email.value
        
        toast('Thank you for subscribing to our newsletter', {
            position: toast.POSITION.TOP_CENTER,
          });
        
    }
    return (
        <div className="my-10 text-center bg-lime-100 py-5">
            <h1 className="text-5xl text-red-900 font-extrabold my-5"> Subscribe to our newsletter</h1>
           <Form onSubmit={handlesearch}>
           <input defaultValue={user?.email} name="email" className=" bg-amber-300 py-3 px-10 rounded-l-xl" type="email" placeholder="Enter your email" />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Submit</button>
           </Form>
        </div>
    );
};

export default Newsletter;