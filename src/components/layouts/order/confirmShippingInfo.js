import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ConfirmShippingInfo() {
  const shippingInfo = JSON.parse(localStorage.getItem("shipping-info")) || {};
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const changeShppingInfo = (e) => {
    console.log("changeShppingInfo");

    const newShippingInfo = {
      address: document.querySelector('[name="address"]').value,
      city: document.querySelector('[name="city"]').value,
      state: document.querySelector('[name="state"]').value,
      country: document.querySelector('[name="country"]').value,
      pinCode: document.querySelector('[name="pincode"]').value,
      phoneNo: document.querySelector('[name="phoneNo"]').value,
    };

    localStorage.setItem("shipping-info", JSON.stringify(newShippingInfo));
  };

  const handleProceedBtn = async (e) => {
    e.preventDefault();
    console.log("@handleProceedBtn");
    const authToken = localStorage.getItem("auth-token");
    let shippingInfo = JSON.parse(localStorage.getItem("shipping-info")) || {};
    shippingInfo.pinCode = +shippingInfo.pinCode;
    shippingInfo.phoneNo = +shippingInfo.phoneNo;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      };

      console.log(shippingInfo)
      console.log(cart.cartItems);
      let orderItems = [];
      
      cart.cartItems.map(item => {
          
        const orderItem = {
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image_url,
          product: item.id,
        };

        orderItems.push(orderItem);
    });
    
    console.log(orderItems);
      await axios.post(
        `http://localhost:5500/placeOrder`,
        { shippingInfo, orderItems , user: user._id },
        config
      );
    } catch (error) {
      console.log({ error });
    }

    // e.target.reset();
    alert("order placed successfully");
    // console.log(data.product)
  };

  useEffect(()=>{
    let shippingInfo = JSON.parse(localStorage.getItem("shipping-info")) || {};
    
        document.querySelector('[name="address"]').value = shippingInfo.address
        document.querySelector('[name="city"]').value  = shippingInfo.city
        document.querySelector('[name="state"]').value = shippingInfo.state
        document.querySelector('[name="country"]').value = shippingInfo.country
        document.querySelector('[name="pincode"]').value = shippingInfo.pinCode
        document.querySelector('[name="phoneNo"]').value = shippingInfo.phoneNo
    
  })

  return (
    <div>
      <div>confirmShippingInfo</div>
      <div>
        <form
          onSubmit={(e) => handleProceedBtn(e)}
          onChange={() => changeShppingInfo()}
        >
          <div>
            <input type="text" name="address" placeholder="Address"></input>
            <input type="text" name="city" placeholder="City"></input>
          </div>
          <div>
            <input type="text" name="country" placeholder="Country"></input>
            <input type="text" name="state" placeholder="State"></input>
          </div>
          <div>
            <input type="number" name="pincode" placeholder="Pin code"></input>
            <input type="number" name="phoneNo" placeholder="Phone No"></input>
          </div>
          <div>
            <button>Back</button>
            <button type="submit">Proceed to Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}
