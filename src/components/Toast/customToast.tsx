import { toast } from "react-toastify";

const TOAST_ID = "GROCERY_GURU_CUSTOM_TOAST";

export type ToastMessage = string | React.ReactNode;
const customToast = {
  success(msg: ToastMessage, options = {}) {
    toast.success(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
  warn(msg: ToastMessage, options = {}) {
    toast.warn(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
  error(msg: ToastMessage, options = {}) {
    toast.error(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
};

export default customToast;
