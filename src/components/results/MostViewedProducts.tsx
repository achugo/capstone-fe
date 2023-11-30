import { SearchResultType } from '@/data/interfaces/isearchresult';
import React from 'react'
import Product from '../Product';
interface MostViewedProductsProps {
    results: Array<SearchResultType>;
}
const MostViewedProducts = (props: MostViewedProductsProps) => {
    return (
        <div className="search-results-container mt-8 pb-24 max-w-5xl">
            <h1 className="text-xl text-center font-semibold mb-6 text-dark">
                Most viewed products
            </h1>
            <div className="flex flex-wrap -m-4 justify-center items-center">
                {props.results.map((result, index) => (
                    <Product key={index} result={result} />
                ))}
            </div>
        </div>
    )
}

export default MostViewedProducts