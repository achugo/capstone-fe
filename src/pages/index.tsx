import SearchInput from "../components/inputs/searchinput";
import SearchResults from "../components/Product";
import React, { useEffect, useState } from "react";
import { SearchResultType } from "../data/interfaces/isearchresult";
import Header from "../components/Header";

import { API_BASE_URL } from "../constants";
import PageLayout from "@/containers/layout/PageLayout";


export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const fetchResults = async () => {
    try {
      //localhost:8080/items/search?name=m&page=0&size=5
      const response = await fetch(
        `${API_BASE_URL}search?name=${search}&page=${page}&size=${size}`
      );
      let result = await response.json();

      if (result) {
        setSearchResults(result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const submitSearchQuery = () => {
    if (search.length >= 3) {
      fetchResults();
    }
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <PageLayout>
      <Header />

      <SearchInput
        onChange={onSearchInputChange}
        value={search}
        onSubmit={submitSearchQuery}
      />

      {searchResults.length > 0 && (
        <>
          <h1 className="text-3xl font-semibold mb-6 text-white">
            Search Results
          </h1>

          <SearchResults results={searchResults} search={search} />
        </>
      )}
    </PageLayout>
  );
}
