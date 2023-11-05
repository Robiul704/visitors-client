import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";


const Resister = () => {
    const {creatuser,googlelogin}=useContext(AuthContext)
    const handleresister=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        creatuser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

       
    }
    const handlegoogle=()=>{
        googlelogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div>
             <div style={{backgroundImage: 'url(https://i.ibb.co/Lz9b3Jy/desktop-wallpaper-top-windows-vista-mbr-hq-definition-live-1600x900.jpg)'}} className="hero  min-h-screen ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
   
    <div className="card  hero-overlay bg-opacity-60 flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
    <h1 className="text-5xl font-bold text-center mt-5">Resister</h1>
      <form onSubmit={handleresister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
       <span > You have an Account please <span className="text-blue underline"><Link to='/login'>Login</Link></span></span>
       <button onClick={handlegoogle} className="btn btn-primary hover:bg-red-200 text-black font-bold bg-yellow-200 my-5">Google</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Resister;