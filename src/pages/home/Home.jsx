import Navbar from "../../components/navbar/Navbar";
import LargeImageSlider from "../../components/largeImageSlider/LargeImageSlider";
import Footer from "../../components/footer/Footer";
import MeduimCardSlide from "../../components/meduimCardSlide/MeduimCardSlide";

import banner1 from "../../images/Banner1.png";
import banner2 from "../../images/Banner2.png";
import banner3 from "../../images/Banner3.png";

function Home(props) {
  return (
    <>
      <Navbar />
      <LargeImageSlider
        images={[banner1, banner2, banner3]}
        autoPlayDelay={10000}
      />
      <MeduimCardSlide products={props.products} />
      <Footer />
    </>
  );
}
export default Home;
