import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLocation } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const isInstructorPath = useLocation().pathname.includes("instructors");
  const {
    name,
    email = "example@domain.com",
    image,
    rating,
    total_students,
    total_classes,
    teaching_level,
    experience,
    top = total_students >= 50,
    subject_areas,
  } = instructor;
  return (
    <motion.div
      initial={{ x: -150, y: 100 }}
      whileInView={{ x: 0, y: 0 }}
      transition={{ duration: .7 }}
    >
      <Card className="relative max-w-sm md:max-w-none mx-auto">
        <div className="text-center mb-5">
          <img
            className="object-cover rounded-full w-60 h-60 mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-4 flex-1">
          <h4 className="text-3xl">{name}</h4>
          {isInstructorPath && <p className="!mt-2 italic">{email}</p>}
          <p>
            {subject_areas.map((s) => (
              <span className="mr-2 py-1 rounded px-2 bg-cyan-200 text-sm">
                {s}
              </span>
            ))}
          </p>
          <p>
            <b>Level :</b> {teaching_level}
          </p>
          {experience && (
            <p>
              <b>Experience :</b> {experience}
            </p>
          )}
          <div className="mb-5 mt-2.5 flex items-center">
            <b>Ratings :</b>
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
            </p>
          </div>
          <p>
            <b>Total Students :</b> {total_students}
          </p>
          <p>
            <b>Total Classes :</b> {total_classes}
          </p>
          {top && (
            <div className="triangle">
              <span className="rotate-45 absolute -mt-6 text-white">Top</span>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default InstructorCard;
