import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import useAuth from "../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar
        fluid
        className="py-8 !bg-clr-primary"
      >
        <Navbar.Brand
          href="https://flowbite-react.com"
          className="justify-center md:justify-start md:flex-none flex-1 "
        >
          <span className="self-center whitespace-nowrap text-3xl font-semibold text-clr-accent dark:text-white">
            Fluency
          </span>
        </Navbar.Brand>
        <div className="flex flex-row-reverse md:flex-row -mt-10 md:mt-0 md:order-2 w-full md:w-fit justify-between">
          {user
            ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    img={user?.image ||
                      `https://flowbite.com/docs/images/people/profile-picture-5.jpg`}
                    rounded
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
                <NavLink to="dashboard">
                  <Dropdown.Item>
                    Dashboard
                  </Dropdown.Item>
                </NavLink>
                <Dropdown.Item>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item>
                  My Classes
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            )
            : (
              <NavLink>
                <Button className="!bg-clr-accent text-white px-8 hidden md:inline-block">
                  Login
                </Button>
              </NavLink>
            )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='md:justify-center me-8'>
          <Navbar.Link as="span" className="nav-link">
            <NavLink>
              Home
            </NavLink>
          </Navbar.Link>
          <NavLink>
            <Navbar.Link as="span" className="nav-link">
              Instructors
            </Navbar.Link>
          </NavLink>
          <Navbar.Link as="span" className="nav-link">
            <NavLink>
              Classes
            </NavLink>
          </Navbar.Link>
          {user &&
            (
              <Navbar.Link as="span" className="nav-link">
                <NavLink>
                  Dashboard
                </NavLink>
              </Navbar.Link>
            )}
          <Navbar.Link as="span" className="nav-link">
            <NavLink>
              Contact
            </NavLink>
          </Navbar.Link>
          <Button className="md:hidden mt-5 self-start !bg-clr-accent text-white px-8">
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;