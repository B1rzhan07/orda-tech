import { toast } from "react-toastify";

export const usePromise = (promise: Promise<unknown>) => {
  return toast.promise(promise, {
    pending: "Promise is pending",
    success: "Promise resolved 👌",
    error: "Promise rejected 🤯",
  });
};
