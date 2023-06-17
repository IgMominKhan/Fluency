import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="px-12 dark:bg-clr-primary">
      <section>
        <h1 className="title">Hello</h1>
        <h1 className="title">{user?.displayName}</h1>
        <div className="py-12 dark:text-white">
          <p>Your Dashboard's Features is Coming Soon...</p>
          <p>You can visit Other Links</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
