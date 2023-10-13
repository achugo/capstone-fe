import { SearchResultType } from "@/data/interfaces/isearchresult";
import React, { useState } from "react";
import Image from "next/image";

interface FoodItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  article_link: string;
}

interface Review {
  id: number;
  reviewer: string;
  rating: number;
  comment: string;
}

interface ProductProps {
  food: FoodItem;
  relatedFoods: FoodItem[];
  reviews: Review[];
  onAddToCart: (food: FoodItem) => void;
}

const ProductPage = (result: SearchResultType) => {
  const [selectedFood, setSelectedFood] = useState<SearchResultType>(result);

  const handleRelatedFoodClick = (relatedFood: FoodItem) => {
    // setSelectedFood(relatedFood);
  };

  const onAddToCart = (selectedFood: any) => {};
  const relatedFoods = [
    {
      id: 17,
      name: "Ritter Sport Schokolade Nuss- oder Kakaoklasse",
      price: "1,00",
      article_link:
        "https://www.rewe.de/angebote/bremen-radio-bremen/431004/rewe-markt-schwachhauser-heerstr-207/#8749438",
      img_url: "",
      description: "placeholder",
      scraped_date: "2023-04-25",
      date_expires: "2023-04-29",
      weight: "palceholder",
      image:
        "https://img.rewe-static.de/KLEIN17_2023/8749438/36795098-11_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
      extra_details: "palceholder",
      date_published: "palceholder",
      supermarket: "rewe",
    },
    {
      id: 3,
      name: "Ferrero Nutella",
      price: 1.79,
      weight: "450+50g Glas",
      description: "Nuss-Nougat-Creme, 450+50g Glas, (1kg=3,58)",
      article_link: "placeholder",
      category: "sweets",
      image:
        "https://offer-images.api.edeka/88f7839f-2ce1-4078-b595-758ff8cfa539_4008400402222_PER.png",
      extra_details:
        "*Nicht in allen Filialen erhältlich. Alle weiteren Informationen der Firma und Anschrift Ihres teilnehmenden EDEKA-Marktes finden Sie unter www.edeka.de/marktsuche oder unter der Telefonnummer 0800 724 28 55 (kostenfrei aus dem dt. Fest- und Mobilfunknetz). Alle Angebote gültig bis Samstag, 29.04.2023, KW 17. Wir haben uns für diesen Zeitraum ausreichend bevorratet. Bitte entschuldigen Sie, wenn die Artikel auf Grund der großen Nachfrage dennoch im Einzelfall ausverkauft sein sollten. Abgabe in haushaltsüblichen Mengen. Für Darstellungsfehler übernehmen wir keine Haftung. EDEKA-Markt Minden-Hannover GmbH, Wittelsbacherallee 61, 32427 Minden.",
      date_published: "2023-04-29",
      date_expires: "2023-04-24",
      scraped_date: "2023-04-25",
      supermarket: "edeka",
    },
    {
      id: 12,
      name: "Spargel weiß",
      price: 7.29,
      weight: "placeholder",
      description: "Klasse 2; Deutschland",
      article_link:
        "https://www.aldi-nord.de/angebote/aktion-mo-24-04/spargel-weiss-1013810-1-1.article.html",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      extra_details: "palceholder",
      date_published: "2023-04-23",
      date_expires: "placeholder",
      scraped_date: "2023-04-25",
      supermarket: "aldi",
    },
  ];
  const reviews: Review[] = [
    {
      id: 1,
      reviewer: "Fortan Pireva",
      rating: 4.2,
      comment: "Very good",
    },
    {
      id: 2,
      reviewer: "Mikhail Lyamets",
      rating: 4.5,
      comment: "Nice",
    },
    {
      id: 3,
      reviewer: "Emmanuel Kpodji",
      rating: 5,
      comment: "Supper",
    },
  ];
  return (
    <div className="product-container justify-center items-center flex flex-col pt-4">
      <div className="food-details-container flex flex-wrap justify-center ">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="w-96 h-auto"
            src={selectedFood.imageUrl}
            alt={selectedFood.name}
            width={300}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">{selectedFood.name}</h2>
          <p className="mb-4">{selectedFood.description}</p>
          <p className="mb-4 text-xl font-semibold">${selectedFood.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAddToCart(selectedFood)}
          >
            Add to Cart
          </button>
          <div className="mt-2">
            <a
              href={selectedFood.article_link}
              target="_blank"
              className="text-blue-500  hover:text-blue-300"
            >
              View original article
            </a>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Related Foods</h3>
      <div className="related-foods-container flex flex-wrap w-full justify-center items-center">
        {relatedFoods.map((relatedFood) => (
          <div
            key={relatedFood.id}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 cursor-pointer"
            onClick={() =>
              handleRelatedFoodClick(relatedFood as unknown as FoodItem)
            }
          >
            <Image
              className="w-full h-auto mb-2"
              src={relatedFood.image}
              alt={relatedFood.name}
              width={200}
              height={200}
            />
            <p className="text-md font-bold">{relatedFood.name}</p>
            <p className="text-sm ">
              SuperMarket{" "}
              <span className="font-bold">{relatedFood.supermarket}</span>
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-4">Reviews</h3>
      <div className="reviews-container w-96">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review mb-4 p-4 bg-white shadow-md rounded"
          >
            <p className="font-bold mb-2">{review.reviewer}</p>
            <p className="text-yellow-400 mb-2">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// This function gets called at build time
export async function getServerSideProps(context: any) {
  const { product: id } = context.params;
  const { supermarket } = context.query;
  // Call an external API endpoint to get posts
  console.log(id, process.env["HOST"]);
  console.log(supermarket);
  const response = await fetch(
    `http://${process.env["HOST"]}/${supermarket}-products.json`
  );

  const products = await response.json();
  console.log(products);
  let product = products.find((p: SearchResultType) => p.id == id);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    props: {
      ...product,
      supermarket: supermarket,
    },
  };
}
export default ProductPage;
