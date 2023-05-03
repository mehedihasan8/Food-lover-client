import image from "/public/image/chife.jpeg";
import "./Home.css";
import Chefs from "../chefs/Chefs";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import OutClint from "../OurClient/OutClint";
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
      <div className="my-container bg-image">
        <div className="md:flex justify-center items-center gap-3">
          <img className="h-96 rounded-2xl flex-grow" src={image} alt="" />
          <div className="grow-0">
            <h1 className="text-5xl font-bold leading-normal text-white">
              Contact Our
              <br /> Best Chife
            </h1>
            <p className="text-white space-y-3.5">
              A chef is a culinary artist who combines creativity, passion, and
              skill to create memorable dining experiences for their customers.
              A great chef is not only a master of flavor, but also a master of
              technique, with an ability to transform even the most basic
              ingredients into a masterpiece
            </p>
            <Link to="/login">
              <button className="btn btn-outline btn-primary my-4">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Chefs datas={datas} />
      <OutClint />
    </>
  );
};

export default Home;
