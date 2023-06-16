import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";
const InstructorClassInfo = ({ clas }) => {
  const [openModal, setOpenModal] = useState(undefined);

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
          {clas?.total_available_sit}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.enrolled_students}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.price}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
          {clas?.status}
        </td>
        <td className="px-6 py-4 text-center">
          <Button
            disabled={clas?.status === "approved" && true}
            onClick={() =>
              Swal.fire("Unavailable Feature", "coming soon...", "info")}
            size="xs"
            color="failure"
            className="uppercase"
          >
            Delete
          </Button>
        </td>
        <td className="px-6 py-4 text-center">
          <Button
            size="xs"
            onClick={() => setOpenModal("default")}
            disabled={clas?.status === "approved" ||
              clas?.status === "pending" && true}
            className="uppercase"
          >
            View Feedback
          </Button>
        </td>

        <td className="px-6 py-4 text-center">
          <Button
            size="xs"
            onClick={() =>
              Swal.fire({
                title: "Unavailable Feature",
                text: "coming soon...",
                icons: "info",
                timer: 2000,
              })}
            className="uppercase"
          >
            Update
          </Button>
        </td>
        <Modal
          show={openModal === "default"}
          onClose={() => setOpenModal(undefined)}
        >
          <Modal.Header>Feedback By Admin</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              {clas.feedback ? clas?.feedback : "You don't have any feedback"}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex-row-reverse gap-5">
            <Button color="gray" onClick={() => setOpenModal(undefined)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </tr>
    </>
  );
};

export default InstructorClassInfo;
