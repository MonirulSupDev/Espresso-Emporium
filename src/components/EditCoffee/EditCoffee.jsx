import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import formBg from "../../assets/images/more/form-bg.jpg";
import Swal from "sweetalert2";

const EditCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, price, supplier, taste, category, details, photo } =
    coffee;

  const handleEditCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Updated!",
            text: "You updated the coffee successfully!",
            icon: "success",
          });
        }
      });
  };

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
        <div className="xl:py-17.5 xl:px-28 bg-gray-100 lg:my-12.5 rounded">
          <h2 className="text-[45px] mb-4 text-heading-2 text-center [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
            Update Existing Coffee Details ({name})
          </h2>
          <p className="text-lg text-body/70 text-center xl:px-20.5 mb-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleEditCoffee}>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  className="form-input"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  className="form-input"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  className="form-input"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  className="form-input"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  className="form-input"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-input"
                  defaultValue={price}
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  className="form-input"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  required
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <input
                  type="submit"
                  value="Update Coffee Details"
                  className="text-heading font-rancho text-2xl py-3 bg-[#d2b48c] rounded border-2 border-heading cursor-pointer hover:shadow-sm hover:shadow-heading"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoffee;
