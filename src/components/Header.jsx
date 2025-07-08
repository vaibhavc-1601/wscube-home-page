import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
export default function Header() {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w[1240px] py-[12px] items-center  flex justify-between mx-auto'>
<div className=" text-3xl font-bold animate-bounce ">
   WsCube Tech
</div>
{
    toggle ? 
<IoClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
    :
 <RiMenu3Line onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
}
 
   
<ul className=' hidden md:flex text-white gap-10'>
    <li>HOME</li>
    <li> COMPANY</li>
    <li> RESOURCES</li>
    <li>ABOUT</li>
     <li>CONTACT</li>
</ul>
  {/* responsive menu */}
<ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px] 
    ${ toggle ? ` left-[0]` : `left-[-100%] ` }
    `}>
    <li className='p-5'>HOME</li>
    <li className='p-5'> COMPANY</li>
    <li className='p-5'> RESOURCES</li>
    <li className='p-5'>ABOUT</li>
     <li className='p-5'>CONTACT</li>
</ul>
        </div>
    </div>
  )
}
