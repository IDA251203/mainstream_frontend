import Image from "next/image";
import Questions from "../../components/questions/questions";
import Partnership from "../../components/partnership/partnership";
import Services from "../../components/Services/services";
import Footer from "../../components/footer/footer";
import Nameless from "../../components/nameless/nameless";
import Images from "../../components/images/images";
import SMM from "../../components/smm/smm";
import StagesOfWork from "../../components/StagesOfWork/stagesofwork";
import AboutUs from "../../components/aboutUs/aboutus";
import Video from "../../components/video/video";
import Nav from "../../components/nav/nav";

export default function Home() {
  return (
    <div className="container">
      <Nav/>
      <Footer/>
    </div>
  );
}
