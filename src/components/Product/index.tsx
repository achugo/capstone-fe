import React, { useEffect, useState } from "react";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import { truncate } from "lodash";
import ProductDetailModal from "@/modal/ProductDetailModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {ProductTracker} from "@/product_views_tracker/productTracker";
import {ProductTracker} from "@/product_views_tracker/productTracker";
import { toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import axios from "axios";

interface SearchResultProps {
  result: SearchResultType;
}

const Product: React.FC<SearchResultProps> = ({ result }) => {
  const [ipAddress, setIPAddress] = useState('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error))
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleProductClick = (ev: any) =>{
    setShowModal(true)
    const productTracker = new ProductTracker();
    
    productTracker.trackProductView(ipAddress,result.id.toString())


  }


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

  console.log('result', result);
  
  enum ToolTip {
    liked = "Add to WishList",
    disliked = "Remove from WishList",
  }

  const addToBasket = async (product_id: number) => {
    // Prevent default form submission if necessary, depending on how this function is used.
    
    // Assuming the token is stored in the localStorage after login
    let token

    if (typeof window !== 'undefined') {
      token = localStorage.getItem("token");
    }
  
    if (!token) {
      toast.error("No authentication token found. Please log in.");
      return;
    }
  
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Add the Authorization header with the Bearer token
    };
  
    try {
      // Using a template literal to insert the product_id into the URL
      const response = await axios.post(`https://api.grocery-guru.de/api/basket/${product_id}/`, {}, { headers });
  
      // Assuming the API responds with some data to indicate success
      toast.success(`${result.title} added to basket`);
      setIsLiked(true);
      console.log("Response data:", response.data);
      
      // Redirect or handle the successful response here
    } catch (error) {
      // Handle error
      console.error("Request failed:", error);
      //@ts-ignore
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  
  

  const handleBasket = (ev: any) => {
    if (!isLiked) {
      addToBasket(result?.id)
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
        <div
          onClick={handleProductClick}
          className="bg-white shadow-md rounded p-6 cursor-auto hover:scale-110 hover:transition-transform h-[30em]"
        >
          <div>
            <div
              className="w-[10em] mx-auto"
              style={{ maxHeight: "220px", minHeight: "220px" }}
            >
              <img
                className="max-w-full"
                src={result.imageUrl}
                style={{
                  width: "200px",       
                  height: "200px",      
                  display: "block",     
                  margin: "0 auto",
                  objectFit: "contain"
                }}
                alt="Picture of the author"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-black">
              {result.title}
            </h3>

            <div className="h-[100px]">
              <h4>{truncate(result.description, { length: 100 })}</h4>
            </div>

            <p className="mt-2 bold text-orange-700">Shop: {result.shop}</p>

            <div className="flex justify-between mt-2">
              <h1 className="w-[150px] text-2xl font-bold text-[#fe7d00]">
                € {result.price}
              </h1>
              <span className="mt-2">{result.weight}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
