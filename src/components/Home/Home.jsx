import Banner from "./Banner";
import Newsletter from "./Newsletter";
import Resentblogs from "./Resentblogs";
import Seemore from "./Seemore";


const Home = () => {
    return (
        <div className="container mx-auto">
           <Banner></Banner>
           <Resentblogs></Resentblogs>
           <Newsletter></Newsletter>
           <Seemore></Seemore>
        </div>
    );
};

export default Home;