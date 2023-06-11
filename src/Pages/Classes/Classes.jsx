import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../../Shared/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => setClasses(res.data));
  }, []);
  return (
    <main className=" bg-clr-secondary">
      <section className="main-container">
        <h1 className="title text-center">
          Our <span className="text-clr-accent">Upcoming</span> Classes
        </h1>

        <div className="my-14 grid gap-7  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {classes.map((item, i) => <ClassCard key={i} item={item} />)}
        </div>
      </section>
    </main>
  );
};

export default Classes;
