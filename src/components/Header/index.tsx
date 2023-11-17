import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  let token;
  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
  }, []);
  const handleDropDown = (ev: any) => {
    const dropDown = document.getElementById("dropDownMenu");
    const menuStatus = ev.target.classList.contains("close");
    const formDiv = document.getElementById("formDiv");

    menuStatus
      ? (ev.target.classList.replace("close", "open"),
        dropDown?.classList.add(
          "top-[70px]",
          "opacity-100",
          "transition-all",
          "ease-in",
          "duration-500"
        ),
        formDiv?.classList.replace("mt-0", "mt-24"))
      : (ev.target.classList.replace("open", "close"),
        dropDown?.classList.remove(
          "top-[70px]",
          "opacity-100",
          "transition-all",
          "ease-in",
          "duration-500"
        ),
        formDiv?.classList.replace("mt-24", "mt-0"));
  };

  return (
    <div className="sm:flex w-full justify-between py-4 px-2 md:px-10  sticky inset-0 z-[800] h-[73px]">
      <div className="flex justify-between">
        <div
          className="mt-2 flex hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            className="cursor-pointer w-8 h-8 sm:h-12 sm:w-12"
            src={"/logo-icon.png"}
            alt="Glocery guru"
            width={50}
            height={100}
          />
          <span className="text-center font-semibold text-sm sm:text-2xl text-white pt-1">
            <span className="text-primary">GROCERY</span>GURU
          </span>
        </div>
        <div>
          <svg
            className=" w-10 h-10 mx-1 sm:w-16 sm:h-16 text-primary  sm:hidden "
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="38"
              cy="38"
              r="38"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M39.1437 49.3218C46.5755 49.3218 52.6135 43.6216 52.8704 36.5C52.6135 29.3783 46.5755 23.6781 39.1437 23.6781C31.7126 23.6781 25.6729 29.3783 25.4194 36.5C25.6721 43.6216 31.7118 49.3218 39.1437 49.3218Z"
              fill="white"
            />
            <path
              d="M39.1445 17.5938C28.7031 17.5938 20.2374 26.0586 20.2374 36.5C20.2374 46.9405 28.704 55.4062 39.1445 55.4062C49.5851 55.4062 58.0508 46.9405 58.0508 36.5C58.0508 26.0586 49.5851 17.5938 39.1445 17.5938ZM39.1437 50.25C31.5494 50.25 25.3928 44.3023 25.3928 36.9632C25.3928 36.8068 25.4143 36.6547 25.4195 36.5C25.4143 36.3453 25.3928 36.1923 25.3928 36.0368C25.3928 28.6977 31.5502 22.75 39.1437 22.75C46.738 22.75 52.8937 28.6977 52.8937 36.0368C52.8937 36.1923 52.8756 36.3453 52.8713 36.5C52.8765 36.6547 52.8937 36.8068 52.8937 36.9632C52.8928 44.3023 46.738 50.25 39.1437 50.25Z"
              fill="white"
            />
            <path
              d="M13.9915 15.3774C14.1977 14.5687 14.6059 15.3679 14.6059 15.3679C14.6059 15.3679 14.7486 23.7382 15.6767 23.8293C16.6048 23.9204 15.8898 15.2167 16.9881 15.05C18.0091 14.8875 17.4264 23.9677 18.3563 23.8757C19.2827 23.7778 19.4391 15.4109 19.4391 15.4109C19.4391 15.4109 19.8516 14.6125 20.0552 15.4152C22.5715 25.3066 20.5356 29.35 20.5356 29.35C20.5356 29.35 20.1919 30.1999 19.3755 30.2042C19.299 30.1999 19.3566 53.6961 19.3514 56.8551C19.3531 58.3908 14.6248 58.3436 14.6274 56.8147C14.6309 53.6557 14.7228 30.1621 14.6489 30.1638C13.8299 30.1638 13.487 29.3147 13.487 29.3147C13.487 29.3147 11.4589 25.2739 13.9915 15.3774ZM58.7984 15.0156C59.8623 15.013 64.2761 18.1953 64.2812 30.022C64.2864 33.8041 62.223 33.8032 62.2265 36.1691C62.2299 38.5307 62.2428 57.3149 62.2428 57.3149C62.2428 57.3149 59.9792 58.8678 58.2966 57.2427L58.2656 15.3516C58.2673 15.3525 58.2613 15.0147 58.7984 15.0156Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mt-1">
          <svg
            className="bg-white hover:cursor-pointer w-7 h-7 p-0.5 sm:hidden inline-block rounded"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              className="close"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              onClick={handleDropDown}
            />
          </svg>
        </div>
      </div>
      <div>
        <svg
          className=" w-10 h-10 mx-1 sm:w-16 sm:h-16 text-primary hidden sm:inline-block "
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="38"
            cy="38"
            r="38"
            fill="currentColor"
            fillOpacity="0.9"
          />
          <path
            d="M39.1437 49.3218C46.5755 49.3218 52.6135 43.6216 52.8704 36.5C52.6135 29.3783 46.5755 23.6781 39.1437 23.6781C31.7126 23.6781 25.6729 29.3783 25.4194 36.5C25.6721 43.6216 31.7118 49.3218 39.1437 49.3218Z"
            fill="white"
          />
          <path
            d="M39.1445 17.5938C28.7031 17.5938 20.2374 26.0586 20.2374 36.5C20.2374 46.9405 28.704 55.4062 39.1445 55.4062C49.5851 55.4062 58.0508 46.9405 58.0508 36.5C58.0508 26.0586 49.5851 17.5938 39.1445 17.5938ZM39.1437 50.25C31.5494 50.25 25.3928 44.3023 25.3928 36.9632C25.3928 36.8068 25.4143 36.6547 25.4195 36.5C25.4143 36.3453 25.3928 36.1923 25.3928 36.0368C25.3928 28.6977 31.5502 22.75 39.1437 22.75C46.738 22.75 52.8937 28.6977 52.8937 36.0368C52.8937 36.1923 52.8756 36.3453 52.8713 36.5C52.8765 36.6547 52.8937 36.8068 52.8937 36.9632C52.8928 44.3023 46.738 50.25 39.1437 50.25Z"
            fill="white"
          />
          <path
            d="M13.9915 15.3774C14.1977 14.5687 14.6059 15.3679 14.6059 15.3679C14.6059 15.3679 14.7486 23.7382 15.6767 23.8293C16.6048 23.9204 15.8898 15.2167 16.9881 15.05C18.0091 14.8875 17.4264 23.9677 18.3563 23.8757C19.2827 23.7778 19.4391 15.4109 19.4391 15.4109C19.4391 15.4109 19.8516 14.6125 20.0552 15.4152C22.5715 25.3066 20.5356 29.35 20.5356 29.35C20.5356 29.35 20.1919 30.1999 19.3755 30.2042C19.299 30.1999 19.3566 53.6961 19.3514 56.8551C19.3531 58.3908 14.6248 58.3436 14.6274 56.8147C14.6309 53.6557 14.7228 30.1621 14.6489 30.1638C13.8299 30.1638 13.487 29.3147 13.487 29.3147C13.487 29.3147 11.4589 25.2739 13.9915 15.3774ZM58.7984 15.0156C59.8623 15.013 64.2761 18.1953 64.2812 30.022C64.2864 33.8041 62.223 33.8032 62.2265 36.1691C62.2299 38.5307 62.2428 57.3149 62.2428 57.3149C62.2428 57.3149 59.9792 58.8678 58.2966 57.2427L58.2656 15.3516C58.2673 15.3525 58.2613 15.0147 58.7984 15.0156Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className="sm:flex justify-end absolute w-full left-0 sm:relative sm:w-auto opacity-0 sm:opacity-100
      top-[-400px] sm:top-0 "
        id="dropDownMenu"
      >
        {!token && (
          <>
            <div>
              <button
                onClick={() => router.push("/login")}
                type="button"
                className=" bg-primary inline-block sm:mx-1.5 sm:mx-4 w-full sm:w-auto rounded p-3 my-0.5 sm:my-0 sm:px-4 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                onClick={() => router.push("/register")}
                type="button"
                style={{ backgroundColor: "white" }}
                className="inline-block rounded w-full sm:w-auto p-3 sm:px-4 text-xs font-medium uppercase leading-normal text-orange transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Sign up
              </button>
            </div>
          </>
        )}

        {token && (
          <button
            onClick={() => router.push("/user")}
            type="button"
            style={{ backgroundColor: "white" }}
            className="inline-block rounded w-full sm:w-auto p-3 sm:px-4 text-xs font-medium uppercase leading-normal text-orange transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
