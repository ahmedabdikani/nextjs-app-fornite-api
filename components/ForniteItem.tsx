import Link from "next/link";
import * as React from "react";
import Link from "next/link
import { Item } from "../types";

interface IForniteItemProps {
  item: Item;
}

const ForniteItem: React.FC<IForniteItemProps> = ({ item }) => {
  const filledstar = Math.round(item.item.ratings.avgStars);
  const rating = Array.from({ length: filledstar }, (_, index) => index);

  return (
<<<<<<< HEAD
    <Link href={"./item/" + item.itemId}>
      <a className="block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ">
        <div className="w-full overflow-hidden" style={{ minHeight: 150 }}>
          <img
            src={item.item?.images?.icon}
            className="object-cover w-full h-full"
            alt={item.item.description}
          />
        </div>
        <div className="p-4 justify-between flex-col">
          <h1 className="text-xl font-bold text-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis ">
            {item.item.name}
          </h1>
          <p className=" text-gray-300 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
            {item.item.description}
          </p>
          <p className="text-gray-300">{item.item.ratings.avgStars}</p>
          <div className="flex">
            {rating?.map((_, index) => (
              <img key={index} src="/icons/star.svg" width="20" />
            ))}
          </div>
        </div>
      </a>
=======
     <Link href={"./item/" + item.itemId}>
      <a className="block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ">
      <div key={item.itemId} className="">
      <div className="w-full overflow-hidden" style={{ minHeight: 150 }}>
        <img
          src={item.item?.images?.icon}
          className="object-cover w-full h-full"
          alt={item.item.description}
        />
      </div>
      <div className="p-4 justify-between flex-col">
        <h1 className="text-xl font-bold text-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis ">
          {item.item.name}
        </h1>
        <p className=" text-gray-300 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
          {item.item.description}
        </p>
        <p className="text-gray-300">{item.item.ratings.avgStars}</p>
        <div className="flex">
          {rating?.map((value) => (
            <img key={value} src="/icons/star.svg" width="20" />
          ))}
        </div>
      </div>
      </div>
     </a>
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
    </Link>
  );
};
export default ForniteItem;
