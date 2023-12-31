import Rating from "react-rating";
import { motion } from "framer-motion";
import { Button, Card } from "flowbite-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ClassCard = ({ item, role }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    _id,
    title,
    teacher,
    image,
    rating,
    available_sit,
    total_available_sit,
    enrolled_students,
    price,
    duration,
  } = item;

  // handle booking
  const handleBooking = () => {
    if (!user) {
      return (
        Swal.fire("Attention!", "You must login First for Booking", "info", {
          timer: 2000,
        })
      );
    }
    axiosSecure.post(`/cart?email=${user?.email}`, {
      class_id: _id,
      student_email: user?.email,
      student_status: "booked",
      title,
      teacher,
      image,
      rating,
      price,
      duration,
    })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Success", "Class added to cart", "success");
        }
        if (res.data.message) {
          Swal.fire("Ohh!", `${res.data.message}`, "error");
        }
      }).catch((err) => console.dir(err));
  };
  return (
    <motion.div
      initial={{ x: 150, y: 100 }}
      whileInView={{ x: 0, y: 0 }}
      transition={{ duration: .7 }}
    >
      <Card
        imgAlt=""
        imgSrc={image}
        className="h-full max-w-sm md:max-w-none mx-auto card relative dark:text-white"
      >
        <a>
          <h5 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <h4 className="-mt-2">{teacher}</h4>
        <p>
          <b>Available sit :</b> {total_available_sit}
        </p>
        <div className="flex items-center">
          <b>Rating :</b>
          <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            <Rating
              placeholderRating={rating}
              rating
              emptySymbol={<AiOutlineStar />}
              placeholderSymbol={<AiFillStar />}
              fullSymbol={<AiFillStar className="font-2xl" />}
              readonly
            />
          </span>
          <p>
            {rating}
            <span>({enrolled_students})</span>
          </p>
        </div>
        <p>
          <b>Duration :</b> {duration}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Button
            onClick={handleBooking}
            disabled={!total_available_sit ||
              (role == "admin" || role == "instructor")}
            className="rounded-lg px-4 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Book Now
          </Button>
        </div>
        {total_available_sit
          ? (
            <div className="triangle !border-[3rem]">
              <span className="rotate-45 absolute -ms-4 -mt-7">Available</span>
            </div>
          )
          : (
            <div className="triangle not-available !border-[3rem]">
              <span className="rotate-45 absolute text-center -mt-10 -ms-3">
                Not Available
              </span>
            </div>
          )}
      </Card>
    </motion.div>
  );
};

export default ClassCard;
