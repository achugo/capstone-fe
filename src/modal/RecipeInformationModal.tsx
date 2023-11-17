import React, { SetStateAction, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import parse from 'html-react-parser';
import { Modal } from "react-responsive-modal";
import { FaMapMarker } from "react-icons/fa";
import { SearchResultType } from "@/data/interfaces/isearchresult";
import Image from "next/image";
import SimilarItems from "@/components/Product/SimilarItems";
import { API_BASE_URL } from "@/constants";
import { toast } from "react-toastify";
import customToast from "@/components/Toast/customToast";

interface ProductDetailModalProps {
  results: any;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const RecipeInformationModal = ({
  results,
  showModal,
  setShowModal,
}: ProductDetailModalProps) => {
  const onCloseModal = () => setShowModal(false);

  return (
    <Modal open={showModal} onClose={onCloseModal} center>
      <div className="min-h-[40em] min-w-[40em]">
        <div className="text-lg flex justify-center">RECIPE SUGGESTIONS</div>

        {results?.map((result: any) => {
          return (
            <>
              <div>
                <div
                  className="w-[16em] mx-auto my-4 cursor-pointer"
                  style={{ minHeight: "12em" }}
                  onClick={() => window?.open(result?.sourceUrl, '_blank')}
                >
                  <img
                    className="max-w-full min-h-[12em] pointer"
                    src={result.image}
                    alt="Picture of the item"
                  />
                </div>

                <div className="my-1">
                  <span className="text-lg">Title{": "}</span>

                  <span className="text-sm font-semibold mb-2 text-black">
                    {result.title}
                  </span>
                </div>

                <div className="my-1">
                  <span className="text-lg">Description{": "}</span>

                  <span className="text-xs font-semibold mb-2 text-black">
                    {parse(result?.summary)}
                  </span>
                </div>

                

                <div className="text-lg mt-6">Nutrition</div>

                {result?.nutrition?.nutrients?.map((item: any) => {
                  return (
                    <div className="h-[20px] inline pr-4">
                      <span className="text-sm">{item?.name}: </span>
                      <span className="text-lg">
                        {item?.amount}
                        {item?.unit}
                      </span>
                    </div>
                  );
                })}

              </div>
              <hr className="border" />
            </>
          );
        })}
      </div>
    </Modal>
  );
};

export default RecipeInformationModal;
