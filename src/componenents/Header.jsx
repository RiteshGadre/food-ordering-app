import Nav from "./Nav"
import headerImage from "../assets/headerImage.avif"
// import { bannerImage } from "./Constant"

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${headerImage})`}}   className="flex flex-col bg-cover bg-no-repeat bg-center h-80 "  >
      <Nav />
      {/* <h1 className="text-2xl font-serif">Food Villa</h1>
      <p>Discover the aroma</p> */}
      <div className="search-data flex flex-col gap-6">
        <h1 className="flex flex-col justify-centeritems-center mt-20 text-white tracking-[.45em] text-center font-mono text-5xl font-extrabold">Food Villa</h1>
        <div className="input-container flex justify-center w-full">
          <input className="margin-auto w-[50%] border-2 border-gray-300 outline-none rounded-lg py-1 px-3" type="text" name="" id="" />
        </div>
      </div>
      
    </div>
  )
}

export default Header
