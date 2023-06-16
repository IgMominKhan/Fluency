import { Button, Modal, Textarea } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useClasses from "../../Hooks/useClasses";
import { useState } from "react";

const ClassInfo = ({ clas }) => {
  const [openModal, setOpenModal] = useState(undefined);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [refetch] = useClasses();

  // handle class status change
  const handleChangeStatus = async (clsId, status) => {
    const res = await axiosSecure.patch(
      `/classes/${clsId}?email=${user?.email}`,
      { status },
    );

    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        title: "Success",
        text: `Class status has been changed to ${status}`,
        icon: "success",
        timer: 3000,
      });
    }
  };

  // send feedback
  const handleSendFeedback = async (e, id) => {
    e.preventDefault();
    const feedback = e?.target?.feedback?.value;
    const res = await axiosSecure.patch(`/classes/${id}?email=${user?.email}`, {
      feedback,
    });
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        title: "Success",
        text: `Feedback send successful`,
        icon: "success",
        timer: 2000,
      });
    }
    setOpenModal(undefined);
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-32 p-4">
          <img
            className="rounded-lg min-w-[5rem] max-h-[5rem] object-cover"
            src={clas?.image}
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {clas?.title}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.teacher}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.email}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.total_available_sit}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.price}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.status}
        </td>
        <td className="px-6 py-4 text-center">
          <Button
            disabled={clas?.status === "approved" ||
              clas?.status === "denied" && true}
            onClick={() => handleChangeStatus(clas?._id, "denied")}
            size="xs"
            color="failure"
            className="uppercase"
          >
            Deny
          </Button>
        </td>
        <td className="px-6 py-4 text-center">
          <Button
            size="xs"
            onClick={() => handleChangeStatus(clas?._id, "approved")}
            disabled={clas?.status === "approved" ||
              clas?.status === "denied" && true}
            className="uppercase"
          >
            Approve
          </Button>
        </td>

        <td className="px-6 py-4 text-center">
          <Button
            size="xs"
            onClick={() => setOpenModal("default")}
            className="uppercase"
          >
            Send Feedback
          </Button>
        </td>
      </tr>
      {/* modal content */}
      <Modal
        show={openModal === "default"}
        onClose={() => setOpenModal(undefined)}
      >
        <form onSubmit={(e) => handleSendFeedback(e, clas._id)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <Textarea name="feedback" required />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex-row-reverse gap-5">
            <Button type="submit">
              Send
            </Button>
            <Button color="gray" onClick={() => setOpenModal(undefined)}>
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ClassInfo;
