import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../Actions/cartActions";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../constants/productConstant";
import ReactStars from "react-rating-stars-component";
import { displayActionMessage } from "../../popups/alert";

export default function Card(props) {
  // const themeColor = {backgbgColor : 'bg-cyan-500'}
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const { _id, name, price, description, ratings, image } = props.product;
  const options = {
    edit: false, // false: readonly
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: ratings,
    isHalf: true, //true: half star
  };

  const HandleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart(_id));
      displayActionMessage("item added to cart", "success");
    } else displayActionMessage("Login First", "info");
  };

  return (
    <div className="flex flex-col drop-shadow-[4px_4px_2px_rgba(0,0,0,0.4)] bg-purple-200/70 hover:drop-shadow-[5px_5px_4px_rgba(0,0,0,0.4)] bg-white w-72 h-72 p-2">
      <div className=" border-[1px] h-3/5">
        <Link to={`/product/details/${_id}`}>
          <div
            className={`bg-[url(${image.url})] w-[100%] h-[100%] bg-center bg-cover `}
          >
            {/* <img src={image.url} ></img> */}
          </div>
        </Link>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-center text-xl mb-3">{name || "product naame"}</p>
          <div className="flex px-4">
            <span className="card-price flex-1">
              Price: ₹{price || "product price"}
            </span>
            {/* <span className='ml-6'>{ratings || '0'} ⭐</span> */}
            <span>
              <ReactStars {...options} />{" "}
            </span>
          </div>
        </div>
        <div className="flex [&>*]:text-center [&>*]:cursor-pointer">
          <div
            className="w-1/2 mx-2 py-1.5"
            onClick={() => {
              HandleAddToCart();
            }}
          >
            Add to cart
          </div>
          <div
            className={`w-1/2 mx-2 py-1.5 rounded-lg bg-[${COLORS.MAIN_THEME_COLOR}]`}
          >
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <span className='card-description'>{description || 'product description'}</span> */
}
