import Guide from "../guide/Guide";
import Banner from "./banner/Banner";
import TopDestinations from "./topDestination/TopDestinations";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDestinations></TopDestinations>
            <Guide></Guide>
            
           
        </div>
    );
};

export default Home;