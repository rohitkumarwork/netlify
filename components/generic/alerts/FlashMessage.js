import Swal from "sweetalert2";

export const successMsg = () => {
  debugger;
  Swal.fire("Details added successfully", ` `, "success");
};

export const updateMsg = (type) => {
  debugger;
  Swal.fire("Good job!", ` ${type} updated successfully`, "success");
};

export const forgetPasswordSuccessMsg = () => {
  Swal.fire("Please login using password sent to phone number");
};
