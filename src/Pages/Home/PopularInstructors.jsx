import { useEffect, useState } from "react";
import InstructorCard from "../../Shared/InstructorCard";
import axios from "axios";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    axios.get("./teachers.json").then((res) =>
      setPopularInstructors(res.data)
    );
  }, []);
  return (
    <section className="bg-clr-accent">
    <div className="main-container">
      <h1 className="title text-center ">
        Our <span className="text-clr-primary">Popular</span> Instructors
      </h1>
      <div className="my-12 grid gap-5  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
        {popularInstructors.map((instructor, i) => (
          <InstructorCard key={i} instructor={instructor} />
        ))}
      </div>
    </div>  
    </section>
    
  );
};

export default PopularInstructors;
