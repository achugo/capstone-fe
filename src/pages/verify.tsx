import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLayout from "@/containers/layout/PageLayout";
import Loader from "@/components/loader/Loader";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/constants";
import { useRouter } from "next/router";

type Props = {};

const VerifyAccount = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>({});
  const router = useRouter()
  

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('userData')
    if (item) {
      setUserInfo(JSON.parse(item))  
    }
  }, [])


  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}registration/signup/verify/`, {
        email: userInfo?.email,
        code,
      });
      if (response.data?.token) {
        setLoading(false);
        localStorage.setItem('token', response.data?.token)
        toast.success('user verification successful');
        router.push('/user')
   
      }

    
      // Handle success
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Registration failed:", error);
      //@ts-ignore
      toast.error(error?.message);
    }
  };
  return (
    <PageLayout>
      <Header />
      <section className="flex items-center h-screen w-full overflow-y-hidden sm:py-2">
        <div className="container py-5 px-2">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-5 sm:m-0 mt-0 sm:transition-none opacity-100 transition-all ease-in duration-500"
            id="formDiv"
          >
            <div className="flex flex-col justify-center hidden sm:inline-block">
              <img
                src="/illustration.png"
                className="w-30 h-30"
                alt="Phone image"
              />
            </div>
            <div className="sm:w-full bg-white shadow-xl rounded-3xl p-5 md:w-9/12">
              <div className="flex items-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                <div className="py-3 w-full">
                  <h4 className="mb-4 text-lg text-center sm:text-3xl font-semibold ">
                    VERIFY REGISTRATION
                  </h4>
                  <p className="text-xs sm:text-sm mb-2 text-center">
                    Please enter the otp sent to {userInfo?.email}
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="number"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="code"
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput33"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary"
                  >
                    OTP
                  </label>
                </div>


                <button
                  type="submit"
                  className="justify-center flex inline-block bg-primary w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {loading ? <Loader /> : "Verify"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VerifyAccount;
