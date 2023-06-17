import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../../Shared/ClassCard";
import useRole from "../../Hooks/useRole";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const [role] = useRole();
  useEffect(() => {
    axios.get("https://fluency-server.vercel.app/classes?status=approved").then(
      (res) => setPopularClasses(res.data.slice(0, 6)),
    );
  }, []);
  return (
    <section className="dark:bg-clr-dark">
      <div className="main-container">
        <h1 className="title text-center ">
          Our <span className="text-clr-accent">Popular</span> Classes
        </h1>
        <div className="my-14 grid gap-7  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {popularClasses.map((item, i) => <ClassCard key={i} role={role} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
