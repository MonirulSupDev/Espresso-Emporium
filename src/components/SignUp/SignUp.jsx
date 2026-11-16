import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import formBg from "../../assets/images/more/form-bg.jpg";
import { AuthContext } from "../../providers/AuthContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // creating/registering user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const creatingTime = new Date(
          result.user?.metadata?.creationTime,
        ).toLocaleString(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        });

        // const lastLoginTime = new Date(
        //   Number(result.user?.metadata?.lastLoginAt),
        // ).toLocaleString(undefined, {
        //   dateStyle: "medium",
        //   timeStyle: "short",
        // });

        // const lastLoginTime = new Date(
        //   result.user?.metadata?.lastLoginAt,
        // ).toString();

        const user = {
          name,
          email,
          password,
          createdAt: creatingTime,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "User created!",
                text: "New user crteated successfully!",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
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
            Please SignUp
          </h2>
          <form onSubmit={handleSignUp}>
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
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-xl font-semibold text-body/80">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="form-input w-full"
                    placeholder="Enter your password"
                    required
                    autoComplete="new-password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must be at least 6 characters and include one uppercase letter, one lowercase letter, and one number"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-body/60 hover:text-body"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="col-span-2 flex flex-col">
                <input
                  type="submit"
                  value="SignUp"
                  className="text-heading font-rancho text-2xl py-3 bg-[#d2b48c] rounded border-2 border-heading cursor-pointer hover:shadow-sm hover:shadow-heading"
                />
              </div>
            </div>
          </form>
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-sky-600 font-medium hover:underline"
            >
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
