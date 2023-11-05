

const Newsletter = () => {
    return (
        <div className="my-10 text-center bg-lime-100 py-5">
            <h1 className="text-5xl text-red-900 font-extrabold my-5"> Subscribe to our newsletter</h1>
            <input className=" bg-amber-300 py-3 px-10 rounded-l-xl" type="text" placeholder="Enter your email" />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Submit</button>
        </div>
    );
};

export default Newsletter;