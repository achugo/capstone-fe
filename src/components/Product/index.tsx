import React, { useState } from "react";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import { truncate } from "lodash";
import ProductDetailModal from "@/modal/ProductDetailModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface SearchResultProps {
  result: SearchResultType;
}

const Product: React.FC<SearchResultProps> = ({ result }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function setCookie(name:string, value:number) {
  
    document.cookie = `${name}=${value};path=/`;
  }
  
  function getCookie(value:number) {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      
      if (cookie.includes(`=${value}`)) {
        // Extract the name (key) of the cookie from the string
        const cookieName = cookie.split('=')[0];
        return cookieName;
      }
    }
    
    return null;
  }


  const showModalHandler = ()=> {
    const viewedProduct = getCookie(result.id);
  if (viewedProduct) {
    console.log(`User has already viewed product with ID: ${result.id} no increment required`);
    } else {
      setCookie("viewProduct"+result.id , result.id)
      console.log(`User has not yet viewed the product with ID: ${result.id} incrementation is required.`);
      // replace with API call to increment on the backend
      
  }
          setShowModal(true)
  }

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
          onClick={showModalHandler}
          className="bg-white shadow-md rounded p-6 cursor-pointer hover:scale-110 hover:transition-transform h-[30em]"
        >
          <div>
            <div
              className="w-[10em] mx-auto"
              style={{ maxHeight: "220px", minHeight: "220px" }}
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
