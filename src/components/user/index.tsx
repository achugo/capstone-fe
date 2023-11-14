import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import axios from "axios";
import customToast from "../Toast/customToast";

export default function UserDashboard() {
  const [userInfo, setUserInfo] = useState<any>({});
  const router = useRouter();
  const [basket, setBasket] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const [numberOfPlates, setNumberOfPlates] = useState(0);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("userData");
    if (item) {
      setUserInfo(JSON.parse(item));
    }
    fetchBasketItems();
  }, []);

  const logout = () => {
    localStorage.clear();
    router.push("/");
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }, 1000);
  };

  const fetchBasketItems = async () => {
    setLoading(true);

    // Retrieve the token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      customToast.error("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`, // Authorization header with the Bearer token
    };

    try {
      // Make a GET request to the basket endpoint
      const basketPromise = axios.get(
        `https://api.grocery-guru.de/api/basket/`,
        { headers }
      );

      const numberOfPlatesPromise = axios.get(`/api/number_of_plates`);

      const [basketResponse, numberOfPlatesResponse] = await Promise.all([
        basketPromise,
        numberOfPlatesPromise,
      ]);
      // Assuming the API responds with the basket items
      setLoading(false);
      console.log("Basket items fetched successfully:", basketResponse.data);
      setBasket(basketResponse.data);
      setNumberOfPlates(numberOfPlatesResponse.data.number_of_plates);
      // You can now set the fetched data to state or context to use in your app
      // setBasketItems(response.data); // Example

      customToast.success("Basket items fetched successfully.");
    } catch (error: any) {
      setLoading(false);
      console.error("Failed to fetch basket items:", error);
      //@ts-ignore
      customToast.error(
        error?.response?.data?.message || "Failed to fetch basket items."
      );
    }
  };

  return (
    <>
      <div className="overflow-x-hidden flex">
        {/*sidebar */}
        <div className="bg-white min-h-[100vh] w-[13rem] ml-[-13rem] sm:ml-0 flex flex-col justify-between">
          <div>
            <div
              className="py-2 flex hover:cursor-pointer ps-2 bg-amber-400"
              onClick={() => router.push("/")}
            >
              <Image
                className="cursor-pointer w-8 h-8 sm:h-12 sm:w-12"
                src={"/logo-icon.png"}
                alt="Glocery guru"
                width={50}
                height={100}
              />
              <span className="text-center font-semibold text-sm sm:text-sm text-white pt-1 sm:pt-3">
                <span className="text-primary">GROCERY</span>GURU
              </span>
            </div>
            <div>
              <ul className="">
                <li className=" sm:flex  py-2.5  ps-2 shadow hover:cursor-pointer hover:bg-amber-400  duration-500 text-center">
                  <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                  </div>
                  &nbsp;
                  <span className="mt-2  text-xs sm:text-1  sm:inline-block">
                    DASHBOARD
                  </span>
                </li>
                <li className=" sm:flex  py-2.5  ps-2  shadow hover:cursor-pointer hover:bg-amber-400  duration-500 text-center">
                  <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                    </svg>
                  </div>
                  &nbsp;
                  <span className="mt-2  text-xs sm:text-1  sm:inline-block">
                    WISHLIST
                  </span>
                </li>
                <li className=" sm:flex  py-2.5  ps-2 shadow  hover:cursor-pointer hover:bg-amber-400  duration-500 text-center">
                  <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" />
                    </svg>
                  </div>
                  &nbsp;
                  <span className="mt-2  text-xs sm:text-1  sm:inline-block">
                    DISCOUNTS
                  </span>
                </li>
                <li className=" sm:flex py-2.5  ps-2 shadow hover:cursor-pointer hover:bg-amber-400  duration-500 text-center">
                  <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                  </div>
                  &nbsp;
                  <span className="mt-2  text-xs sm:text-1  sm:inline-block">
                    CONTRIBUTIONS
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <a className=" sm:flex  py-2.5  ps-2 shadow hover:cursor-pointer hover:bg-amber-400  duration-500 text-center">
            <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
              </svg>
            </div>
            &nbsp;
            <span className="mt-2  text-xs sm:text-1  sm:inline-block">
              SETTINNG
            </span>
          </a>
          <a
            onClick={logout}
            className=" sm:flex  py-2.5  ps-2 shadow hover:cursor-pointer hover:bg-amber-400  duration-500 text-center"
          >
            <div className="m-auto sm:m-0 hover:cursor-pointer h-8 w-8 p-2">
              <FaArrowLeft />
            </div>
            &nbsp;
            <span className="mt-2  text-xs sm:text-1  sm:inline-block">
              LOGOUT
            </span>
          </a>
        </div>
        {/* main content */}
        <div className="w-[100vw] bg-gray-200 sm:min-w-0 sm:w-full px-5 pt-8">
          <div className="flex justify-between">
            <div className="rounded-full bg-white  w-7/12">
              <div className="w-10 h-10  bg-amber-300 rounded-full ms-1 mt-1">
                <button
                  className="p-2"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  // onClick={onSubmit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    className="ms-1 pt-1"
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-full bg-white w-auto flex  p-4 mr-2  items-center gap-2">
                <p>{numberOfPlates}</p>
                <FaPlateWheat />
              </div>
              <div className="rounded-full bg-white w-auto flex justify-between p-1">
                <p className="pt-2 ms-2 hidden lg:inline-block me-1">
                  Hello, {userInfo?.first_name}
                </p>
                <div className="w-10 h-10  bg-amber-300 rounded-full">
                  <button
                    className="ps-1 pt-1"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    // onClick={onSubmit}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="ms-2 mt-2"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4">
            <div className=" w-[160px] rounded-xl bg-amber-400 shadow my-1">
              <div className="flex text-center pt-2  ps-2  hover:cursor-pointer duration-500">
                <div className="hover:cursor-pointer h-8 w-8 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" />
                  </svg>
                </div>
                <span className="mt-1 sm:text-1  sm:inline-block">
                  DISCOUNTS
                </span>
              </div>
              <h2 className="text-center font-bold text-xl">100</h2>
            </div>
            <div className=" w-[160px] rounded-xl bg-amber-400 shadow my-1">
              <div className="flex text-center pt-2  ps-2  hover:cursor-pointer duration-500">
                <div className="hover:cursor-pointer h-8 w-8 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                  </svg>
                </div>
                <span className="mt-1 sm:text-1  sm:inline-block">
                  WISHLIST
                </span>
              </div>
              <h2 className="text-center font-bold text-xl">
                {basket?.length}
              </h2>
            </div>
            <div className=" w-[160px] rounded-xl bg-amber-400 shadow my-1">
              <div className="flex text-center pt-2  ps-2  hover:cursor-pointer duration-500">
                <div className="hover:cursor-pointer h-8 w-8 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" />
                  </svg>
                </div>
                <span className="mt-1 sm:text-1  sm:inline-block">
                  DISCOUNTS
                </span>
              </div>
              <h2 className="text-center font-bold text-xl">
                {basket?.length}
              </h2>
            </div>
            <div className=" w-[160px] rounded-xl bg-amber-400 shadow my-1">
              <div className="flex text-center pt-2  ps-2  hover:cursor-pointer duration-500">
                <div className="hover:cursor-pointer h-8 w-8 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" />
                  </svg>
                </div>
                <span className="mt-1 sm:text-1  sm:inline-block">
                  CONTRIBUTION
                </span>
              </div>
              <hr className="border border-black mx-3" />
              <h2 className="text-center font-bold text-xl">100</h2>
            </div>
          </div>
          <div className="my-3 overflow-x-scroll">
            <h2 className="text-center text-xl">LATEST SEARCH</h2>
            <table className="min-w-full bg-white rounded whitespace-nowrap">
              <thead className="border-b bg-gray-50">
                <tr className="">
                  <th className="px-3 py-3 text-xs font-normal text-left text-black uppercase align-middle">
                    Image
                  </th>
                  <th className="px-3 py-3 text-xs font-normal text-left text-black uppercase align-middle">
                    Item
                  </th>
                  <th className="px-3 py-3 text-xs font-normal text-left text-black uppercase align-middle">
                    Description
                  </th>
                  <th className="px-3 py-3 text-xs font-normal text-left text-black uppercase align-middle">
                    Discount
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm bg-white divide-y divide-gray-200">
                {basket?.map((item: any) => (
                  <tr>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnK-pOokU4qJ2RYbjiSofutlnvcgoTxiFfw&usqp=CAU"
                          alt="avatar"
                        />
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                        {item?.name}
                      </span>
                    </td>
                    <td className="px-3 py-4 text-gray-500 ">
                      <a href="www.aldi.com/milk">{item?.description}</a>
                    </td>
                    <td className="w-20 px-3 py-2 text-gray-500 ">12.99</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
