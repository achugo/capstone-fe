import Header from "../components/Header";
import React, { useState } from "react";
import { useRouter } from "next/router";
import PageLayout from "@/containers/layout/PageLayout";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";
import { API_BASE_URL } from "@/constants";
import customToast from "@/components/Toast/customToast";
type Props = {};

const Login = ({}: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json", // Set the Content-Type header
      // Add any other headers if needed
    };

    try {
      const response = await axios.post(`${API_BASE_URL}registration/signin/`, {
        email,
        password,
      });

      if (response.data.token && typeof window !== "undefined") {
        setLoading(false);
        localStorage.setItem("token", response.data?.token);
        customToast.success("login successful");
        router.push("/user");
      }
      // Handle success
      console.log("sign successful:", response.data);
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Registration failed:", error);
      //@ts-ignore
      customToast.error(error?.message);
    }
  };

  return (
    <PageLayout>
      <Header />
      <section className="h-screen  w-full overflow-y-hidden sm:py-2">
        <div className="container  px-2 py-5">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-5 sm:m-0 mt-0 sm:transition-none opacity-100 transition-all ease-in duration-500"
            id="formDiv"
          >
            <div className="flex flex-col justify-center hidden sm:inline-block">
              <img
                src="/illustration.png"
                className="w-full "
                alt="Phone image"
              />
            </div>
            <div className="sm:w-full bg-white shadow-xl rounded-3xl p-5 sm:w-11/12">
              <div className="flex items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                <div className="p3-6 w-full">
                  <h4 className="mb-4 text-lg text-center sm:text-3xl font-semibold ">
                    SIGN IN
                  </h4>
                  <p className="text-xs sm:text-sm mb-2 text-center">
                    Please login to access customized search experience
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                    id="exampleFormControlInput3"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-6 flex items-center justify-between flex-wrap">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck3"
                      checked
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck3"
                    >
                      Remember me
                    </label>
                  </div>

                  <button
                    onClick={() => router.push("/reset-password")}
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="inline-block bg-primary w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {loading ? <Loader /> : "Login"}
                </button>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Login;
