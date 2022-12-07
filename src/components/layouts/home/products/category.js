import React,{ useEffect, useState} from 'react'
import Card from './card'
import { getProductsCategoryWise } from '../../../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../../../../actions/index';
import { json } from 'react-router-dom';


export default function Category(props) {

  
  const dispatch = useDispatch();
  // const items = useSelector(state => state.items)
  const { getProductOfCategory } = bindActionCreators(actionCreators, dispatch);
  let itemList = []
  let item = {}
  const [items, setItems] = useState({})
  let set = true;

  const setState = ()=>{
    setItems({itemList})
  }

  useEffect(()=>{
      // let items;     
      // console.log("items.data :")
      // console.log(items)
      getProductsCategoryWise(props.title)
      // const item = getProductOfCategory()
      // console.log("items:")
      // console.log({items})
      // const itemList = JSON.parse(localStorage.getItem(`${props.title}`))
      itemList = JSON.parse(localStorage.getItem(`electronics`))
      // console.log(itemList[0])
      { if(set) {
        set = false;
        setItems({itemList});
        console.log("items:")
        console.log(items.itemList[0])
      } }
  },[])

  return (
    <div className='category border-green'>
        {props.title || 'title'}
       
        <div className='flex-box'>
            <Card {...items.itemList[0]}/>
            <Card {...items.itemList[1]}/>
            <Card {...items.itemList[2]}/>
        </div>
    </div>
  )
}