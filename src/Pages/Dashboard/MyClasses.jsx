import useAuth from "../../Hooks/useAuth";
import useInstructorClasses from "../../Hooks/useInstructorClasses";
import InstructorClassInfo from "./InstructorClassInfo";
const MyClasses = () => {
  const { user } = useAuth();
  const [refetch, classes] = useInstructorClasses(user?.email);
  return (
    <>
      <main className="h-full min-h-screen bg-clr-secondary">
        <section className="main-container">
          <h1 className="title text-center mb-12">
            Manage <span className="text-clr-accent">Your</span> Classes
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Instructor
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Total Available Sit
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Enrolled Student
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Price
                  </th>

                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map((clas) => (
                  <InstructorClassInfo
                    key={clas._id}
                    clas={clas}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyClasses;
