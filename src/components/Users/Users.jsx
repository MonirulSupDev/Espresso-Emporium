import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import formBg from "../../assets/images/more/form-bg.jpg";
import { FaArrowLeft } from "react-icons/fa6";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log("User deleted: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
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
        <h2 className="text-4xl text-center">
          Users Data ({loadedUsers.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="table border-2 text-center bg-heading/5">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Creating Time</th>
                <th>Last Logged in</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-secondary"
                    >
                      Delete
                    </button>{" "}
                    |{" "}
                    <Link
                      to={`/update-user/${user._id}`}
                      className="btn btn-info"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
