import image from "/public/image/chife.jpeg";
import "./Home.css";
import Chefs from "../chefs/Chefs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import OurChefRecipies from "../OurChefRecipies/OurChefRecipies";
import Loading from "../../Sherid/Loading/Loading";
import About from "../About/About";

const Home = () => {
  const datas = useLoaderData();
  const navigaction = useNavigation();
  console.log(navigaction.state);
  if (navigator.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <div className="my-container bg-image ">
        <div className=" lg:flex items-center gap-8">
          <LazyLoadImage
            alt="img"
            className=" w-80 md:w-96 h- mx-auto rounded-2xl"
            height={""}
            width={""}
            src={image}
          />
          <div className="w-96 my-20 px-2">
            <h1 className=" text-center text-white font-bold text-5xl md:text-6xl mb-4 ">
              It's not just a cooking ,
            </h1>
            <h1 className="text-center text-white font-bold text-4xl md:text-5xl">
              It's a Expeirence
            </h1>
          </div>
        </div>
      </div>
      <Chefs datas={datas} />
      <OurChefRecipies />
      <About />
    </div>
  );
};

export default Home;
