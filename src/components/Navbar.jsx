import React, {useState,useEffect} from 'react'
  import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
  import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]= useState(false)
    const handleClick = ()=> setNav(!nav) 
     const handleClose = ()=> setNav(!nav) 
    
    return (
        <div className="fixed w-screen h-10 bg-slate-200 drop-shadow-lg">
            <div className="flex items-center justify-between w-full h-full px-2 ">
                <div className='flex items-center'>
                    <h1 className="mr-4 text-3xl font-bold sm:text-4xl " >BRD</h1>
                    
                    <ul className="hidden md:flex">
                        <li className="p-4"> <Link to="Home"  smooth={true} offset ={50} duration={500} >Home</Link></li> 
                        <li className="p-4"> <Link to="About"  smooth={true} offset={-200} duration={500} >About</Link></li> 
                        <li className="p-4"> <Link to="Support"  smooth={true} offset={-50} duration={500} >Support</Link></li> 
                        <li  className="p-4"> <Link to="Pricing"  smooth={true} offset={-100} duration={200} >Pricing</Link></li> 
                      
                    </ul>
                </div>
                <div className='hidden pr-4 md:flex'>
                    <button 
                    className="px-3 py-3 text-black bg-transparent border-indigo-600 hover:bg-trasnparent hover:text-indigo-600np">Sign up</button>
                     <button
                     className="px-8 py-3 text-black bg-transparent bg-indigo-600 border-indigo-600 hover:bg-trasnparent hover:text-indigo-600">Sign in</button>
                </div>
               <div className="mr-4 md:hidden"onClick={handleClick}>
                   {!nav ? <AiOutlineMenu/> :  <AiOutlineClose/>}
                     
                </div>
                
            </div>
        <ul className={!nav? "hidden" :"absolute w-full px-8 bg-slate-100"}>
                        <li className="w-full p-4 border-b-2"><Link onClick={handleClose} to="Home"  smooth={true}  duration={500} >Home</Link></li> 
                        <li className="w-full p-4 border-b-2 "> <Link onClick={handleClose} to="About"  smooth={true} offset={-200} duration={500} >About</Link></li> 
                        <li className="w-full p-4 border-b-2"> <Link onClick={handleClose} to="Support"  smooth={true} offset={-50} duration={500} >Support</Link></li> 
                        <li  className="w-full p-4 border-b-2"> <Link onClick={handleClose} to="Pricing"  smooth={true} offset={-100} duration={200} >Pricing</Link></li> 
                    
                        <div className="flex flex-col my-4">
                            <button className="px-8 py-3 mb-4 text-indigo-400 bg-transparent">Sign Up</button>
                              <button className="px-8 py-3 bg-indigo-500">Sign in</button>
                        </div>
        </ul>
        </div>
    )
}

export default Navbar
