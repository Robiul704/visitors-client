import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-4xl font-extrabold text-center container mx-auto">
        <h1 className="text-4xl font-extrabold text-center">404 There is no data found</h1>
        <NavLink className="text-4xl font-extrabold text-center" to={'/'}><button className="btn">Home</button></NavLink>
    </div>
    );
};

export default Error;