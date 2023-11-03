import Image from "next/image";
import React from "react";
import searchResult from "@/components/results/SearchResult";
import {SearchResultType} from "@/data/interfaces/isearchresult";


interface SimilarItemsProp {
    similarItems: Array<SearchResultType>;
}

const SimilarItems: React.FC<SimilarItemsProp> = ({similarItems}) => {
    const chunkSize = 5;
    const chunks = [];
    for (let i = 0; i < similarItems.length; i += chunkSize) {
        const chunk = similarItems.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return (
        <>
            <div>
                <h5 className="mt-2 text-blue-700 font-bold" data-cy="si-header-title">Similar Items</h5>
                <ul>
                    {chunks.map((item,) => (
                        <li className="my-1 flex flex-row">
                            {item.map((item, index) => (
                                <div className="flex">
                                    <div className="p-2 hover:scale-110 transition-all cursor-pointer"
                                         onClick={() => window.open(item?.articleLink
                                             , '_blank')}>
                                        <div className="border shadow-md h-[10rem] w-[8rem] p-2">
                                            <img src={item.imageUrl} alt="item image" width="100" height="100"
                                                 className="mx-2" data-cy="item-img"/>

                                            <p className="my-0"><small data-cy="item-title">Title:
                                                <span className="text-orange-700" data-cy="item-title">
                                                    {(item.title).substring(0,11)}...
                                                </span>
                                            </small></p>
                                            <p><small>Price: <span className="text-orange-700"
                                                                   data-cy="item-price">{item.price}</span></small></p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SimilarItems;