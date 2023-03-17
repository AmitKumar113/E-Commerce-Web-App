import React from 'react'

export default function stepsCount(props) {

  // const op = 80;
  return (
    <div className=''>
        <div className='flex justify-center items-center [&>*]:border-gray-700/50'>
            <div>
              <div className={`border-2 bg-green-700/${props.op1}  rounded-full w-14 text-center p-2 m-2 text-3xl`}>1</div>
              <p className='text-center'>Summary</p>
            </div>
            
            <div className='w-24 bg-gray-800/50 h-0.5 mb-4'></div>
            
            <div>
            <div className={`border-2 bg-green-700/${props.op2}  rounded-full w-14 text-center p-2 m-2 text-3xl`}>2</div>
              <p className='text-center'>Address</p>
            </div>
            
            <div className='w-24 bg-gray-800/50 h-0.5 mb-4'></div>
            
            <div>
            <div className={`border-2 bg-green-700/${props.op3}  rounded-full w-14 text-center p-2 m-2 text-3xl`}>3</div>
              <p className='text-center'>Payment</p>
            </div>
        </div>
    </div>
  )
}
