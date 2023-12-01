import SearchInput from "../components/inputs/searchinput";
import React, { useEffect, useState } from "react";
import { SearchResultType } from "../data/interfaces/isearchresult";
import Header from "../components/Header";

import { API_BASE_URL } from "../constants";
import SearchLayout from "@/containers/layout/SearchLayout";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { is } from "cypress/types/bluebird";
import SearchResults from "@/components/results/SearchResult";
import Product from "@/components/Product";
import { responseData } from "../mocks/res";
import customToast from "@/components/Toast/customToast";
import MostViewedProducts from "@/components/results/MostViewedProducts";
import Loader from "@/components/loader/Loader";

const commonSearches = ["tomato", "ketchup", "wasser"];
export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  const [mostViewedProducts, setMostViewedProducts] = useState<SearchResultType[]>([]);

  useEffect(() => {
    fetchMostViewedProducts();
  }, []);


  const fetchMostViewedProducts = async () => {
    try {
      setLoading(true);
      const search = commonSearches[new Date().getDay() % commonSearches.length];
      console.log(
        `${API_BASE_URL}items?name=${search}&page=${page}&size=${size}`
      );
      const response = await fetch(
        `${API_BASE_URL}items?name=${search}&page=${page}&size=${size}`,
        {
          method: "GET",
          mode: "cors", // Set the mode to 'no-cors'
          headers: {
            "Content-Type": "application/json", // Your request headers here
          },
        }
      );
      let result = await response.json();
      if (result) {
        setMostViewedProducts(result);
      }
    } catch (error) {
      customToast.error("Couldn't get most viewed products");
      console.log("error", error);
    } finally {
      setLoading(false);
    }

  };
  useEffect(() => {
    if (page !== 0) {
      fetchResults();
    }
  }, [page]);

  const fetchResults = async (newSearch?: boolean) => {
    try {
      setLoading(true);
      console.log(
        `${API_BASE_URL}items?name=${search}&page=${page}&size=${size}`
      );
      const response = await fetch(
        `${API_BASE_URL}items?name=${search}&page=${page}`,
        {
          method: "GET",
          mode: "cors", // Set the mode to 'no-cors'
          headers: {
            "Content-Type": "application/json", // Your request headers here
          },
        }
      );
      let result = await response.json();

      if (result) {
        setMostViewedProducts([]);
        if (newSearch)
          document.getElementById("search-container")?.scrollIntoView({
            behavior: "smooth",
          });
        if (newSearch) {
          setSearchResults(result);
        } else {
          setSearchResults(searchResults.concat(result));
        }
      }
    } catch (error) {
      customToast.error("Couldn't get any results");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const submitSearchQuery = (e: any) => {
    e.preventDefault();
    if (search.length >= 2) {
      fetchResults(true);
    }
    setCurrentSearch(search);
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    setCurrentSearch("");
  };

  return (
    <div className="bg-[#F5F3F0]">
      <SearchLayout>
        <Header />

        <SearchInput
          onChange={onSearchInputChange}
          value={search}
          onSubmit={submitSearchQuery}
        />
      </SearchLayout>

      <div className="bg-[#F5F3F0]">
        <div className="max-w-5xl pt-16 mx-auto " id="search-container">
          {loading && (
            <div className="flex justify-center">
              <ReactLoading type={"spin"} color="#ecc229" />
            </div>
          )}
          {searchResults.length === 0 && !currentSearch && mostViewedProducts.length > 0 && <>
            <MostViewedProducts results={mostViewedProducts} search={commonSearches[new Date().getDay() % commonSearches.length]} />
          </>}
          {searchResults.length > 0 && (
            <>
              <SearchResults results={searchResults} search={currentSearch} />
            </>
          )}

          {searchResults?.length >= 10 && (
            <div className="text-center pb-24">
              <button
                onClick={() => setPage(page + 1)}
                className="bg-primary inline-block sm:mx-1.5 sm:mx-4 w-full sm:w-auto rounded p-3 my-0.5 sm:my-0 sm:px-4 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Find More
              </button>
            </div>
          )}

          {searchResults.length === 0 && currentSearch && (
            <h1 className="text-xl text-center font-semibold mb-6 text-dark">
              No search result for {currentSearch}
            </h1>
          )}
        </div>
      </div>
    </div >
  );
}
