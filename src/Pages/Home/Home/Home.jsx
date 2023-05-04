import image from "/public/image/chife.jpeg";
import "./Home.css";
import Chefs from "../chefs/Chefs";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import OurChefRecipies from "../OurChefRecipies/OurChefRecipies";
import Loading from "../../Sherid/Loading/Loading";

const Home = () => {
  const datas = useLoaderData();
  const navigaction = useNavigation();
  console.log(navigaction.state);
  if (navigator.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="my-container bg-image ">
        <div className=" lg:flex items-center gap-8">
          <img
            className="h-96 w-96 rounded-2xl flex-grow"
            src={image}
            alt="img"
          />
          <div className="w-96 my-6 px-2">
            <h1 className="text-white font-bold text-6xl mb-4 ">
              It's not just a cooking ,
            </h1>
            <h1 className="text-white font-bold text-5xl">It's a Expeirence</h1>
          </div>
        </div>
      </div>
      <Chefs datas={datas} />
      <OurChefRecipies />
    </>
  );
};

export default Home;
