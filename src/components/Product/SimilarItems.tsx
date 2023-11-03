import Image from "next/image";
import React from "react";

export default function SimilarItems() {
    return (
        <>
            <div>
                <h5 className="mt-2 text-blue-700 font-bold">Similar Items</h5>
                <ul>
                    <li className="my-1">
                        <div className="flex">
                            <div className="p-2 hover:scale-110 transition-all">
                                <div className="border shadow-md h-[9rem] w-[8rem] p-2">
                                    <Image src="/milch.png" alt="item image" width="100" height="120"
                                           className="mx-2"/>
                                    <p className="my-0"><small>Title: <span className="text-orange-700">Milch</span>
                                    </small></p>
                                    <p><small>Price: <span className="text-orange-700">1.09</span></small></p>

                                </div>
                            </div>
                            <div className="p-2 hover:scale-110 transition-all">
                                <div className="border shadow-md h-[9rem] w-[8rem] p-2">
                                    <Image src="/milch.png" alt="item image" width="100" height="120"
                                           className="mx-2"/>
                                    <p className="my-0"><small>Title: <span className="text-orange-700">Milch</span>
                                    </small></p>
                                    <p><small>Price: <span className="text-orange-700">1.09</span></small></p>

                                </div>
                            </div>
                            <div className="p-2 hover:scale-110 transition-all">
                                <div className="border shadow-md h-[9rem] w-[8rem] p-2">
                                    <Image src="/milch.png" alt="item image" width="100" height="120"
                                           className="mx-2"/>
                                    <p className="my-0"><small>Title: <span className="text-orange-700">Milch</span>
                                    </small></p>
                                    <p><small>Price: <span className="text-orange-700">1.09</span></small></p>

                                </div>
                            </div>
                            <div className="p-2 hover:scale-110 transition-all">
                                <div className="border shadow-md h-[9rem] w-[8rem] p-2">
                                    <Image src="/milch.png" alt="item image" width="100" height="120"
                                           className="mx-2"/>
                                    <p className="my-0"><small>Title: <span className="text-orange-700">Milch</span>
                                    </small></p>
                                    <p><small>Price: <span className="text-orange-700">1.09</span></small></p>

                                </div>
                            </div>
                            <div className="p-2 hover:scale-110 transition-all">
                                <div className="border shadow-md h-[9rem] w-[8rem] p-2">
                                    <Image src="/milch.png" alt="item image" width="100" height="120"
                                           className="mx-2"/>
                                    <p className="my-0"><small>Title: <span className="text-orange-700">Milch</span>
                                    </small></p>
                                    <p><small>Price: <span className="text-orange-700">1.09</span></small></p>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}