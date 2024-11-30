import { useLoaderData, useNavigate } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { FaMugHot } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData()
    const navigate=useNavigate()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center py-8 bg-base-100">
                <p className="text-sm text-gray-600">--- Sip & Savor ---</p>
                <h2 className="text-2xl md:text-4xl font-bold text-brown-700 my-2">
                    Our Popular Products
                </h2>
                <button onClick={()=>navigate('/addCoffee')} className="btn btn-primary bg-[#E3B577] border-2 border-[#331A15] text-white flex items-center gap-2 mt-4">
                    Add Coffee <FaMugHot />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;