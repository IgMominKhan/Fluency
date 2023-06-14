import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ClassCard from "../../Shared/ClassCard";

const BookedClasses = () => {
  const [classes, setClasses] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/cart?student_status=booked").then(
      (res) => setClasses(res.data),
    );
  }, []);

  return (
    <main className=" bg-clr-secondary">
      <section className="main-container">
        <h1 className="title text-center">
          Our <span className="text-clr-accent">Upcoming</span> Classes
        </h1>

        <div className="my-14 grid gap-7  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {classes.map((item) => <ClassCard key={item._id} item={item} />)}
        </div>
      </section>
    </main>
  );
};

export default BookedClasses;
