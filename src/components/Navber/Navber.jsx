import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Authentication/Authprovider";
import auth from "../Authentication/firebase.config";


const Navber = () => {
    const {user,signout}=useContext(AuthContext)

const handlelogout=()=>{
    signout(auth)
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
}



    const links=<>
    <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-900 font-bold underline mr-5 text-xl" : "mr-5 font-bold text-xl"
  } to='/'>Home</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-900 font-bold underline mr-5 text-xl" : "mr-5 font-bold text-xl"
  } to='/addblog'>Add Blog</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-900 font-bold underline mr-5 text-xl" : "mr-5 font-bold text-xl"
  } to='/allblogs'>All blogs</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-900 font-bold underline mr-5 text-xl" : "mr-5 font-bold text-xl"
  } to='/featuredblogs'> Featured Blogs</NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-900 font-bold underline mr-5 text-xl" : "mr-5 font-bold text-xl"
  } to='/wishlist'>Wishlist</NavLink>
    </>
        
        
    
    return (
        <div>
            <div className="navbar bg-fuchsia-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
   <img className="h-20 w-20" src="https://i.ibb.co/sby4dVk/images.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user? <div className="flex gap-4 justify-center items-center">
            <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
            <h1 >{user.displayName}</h1>
            <button  onClick={handlelogout} className="btn btn-outline hover:bg-blue-400 bg-yellow-300">LogOut</button>
        </div> : <NavLink to='/login'><button className="btn btn-outline bg-amber-300 hover:bg-blue-300">login</button></NavLink>
    }
   
  </div>
</div>
        </div>
    );
};

export default Navber;