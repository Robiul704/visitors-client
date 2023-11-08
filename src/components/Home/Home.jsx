import Banner from "./Banner";
import Extra from "./Extra";
import Newsletter from "./Newsletter";
import Resentblogs from "./Resentblogs";
import Seemore from "./Seemore";


const Home = () => {
    return (
        <div className="container mx-auto">
           <Banner></Banner>
           <Resentblogs></Resentblogs>
           <Newsletter></Newsletter>
           <Extra></Extra>
           <Seemore></Seemore>
        </div>
    );
};

export default Home;