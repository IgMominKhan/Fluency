import useAuth from '../../Hooks/useAuth'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Login = () => {
  const {setUser, login} = useAuth();
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
    login()
    .then()
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
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          <Button type="submit" className='!bg-cyan-800 hover:!bg-cyan-700 dark:hover:!bg-cyan-700'>
            Submit
          </Button>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-clr-accent/60 left-1/20">
              or
            </span>
          </div>
          <div className="social-login">
            <div class=" flex gap-5 px-4 py-2 border rounded">
              <Button
                className="bg-cyan-700 dark:bg-cyan-800 flex text-white mx-auto text-lg rounded font-bold"
                type="button"
              >
                <FcGoogle className="text-2xl mr-3" />
                Sign In with Google
              </Button>
              <Button
                class="bg-black flex text-white mx-auto text-lg rounded font-bold"
                type="button"
              >
                <VscGithub className="text-2xl mr-3" />
                Sign In with Github
              </Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
