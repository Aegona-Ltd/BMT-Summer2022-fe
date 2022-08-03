import { images } from "../../../shared/assets/images";
import HomeBanner from "./HomeBanner";
import HomeContact from "./HomeContact";
import HomeGeneral from "./HomeGeneral";
import HomeItem from "./HomeItem";

function Home() {
    return ( 
        <section className = "home">
            <HomeBanner/>
            <HomeGeneral/>
            
            <HomeContact/>
            <div className="homeBanner__bg" style={{backgroundImage:`url(${images.bg1})`}}></div>
        </section>
     );
}

export default Home;