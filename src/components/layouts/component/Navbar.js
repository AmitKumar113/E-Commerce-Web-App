import React from 'react'
import './Navbar.css'
import '../../../style.css'
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { logoutUser } from '../../../Actions/userActions';
import cartIcon from '../../../images/icons/cart-icon.svg'
import logoutIcon from '../../../images/icons/logout-icon.svg'
import personIcon from '../../../images/icons/person-icon.svg'

export default function Navbar() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    document.addEventListener('click',(e)=>{
        if(e.target.id!='profile-name' && e.target.id!='popup'){
            const ele = document.querySelector('.absolute');
            ele.classList.add('hidden')
        }
    })

    const showProfileToggle = ()=>{
        const ele = document.querySelector('.absolute');
        ele.classList.toggle('hidden')
    }

    const showPopup =()=>{
        document.querySelector('#logout-confirmation').classList.toggle('hidden')
    } 

  return (
    <header>
        <div className='navbar-container border-green flex-box' >
            <div className='logo-nav border-red'>
                LOGO
            </div>
            <div className='menu-nav'>
            <ul className='flex-box border-green'>
                {/* <li className='border-red'>Home</li> */}
                    <Link to='/'  className='navbar-btn border-red'>Home</Link>
                    <Link to='/products'  className='navbar-btn border-red'>Products</Link>
                    <Link to='/about'  className='navbar-btn border-red'>About</Link>
                    <Link to='/contactus'  className='navbar-btn border-red'>Contact Us</Link>
            </ul>
            </div>{user.name!=undefined ? (<div className='flex px-4 cursor-pointer'> 
    
            <Link to="/cart"><div className='hover:bg-sky-500'><img src={cartIcon} alt="image"></img></div>  </Link> 
            <div id='profile-name' className='px-4 hover:bg-sky-500' onClick={showProfileToggle}>
                {user.name}
            </div>
            </div>
            ) : (
                <div className='last-nav border-green flex-box' >
                    <Link to='/login'  className='navbar-btn border-red'>login</Link>
                    <Link to='/signup'  className='navbar-btn border-red'><li>signup</li></Link>
                </div>
            )
            }
          <div id='popup' className='absolute top-10 right-2 border-2 border-teal-300 hidden w-40 bg-white m-0'>
                <ul className='text-center cursor-pointer'>
                    <Link to='/profile'>
                        <li className='hover:bg-blue-400 py-2 flex'>
                        <span className='w-2/3'>Profile</span>    
                            <div className='w-1/3 text-center'>
                                <img src={personIcon} alt="image"></img>
                            </div>
                        </li></Link>
                    <li className='hover:bg-blue-400 py-2 flex' onClick={()=>showPopup()}>
                    {/* <li className='hover:bg-blue-400 py-2 flex' onClick={()=>{dispatch(logoutUser)}}> */}
                            
                            <span className='w-2/3'>log out</span>
                            <div className='w-1/3 text-center'>
                                <img src={logoutIcon} alt="image"></img>
                            </div>
                    </li>
                </ul>
            </div> 
                <div id='logout-confirmation'  className='hidden border fixed top-0 left-0 w-screen h-screen'>
                    <div onClick={()=>showPopup()} className='flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-70 z-1'>
                    </div> 
                            <div className='bg-white border-2  fixed  border-black w-1/3 h-1/3 z-2 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                                <div className='text-black text-2xl'>
                                    are you sure?
                                </div>
                                <div>
                                    <div className='cursor-pointer' onClick={()=>{showPopup(); dispatch(logoutUser) }}>yes</div>
                                    <div className='cursor-pointer' onClick={()=>showPopup()}>no</div>
                                </div>
                            </div>
                </div>
          
        </div>
    </header>
  )
}
