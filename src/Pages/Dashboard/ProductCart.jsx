import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const ProductCart = ({ item }) => {
  const { user } = useAuth();
  const [refetch] = useCart("booked");
  const axiosSecure = useAxiosSecure();
  // delete item from cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${item?._id}?email=${user?.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire(
                `Deleted!`,
                "Class removed from cart",
                "success",
              );
              refetch();
            }
          })
          .catch((err) => {
            Swal.fire("Opps!", `${err.message}`, "error");
            console.dir(err);
          });
      }
    });
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-32 p-4">
          <img className="rounded-lg min-w-[5rem]" src={item.image} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {item?.title}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {item.duration}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${item.price}
        </td>
        <td className="px-6 py-4">
          <Button
            onClick={() => handleDelete(item._id)}
            size="sm"
            className="font-medium"
            color="failure"
          >
            Remove
          </Button>
        </td>
        <td className="px-6 py-4">
          <Link className="font-medium">
            <Button size="sm" className="uppercase">
              Pay
            </Button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ProductCart;
