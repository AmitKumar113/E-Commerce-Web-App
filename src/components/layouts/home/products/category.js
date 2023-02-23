import React,{ useEffect, useState} from 'react'
import Card from './card'
import axios from 'axios'

let pros;
export default function Category(props) {

  // useEffect(()=>{
    const funct = async () => {

      console.log("fnc called")

        const config = {
          headers: {
            "Content-Type": "application/json",
          }
        };

        const { data } = await axios.get(
          `http://localhost:5500/product/electronics`,
          config
        );

        pros = data.products;
        // console.log(data.products);
        console.log(pros[0]);
        // console.log(data.products[0]);
    }

    funct();
  // }, [])

  return (
    <div className='category border-green'>
        {props.title || 'title'}
       
        <div className='flex-box'>
            {/* <Card {...items.itemList[0]  || {}}/>
            <Card {...items.itemList[1]  || {}}/>
            <Card {...items.itemList[2]  || {}}/> */}
            <Card name="Oneplus 1" description="oneplus Description 1"/>
            {/* <Card name={pros[0].name} description="oneplus Description 1"/> */}
            <Card />
            <Card />
        </div>
    </div>
  )
}