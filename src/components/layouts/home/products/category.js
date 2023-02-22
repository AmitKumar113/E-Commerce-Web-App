import React,{ useEffect, useState} from 'react'
import Card from './card'

export default function Category(props) {

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