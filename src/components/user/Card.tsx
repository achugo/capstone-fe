import React from "react";

interface CardProps{
    title:string;
    count:number
    icon:string;

}
export default function Card({title,count,icon}:CardProps){
    return(
        <div className=" w-[168px] rounded-xl bg-amber-400 shadow my-1">
            <div className="flex text-center pt-2  ps-2  hover:cursor-pointer duration-500">
                <div className="hover:cursor-pointer h-8 w-8 p-2"
                 dangerouslySetInnerHTML={{ __html:icon}}
                >
                </div>
                <span className="mt-1 sm:text-1  inline-block">{title}</span>
            </div>
            <hr className="border border-black mx-3"/>
            <h2 className="text-center font-bold text-xl">{count}</h2>

        </div>
    )
}