import { toast } from "react-toastify";

const TOAST_ID = "GROCERY_GURU_CUSTOM_TOAST";

export type ToastMessage = string | React.ReactNode;
const customToast = {
  success(msg: ToastMessage, options = {}) {
    customToast.success(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
  warn(msg: ToastMessage, options = {}) {
    customToast.warn(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
  error(msg: ToastMessage, options = {}) {
    customToast.error(msg, {
      ...options,
      toastId: TOAST_ID,
    });
  },
};

export default customToast;
