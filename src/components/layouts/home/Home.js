import React, { useState, useEffect } from 'react'
import axios from "axios"
import Products from './products/products'

export default function Home() {

  // useEffect(() => {

  //   const funct = async () => {

  //     console.log("fnc called")
  //     const authToken = localStorage.getItem('auth-token')
  //     console.log(authToken)
  //     if (authToken) {

  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": authToken
  //         }
  //       };

  //       const { data } = await axios.get(
  //         `http://localhost:5500/user`,
  //         config
  //       );

  //       console.log(data.user.id)
  //       console.log({data})

  //     }

  //   }

  //   funct();
  // }
  //   , []);

  return (
    <div>
      <Products/>
    </div>
  )
}


