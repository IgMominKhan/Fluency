import useUsersLoader from "../../Hooks/useUsersLoader";
import ProductCart from "./ProductCart";
import UserInfo from "./UserInfo";

const ManageUsers = () => {
  const [, users] = useUsersLoader();

  return (
    <main className="h-full min-h-screen bg-clr-secondary">
      <section className="main-container">
        <h1 className="title text-center mb-12">
          Manage <span className="text-clr-accent">All</span> Users
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  E-Mail
                </th>

                <th scope="col" className="px-6 py-3">
                  Role
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
              {users.map((user) => (
                <UserInfo
                  key={user._id}
                  user={user}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ManageUsers;
