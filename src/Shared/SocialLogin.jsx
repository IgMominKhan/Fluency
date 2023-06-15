import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const { setUser, socialLogin } = useAuth();
  const from = useLocation()?.state?.from?.pathname;
  const redirect = useNavigate();

  // handle google login
  const handleGoogleLogin = () => {
    socialLogin()
      .then((result) => {
        axios.post("https://fluency-server.vercel.app/users", {
          email: result?.user?.email,
          role: "student",
          image: result?.user?.photoURL,
          name: result?.user?.displayName,
        });
        redirect(from || "/");
      }).catch((err) =>
        Swal.fire("Opps!", `${err.message || err.code}`, "error")
      );
  };

  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-clr-accent/60 left-1/20">
          or
        </span>
      </div>

      <div className="social-login">
        <div className=" flex gap-5 px-4 py-2 border rounded">
          <Button
            onClick={handleGoogleLogin}
            className="bg-cyan-700 dark:bg-cyan-800 flex text-white mx-auto text-lg rounded font-bold"
            type="button"
          >
            <FcGoogle className="text-2xl mr-3" />
            Sign In with Google
          </Button>
          <Button
            className="bg-black flex text-white mx-auto text-lg rounded font-bold"
            type="button"
          >
            <VscGithub className="text-2xl mr-3" />
            Sign In with Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
