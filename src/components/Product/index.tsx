import React, { useState } from "react";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import { truncate } from "lodash";
import ProductDetailModal from "@/modal/ProductDetailModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FaBeer } from "react-icons/fa";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface SearchResultProps {
  result: SearchResultType;
}

const Product: React.FC<SearchResultProps> = ({ result }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [productView, setProductView] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  function setCookie(name: string, value: number) {
    document.cookie = `${name}=${value};path=/`;
  }

  function getCookie(value: number) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();

      if (cookie.includes(`=${value}`)) {
        // Extract the name (key) of the cookie from the string
        const cookieName = cookie.split("=")[0];
        return cookieName;
      }
    }

    return null;
  }

  enum ToolTip {
    liked = "Add to WishList",
    disliked = "Remove from WishList",
  }

  const handleBasket = (ev: any) => {
    if (!isLiked) {
      setIsLiked(true);
      // todo -- Handle request to backend
    } else {
      setIsLiked(false);
      // todo -- Handle request to backend
    }
  };

  const showModalHandler = () => {
    const viewedProduct = getCookie(result.id);
    if (viewedProduct) {
      console.log(
        `User has already viewed product with ID: ${result.id} no increment required`
      );
    } else {
      setCookie("viewProduct" + result.id, result.id);
      console.log(
        `User has not yet viewed the product with ID: ${result.id} incrementation is required.`
      );
      setProductView(productView + 1);
      // You can also replace the above line with an API call to increment the count on the backend
    }
    setShowModal(true);
  };

  return (
    <>
      <ProductDetailModal
        result={result}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <div
        className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
        style={{ minWidth: "350px" }}
      >
        <div className="bg-white shadow-md rounded p-6 cursor-auto hover:scale-110 hover:transition-transform h-[30em]">
          <div>
            <div
              className="w-[10em] mx-auto"
              style={{ maxHeight: "100%", minHeight: "220px" }}
            >
              <img
                className="max-w-full"
                src={result.imageUrl}
                alt="Picture of the author"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-black">
              {result.title}
            </h3>

            <div className="h-[100px]">
              <h4>{truncate(result.description, { length: 100 })}</h4>
            </div>

            <div className="flex justify-between mt-2">
              <div onClick={showModalHandler} className="cursor-pointer">
                <p className="mt-2 bold text-orange-700">Shop: {result.shop}</p>
                <h1 className="w-[150px] text-2xl font-bold text-[#fe7d00]">
                  € {result.price}
                </h1>
              </div>
              <span className="mt-9">{result.weight}</span>
            
              <div className="mt-7 mx-2 cursor-pointer" onClick={handleBasket}>
                <span
                  className="mt-1 tooltip"
                  data-tip={isLiked ? ToolTip.disliked : ToolTip.liked}
                >
                  {isLiked ? (
                    <BsFillHeartFill className="text-2xl text-amber-400" />
                  ) : (
                    <BsHeart className="text-2xl" />
                  )}
                </span>
              </div>
            </div>
            <div className="productViews">
                <h4>views {productView}</h4>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
