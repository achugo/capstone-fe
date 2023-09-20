import React from "react";

interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}

const SearchInput = ({ onChange, value, onSubmit }: SearchInputProps) => {
  return (
    <div className="mx-auto mt-56 text-white">
      <div className="w-full">
        <h1 className="text-center font-semibold text-4xl sm:text-7xl ">
          <span className="text-primary">GROCERY</span>
          <span className="text-white">GURU</span>
        </h1>
      </div>
      <form className="w-full mt-2 ms-2">
        <div className="mb-3">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch focus:scale-110">
            <input
              type="search"
              className="relative peer  focus:shadow-lg focus:border-2  focus:scale-110   bg-white text-black font-bold m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-2xl border bg-transparent bg-clip-padding px-3 py-[0.75rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              onChange={onChange}
              value={value}
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-20  peer-focus:scale-110  flex items-center rounded-2xl relative -left-3 bg-primary  px-12 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={onSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
