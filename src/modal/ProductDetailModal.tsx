import React, {SetStateAction} from "react";
import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
import {FaMapMarker} from "react-icons/fa";
import {SearchResultType} from "@/data/interfaces/isearchresult";
import Image from "next/image";
import SimilarItems from "@/components/Product/SimilarItems";

interface ProductDetailModalProps {
    result: SearchResultType;
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const MapLink = ({destinationAddress}: any) => {
    const location = localStorage.getItem("location") ?? "";

    console.log("userLocation", JSON.parse(location));
    // Create a function to open Google Maps with the destination address.
    const openGoogleMaps = () => {
        const userCordinates = JSON.parse(location); // You can replace this with the user's location if needed.
        const {latitude, longitude} = userCordinates || {};
        const userLocation = `${latitude},${longitude}`;
        const mapsUrl = `https://www.google.com/maps/dir/${userLocation}/${destinationAddress}`;
        window.open(mapsUrl, "_blank");
    };

    return (
        <a href="#" onClick={openGoogleMaps}>
            {destinationAddress}
        </a>
    );
};

const ProductDetailModal = ({
                                result,
                                showModal,
                                setShowModal,
                            }: ProductDetailModalProps) => {
    const onCloseModal = () => setShowModal(false);
    console.log("result", result);

    return (
        <Modal open={showModal} onClose={onCloseModal} center>
            <div className="min-h-[40em] min-w-[40em]">
                <div className="text-lg flex justify-center">PRODUCT INFORMATION</div>
                <div>
                    <div
                        className="w-[26em] mx-auto my-4 cursor-pointer"
                        style={{minHeight: "22em"}}
                        onClick={() => window.open(result?.articleLink
                            , '_blank')}

                    >
                        <img
                            className="max-w-full min-h-[22em]"
                            src={result.imageUrl}
                            alt="Picture of the item"
                        />
                    </div>

                    <div className="my-1">
                        <span className="text-xs">Title{": "}</span>

                        <span className="text-lg font-semibold mb-2 text-black">
              {result.title}
            </span>
                    </div>

                    <div className="h-[70px]">
                        <span className="text-xs">Description{": "}</span>
                        <span className="text-lg">{result.description}</span>
                    </div>

                    <div className="my-1">
                        <span className="text-xs">Shop{": "}</span>
                        <span className="mt-2 bold text-orange-700">{result.shop}</span>
                    </div>

                    <div className="my-1">
                        <span className="text-xs">Price{": "}</span>
                        <span className="w-[150px] text-2xl font-bold text-[#fe7d00]">
              € {result.price}
            </span>
                    </div>

                    <div className="my-1">
                        <span className="text-xs">Weight{": "}</span>
                        <span className="text-[#fe7d00] text-lg">{result.weight}</span>
                    </div>

                    <div className="flex mb-3">
            <span>
             Location <FaMapMarker className="inline relative" color="#fe7d00"/>{" "}
            </span>{": "}
                        <h4 className="text-lg">
                            <MapLink destinationAddress={result.location}/>
                        </h4>
                    </div>
                </div>
                <hr className="border"/>
                <SimilarItems />
            </div>
        </Modal>
    );
};

export default ProductDetailModal;
