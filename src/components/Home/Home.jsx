

import Banner from "../Banner/Banner";

import ProductCategory from "../ProductCategory/ProductCategory";
import Footer from "../Footer/Footer";
import GetInTouch from "../ExtraSection/GetInTouch";
import AnotherExtraSection from "../ExtraSection/AnotherExtraSection";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    return (
        <div className="mt-7">
            <Banner></Banner>
            <AnotherExtraSection></AnotherExtraSection>
            <Gallery></Gallery>
            <ProductCategory></ProductCategory>
            <GetInTouch></GetInTouch>
        <Footer></Footer>

        </div>
    );
};

export default Home;