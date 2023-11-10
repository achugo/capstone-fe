import React, { useState } from "react";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import { truncate } from "lodash";
import ProductDetailModal from "@/modal/ProductDetailModal";
import "react-responsive-modal/styles.css";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import axios from "axios";
import customToast from "../Toast/customToast";

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

  console.log("result", result);

  enum ToolTip {
    liked = "Add to WishList",
    disliked = "Remove from WishList",
  }

  const addToBasket = async (product_id: number) => {
    // Prevent default form submission if necessary, depending on how this function is used.

    // Assuming the token is stored in the localStorage after login
    let token;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }

    if (!token) {
      customToast.error("No authentication token found. Please log in.");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add the Authorization header with the Bearer token
    };

    try {
      // Using a template literal to insert the product_id into the URL
      const response = await axios.post(
        `https://api.grocery-guru.de/api/basket/${product_id}/`,
        {},
        { headers }
      );

      // Assuming the API responds with some data to indicate success
      customToast.success(`${result.title} added to basket`);
      setIsLiked(true);
      console.log("Response data:", response.data);

      // Redirect or handle the successful response here
    } catch (error) {
      // Handle error
      console.error("Request failed:", error);
      //@ts-ignore
      customToast.error(error?.response?.data?.message || error?.message);
    }
  };

  const handleBasket = (ev: any) => {
    if (!isLiked) {
      addToBasket(result?.id);
      // todo -- Handle request to backend
    } else {
      // setIsLiked(false);
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
        <div className="bg-white shadow-md rounded p-6 cursor-auto  h-fit hover:scale-110 hover:transition-transform h-[30em]">
          <div className="flex flex-col gap-4">
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
            <h3 className="text-lg font-semibold  text-black">
              {result.title}
            </h3>
            <div className="h-fit">
              <h4>{truncate(result.description, { length: 100 })} </h4>
            </div>
            <div className="flex justify-between  ">
              <div onClick={showModalHandler} className="cursor-pointer">
                <p className="bold text-orange-700">Shop: {result.shop}</p>
                <h1 className="w-[150px] text-2xl font-bold text-[#fe7d00]">
                  € {result.price}
                </h1>
              </div>
              <span className="mt-2">{result.weight}</span>

              <div className="mt-4 mx-2 cursor-pointer" onClick={handleBasket}>
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
            </div>{" "}
            <div className="productViews mb-2">
              <h4>views {productView}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
