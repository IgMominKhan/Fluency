import { ErrorMessage } from "@hookform/error-message";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import SocialLogin from "../../Shared/SocialLogin";
const Registation = () => {
  const { register: createUser, setUser } = useAuth();
  const { handleSubmit, register, formState: { errors }, watch } = useForm();
  const redirect = useNavigate();
  const from = useLocation()?.state?.from?.pathname;
  // handle registation
  const onRegister = async (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        if (userCredential.user) {
          updateProfile(userCredential.user, {
            displayName: data.name,
            photoURL: data.photo,
          }).then(() => {
            setUser(userCredential.user);

            axios.post("https://n5l3sm-3000.csb.app/users", {
              email: userCredential.user.email,
              role: "user",
              image: data.photo,
            });
            redirect(from || "/");
          });
        }
      }).catch((err) => console.error(err));
  };

  return (
    <main className="bg-clr-accent/60 dark:bg-clr-dark dark:border-y-gray-600 dark:border-y">
      <section className="main-container">
        <h1 className="mb-8 title text-center">Please Login</h1>
        <form
          onSubmit={handleSubmit(onRegister)}
          className="flex max-w-md flex-col gap-4 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Your name"
                color={errors?.name && "failure"}
              />
            </div>
            <TextInput
              type="name"
              color={errors?.name && "failure"}
              placeholder="Enter Your Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <small className="!text-red-500">{message}</small>
              )}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Your email"
                color={errors?.email && "failure"}
              />
            </div>
            <TextInput
              type="email"
              color={errors?.email && "failure"}
              placeholder="name@domain.com"
              {...register("email", {
                required: "E-Mail is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <small className="!text-red-500">{message}</small>
              )}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Your password"
                color={errors?.password && "failure"}
              />
            </div>
            <TextInput
              type="password"
              name="password"
              color={errors?.password && "failure"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum six characters is required",
                },
                pattern: {
                  value: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                  message:
                    "Minimum one special character and one uppercase letter are required",
                },
              })}
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <small className="text-red-500">{message}</small>
              )}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                color={errors?.confirmPassword && "failure"}
                htmlFor="confirmPassword"
                value="Confirm password"
              />
            </div>
            <TextInput
              type="password"
              name="confirmPassword"
              color={errors?.confirmPassword && "failure"}
              {...register("confirmPassword", {
                required: "Password Doesn't match",
                validate: (value, formValues) =>
                  value === formValues.password || "Password Doesn't match",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              render={({ message }) => (
                <small className="text-red-500">{message}</small>
              )}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="photo"
                value="Your photo"
                color={errors?.photo && "failure"}
              />
            </div>
            <TextInput
              type="photo"
              color={errors?.photo && "failure"}
              placeholder="Enter A Valid Photo URL"
              {...register("photo", {
                required: "Photo URL is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="photo"
              render={({ message }) => (
                <small className="!text-red-500">{message}</small>
              )}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label
                className="flex"
                htmlFor="agree"
              >
                <p>
                  I agree with the
                </p>
                <Link
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/forms"
                >
                  <p>
                    terms and conditions
                  </p>
                </Link>
              </Label>
            </div>
            <div>
              <Link className="text-cyan-600 underline" to="/login">Login</Link>
            </div>
          </div>
          <Button type="submit">
            Register new account
          </Button>
          
         {/* social login secton */}
          <SocialLogin />
        </form>
      </section>
    </main>
  );
};

export default Registation;
