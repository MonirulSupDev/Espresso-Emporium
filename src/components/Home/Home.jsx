import { Link, useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { TbMug } from "react-icons/tb";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Banner />
      <div className="max-w-330 mx-auto my-30">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-center text-xl">--- Sip & Savor ---</p>
          <h2 className="text-[55px] text-center [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
            Our Popular Products
          </h2>
          <Link
            to="/add-coffee"
            className="font-rancho text-white text-2xl border-2 border-heading [text-shadow:0_4px_9px_rgba(59,29,26,0.8)] bg-[#E3B577] px-9.5 py-3 rounded-sm w-fit transition-all duration-200 hover:shadow-sm hover:shadow-heading"
          >
            Add Coffee <TbMug className="inline text-heading ml-2" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
