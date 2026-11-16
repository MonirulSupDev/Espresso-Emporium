import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    console.log(`Coffee deleted: ${id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f0d24c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(
          `https://coffee-store-server-ecru-eight.vercel.app/coffee/${id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 bg-gray-100 shadow-sm p-12 rounded-lg">
      <figure>
        <img className="w-auto h-80" src={photo} alt="Coffee" />
      </figure>
      <div>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Chef:</strong> {chef}
        </p>
        <p>
          <strong>Price:</strong> {price} Taka
        </p>
      </div>
      <div>
        <Link to={`/view-coffee/${_id}`}>
          <FaEye className="text-white bg-[#D2B48C] p-1.5 text-3xl rounded mb-2" />
        </Link>
        <Link to={`/edit-coffee/${_id}`}>
          <FaPencil className="text-white bg-[#3C393B] p-1.5 text-3xl rounded mb-2" />
        </Link>
        <button type="submit" onClick={() => handleDelete(_id)}>
          <FaTrash className="text-white bg-[#EA4744] p-1.5 text-3xl rounded cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
