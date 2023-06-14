import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import useAuth from "../Hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavigationBar = () => {
  const { user, setUser, logout } = useAuth();
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
    <div className="!bg-gray-100 dark:!bg-clr-dark">
      <Navbar
        fluid
        className="py-8 main-container !bg-transparent"
      >
        <Navbar.Brand
          href="/"
          className="justify-center md:justify-start md:flex-none flex-1 "
        >
          <span className="self-center whitespace-nowrap text-3xl font-semibold text-clr-accent dark:text-white">
            Fluency
          </span>
        </Navbar.Brand>
        <div className="relative flex flex-row-reverse md:flex-row -mt-10 md:mt-0 md:order-2 w-full md:w-fit justify-between">
          <DarkThemeToggle className={user ? "!me-14" : "!me-4"} />
          {user
            ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    img={user?.photoURL ||
                      `https://flowbite.com/docs/images/people/profile-picture-5.jpg`}
                    rounded
                    className="absolute right-0 top-0"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {user?.displayName}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <NavLink to="/dashboard">
                  <Dropdown.Item>
                    Dashboard
                  </Dropdown.Item>
                </NavLink>
                <Dropdown.Item>
                  Settings
                </Dropdown.Item>{" "}
                <Dropdown.Item>My Classes</Dropdown.Item> <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            )
            : (
              <NavLink to="/login">
                <Button className="uppercase text-white px-8 hidden md:inline-block hover:!bg-cyan-700 !bg-cyan-800">
                  Login
                </Button>
              </NavLink>
            )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:justify-center me-8">
          <Navbar.Link as="span" className="nav-link">
            <NavLink>
              Home
            </NavLink>
          </Navbar.Link>
          {user &&
            (
              <Navbar.Link as="span" className="nav-link">
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
              </Navbar.Link>
            )}

          <NavLink to="/instructors">
            <Navbar.Link as="span" className="nav-link">
              Instructors
            </Navbar.Link>
          </NavLink>
          <Navbar.Link as="span" className="nav-link">
            <NavLink to="/classes">
              Classes
            </NavLink>
          </Navbar.Link>
          <Navbar.Link as="span" className="nav-link">
            <NavLink>
              Contact
            </NavLink>
          </Navbar.Link>
          <Button className="uppercase md:hidden mt-5 self-start text-white !bg-cyan-800 dark!bg-cyan-700 px-8">
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
