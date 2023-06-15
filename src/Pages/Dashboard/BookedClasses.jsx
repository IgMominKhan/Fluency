import ProductCart from "./ProductCart";
import useCart from "../../Hooks/useCart";

const BookedClasses = () => {
  const [refetch, classes] = useCart("booked");

  refetch();
  return (
    <main className=" bg-clr-secondary">
      <section className="main-container">
        <h1 className="title text-center mb-12">
          My <span className="text-clr-accent">Selected</span> Classes
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Course
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item) => (
                <ProductCart
                  key={item._id}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BookedClasses;
