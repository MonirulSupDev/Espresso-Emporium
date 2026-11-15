import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import formBg from "../../assets/images/more/form-bg.jpg";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-10"
      style={{ backgroundImage: `url(${formBg})` }}
    >
      <div className="max-w-330 mx-auto">
        <Link
          to="/"
          className="font-rancho text-3xl text-heading-2 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)] py-3 px-2 rounded-lg transition-all duration-200 hover:bg-[#d2b48c]"
        >
          <FaArrowLeft className="text-xl inline" /> Back to Home
        </Link>
        <div className="flex items-center justify-center lg:gap-25 xl:py-17.5 xl:px-28 bg-gray-100 lg:my-12.5 rounded">
          <figure>
            <img className="w-auto h-80" src={photo} alt={name} />
          </figure>
          <div>
            <h2 className="text-[45px] mb-4 text-heading-2 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
              {name}
            </h2>
            <div className="space-y-1.5">
              <p>
                <strong>Chef: </strong>
                {chef}
              </p>
              <p>
                <strong>Supplier: </strong>
                {supplier}
              </p>
              <p>
                <strong>Taste: </strong>
                {taste}
              </p>
              <p>
                <strong>Category: </strong>
                {category}
              </p>
              <p>
                <strong>Details: </strong>
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
