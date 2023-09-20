import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchResultType } from "@/data/interfaces/isearchresult";

interface SearchResultProps {
  result: SearchResultType;
}

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
const Product: React.FC<SearchResultProps> = ({ result }) => (
  <div
    className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
    style={{ minWidth: "300px" }}
  >
    <div className="bg-white shadow-md rounded p-6 cursor-pointer hover:scale-110 hover:transition-transform">
      <Link
        href={`/products/${result.id}?supermarket=${result.shop}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={result.image}
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <h3 className="text-lg font-semibold mb-2 text-black">{result.name}</h3>
        {/* <h4 className="line-through">Price: € {result.price}</h4> */}
        <h4>Price: {result.price}</h4>
        <h4>{result.description}</h4>
        <p className="mt-2 bold text-gray-700">{result.shop}</p>
      </Link>
    </div>
  </div>
);

interface SearchResultsProps {
  results: Array<SearchResultType>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, search }) => (
  <div className="search-results-container mt-8 max-w-5xl">
    <div className="flex flex-wrap -m-4 justify-center items-center">
      {results.map((result, index) => (
        <Product key={index} result={result} />
      ))}

      {results.length === 0 && search.length >= 3 && (
        <h1 className="text-2xl font-semibold mt-32">
          No search results for {search}
        </h1>
      )}
    </div>
  </div>
);

export default SearchResults;
