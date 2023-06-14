import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const redirect = useNavigate();
  const from = useLocation()?.state?.from?.pathname;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  console.log(errors);

  // handle login
  const handleLogin = (data) => {
    login(data.email, data.password)
      .then(() => {
        redirect(from || "/");
      })
      .catch((err) => {
        Swal.fire("Opps!", `${err.message || err.code}`, "error");
      });
  };

  return (
    <main className="bg-clr-accent/60 dark:bg-clr-dark dark:border-y-gray-600 dark:border-y">
      <section className="main-container">
        <h1 className="mb-8 title text-center">Please Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex max-w-md flex-col gap-4 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              {...register("email", { required: "Email is Required" })}
              placeholder="name@domain.com"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <small className="text-red-500">{message}</small>
              )}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Your password"
              />
            </div>
            <TextInput
              type="password"
              placeholder="******"
              {...register("password", {
                required: "Password is Required",
                minLength: 6,
              })}
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <small className="text-red-500">{message}</small>
              )}
            />
            {errors?.password?.type == "minLength"
              ? (
                <small className="text-red-500">
                  Minium 6 character is required
                </small>
              )
              : ""}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <p className="dark:text-white">
              New Here?{" "}
              <Link
                className="text-clr-primary dark:text-cyan-600 underline"
                to="/register"
              >
                create an account
              </Link>
            </p>
          </div>
          <Button
            type="submit"
            className="!bg-cyan-800 hover:!bg-cyan-700 dark:hover:!bg-cyan-700"
          >
            Submit
          </Button>

          {/* social login section */}
          <SocialLogin />
        </form>
      </section>
    </main>
  );
};

export default Login;
