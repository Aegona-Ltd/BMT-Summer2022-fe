import React, { MouseEventHandler } from "react";

const ConfirmDelete = ({
  handleClose,
  handleConfirm,
}: {
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleConfirm: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="text-center">
      <p className="mb-4 text-light-100">
        Are you sure you want to delete this student?
      </p>
      <div className="flex justify-center items-center space-x-4">
        <button
          data-modal-toggle="deleteModal"
          type="button"
          className="py-2 px-3 text-sm font-medium text-grey-500 bg-light-100 rounded-lg border border-grey-200 hover:bg-gray-100 hover:text-gray-900"
          onClick={handleClose}
        >
          No, cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
          onClick={handleConfirm}
        >
          {"Yes, I'm sure"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
