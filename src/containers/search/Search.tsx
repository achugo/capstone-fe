import SearchResults from "@/components/Product";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import React, { useState, useEffect } from "react";

const ParentComponent = (props: { searchResults: SearchResultType[] }) => {
  return (
    <div className="parent-component">
      <h1 className="text-3xl font-semibold mb-6">Search Results</h1>
      <SearchResults results={props.searchResults} />
    </div>
  );
};

export default ParentComponent;
