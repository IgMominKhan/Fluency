import { Button } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useUsersLoader from "../../Hooks/useUsersLoader";

const UserInfo = ({ user }) => {
  const { user: admin } = useAuth();
  const [refetch] = useUsersLoader();
  const axiosSecure = useAxiosSecure();

  const handleChangeRole = (id, newRole) => {
    axiosSecure.patch(`/users/${id}?email=${admin?.email}`, {
      role: newRole,
    }).then(
      (res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire("success", `user role changed to ${newRole}`, "success");
        }
      },
    );
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-32 p-4">
          <img
            className="rounded-lg min-w-[5rem] max-h-[5rem] object-cover"
            src={user?.image}
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {user?.name}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {user?.email}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {user?.role}
        </td>
        <td className="px-6 py-4">
          <Button
            disabled={(user?.role === "admin" ||
              user?.role === "instructor") &&
              true}
            onClick={() => handleChangeRole(user?._id, "instructor")}
            size="sm"
            className="font-medium"
          >
            Make Instructor
          </Button>
        </td>
        <td className="px-6 py-4">
          <Button
            size="sm"
            onClick={() => handleChangeRole(user?._id, "admin")}
            disabled={user?.role === "admin" && true}
            className="uppercase"
          >
            Make Admin
          </Button>
        </td>
      </tr>
    </>
  );
};

export default UserInfo;
