
import { Tab, Tabs } from "react-tabs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ProductCategory from "../ProductCategory/ProductCategory";


const Home = () => {
    return (
        <div className="mt-7">
            <Banner></Banner>
          <ProductCategory></ProductCategory>

        </div>
    );
};

export default Home;