import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const AddClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.classImage.files[0];

    const formData = new FormData();

    formData.append("image", image);
    console.log(image);

    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_SECRET}`,
      { method: "post", body: formData },
    ).then((res) => res.json()).then((imageRes) => {
      if (imageRes.success) {
        data.image = imageRes.data.display_url;
        axiosSecure.post(`/classes?email=${user?.email}`, data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Your class is in pending",
              icon: "success",
              timer: 2000,
            });
            form.reset();
          }
        });
      }
    });

    const data = {
      teacher: user?.displayName,
      email: user?.email,
      title: form.className.value,
      total_available_sit: parseInt(form.availableSit.value),
      price: parseFloat(form.price.value),
      status: "pending",
      enrolled_students: 0,
    };

    console.log(data);
  };
  return (
    <section className="dark:bg-clr-primary min-h-screen grid place-items-center p-3">
      <h1 className="mb-5 mt-8 text-center title">Add A Class</h1>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 md:min-w-max"
      >
        <div className="sm:flex gap-5">
          <div className="flex-1 mb-5">
            <div className="mb-2 block">
              <Label
                htmlFor="class-name"
                value="Class Name"
              />
            </div>
            <TextInput
              id="class-name"
              name="className"
              placeholder="Enter class name here"
              shadow
              required
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label
                htmlFor="class-image"
                value="Class Image"
              />
            </div>
            <FileInput name="classImage" id="class-image" />
          </div>
        </div>
        <div className="sm:flex gap-5">
          <div className="flex-1 mb-5">
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Instructor Name"
              />
            </div>
            <TextInput
              defaultValue={user?.displayName}
              readOnly
              shadow
              id="email"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Instructor E-Mail"
              />
            </div>
            <TextInput
              defaultValue={user?.email}
              readOnly
              shadow
              id="email"
            />
          </div>
        </div>
        <div className="sm:flex gap-5">
          <div className="flex-1 mb-5">
            <div className="mb-2 block">
              <Label
                htmlFor="sit"
                value="Available Sit"
              />
            </div>
            <TextInput
              id="sit"
              required
              shadow
              type="number"
              name="availableSit"
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label
                htmlFor="price"
                value="Price"
              />
            </div>
            <TextInput
              id="price"
              required
              shadow
              name="price"
              type="number"
            />
          </div>
        </div>
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
              className="ms-1 text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">
          Add
        </Button>
      </form>
    </section>
  );
};

export default AddClass;
