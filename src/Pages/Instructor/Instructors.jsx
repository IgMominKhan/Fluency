import axios from "axios";
import { useEffect, useState } from "react";
import InstructorCard from '../../Shared/InstructorCard'

const Instructors = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    axios.get("https://fluency-server.vercel.app/users?role=instructor").then((res) => setInstructor(res.data));
  }, []);
  return (
    <main className="bg-clr-terciary">
      <section className="main-container pb-2">
        <h1 className="title text-center text-white">
          Our <span className="text-clr-accent">Awesome</span> Instructors
        </h1>

        <div className="my-14 grid gap-7  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center">
          {instructor.map((instructor, i) => (
            <InstructorCard key={i} instructor={instructor} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Instructors;
