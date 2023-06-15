import { DarkThemeToggle, Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { MdLiveHelp } from "react-icons/md";
import { BsCartFill, BsFillBookmarkCheckFill, BsGear } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
const LeftPanel = ({ role }) => {
  return (
    <>
      <Sidebar className="h-screen [&>div]:rounded-none w-full max-w-xs">
        <Sidebar.Items className="p-4 -m-4">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/">
              <h1 className="text-4xl mb-10">
                Fluency
              </h1>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              <p>
                Dashboard
              </p>
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
                  <Link to="/dashboard/enrolled-classes">
                    <p>
                      My Enrolled Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item as="span" icon={BsCartFill}>
                  <Link to="/dashboard/selected-classes">
                    <p>
                      My Selected Classes
                    </p>
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item
                  as="span"
                  icon={FaHistory}
                >
                  <Link to="/dashboard/payment-history">
                    <p>
                      Payment History
                    </p>
                  </Link>
                </Sidebar.Item>
              </>
            )}
            <Sidebar.Item
              href="#"
              icon={HiArrowSmLeft}
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
                Upgrade to Pro
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
