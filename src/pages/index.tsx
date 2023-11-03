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
import {responseData} from "../mocks/res";

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [page, setPage] = useState<Number>(0);
  const [size, setSize] = useState<Number>(10);
  const [loading, setLoading] = useState<boolean>(false);

useEffect( ()=>{
  setSearchResults(responseData)
},[])
  
  const fetchResults = async () => {
    try {
      setLoading(true);

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
        setSearchResults(result);
      }
    } catch (error) {
      toast.error("Couldn't get any results");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const submitSearchQuery = (e: any) => {
    e.preventDefault();
    if (search.length >= 2) {
      fetchResults();
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
        <div className="max-w-5xl pt-16 mx-auto">
          {loading && (
            <div className="flex justify-center">
              <ReactLoading type={"spin"} color="#ecc229" />
            </div>
          )}
          {searchResults.length > 0 && (
            <>
              <SearchResults results={searchResults} search={currentSearch} />
            </>
          )}

          {searchResults.length === 0 && currentSearch && (
            <h1 className="text-xl text-center font-semibold mb-6 text-dark">
              No search result for {currentSearch}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
