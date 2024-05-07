import { menu } from "./Constant";
import { useState } from "react";

const RestrauCard= () => {
    const [inputValue, setInputValue]= useState("");
    const [menuList, setMenuList]= useState(menu);
   
    return (
        <>
            <div className="flex gap-x-1 w-full justify-center">
                <input className="px-3 py-1 border-2 rounded" type="text" name="" value={inputValue} onChange={
                    (e) => {
                        setInputValue(e.target.value);
                    }
                }  id="" />
                <button className="rounded bg-gray-600 text-white px-2" onClick={
                    () => {
                        const filterData = menu.filter((item) => {
                            return item.name.includes(inputValue);
                        })
                        setMenuList(filterData);
                    }
                }>Search</button>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    menu.map((cusines) => {
                        return (<div key={cusines.id} className="max-w-48 card rounded-md px-1 py-1 flex flex-col  gap-1 border-[1px] border-black m-5">
                                    <img className="img rounded-lg" src={cusines.image_url} alt="" />
                                    <h1 className="name">{cusines.name}</h1>
                                    <p className="price">{cusines.price}$</p>
                                    <p className="cuisines">{cusines.description}</p>
                                </div>)
                    })
                }
            </div>
        </>


        
    )
}

export default RestrauCard;