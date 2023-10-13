import SearchInput from "../components/inputs/searchinput";
import SearchResults from "../components/Product";
import React, { useEffect, useState } from "react";
import { SearchResultType } from "../data/interfaces/isearchresult";
import Header from "../components/Header";

import { API_BASE_URL } from "../constants";
import SearchLayout from "@/containers/layout/SearchLayout";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { is } from "cypress/types/bluebird";

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}items?name=${search}&page=${page}&size=${size}`
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
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
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
              <SearchResults results={searchResults} search={search} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
