import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Footer from "../../components/footer/Footer";

import banner1 from "../../images/Banner1.png";
import banner2 from "../../images/Banner2.png";
import banner3 from "../../images/Banner3.png";

function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider images={[banner1, banner2, banner3]} autoPlayDelay={10000} />
      <Footer />
    </>
  );
}
export default Home;
