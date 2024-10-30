import { useState } from "react";
import Exploremenu from "../../ExploreMenu/Exploremenu";
import Header from "../../Header/Header";
import "./Home.css";
import Fooddisplay from "../../FoodDisplay/Fooddisplay";
import AppDownload from "../../AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
