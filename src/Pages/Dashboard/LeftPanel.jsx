import useAuth from "../../Hooks/useAuth";
import { DarkThemeToggle, Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiChartPie, HiShoppingBag } from "react-icons/hi";
import { MdAdd, MdLiveHelp, MdNaturePeople, MdPeople } from "react-icons/md";
import { BsCartFill, BsFillBookmarkCheckFill, BsGear } from "react-icons/bs";
import { FaHistory, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const LeftPanel = ({ role }) => {
  const { setUser, logout } = useAuth();
  const redirect = useNavigate();
  // handle logout
  const handleLogout = () => {
    logout().then(
      () => {
        setUser(null);
        localStorage.removeItem("token");
        Swal.fire("Opps!", "Signed out", "info"), redirect("/");
      },
    );
  };
  return (
    <>
      <Sidebar className="[&>div]:rounded-none !h-full !w-full lg:min-w-[20rem] md:max-w-fit">
        <Sidebar.Items id="sidebar" className="!h-full min-h-screen p-4 -m-4  bg-clr-accent [&_*]:text-clr-primary">
          <Sidebar.ItemGroup>
            
            <Sidebar.Item as='span' className='group'> 
              <Link to="/" className="dark:group-hover:[&_*]:text-white">
                <h1 className="text-4xl mb-5">
                  Fluency
                </h1>
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              as="span"
              icon={HiChartPie}
            >
              <Link to="/dashboard">
                Dashboard
              </Link>
            </Sidebar.Item>
            {role === "student" && (
              <>
                <Sidebar.Item
                  as="span"
                  icon={HiShoppingBag}
                >
                  <Link to="/classes">
                    <p>
                      Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item as="span" icon={BsFillBookmarkCheckFill}>
                  <Link to="enrolled-classes">
                    <p>
                      My Enrolled Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item as="span" icon={BsCartFill}>
                  <Link to="selected-classes">
                    <p>
                      My Selected Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  as="span"
                  icon={FaHistory}
                >
                  <Link to="payment-history">
                    <p>
                      Payment History
                    </p>
                  </Link>
                </Sidebar.Item>
              </>
            )}
            {role === "instructor" && (
              <>
                <Sidebar.Item
                  as="span"
                  icon={MdAdd}
                >
                  <Link to="add-class">
                    <p>
                      Add A Class
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  as="span"
                  icon={FaUserGraduate}
                >
                  <Link to="my-classes">
                    <p>
                      My Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  as="span"
                  icon={MdPeople}
                >
                  <Link to="manage-students">
                    <p>
                      Manage Students
                    </p>
                  </Link>
                </Sidebar.Item>
              </>
            )}
            {role === "admin" && (
              <>
                <Sidebar.Item
                  as="span"
                  icon={MdNaturePeople}
                >
                  <Link to="manage-classes">
                    <p>
                      Manage-Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  as="span"
                  icon={MdPeople}
                >
                  <Link to="manage-users">
                    <p>
                      Manage Users
                    </p>
                  </Link>
                </Sidebar.Item>
              </>
            )}
            <Sidebar.Item
              icon={HiArrowSmLeft}
              className="hover:cursor-pointer"
              onClick={handleLogout}
            >
              <p>
                Sign Out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={HiChartPie}
            >
              <p>
                Update Profile
              </p>
            </Sidebar.Item>
            <Sidebar.Item className="[&>button]:!p-0" icon={DarkThemeToggle}>
              <p>
                Toggle Theme
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              icon={BsGear}
            >
              <p>
                Settings
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={MdLiveHelp}
            >
              <p>
                Help
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default LeftPanel;
