import { SearchResultType } from "@/data/interfaces/isearchresult";
import React from "react";
import Product from "../Product";

interface SearchResultsProps {
  results: Array<SearchResultType>;
  search: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, search }) => (
  <div className="search-results-container mt-8 pb-24 max-w-5xl">
    <h1 className="text-xl text-center font-semibold mb-6 text-dark">
      {results.length} {results.length > 1 ? "results" : "result"} found for{" "}
      {search}
    </h1>
    <div className="flex flex-wrap -m-4 justify-center items-center">
      {results.map((result, index) => (
        <Product key={index} result={result} />
      ))}
    </div>
  </div>
);

export default SearchResults;
