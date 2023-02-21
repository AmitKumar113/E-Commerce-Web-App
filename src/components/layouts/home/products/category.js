import React,{ useEffect, useState} from 'react'
import Card from './card'
import { getProductsCategoryWise } from '../../../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../../../../actions/index';

export default function Category(props) {

  
  const dispatch = useDispatch();
  const items = useSelector(state => state.items)
  const { getProductOfCategory } = bindActionCreators(actionCreators, dispatch);
  // getProductOfCategory()
  // let itemList = []
  // const [items, setItems] = useState([])
  // let set = true;
  // getProductsCategoryWise(props.title)
  // itemList = JSON.parse(localStorage.getItem(`${props.title}`))
  // setItems({itemList});


  return (
    <div className='category border-green'>
        {props.title || 'title'}
       
        <div className='flex-box'>
            {/* <Card {...items.itemList[0]  || {}}/>
            <Card {...items.itemList[1]  || {}}/>
            <Card {...items.itemList[2]  || {}}/> */}
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}