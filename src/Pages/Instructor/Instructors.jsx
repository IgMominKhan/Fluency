import { useState } from "react";

const Instructors = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    axios.get("teachers.json").then((res) => setInstructor(res.data));
  }, []);
  return (
    <main className="bg-clr-terciary">
      <section className="main-container">
        <h1 className="title">
          Our <span className="text-clr-accent">Awesome</span> Instructors
        </h1>

        <div className="my-12 grid gap-7  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center">
          {instructor.map((instructor, i) => (
            <InstructorCard key={i} instructor={instructor} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Instructors;
