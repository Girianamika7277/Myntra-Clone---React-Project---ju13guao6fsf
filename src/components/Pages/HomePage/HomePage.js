import Carousal2 from "../../Carousal/Carousal2";
import HomePageCards from "../../HomePageCards/HomePageCards";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Carousal2 />
      <HomePageCards />
      <Footer />
    </>
  );
};

export default HomePage;