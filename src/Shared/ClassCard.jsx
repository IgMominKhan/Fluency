import Rating from "react-rating";
import { motion } from "framer-motion";
import { Button, Card } from "flowbite-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ClassCard = ({ item }) => {
  console.log(item.image);
  const {
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
  return (
    <motion.div
      initial={{ x: 150, y: 100 }}
      whileInView={{ x: 0, y: 0 }}
      transition={{ duration: .7 }}
    >
      <Card
        imgAlt=""
        imgSrc={image}
        className="h-full max-w-sm mx-auto card relative"
      >
        <a>
          <h5 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <h4 className="-mt-2">{teacher}</h4>
        <div className="mb-5 mt-2.5 flex items-center">
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
        <p>Duration: {duration}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Button disabled={!available_sit}
            className="rounded-lg px-4 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href="#"
          >
            Book Now
          </Button>
        </div>
        <div className="absolute right-2 top-2 text-white">
          {available_sit
            ? <span className="bg-cyan-700 px-2 py-1 rounded">Available</span>
            : (
              <span className="bg-red-700 px-2 py-1 rounded">
                Not Available
              </span>
            )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ClassCard;
