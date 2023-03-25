import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Card from "../../home/products/card";
import ShopItem from './shopItem'

export default function Shop() {
  const { loading, products } = useSelector((state) => state.shop);

  return (
    <div className="flex justify-center mt-4">
      {loading ? (
        <Loader />
      ) : (

        <div className="w-4/5">
          {
            products.length>0? (<p className="text-center text-xl"> Products of your shop</p>):
                                (<p className="text-center text-xl text-gray-600">You have no products in your shop</p>)
          }
          <div className="category pb-12">
            <div className="flex justify-center flex-wrap">
              {products.map((product) => {
                return (
                  <div key={product._id} className="m-3">
                    <ShopItem product={product || {}} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
