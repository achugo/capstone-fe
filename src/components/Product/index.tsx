import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import { truncate } from 'lodash';

interface SearchResultProps {
  result: SearchResultType;
};


const Product: React.FC<SearchResultProps> = ({ result }) => (
  <div
    className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
    style={{ minWidth: "350px" }}
  >
    <div className="bg-white shadow-md rounded p-6 cursor-pointer hover:scale-110 hover:transition-transform h-[27em]">
      <div
      >
        <div
          className="w-[10em] mx-auto"
          style={{ maxHeight: "200px", minHeight: '200px' }}
        >
          <img
            className="max-w-full"
            src={result.imageUrl}
            alt="Picture of the author"
          />
        </div>

        <h3 className="text-lg font-semibold mb-2 text-black">{result.name}</h3>

        <div className="h-[100px]">
          <h4>{truncate(result.description, { length: 100 })}</h4>
        </div>

        <p className="mt-2 bold text-orange-700">Shop: {result.shop}</p>

        <div className="flex justify-between mt-2">
          <h1 className="w-[150px] text-2xl font-bold text-[#fe7d00]">€ {result.price}</h1>
          <span className="mt-2">{result.weight}</span>
        </div>
      </div>
    </div>
  </div>
);

interface SearchResultsProps {
  results: Array<SearchResultType>;
  search: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, search }) => (
  <div className="search-results-container mt-8 pb-24 max-w-5xl">
    <h1 className="text-xl text-center font-semibold mb-6 text-dark">
    {results.length} {results.length > 1 ? "results": "result"} found for {search}
    </h1>
    <div className="flex flex-wrap -m-4 justify-center items-center">
      {results.map((result, index) => (
        <Product key={index} result={result} />
      ))}

    
    </div>
  </div>
);

export default SearchResults;
