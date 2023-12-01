import Header from "../components/Header";
import React, {useState} from "react";
import PageLayout from "@/containers/layout/PageLayout";
import Loader from "@/components/loader/Loader";
import axios from "axios";
import {API_BASE_URL} from "@/constants";
import customToast from "@/components/Toast/customToast";
import {useRouter} from "next/router";


type Props = {};

const ResetPassword = ({}: Props) => {

  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = async (e:any) => {
   e.preventDefault();
   try {

     const response = await axios.post(`${API_BASE_URL}registration/password-reset/request/`, {
       email,
     })

     if(response.status == 200){
       customToast.success(response.data.message);
       router.push(`/recovery?eml=${email}`)
     }
   }catch (error){
     // customToast.error(error?.message);
   }
 }
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
                <div className="p3-6 w-full text-center">
                  <h4 className="mb-6 text-3xl font-semibold">
                    { }
                    RESET PASSWORD
                  </h4>
                  <p className="text-sm mb-4">
                    Please enter your email to reset password
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-gray-600 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Email address"
                      required
                      onChange={(e) =>setEmail(e.target.value)}
                  />
                  <label
                      htmlFor="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary"
                  >
                    Email address
                  </label>
                </div>

                <button
                    type="submit"
                    className="inline-block bg-primary w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                  Reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResetPassword;
