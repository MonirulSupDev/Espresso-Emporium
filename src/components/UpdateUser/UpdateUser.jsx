import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import formBg from "../../assets/images/more/form-bg.jpg";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const loadedUser = useLoaderData();

  console.log(loadedUser);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(
      `https://coffee-store-server-ecru-eight.vercel.app/user/${loadedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "User Updated!",
            text: "You updated the user successfully!",
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
            Update User
          </h2>
          <form onSubmit={handleUpdateUser}>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="col-span-2 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                  defaultValue={loadedUser.name}
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  autoComplete="nope"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}"
                  title="Enter a valid email address, like name@example.com"
                  defaultValue={loadedUser.email}
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <input
                  type="submit"
                  value="Update"
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

export default UpdateUser;
