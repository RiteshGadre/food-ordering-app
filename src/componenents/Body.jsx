    import {restaurantList}  from "./Constant";
    import RestrauCard from "./RestrauCard";
    import { useState } from "react";


    const Body= () => {
        const [searchText, setSearchText]= useState("");
        const [restaurants, setRestaurants]= useState(restaurantList);


        return(
            <>
                <div className="search-container flex justify-center w-full">
                    <input
                        type="text" 
                        className="border-2 bg-gray-500 text-white outline-none border-none px-3 py-1 rounded-s "
                        value={searchText}
                        onChange={
                            (e) => setSearchText(e.target.value)
                        }

                    />
                    <button
                        className="rounded-e bg-green-700 text-white px-2 py-1"
                        onClick={
                            () => {
                                const filterData= restaurantList.filter((res)=>{
                                    return res.name.toLowerCase().includes(searchText.toLowerCase());
                                })
                                setRestaurants(filterData);
                            }
                        }
                    >
                        Search
                    </button>
                </div>

                <div className="restaurant-list flex flex-wrap justify-center ">
                    {
                        restaurants.map((restaurant) => {
                            console.log(restaurant);
                            return <RestrauCard
                                key={restaurant.id} 
                                {...restaurant}   
                            />
                        })  
                    }
                </div>
            </>
        )
    }

    export default Body;