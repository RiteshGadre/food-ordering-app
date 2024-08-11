import Nav from "./Nav";
import headerImage from "../assets/headerImage.avif";
import { useState } from "react";
import Body from "./Body.jsx";
import {restaurantList} from "./Constant"
// import { bannerImage } from "./Constant"

const Header = () => {
    const [searchInput, setSearchInput] = useState("");
    const [copySerchInput, setCopySerchInput] = useState("");
  return (
    <div
      style={{ backgroundImage: `url(${headerImage})` }}
      className="flex flex-col bg-cover bg-no-repeat bg-center h-80 "
    >
      <Nav />
      {/* <h1 className="text-2xl font-serif">Food Villa</h1>
      <p>Discover the aroma</p> */}
      <div className="search-data flex flex-col gap-6">
        <h1 className="flex flex-col justify-center items-center mt-20 text-white tracking-[.45em] text-center font-mono text-5xl font-extrabold">
          Food Villa
        </h1>
        <div className="input-container flex justify-center w-full">
          <input
            className="margin-auto w-[50%] border-2 border-gray-300 outline-none border-none rounded-sm py-1.5 px-5"
            type="text"
            name=""
            id=""
            placeholder="Enter dish name............"
            value={searchInput}
            onChange={
              (e) => {
                setSearchInput(e.target.value)
                // const data = 
              }
            }
          />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
